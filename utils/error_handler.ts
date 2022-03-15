import { Request, Response, NextFunction } from "express";
import { startsWith } from "lodash";
import { AppError } from "./error";
import { Env } from "../config/environment";



export function unCoughtErrorHandler(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log({ err });

    res.json({ errors: err });
}
// const handleCastErrorDB = err => {
//     const message = `Invalid ${err.path}: ${err.value}.`;
//     return new AppError(message, 400);
// };

// const handleDuplicateFieldsDB = err => {
//     const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];

//     const message = `Duplicate field value: ${value}. Please use another value!`;
//     return new AppError(message, 400);
// };

// const handleValidationErrorDB = (err: any) => {
//     const errors = Object.values(err.errors).map(el => el['message']);

//     const message = `Invalid input data. ${errors.join('. ')}`;
//     return new AppError(message, 400);
// };

export function errorHandler(
    err: AppError,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const env = Env.init().NODE_ENV || "dev";
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";

    if (err.statusCode === 23505) {
        err.statusCode = 409;
    }

    let error = { ...err };
    error.message = err.message;

    if (startsWith(error.message, "RepositoryNotFoundError")) {
        err.message = "Entity doesn't exist or check if DB is up";
    }
    if (
        startsWith(
            error.message,
            "EntityNotFoundError: Could not find any entity of"
        )
    ) {
        err.message = "Doesn't exist";
    }
    if (
        startsWith(
            error.message,
            "QueryFailedError: invalid input syntax for type integer"
        )
    ) {
        err.message = "need send a numeric parameter";
        err.statusCode = 409;
    }

    //console.log(err.message);
    /*if (error.message.includes("Duplicate entry")) {
      (err.message = "Already exists" + err.message.split("entry", 5)[1]),
        (err.statusCode = 404);
    }
    if (error.message.startsWith("Does exist")) {
      (err.message = "Doesn't exist such route"), (err.statusCode = 404);
    }
    if (error.name === "JsonWebTokenError") {
      error.message = "Invalid token. Please log in again!";
      error.statusCode = 401;
    }
    if (error.name === "TokenExpiredError") {
      error.message = "Your token has expired! Please log in again";
      error.statusCode = 401;
    }
    if (error.message.startsWith("invalid input syntax for type integer")) {
      err.message = "debes enviar un entero";
    }
    logger.error(err.message);
    */

    if (env === "dev" || env === "development")
        res.status(err.statusCode).json({
            stack: err.stack,
            detail: err.message,
        });
    if (env === "prod" || env === "production")
        res
            .status(err.statusCode)
            .json({ detail: err.message, status: err.status });
}
import { NextFunction, Request, Response } from "express";
import { includes, isEmpty, split } from "lodash";
//import { Alumno } from "../entity/alumno";
import { handleAsync } from "./handle_promise";
import { AppError } from "./error";
import { JwtToken } from "./jwt_util";

export class AuthMiddleware {
    private jwt: JwtToken;
    constructor() {
        this.jwt = new JwtToken();
    }

    /**
     * protectRoute
     */
    public protectRoute = handleAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            let token: string = req.headers.authorization || "";

            if (!isEmpty(token) && token.startsWith("Bearer")) {
                token = split(token, " ", 2)[1];
            }

            if (!token || typeof token === "undefined") {
                return next(
                    new AppError(
                        "You are not logged in! Please log in to get access.",
                        401
                    )
                );
            }
            const decoded: any = this.jwt.decodeToken(token);

            /*  let user = await Alumno.findOne({
                  where: { id: decoded["id"], deleted: false },
                  //relations: ["privileges"],
              });
              if (typeof user === "undefined" || !user) {
                  return next(
                      new AppError("user has updated its data or has been deleted", 401)
                  );
              }
  
              res.locals["user"] = {
                  correo: user.correo,
                  id: user.id,
              };*/
            next();
        }
    );

}
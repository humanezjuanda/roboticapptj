import { NextFunction, Request, Response } from "express";

export const handleAsync: Function =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    fn(req, res, next).catch(next);
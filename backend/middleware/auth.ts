import {sha256} from "js-sha256";
import type {Request, Response, NextFunction} from "express";

export default function(req: Request, res: Response, next: NextFunction) {
    if (req.cookies.password === sha256("admin")) {
        next();
    } else {
        res.status(401).send("Not authorized")
    }
}
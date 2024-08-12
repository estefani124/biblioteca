import { validate } from "class-validator";
import { NextFunction, Request, Response } from "express";
import { HttpResponse } from "../../shared/response/http.response";
import { BookDTO } from "../DTOs/book.dto";


export class BookMiddleware {
    constructor(
        private readonly httpResponse: HttpResponse = new HttpResponse()
    ) { }
    bookValidator(req: Request, res: Response, next: NextFunction) {
        const { name, desc } = req.body;

        const valid: BookDTO = new BookDTO();
        valid.name = name;
        valid.desc = desc;

        validate(valid).then((err) => {
            if (err.length > 0) {
                return this.httpResponse.Error(res, err);
            } else {
                next();
            }
        });
    }
}
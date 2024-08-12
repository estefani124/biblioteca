
import { BaseRoutres } from "../shared/routes/router";
import { BookController } from "./controller/book.controller";

import { BookMiddleware } from "./middlewares/book.middleware";

export class BookRouter extends BaseRoutres<BookController, BookMiddleware> {
    constructor() {
        super(BookController, BookMiddleware);
    }

    routes(): void {
        this.router.get("/book", (req, res) => this.controller.getBooks(req, res));
        this.router.get("/book/:id", (req, res) =>
            this.controller.getbookById(req, res)
        );
        this.router.post("/createBook", (req, res, next) => [this.middelware.bookValidator(req, res, next)], (req, res) =>
            this.controller.createBook(req, res)
        );
        this.router.put("/updateBook/:id", (req, res) =>
            this.controller.updateBook(req, res)
        );
        this.router.delete("/deleteBook/:id", (req, res) =>
            this.controller.deleteBook(req, res)
        );
    }
}
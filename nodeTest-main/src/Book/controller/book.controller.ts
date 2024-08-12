import { Request, Response } from "express";
import { BookService } from "../../services/book.service";


export class BookController {
  constructor(
    private readonly bookService: BookService = new BookService()
  ) {}
  async getBooks(req: Request, res: Response) {
    try {
      const data = await this.bookService.findAllbooks();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getbookById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.bookService.findbookById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createBook(req: Request, res: Response) {
    try {
      const data = await this.bookService.createbook(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateBook(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.bookService.updatebook(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteBook(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.bookService.deletebook(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
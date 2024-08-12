import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config/base.service";
import { BookDTO } from "../book/DTOs/book.dto";
import { BookEntity } from "../book/entities/book.entity";


export class BookService extends BaseService<BookEntity> {
  constructor() {
    super(BookEntity);
  }

  async findAllbooks(): Promise<BookEntity[]> {
    return (await this.execRepository).find();
  }
  async findbookById(id: string): Promise<BookEntity | null> {
    return (await this.execRepository).findOneBy({ id });
  }
  async createbook(body: PriorityDTO): Promise<BookEntity> {
    return (await this.execRepository).save(body);
  }
  async deletebook(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
  async updatebook(
    id: string,
    infoUpdate: BookDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
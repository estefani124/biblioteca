import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../../config/base.dto";
import { TaskEntity } from "../../task/entities/task.entity";


export class BookDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string;

    @IsNotEmpty()
    desc!: string;


    task?: TaskEntity[];
}
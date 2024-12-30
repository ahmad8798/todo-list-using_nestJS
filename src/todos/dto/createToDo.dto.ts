import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsNotEmpty, IsString, MinLength } from "class-validator";



export class createToDo {

    @IsString({message:"Title Should be A String"})
    @MinLength(3,{message:"Title should be minimum of 3 charcters"})
    @IsNotEmpty({message:"title should not be empty"})
    title:string;

    @IsString({message:"description Should be A String"})
    @MinLength(5,{message:"description should be minimum of 3 charcters"})
    @IsNotEmpty({message:"description should not be empty"})
    description:string;

    @IsBoolean({message:"is completed must be boolean"})
    isCompleted:boolean;

    @IsDate({message:"dueDate is must be a type of Date"})
    @IsNotEmpty({message:"dueDate should not be empty"})
    @Transform(({value})=>new Date(value),{toClassOnly:true})
    dueDate:Date;
}
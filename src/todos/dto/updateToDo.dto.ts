import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsOptional, IsString, MinLength } from "class-validator";



export class updateToDo{

        @IsString({message:"Title Should be A String"})
        @MinLength(3,{message:"Title should be minimum of 3 charcters"})
        @IsOptional()
        title:string;
    
        @IsString({message:"description Should be A String"})
        @MinLength(5,{message:"description should be minimum of 3 charcters"})
        @IsOptional()
        description:string;
    
        @IsBoolean({message:"isCompleted must be boolean"})
        @IsOptional()
        isCompleted:boolean;
    
        @IsDate({message:"dueDate is must be a type of Date"})
        @IsOptional()
        @Transform(({value})=>new Date(value),{toClassOnly:true})
        dueDate:Date;
}
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({timestamps:true})
export class ToDo extends Document{

    @Prop({required:true})
    title:string;

    @Prop({required:true})
    description:string;

    @Prop({ default: false })
    isCompleted:boolean;

    @Prop({ type: Date, default: null })
    dueDate:Date;
}

export const ToDoSchema = SchemaFactory.createForClass(ToDo)
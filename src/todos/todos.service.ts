import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ToDo } from './schemas/todo.schema';
import { Model, Types } from 'mongoose';
import { createToDo } from './dto/createToDo.dto';
import { updateToDo } from './dto/updateToDo.dto';

@Injectable()
export class TodosService {

    constructor(@InjectModel(ToDo.name) private todoModel:Model<ToDo> ){}


    async getToDos():Promise<ToDo[]>{
        const ToDos = await this.todoModel.find()
        return ToDos
    }

    async getToDoById(id:Types.ObjectId):Promise<ToDo>{
            return await this.todoModel.findById(id);
    }

    async createTodo(todo:createToDo):Promise<ToDo>{
        const newTodo = new this.todoModel(todo)
       return await newTodo.save();
    }

    async updateTodo(id:Types.ObjectId,todo:updateToDo):Promise<ToDo>{
        return await this.todoModel.findByIdAndUpdate(id,todo,{new:true}).exec();
    }

    async deletTodo(id:Types.ObjectId):Promise<ToDo>{

        return await this.todoModel.findOneAndDelete(id);
    }


}

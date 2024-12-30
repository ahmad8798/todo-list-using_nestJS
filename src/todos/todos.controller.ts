import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { createToDo } from './dto/createToDo.dto';
import { TodosService } from './todos.service';
import { ToDo } from './schemas/todo.schema';
import { Types } from 'mongoose';
import { updateToDo } from './dto/updateToDo.dto';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService:TodosService){}


    @Get()
    getTodos():Promise<ToDo[]>{
        return this.todosService.getToDos()
    }

    @Get(':id')
    getToDoById(@Param('id') id:Types.ObjectId):Promise<ToDo>{
        return this.todosService.getToDoById(id);
    }

    @Patch(':id')
    updateTodo(@Param('id') id:Types.ObjectId,@Body(new ValidationPipe()) todo:updateToDo):Promise<ToDo>{
        return this.todosService.updateTodo(id,todo)
    }

    @Delete(':id')
    deleteTodo(@Param('id') id:Types.ObjectId):Promise<ToDo>{
        return this.todosService.deletTodo(id)
    }

    @Post()
    createTodo(@Body(new ValidationPipe()) todo:createToDo){
        return this.todosService.createTodo(todo);
    }

}

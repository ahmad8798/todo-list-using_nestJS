import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ToDo, ToDoSchema } from './schemas/todo.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:ToDo.name,schema:ToDoSchema}])],
  providers: [TodosService],
  controllers: [TodosController]
})
export class TodosModule {}

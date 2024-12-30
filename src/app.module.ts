import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule} from '@nestjs/config';

import { DatabaseModule } from './infrastructure/mongoose/database.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),DatabaseModule, TodosModule
     ],
    
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";


@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory{
    constructor(private config:ConfigService){}
    createMongooseOptions(): Promise<MongooseModuleOptions> | MongooseModuleOptions {
        const envType = this.config.get('envType');
        const database_uri = this.config.get('DATABASE_URI');

        if(envType==="local"){
            console.log(envType)
            return{
                uri:"mongodb://localhost:27017/todo"
            }
        }

        return{
            uri:database_uri
        }

    }
}
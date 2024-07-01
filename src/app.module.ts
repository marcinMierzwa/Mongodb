import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './person.model';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://marty:marty@firstdatabase.2o4tqtz.mongodb.net/family?retryWrites=true&w=majority&appName=FirstDataBase/family/persons'),
  MongooseModule.forFeature([{name: "Person", schema: PersonSchema}])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

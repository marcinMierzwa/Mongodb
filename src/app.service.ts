import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './person.model';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Person') private readonly personModel: Model<Person>,
  ) {}

  async createPerson(person: Person): Promise<Person> {
    const newPerson = new this.personModel(person);
    return newPerson.save();
  }

  async getPersons() {
    return this.personModel
      .find({})
      .then((data) => {
        return data;
      })
      .catch((error) => console.log(error));
  }
}

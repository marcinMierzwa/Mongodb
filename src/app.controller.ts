import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './person.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async createPerson(@Body() personDTo: Person) {
    return this.appService.createPerson(personDTo);
  }

  @Get()
  getPersons() {
    return this.appService.getPersons();
  }
}

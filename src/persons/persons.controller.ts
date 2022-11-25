import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { PersonDto } from "./dtos/person.dto";
import { Person } from "./person.entity";
import { PersonsService } from "./persons.service";


@Controller('persons')
export class PersonsController {

    constructor(private readonly personsService: PersonsService) { }


    @Get()
    getAll(@Query('name') searchName: string): Array<Person> {
        return this.personsService.getAll();
    }

    @Post()
    create(@Body() createPersonDto: PersonDto): Person {
        return this.personsService.add(createPersonDto.name, createPersonDto.phone);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() updatePersonDto: PersonDto): Person {
        return this.personsService.update(id, updatePersonDto.name, updatePersonDto.phone)
    }

    @Get(':id')
    getOne(@Query('name') searchName: string): Person {
        return this.personsService.getOne(searchName);
    }

    @Delete(':id')
    delete(@Param('id') id: number): void {
        return this.personsService.delete(id)
    }
}
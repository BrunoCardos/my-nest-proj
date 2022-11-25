import { Injectable } from "@nestjs/common";
import { NotFoundException } from "src/config/not-found.exception";
import { Person } from "./person.entity";

@Injectable()
export class PersonsService {



    listOfPersons: Array<Person> = new Array(
        new Person(11, 'Game of Thrones 1', 5458428),
        new Person(12, 'Game of Thrones 2', 5458428),
        new Person(13, 'Game of Thrones 3', 5458428),
        new Person(14, 'Game of Thrones 4', 5458428),
        new Person(15, 'Game of Thrones 5', 5458428),
    )

    generateId() {
        let lastPerson = this.listOfPersons[this.listOfPersons.length - 1];
        return lastPerson.getId() + 1;
    }

    getAll(): Array<Person> {
        return this.listOfPersons;
    }

    getOne(searchName): Person {
        for (let person of this.listOfPersons) {
            if (person.getName() == searchName) {
                return person;
            }
        }
        return null;
    }

    add(name: string, phone: number): Person {
        const id = this.generateId();
        const newPerson = new Person(id, name, phone);

        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    update(id: number, name: string, phone: number): Person {


        for (let person of this.listOfPersons) {
            if (person.getId() == id) {
                person.changeName(name)
                person.changePhone(phone)
                return person
            }
        } throw new NotFoundException(`Person with id ${id} not found!`);
    }

    delete(id: number): void {


        // this.listOfPersons.forEach((element, index) => {
        //     if (element.getId() == id) {
        //         this.listOfPersons.splice(index, 1);
        //         return
        //     }
        // });
        // throw new Error ('person not found');

        for (let pos: number; pos < this.listOfPersons.length; pos++) {
            let person = this.listOfPersons[pos];

            if (person.getId() == id) {
                this.listOfPersons.splice(pos, 1);
                return;
            }

        } throw new NotFoundException(`Person with id ${id} not found!`);
    } 
}

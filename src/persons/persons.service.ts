import { Injectable } from "@nestjs/common";
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
        return lastPerson.id + 1;
    }



    getAll(searchName): Array<Person> {

        let result = [];

        if (searchName != null) {
            for (let item of this.listOfPersons) {
                if (item.name == searchName) {
                    result.push(item)
                    return result;
                }
            }
        }
        return this.listOfPersons;

    }

    add(newPerson: Person): Person {
        newPerson.id = this.generateId();
        this.listOfPersons.push(newPerson);
        return newPerson;
    }

    update(updatedData: Person, id: number): Person {


        for (let item of this.listOfPersons) {
            if (item.id == id) {
                item = updatedData
                return item
            }
        }
        return null;
    }

    delete(id: number): void {

        for (let item in this.listOfPersons) {
            if (this.listOfPersons[item].id == id) {
                this.listOfPersons.splice(1);
            }
        }

    }
}

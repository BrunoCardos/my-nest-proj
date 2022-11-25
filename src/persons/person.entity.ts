
export class Person {

    private id: number;
    private name: string;
    private phone: number;

    constructor(id: number, name: string, phone: number) {
        this.id = id;
        this.name = name;
        this.phone = phone;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPhone(): number {
        return this.phone;
    }

    changeName(name: string): void {
        this.name = name;
    }

    changePhone(phone: number): void {
        this.phone = phone;
    }
}
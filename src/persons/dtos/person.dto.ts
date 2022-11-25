import { IsInt, IsString } from "class-validator";


export class PersonDto {

    @IsString()
    name: string;

    @IsInt()
    phone: number;
}
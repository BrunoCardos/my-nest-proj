import { IsString } from "class-validator";
import { CreateFilemanagerDto } from './create-filemanager.dto';

export class UpdateFilemanagerDto {

    @IsString()
    content: string;
}



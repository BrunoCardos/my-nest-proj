import { Injectable } from '@nestjs/common';
import { CreateFilemanagerDto } from './dto/create-filemanager.dto';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';
import * as fs from 'fs';
import { FileException } from './exceptions/file.exception';

@Injectable()
export class FilemanagerService {
  create(name: string, content: string): string {

    const filePath = `resources/${name}.txt`

    if (fs.existsSync(filePath))
      throw new FileException(`File with the name ${name} alredy exist`)

    fs.writeFileSync(filePath, content);
    return name + 'txt'


  }

  findAll() {
    return `This action returns all filemanager`;
  }

  findOne(filename: string) {
    const filePath = `resources/${filename}.txt`;

    const data = fs.readFileSync(filePath, 'utf8');
    

    if (fs.existsSync(filePath)) {
      return data;
    }
    throw new FileException(`File with the name ${filename} not exist`)
  }
    
  

  update(name: string, content: string) {
    const filePath = `resources/${name}.txt`

    if (fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, content);
      return name + '.txt atualisado'
    }
    throw new FileException(`File with the name ${name} not exist`)
  }

  remove(filename: string) {
    
    const filePath = `resources/${filename}.txt`;

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      return ` ${filename}.txt deleted `
    }
    throw new FileException(`File with the name ${filename} not exist`)
  }
}

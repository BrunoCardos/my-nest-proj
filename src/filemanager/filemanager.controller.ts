import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FilemanagerService } from './filemanager.service';
import { CreateFilemanagerDto } from './dto/create-filemanager.dto';
import { UpdateFilemanagerDto } from './dto/update-filemanager.dto';

@Controller('files')
export class FilemanagerController {
  constructor(private readonly filemanagerService: FilemanagerService) {}

  @Post()
  create(@Body() createFilemanagerDto: CreateFilemanagerDto) {
    return this.filemanagerService.create(createFilemanagerDto.name, createFilemanagerDto.content);
  }

  @Get()
  findAll() {
    return this.filemanagerService.findAll();
  }

  @Get(':filename')
  findOne(@Param('filename') filename: string) {
    return this.filemanagerService.findOne(filename);
  }

  @Put(':filename')
  update(@Param('filename') filename: string, @Body() updateFilemanagerDto: UpdateFilemanagerDto) {
    return this.filemanagerService.update(filename, updateFilemanagerDto.content);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filemanagerService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filemanagerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilemanagerDto: UpdateFilemanagerDto) {
    return this.filemanagerService.update(+id, updateFilemanagerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filemanagerService.remove(+id);
  }
}

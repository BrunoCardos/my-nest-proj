import { Module } from '@nestjs/common';
import { FilemanagerService } from './filemanager.service';
import { FilemanagerController } from './filemanager.controller';

@Module({
  controllers: [FilemanagerController],
  providers: [FilemanagerService]
})
export class FilemanagerModule {}

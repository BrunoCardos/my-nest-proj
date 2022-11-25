import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonsModule } from './persons/persons.module';
import { FilemanagerModule } from './filemanager/filemanager.module';

@Module({
  imports: [PersonsModule, FilemanagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

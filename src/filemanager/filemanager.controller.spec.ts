import { Test, TestingModule } from '@nestjs/testing';
import { FilemanagerController } from './filemanager.controller';
import { FilemanagerService } from './filemanager.service';

describe('FilemanagerController', () => {
  let controller: FilemanagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FilemanagerController],
      providers: [FilemanagerService],
    }).compile();

    controller = module.get<FilemanagerController>(FilemanagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

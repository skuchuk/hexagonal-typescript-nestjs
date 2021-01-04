import {Test, TestingModule} from '@nestjs/testing';
import {BadRequestException} from '@nestjs/common';
import {MouseService} from './mouse.service';
import MouseModel from '../../domain/model/mouse.model';

describe('MouseService', () => {
  let service: MouseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MouseService],
    }).compile();

    service = module.get<MouseService>(MouseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of cats', () => {
    expect(service.getMice()).toEqual([
      {
        name: 'Jerry',
        gender: 'Male',
        age: 1,
      },
      {
        name: 'Mickey',
        gender: 'Male',
        age: 2,
      },
      {
        name: 'Speedy',
        gender: 'Male',
        age: 3,
      },
      {
        name: 'Ratatouille',
        gender: 'Male',
        age: 4,
      },
    ]);
  });

  it('should successfully return the searched for mouse', () => {
    expect(service.getMouse('Speedy')).toEqual({
      name: 'Speedy',
      gender: 'Male',
      age: 3,
    });
  });
  it('should throw an error', () => {
    const noSuchMouseName = (): MouseModel => service.getMouse('no-such-mouse-name');
    expect(noSuchMouseName).toThrowError(BadRequestException);
    expect(noSuchMouseName).toThrowError('No mouse found with name no-such-mouse-name');
  });
});

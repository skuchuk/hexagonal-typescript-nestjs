import {Test, TestingModule} from '@nestjs/testing';
import {MouseResolver} from './mouse.resolver';
import {MouseService} from './mouse.service';

describe('MouseResolver', () => {
  let resolver: MouseResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MouseResolver,
        {
          provide: MouseService,
          useFactory: () => ({
            getMice: jest.fn(() => [
              {
                age: 66,
                name: 'Mighty Mouse',
                gender: 'Male',
              },
              {
                age: 100,
                name: 'Mickey Mouse',
                gender: 'Male',
              },
            ]),
            getMouse: jest.fn(() => ({
              age: 7,
              name: 'Test Mouse',
              gender: 'Female',
            })),
          }),
        },
      ],
    }).compile();

    resolver = module.get<MouseResolver>(MouseResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  it('should get all cats in the repository', () => {
    expect(resolver.getMice()).toEqual([
      {
        age: 66,
        name: 'Mighty Mouse',
        gender: 'Male',
      },
      {
        age: 100,
        name: 'Mickey Mouse',
        gender: 'Male',
      },
    ]);
  });

  it('should get Might Mouse', () => {
    expect(resolver.getMouse('Test Mouse')).resolves.toEqual({
      name: 'Test Mouse',
      gender: 'Female',
      age: 7,
    });
  });
});

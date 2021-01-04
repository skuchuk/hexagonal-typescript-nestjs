import MouseModel from '../../../domain/model/mouse.model';
import MouseMapper from '../../mappers/mouse.mapper';
import MouseRepository from '../../../domain/ports/secondary/mouse.repository';
import MouseEntity from './inmemory.mouse.entity';

export default class InMemoryMouseRepository implements MouseRepository {
  private mice: MouseEntity[];

  constructor() {
    this.mice = [
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
    ];
  }

  public getAll(): MouseModel[] {
    return this.mice.map((mouseEntity) => MouseMapper.toDomain(mouseEntity));
  }

  public getOne(name: string): MouseModel {
    const mouseEntity: MouseEntity = this.mice.find((mouse) => mouse.name === name);
    if (mouseEntity === undefined) {
      return undefined;
    }

    return MouseMapper.toDomain(mouseEntity);
  }
}

import MouseModel from '../../domain/model/mouse.model';
import MouseEntity from '../adapters/inmemory-repository/inmemory.mouse.entity';

export default class InfraMouseMapper {
  public static toDomain(mouseEntity: MouseEntity): MouseModel {
    return new MouseModel(mouseEntity.name, mouseEntity.gender, mouseEntity.age);
  }
}

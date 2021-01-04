import MouseModel from '../../domain/model/mouse.model';
import MouseQueryDto from './mouse.query.dto';

/**
 * The APPLICATION layer is using the format <object>Dto to represent application data
 * The DOMAIN layer is using the format <object>Model to represent model data
 * The INFRASTRUCTURE layer is using the format <object>Entity to represent repository
 */
export default class AppMouseMapper {
  public static toDomain(mouseDto: MouseQueryDto): MouseModel {
    return new MouseModel(mouseDto.name, mouseDto.gender, mouseDto.age);
  }

  public static toDto(mouseDomain: MouseModel): MouseQueryDto {
    return new MouseQueryDto(mouseDomain.name, mouseDomain.gender, mouseDomain.age);
  }
}

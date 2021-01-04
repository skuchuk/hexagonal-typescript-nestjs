import MouseModel from '../../model/mouse.model';

/**
 * Secondary ports represent the interface between DOMAIN -> INFRASTRUCTURE
 */
export default interface MouseRepository {
  getAll(): MouseModel[];
  getOne(name: string): MouseModel;
}

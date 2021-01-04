import MouseModel from '../../model/mouse.model';

/**
 * Primary ports represent the interface between APPLICATION -> DOMAIN
 */
export default interface MouseServiceApi {
  getAllMice(): MouseModel[];
  getMouse(name: string): MouseModel;
}

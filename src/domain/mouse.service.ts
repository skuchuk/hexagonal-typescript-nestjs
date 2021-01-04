import MouseModel from './model/mouse.model';
import MouseServiceApi from './ports/primary/mouse.service.api';
import MouseRepository from './ports/secondary/mouse.repository';
import Notifier from './ports/secondary/notifier';

/**
 * Pure DOMAIN logic
 * no dependencies on INFRASTRUCTURE or IDE
 */
export default class DomainMouseService implements MouseServiceApi {
  constructor(private mouseRepository: MouseRepository, private customerNotifier: Notifier) {}

  public getAllMice(): MouseModel[] {
    return this.mouseRepository.getAll();
  }

  public getMouse(name: string): MouseModel {
    const mouse: MouseModel = this.mouseRepository.getOne(name);
    const notificationMessage =
      mouse === undefined
        ? `just a notification about not finding the mouse ${name}`
        : `just a notification about getting the mouse ${name}`;
    this.customerNotifier.notify(notificationMessage);
    return mouse;
  }
}

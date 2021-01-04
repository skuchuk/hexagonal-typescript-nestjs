import {Injectable, BadRequestException} from '@nestjs/common';
import MouseServiceApi from '../../domain/ports/primary/mouse.service.api';
import MouseModel from '../../domain/model/mouse.model';
import MouseQueryDto from './mouse.query.dto';
import DomainMouseService from '../../domain/mouse.service';
import InMemoryMouseRepository from '../../infrastructure/adapters/inmemory-repository/inmemory.mouse.repository';
import ConsoleNotifier from '../../infrastructure/adapters/notifier/console.notifier';

@Injectable()
export class MouseService {
  private mouseService: MouseServiceApi;

  constructor() {
    /**
     * This is the point where the concrete implementation InMemoryMouseRepository and ConsoleNotifier
     * are instantiated and set int eh domain
     * instead of direct instantiation we can use some logic based on environment variable/config to determine
     * which concrete classes to use
     * for example if we run on both AWS and Azure and have different implementations we should read it
     * from an environment variable
     */
    this.mouseService = new DomainMouseService(new InMemoryMouseRepository(), new ConsoleNotifier());
  }

  public getMouse(name: string): MouseQueryDto {
    const mouse: MouseModel = this.mouseService.getMouse(name);
    if (mouse === undefined) {
      throw new BadRequestException(`No mouse found with name ${name}`);
    }

    return mouse;
  }

  public getMice(): MouseQueryDto[] {
    return this.mouseService.getAllMice();
  }
}

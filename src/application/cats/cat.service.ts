import {Injectable} from '@nestjs/common';
import DomainCatService from '../../domain/cat.service';
import InMemoryCatRepository from '../../infrastructure/adapters/inmemory-repository/inmemory.cat.repository';
import ConsoleNotifier from '../../infrastructure/adapters/notifier/console.notifier';
import CatServiceApi from '../../domain/ports/primary/cat.service.api';
import CatDto from './cat.dto';
import CatMapper from './cat.mapper';
import CatModel from '../../domain/model/cat.model';

@Injectable()
export class CatService {
  private catService: CatServiceApi;

  /**
   * This is the point where the concrete implementation InMemoryMouseRepository and ConsoleNotifier
   * are instantiated and set int eh domain
   * instead of direct instantiation we can use some logic based on environment variable/config to determine
   * which concrete classes to use
   * for example if we run on both AWS and Azure and have different implementations we should read it
   * from an environment variable
   */
  constructor() {
    this.catService = new DomainCatService(new InMemoryCatRepository(), new ConsoleNotifier());
  }

  public getCats(): CatDto[] {
    return this.catService.getAllCats().map((catDomain) => CatMapper.toDto(catDomain));
  }

  public addCat(catDto: CatDto): void {
    const catDomain: CatModel = CatMapper.toDomain(catDto);
    this.catService.addCat(catDomain);
  }
}

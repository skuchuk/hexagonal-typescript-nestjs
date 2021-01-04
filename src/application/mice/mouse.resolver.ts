import {Resolver, Query, Args} from '@nestjs/graphql';
import MouseQueryDto from './mouse.query.dto';
import {MouseService} from './mouse.service';

@Resolver(() => MouseQueryDto)
export class MouseResolver {
  constructor(private readonly mouseService: MouseService) {}

  @Query(() => MouseQueryDto)
  public async getMouse(@Args('name') name: string): Promise<MouseQueryDto> {
    return this.mouseService.getMouse(name);
  }

  @Query(() => [MouseQueryDto])
  public getMice(): MouseQueryDto[] {
    return this.mouseService.getMice();
  }
}

import {Module} from '@nestjs/common';
import {MouseService} from './mouse.service';
import {MouseResolver} from './mouse.resolver';

@Module({
  imports: [],
  providers: [MouseService, MouseResolver],
})
export class MouseModule {}

import {GraphQLModule} from '@nestjs/graphql';
import {Module} from '@nestjs/common';
import {CatModule} from './application/cats/cat.module';
import {MouseModule} from './application/mice/mouse.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: true,
    }),
    CatModule,
    MouseModule,
  ],
})
export class AppModule {}

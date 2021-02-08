import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('config');

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  await app.listen(config.get('port'));
}
bootstrap();

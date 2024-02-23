import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from "@fastify/helmet"
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import fastifyCsrf from "@fastify/csrf-protection"

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  // app.register(helmet)
  app.enableCors();
  // app.register(fastifyCsrf)
  await app.listen(process.env.PORT || 3001);
}
bootstrap();

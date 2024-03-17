import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import helmet from "@fastify/helmet"
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';

// import fastifyCsrf from "@fastify/csrf-protection"
import { Connection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
 // const connection = app.get(Connection);
 // await connection.synchronize();
  app.setGlobalPrefix('api');
  // app.register(helmet)
  app.enableCors();
  // app.register(fastifyCsrf)
  await app.listen(process.env.PORT || 3001);
}
bootstrap();

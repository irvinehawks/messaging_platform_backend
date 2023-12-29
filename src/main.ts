/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
 const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const configService = app.get<ConfigService>(ConfigService);
  const config = new DocumentBuilder()
    .setTitle('SpecTro api documentation')
    .setDescription('documentation for SpecTro api endpoints.')
    .setVersion('1.0')
    .addTag('spectro')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.setGlobalPrefix('');
  //await app.listen(configService.get<number>('PORT'));
  await app.listen(3001);
  console.log(`http://localhost:3001`)
  
}
bootstrap();

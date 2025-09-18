import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Enable CORS for frontend integration
  app.enableCors({
    origin: ['http://localhost:3003', 'http://localhost:3333', 'http://localhost:5500', 'http://127.0.0.1:5500'], // Add your frontend URLs
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Accept, Authorization, X-Requested-With',
    credentials: true,
  });

  await app.listen(3001);
  console.log('Faculty Portfolio API is running on http://localhost:3001');
}

bootstrap();

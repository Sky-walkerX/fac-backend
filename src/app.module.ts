import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FacultyModule,
  ],
})
export class AppModule {}

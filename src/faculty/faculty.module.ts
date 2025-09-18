import { Module } from '@nestjs/common';
import { FacultyController } from './faculty.controller';
import { FacultyService } from './faculty.service';
import { SanityService } from './sanity.service';

@Module({
  controllers: [FacultyController],
  providers: [FacultyService, SanityService],
  exports: [FacultyService],
})
export class FacultyModule {}

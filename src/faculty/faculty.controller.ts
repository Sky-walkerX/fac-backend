import { Controller, Get } from '@nestjs/common';
import { FacultyService } from './faculty.service';
import { About, Research, Project, Teaching, Contact, Supervision } from './faculty.types';

@Controller('faculty')
export class FacultyController {
  constructor(private readonly facultyService: FacultyService) {}

  @Get('about')
  async getAbout(): Promise<About[]> {
    return this.facultyService.getAbout();
  }

  @Get('research')
  async getResearch(): Promise<Research[]> {
    return this.facultyService.getResearch();
  }

  @Get('research/publications')
  async getPublications(): Promise<Research[]> {
    return this.facultyService.getPublications();
  }

  @Get('research/areas')
  async getResearchAreas(): Promise<Research[]> {
    return this.facultyService.getResearchAreas();
  }

  @Get('projects')
  async getProjects(): Promise<Project[]> {
    return this.facultyService.getProjects();
  }

  @Get('projects/ongoing')
  async getOngoingProjects(): Promise<Project[]> {
    return this.facultyService.getOngoingProjects();
  }

  @Get('teaching')
  async getTeaching(): Promise<Teaching[]> {
    return this.facultyService.getTeaching();
  }

  @Get('contact')
  async getContact(): Promise<Contact[]> {
    return this.facultyService.getContact();
  }

  @Get('supervision')
  async getSupervision(): Promise<Supervision[]> {
    return this.facultyService.getSupervision();
  }
}

import { Injectable } from '@nestjs/common';
import { SanityService } from './sanity.service';
import { About, Research, Project, Teaching, Contact, Supervision } from './faculty.types';

@Injectable()
export class FacultyService {
  constructor(private sanityService: SanityService) {}

  async getAbout(): Promise<About[]> {
    const query = `*[_type == "about"] {
      _id,
      name,
      designation,
      bio,
      profileImage {
        asset-> {
          _ref,
          url
        }
      },
      address,
      qualifications[] {
        qualification,
        university,
        percentage,
        year
      }
    }`;
    
    return this.sanityService.fetch<About[]>(query);
  }

  async getResearch(): Promise<Research[]> {
    const query = `*[_type == "research"] | order(year desc) {
      _id,
      title,
      description,
      link,
      type,
      authors,
      venue,
      year,
      doi
    }`;
    
    return this.sanityService.fetch<Research[]>(query);
  }

  async getProjects(): Promise<Project[]> {
    const query = `*[_type == "project"] | order(startYear desc) {
      _id,
      title,
      description,
      fundingAgency,
      duration,
      budget,
      role,
      status,
      image {
        asset-> {
          _ref,
          url
        }
      },
      startYear,
      endYear
    }`;
    
    return this.sanityService.fetch<Project[]>(query);
  }

  async getTeaching(): Promise<Teaching[]> {
    const query = `*[_type == "teaching"] | order(year desc) {
      _id,
      courseCode,
      courseName,
      semester,
      year,
      description,
      level
    }`;
    
    return this.sanityService.fetch<Teaching[]>(query);
  }

  async getContact(): Promise<Contact[]> {
    const query = `*[_type == "contact"] {
      _id,
      email,
      alternateEmail,
      phone,
      office,
      website,
      linkedIn,
      googleScholar,
      orcid,
      researchGate
    }`;
    
    return this.sanityService.fetch<Contact[]>(query);
  }

  async getSupervision(): Promise<Supervision[]> {
    const query = `*[_type == "supervision"] | order(startYear desc) {
      _id,
      level,
      title,
      studentName,
      startYear,
      endYear,
      status,
      remarks
    }`;
    
    return this.sanityService.fetch<Supervision[]>(query);
  }

  // Helper methods for filtered data
  async getPublications(): Promise<Research[]> {
    const query = `*[_type == "research" && type in ["journal", "conference"]] | order(year desc) {
      _id,
      title,
      description,
      link,
      type,
      authors,
      venue,
      year,
      doi
    }`;
    
    return this.sanityService.fetch<Research[]>(query);
  }

  async getResearchAreas(): Promise<Research[]> {
    const query = `*[_type == "research" && type == "research_area"] {
      _id,
      title,
      description,
      link
    }`;
    
    return this.sanityService.fetch<Research[]>(query);
  }

  async getOngoingProjects(): Promise<Project[]> {
    const query = `*[_type == "project" && status == "ongoing"] | order(startYear desc) {
      _id,
      title,
      description,
      fundingAgency,
      duration,
      budget,
      role,
      status,
      image {
        asset-> {
          _ref,
          url
        }
      },
      startYear,
      endYear
    }`;
    
    return this.sanityService.fetch<Project[]>(query);
  }
}

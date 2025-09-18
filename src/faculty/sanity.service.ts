import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SanityClient } from '@sanity/client';

@Injectable()
export class SanityService {
  private client: SanityClient;

  constructor(private configService: ConfigService) {
    this.client = createClient({
      projectId: '4xrk10ec', // From your sanity.config.ts
      dataset: 'production',
      useCdn: true,
      apiVersion: '2023-05-03',
    });
  }

  getClient(): SanityClient {
    return this.client;
  }

  // Helper method for GROQ queries
  async fetch<T = any>(query: string, params?: Record<string, any>): Promise<T> {
    return this.client.fetch<T>(query, params);
  }
}

# Faculty Portfolio API

A NestJS-based REST API that connects to Sanity CMS to provide faculty portfolio data.

## API Endpoints

### About
- `GET /faculty/about` - Returns faculty basic information, bio, qualifications

### Research & Publications
- `GET /faculty/research` - Returns all research items (publications, areas)
- `GET /faculty/research/publications` - Returns only journal and conference publications
- `GET /faculty/research/areas` - Returns research areas

### Projects
- `GET /faculty/projects` - Returns all projects
- `GET /faculty/projects/ongoing` - Returns only ongoing projects

### Teaching
- `GET /faculty/teaching` - Returns courses taught

### Contact
- `GET /faculty/contact` - Returns contact information

### Supervision
- `GET /faculty/supervision` - Returns thesis supervision records

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables in `.env`:
```
PORT=3001
SANITY_PROJECT_ID=4xrk10ec
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

3. Start Sanity Studio (for content management):
```bash
npm run dev
```

4. Start the NestJS backend:
```bash
npm run start:dev
```

## Data Seeding

To populate Sanity with faculty data:

1. Get a Sanity token from your project settings
2. Set `SANITY_TOKEN` environment variable
3. Run the seeder:
```bash
npx ts-node src/seed-data.ts
```

## Architecture

- **Clean Architecture**: Separation of concerns with modules, services, and controllers
- **TypeScript**: Full type safety throughout the application
- **GROQ Queries**: Efficient data fetching from Sanity CMS
- **Modular Design**: Easy to extend and maintain

## Technologies

- **NestJS**: Modern Node.js framework
- **Sanity CMS**: Headless CMS for content management
- **TypeScript**: Type-safe development
- **GROQ**: Graph-Relational Object Queries for Sanity

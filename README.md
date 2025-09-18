# Faculty Portfolio Web Application

A modern, full-stack Faculty Portfolio system built with **NestJS** (backend) and **Sanity CMS** (content management).

## 🚀 Features

### Backend (NestJS)
- ✅ Clean, modular architecture with TypeScript
- ✅ REST API endpoints for all faculty data
- ✅ Sanity CMS integration with GROQ queries
- ✅ CORS enabled for frontend integration
- ✅ Type-safe data models and interfaces

### Content Management (Sanity CMS)
- ✅ Intuitive admin interface for content editing
- ✅ Structured schemas for all faculty data types
- ✅ Real-time content updates
- ✅ Media asset management
- ✅ Version control and collaboration features

## 📡 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /faculty/about` | Faculty basic information, bio, qualifications |
| `GET /faculty/research` | All research items (publications, areas) |
| `GET /faculty/research/publications` | Journal and conference publications only |
| `GET /faculty/research/areas` | Research areas |
| `GET /faculty/projects` | All funded and academic projects |
| `GET /faculty/projects/ongoing` | Currently ongoing projects |
| `GET /faculty/teaching` | Courses taught |
| `GET /faculty/contact` | Contact information and social links |
| `GET /faculty/supervision` | Thesis supervision records |

## 🛠️ Technology Stack

- **Backend**: NestJS, TypeScript, Node.js
- **CMS**: Sanity.io
- **Database**: Sanity Content Lake
- **Query Language**: GROQ (Graph-Relational Object Queries)
- **API**: RESTful architecture

## 🏃‍♂️ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Setup
Create a `.env` file:
```env
PORT=3001
SANITY_PROJECT_ID=4xrk10ec
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

### 3. Start Development Servers

**Backend API (Port 3001):**
```bash
npm run start:dev
```

**Sanity Studio (Port 3334):**
```bash
npx sanity dev --port 3334
```

### 4. Access Applications
- **API Demo**: Open `demo.html` in your browser
- **Sanity Studio**: http://localhost:3334
- **API Base URL**: http://localhost:3001

## 📊 Data Schemas

### About Schema
- Personal information, biography, profile image
- Educational qualifications with details
- Current position and affiliations

### Research Schema
- Publications (journals, conferences)
- Research areas and interests
- DOI links and metadata

### Project Schema  
- Funded research projects
- Academic collaborations
- Project timelines and budgets

### Teaching Schema
- Course information and codes
- Semester and year details
- Course levels (undergraduate/graduate)

### Contact Schema
- Email addresses and phone numbers
- Office location and address
- Social media and academic profiles

### Supervision Schema
- Student thesis supervision records
- Project titles and completion status
- Academic levels (Ph.D, M.Tech, etc.)

## 🔧 Development

### Building the Project
```bash
npm run build:backend
```

### Running Tests
```bash
npm test
```

### Code Quality
- TypeScript for type safety
- Clean architecture principles
- Modular service-based design
- Comprehensive error handling

## 🚀 Deployment

### Backend Deployment
```bash
npm run build:backend
npm run start:prod
```

### Sanity Deployment  
```bash
npm run build
npm run deploy
```

## 📝 Content Management

1. **Access Sanity Studio** at http://localhost:3334
2. **Add Faculty Data** using the intuitive forms
3. **Preview Changes** instantly in the API
4. **Publish Content** to make it live

## 🔗 Integration

The API is designed to be consumed by any frontend framework:

- **React/Next.js**: Perfect for modern web applications
- **Vue.js**: Seamless integration with reactive data
- **Angular**: Enterprise-ready applications
- **Mobile Apps**: React Native, Flutter, etc.

## 📈 Performance

- **GROQ Queries**: Efficient data fetching from Sanity
- **Caching**: Built-in content delivery network
- **TypeScript**: Compile-time optimizations
- **Modular Architecture**: Scalable and maintainable

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under UNLICENSED.

---

*Built with ❤️ using NestJS and Sanity CMS*Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the Sanity community](https://www.sanity.io/community/join?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

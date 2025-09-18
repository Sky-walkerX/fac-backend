# Faculty Portfolio Backend API

A NestJS backend API that connects to Sanity CMS to provide faculty portfolio data.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Services
```bash
# Terminal 1: Start NestJS Backend
npm run start:dev

# Terminal 2: Start Sanity Studio
npx sanity dev --port 3334
```

### 3. Access Points
- **Backend API**: http://localhost:3001
- **Sanity Studio**: http://localhost:3334

## 📡 Complete API Endpoints

### Faculty About Information
- **GET** `/faculty/about`
  - Returns: Faculty basic info, bio, profile image, qualifications
  - Response: Array of About objects

### Research & Publications
- **GET** `/faculty/research`
  - Returns: All research items (publications + research areas)
  - Response: Array of Research objects

- **GET** `/faculty/research/publications`
  - Returns: Only journal and conference publications
  - Response: Array of Research objects (filtered)

- **GET** `/faculty/research/areas`
  - Returns: Only research areas and interests
  - Response: Array of Research objects (filtered)

### Projects
- **GET** `/faculty/projects`
  - Returns: All funded and academic projects
  - Response: Array of Project objects

- **GET** `/faculty/projects/ongoing`
  - Returns: Only currently ongoing projects
  - Response: Array of Project objects (filtered)

### Teaching
- **GET** `/faculty/teaching`
  - Returns: All courses taught by faculty
  - Response: Array of Teaching objects

### Contact Information
- **GET** `/faculty/contact`
  - Returns: Contact details, social links, academic profiles
  - Response: Array of Contact objects

### Thesis Supervision
- **GET** `/faculty/supervision`
  - Returns: Student thesis supervision records
  - Response: Array of Supervision objects

## 📊 API Response Examples

### About Response
```json
[
  {
    "_id": "about-1",
    "name": "DR. ABHINESH KAUSHIK",
    "designation": "Assistant Professor, Deputy Registrar",
    "bio": "Assistant Professor at IIIT Lucknow...",
    "profileImage": {
      "asset": {
        "_ref": "image-xyz",
        "url": "https://cdn.sanity.io/images/..."
      }
    },
    "address": "A-163, 2nd floor, Ramprastha Colony...",
    "qualifications": [
      {
        "qualification": "Ph. D (Computer Science)",
        "university": "Jawaharlal Nehru University",
        "percentage": "Qualified",
        "year": "June-2021"
      }
    ]
  }
]
```

### Research/Publications Response
```json
[
  {
    "_id": "research-1",
    "title": "Machine Learning Driven Centroid Localization Algorithm",
    "authors": "Tanwar, K. & Kaushik, A.",
    "venue": "Peer-To-Peer Networking and Applications",
    "year": 2025,
    "type": "journal",
    "doi": "https://doi.org/10.1007/s12083-025-02026-4"
  }
]
```

### Projects Response
```json
[
  {
    "_id": "project-1",
    "title": "AI BASED REAL TIME DETECTION OF AIR POLLUTION",
    "description": "Real-time air pollution detection system",
    "fundingAgency": "CSTUP, UTTAR PRADESH",
    "duration": "3 YEARS",
    "budget": "17.58 lakh",
    "role": "PI",
    "status": "ongoing",
    "startYear": 2024,
    "endYear": 2027
  }
]
```

## 🎨 Adding Data to Sanity Studio

### Step 1: Access Sanity Studio
1. Go to http://localhost:3334
2. You'll see the Sanity Studio interface

### Step 2: Add Faculty About Information
1. Click **"About"** in the sidebar
2. Click **"Create new About document"**
3. Fill in:
   - **Name**: Faculty full name
   - **Designation**: Job title/position
   - **Bio**: Professional biography
   - **Profile Image**: Upload faculty photo
   - **Address**: Contact address
   - **Qualifications**: Add educational background

### Step 3: Add Research Publications
1. Click **"Research"** in the sidebar
2. Click **"Create new Research document"**
3. Fill in:
   - **Title**: Publication/research title
   - **Type**: Select "journal", "conference", or "research_area"
   - **Authors**: Author names
   - **Venue**: Journal/conference name
   - **Year**: Publication year
   - **DOI**: DOI link
   - **Description**: Brief description

### Step 4: Add Projects
1. Click **"Project"** in the sidebar
2. Click **"Create new Project document"**
3. Fill in:
   - **Title**: Project name
   - **Description**: Project details
   - **Funding Agency**: Funding organization
   - **Duration**: Project timeline
   - **Budget**: Project budget
   - **Role**: Your role (PI, Co-PI, etc.)
   - **Status**: ongoing/completed/proposed

### Step 5: Add Teaching Information
1. Click **"Teaching"** in the sidebar
2. For each course, create new document:
   - **Course Name**: Full course name
   - **Course Code**: Course identifier
   - **Level**: undergraduate/graduate
   - **Semester**: spring/fall/summer/winter
   - **Year**: Academic year

### Step 6: Add Contact Information
1. Click **"Contact"** in the sidebar
2. Add:
   - **Email**: Primary email
   - **Alternate Email**: Secondary email
   - **Phone**: Contact number
   - **Office**: Office address
   - **LinkedIn**: LinkedIn profile URL
   - **Google Scholar**: Scholar profile URL
   - **ORCID**: ORCID identifier

### Step 7: Add Supervision Records
1. Click **"Supervision"** in the sidebar
2. For each student supervised:
   - **Level**: phd/mtech/msc/btech
   - **Title**: Thesis/project title
   - **Student Name**: Student's name
   - **Start/End Year**: Timeline
   - **Status**: ongoing/completed/continuing

## 🔄 Data Management Tips

### Publishing Changes
- Click **"Publish"** button after making changes
- Changes are immediately available via API

### Editing Existing Data
- Click on any document to edit
- Make changes and click "Publish"

### Deleting Data
- Click the three dots menu → "Delete"
- Confirm deletion

### Bulk Operations
- Use Sanity Studio's bulk operations for multiple documents

## 🛠️ Technical Details

### GROQ Queries Used
```groq
// Get all about information
*[_type == "about"] {
  _id, name, designation, bio, profileImage, address, qualifications
}

// Get publications only
*[_type == "research" && type in ["journal", "conference"]] | order(year desc)

// Get ongoing projects
*[_type == "project" && status == "ongoing"] | order(startYear desc)
```

### Environment Variables
```env
PORT=3001
SANITY_PROJECT_ID=4xrk10ec
SANITY_DATASET=production
SANITY_API_VERSION=2023-05-03
```

---

## 🤖 Frontend Generation Prompt

Use this prompt with any AI to generate a frontend for this backend:

---

**FRONTEND GENERATION PROMPT:**

I have a Faculty Portfolio Backend API running on `http://localhost:3001` with the following endpoints:

**API Endpoints:**
- `GET /faculty/about` - Faculty basic info, bio, qualifications
- `GET /faculty/research` - All research publications
- `GET /faculty/research/publications` - Journal/conference papers only  
- `GET /faculty/projects` - Research projects with funding details
- `GET /faculty/teaching` - Courses taught
- `GET /faculty/contact` - Contact information and social links
- `GET /faculty/supervision` - Student thesis supervision records

**Data Structure Examples:**
- About: `{name, designation, bio, profileImage, qualifications[]}`
- Research: `{title, authors, venue, year, type, doi, description}`
- Projects: `{title, description, fundingAgency, budget, role, status, duration}`
- Teaching: `{courseName, courseCode, level, semester, year}`
- Contact: `{email, phone, office, linkedIn, googleScholar, orcid}`
- Supervision: `{level, title, studentName, startYear, endYear, status}`

**Requirements:**
1. Create a modern, professional faculty portfolio website
2. Use React/Next.js with TypeScript and Tailwind CSS
3. Responsive design that works on all devices
4. Clean, academic-style UI with proper typography
5. Sections: Hero, About, Research, Projects, Teaching, Supervision, Contact
6. Loading states and error handling for API calls
7. Professional color scheme (blues, grays, whites)
8. Proper SEO meta tags and accessibility features
9. Links to external publications and profiles should open in new tabs
10. Display qualifications in a timeline or card format
11. Show publication years and venues prominently
12. Project status badges (ongoing/completed)
13. Contact section with clickable email/phone links

**Technical Stack:**
- Next.js 14+ with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Fetch API for backend communication

Generate a complete, production-ready faculty portfolio frontend that consumes this API and displays all the faculty information in a professional, modern design.

---

That's your complete backend documentation and frontend generation prompt!

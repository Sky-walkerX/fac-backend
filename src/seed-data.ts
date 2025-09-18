import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '4xrk10ec',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_TOKEN, // You'll need to add this token
});

// Faculty data based on the provided portfolio text
const facultyData = {
  about: {
    _type: 'about',
    name: 'DR. ABHINESH KAUSHIK',
    designation: 'Assistant Professor, Deputy Registrar',
    bio: 'Assistant Professor at Indian Institute of Information Technology, Lucknow. Deputy Registrar and Faculty In-charge for Training and Placements. Expertise in Wireless Sensor Networks, Machine Learning, and Localization Algorithms.',
    address: 'A-163, 2nd floor, Ramprastha Colony, Ghaziabad, UP-201011',
    qualifications: [
      {
        qualification: 'Ph. D (Computer Science)',
        university: 'Jawaharlal Nehru University, New Delhi',
        percentage: 'Qualified',
        year: 'June-2021'
      },
      {
        qualification: 'National Eligibility Test (NET)',
        university: 'UGC-NTA',
        percentage: 'Qualified',
        year: 'Dec-2019'
      },
      {
        qualification: 'M.Tech (Computer Science and Engineering)',
        university: 'Jawaharlal Nehru University, New Delhi',
        percentage: '85%',
        year: '2016'
      },
      {
        qualification: 'B. Tech (Computer Science and Engineering)',
        university: 'GGSIPU, Delhi',
        percentage: '73%',
        year: '2013'
      }
    ]
  },

  contact: {
    _type: 'contact',
    email: 'abhinesh.kaushik@gmail.com',
    alternateEmail: 'abhinesh@iiitl.ac.in',
    phone: '8587012012',
    office: 'Indian Institute of Information Technology, Lucknow',
    linkedIn: 'https://www.linkedin.com/in/abhinesh-kaushik-67a83647',
    googleScholar: 'https://scholar.google.com/citations?user=KqxVnuwAAAAJ&hl=en&oi=ao',
    orcid: '0000-0002-7864-6202'
  },

  publications: [
    {
      _type: 'research',
      title: 'Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks',
      authors: 'Tanwar, K. & Kaushik, A.',
      venue: 'Peer-To-Peer Networking and Applications',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s12083-025-02026-4'
    },
    {
      _type: 'research',
      title: 'Improved 3D DV-Hop Algorithm Using scatteredness Between Beacon nodes for Calculation of the hopsize for Stochastic Wireless sensor Network',
      authors: 'Warade, A. & Kaushik, A.',
      venue: 'Physica Scripta',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1088/1402%2d4896/Ade8b7'
    },
    {
      _type: 'research',
      title: 'A Comparative Study and Survey of Chain-Based Routing Protocols in Wireless Sensor Networks',
      authors: 'Verma, R.K., Jain, S. & Kaushik, A.',
      venue: 'Journal of Supercomputing',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1007/S11227-025-07412-6'
    },
    {
      _type: 'research',
      title: 'Three-Dimensional DV-Hop Based on Improved Adaptive Differential Evolution Algorithm',
      authors: 'Mani, V., Kaushik, A.',
      venue: 'Journal of Supercomputing',
      year: 2024,
      type: 'journal',
      doi: 'https://doi.org/10.1007/S11227-024-06432-Y'
    },
    {
      _type: 'research',
      title: 'Improved 3-Dimensional DV-Hop Localization Algorithm based on Information of Nearby Nodes',
      authors: 'Kaushik, A., Lobiyal, D.K. & Kumar, S.',
      venue: 'Wireless networks',
      year: 2021,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s11276-020-02533-7'
    },
    {
      _type: 'research',
      title: 'Localization in Mobile Wireless Sensor Networks using Drones',
      authors: 'Kaushik A, Lobiyal D.K.',
      venue: 'Transactions on Emerging Telecommunication Technologies',
      year: 2021,
      type: 'journal',
      doi: 'https://doi.org/10.1002/ett.4213'
    }
  ],

  projects: [
    {
      _type: 'project',
      title: 'AI BASED REAL TIME DETECTION OF AIR POLLUTION AND PREDICTION OF CLEAN AIR AMIDST CROP RESIDUE BURNING IN UTTAR PRADESH',
      description: 'Real-time air pollution detection and clean air prediction system for Western Uttar Pradesh',
      fundingAgency: 'CSTUP, UTTAR PRADESH',
      duration: '3 YEARS',
      budget: '17.58 lakh',
      role: 'PI',
      status: 'ongoing',
      startYear: 2024,
      endYear: 2027
    },
    {
      _type: 'project',
      title: 'PHYTOINSPIRED ADVANCED NANOMATERIALS FROM AGRO-INDUSTRIAL RESIDUES AND WASTEWATER TREATMENT',
      description: 'Development of advanced nanomaterials from agricultural waste for wastewater treatment',
      fundingAgency: 'CSTUP, UTTAR PRADESH',
      duration: '3 YEARS',
      budget: '15.36 lakh',
      role: 'Co-PI',
      status: 'ongoing',
      startYear: 2024,
      endYear: 2027
    },
    {
      _type: 'project',
      title: 'AUTOMATED SUPPORTING DOCUMENT GENERATION FOR GST NOTICES',
      description: 'Automated system for generating supporting documents for GST notices for Department of Commercial Taxes',
      fundingAgency: 'CSTUP, UTTAR PRADESH',
      duration: '1 YEAR',
      budget: '19 lakh',
      role: 'Coordinator',
      status: 'completed',
      startYear: 2023,
      endYear: 2024
    }
  ],

  teaching: [
    {
      _type: 'teaching',
      courseName: 'Compiler Design',
      level: 'undergraduate'
    },
    {
      _type: 'teaching',
      courseName: 'Computer Networks',
      level: 'undergraduate'
    },
    {
      _type: 'teaching',
      courseName: 'Software Engineering',
      level: 'undergraduate'
    },
    {
      _type: 'teaching',
      courseName: 'Advanced Computer Algorithms',
      level: 'graduate'
    },
    {
      _type: 'teaching',
      courseName: 'Database Management Systems',
      level: 'undergraduate'
    },
    {
      _type: 'teaching',
      courseName: 'Operating Systems',
      level: 'undergraduate'
    },
    {
      _type: 'teaching',
      courseName: 'Design and Analysis of Algorithms',
      level: 'undergraduate'
    }
  ],

  supervision: [
    {
      _type: 'supervision',
      level: 'phd',
      title: 'Wireless Sensor Networks',
      studentName: 'Abha Shweta',
      startYear: 2022,
      status: 'continuing'
    },
    {
      _type: 'supervision',
      level: 'mtech',
      title: 'Improved 3D DV-Hop based on Dynamic Differential Evolution Algorithm',
      studentName: 'Vikas Mani',
      startYear: 2021,
      endYear: 2023,
      status: 'completed'
    },
    {
      _type: 'supervision',
      level: 'mtech',
      title: 'Ant Colony Optimization Algorithm Approach for Localization in Wireless Sensor Networks',
      studentName: 'Sankhyesh Singh Thakur',
      startYear: 2021,
      endYear: 2023,
      status: 'completed'
    },
    {
      _type: 'supervision',
      level: 'mtech',
      title: 'Localization in Wireless Sensor Networks using Machine Learning based Approximate Point in Triangle Technique',
      studentName: 'Aditi Agarwal',
      startYear: 2022,
      endYear: 2024,
      status: 'completed'
    },
    {
      _type: 'supervision',
      level: 'mtech',
      title: 'Localization in Wireless Sensor Networks using Machine Learning based Centroid Localization Algorithm',
      studentName: 'Kritika Tanwar',
      startYear: 2022,
      endYear: 2024,
      status: 'completed'
    },
    {
      _type: 'supervision',
      level: 'mtech',
      title: 'Localization In Wireless Sensor Networks Using Machine Learning Based DV-Hop Algorithm',
      studentName: 'Arundhati Warade',
      startYear: 2022,
      endYear: 2024,
      status: 'completed'
    }
  ]
};

async function seedData() {
  try {
    console.log('Seeding faculty data...');
    
    // Create about document
    const aboutDoc = await client.create(facultyData.about as any);
    console.log('Created about document:', aboutDoc._id);

    // Create contact document
    const contactDoc = await client.create(facultyData.contact as any);
    console.log('Created contact document:', contactDoc._id);

    // Create publication documents
    for (const pub of facultyData.publications) {
      const pubDoc = await client.create(pub as any);
      console.log('Created publication:', pubDoc.title);
    }

    // Create project documents
    for (const project of facultyData.projects) {
      const projectDoc = await client.create(project as any);
      console.log('Created project:', projectDoc.title);
    }

    // Create teaching documents
    for (const course of facultyData.teaching) {
      const courseDoc = await client.create(course as any);
      console.log('Created course:', courseDoc.courseName);
    }

    // Create supervision documents
    for (const supervision of facultyData.supervision) {
      const supervisionDoc = await client.create(supervision as any);
      console.log('Created supervision:', supervisionDoc.title);
    }

    console.log('Data seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

// Run the seeder
if (require.main === module) {
  seedData();
}

export { seedData };

import { slugify } from '../utils/slugify';

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  summary: string;
  github: string;
  linkedin: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  technologies: string[];
  tags: string[];
  highlights: string[];
  links: {
    github?: string;
    live?: string;
  };
  color: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const profile: Profile = {
  name: 'Rohit Kumar Chintamani',
  firstName: 'Rohit Kumar Chintamani',
  lastName: 'Chintamani',
  role: 'Software Engineer',
  location: 'Missoula, MT',
  email: 'rohitkc2316@gmail.com',
  phone: '+1-872-216-5179',
  summary:
    'Dedicated to scalable solutions on a modern stack. A Software Engineer focused on the holistic view: from robust infrastructure and microservice patterns to precise UI interactions. I implement strict security and DevOps workflows to ensure high-performance delivery in mission-critical environments.',
  github: 'https://github.com/RohitKumar2306',
  linkedin: 'www.linkedin.com/in/rohit-k-c',
};

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Accenture',
    role: 'Software Engineering Analyst',
    type: 'Full-time',
    startDate: 'Sep 2021',
    endDate: 'Dec 2023',
    location: 'Remote',
    description:
      'Developed complex frontend user interfaces and backend code using Java and React, ensuring seamless integration for internet/intranet applications.',
    highlights: [
      'Developed complex frontend user interfaces and backend code using Java and React, ensuring seamless integration for internet/intranet applications that provide detailed product insights.',
      'Implemented secure web application functions, including session management, SSL Certificates, and user authentication using JSON web tokens (JWT) to protect sensitive data.',
      'Managed data persistence using SQL databases and utilized messaging protocols (similar to MQTT) to facilitate real-time telemetry and communication between distributed systems.',
      'Utilized TypeScript and Node.js to create efficient server-side logic, reducing latency for remote control features and logging activities by 40%.',
      'Debugged and troubleshot development issues across platforms, taking ownership of tasks to complete Sprints and documenting solutions to assist end-users.',
      'Designed and conducted unit tests prior to delivery, ensuring high-quality releases that met "Meets Expectations" standards for reliability and performance.',
    ],
    technologies: ['Java', 'React', 'TypeScript', 'Node.js', 'SQL', 'Terraform', 'Docker', 'Kubernetes'],
  },
  {
    id: 'exp-2',
    company: 'Dreams Media Solutions',
    role: 'Software Engineer',
    type: 'Internship',
    startDate: 'Sep 2020',
    endDate: 'Aug 2021',
    location: 'Remote',
    description:
      'Engineered high-throughput backend systems and developed responsive frontend interfaces.',
    highlights: [
      'Engineered high-throughput backend systems using Java, handling 5,000+ concurrent requests per second with high availability for critical operations.',
      'Developed complex frontend user interfaces using React and TypeScript, ensuring responsive design and intuitive navigation for administrative tools.',
      'Optimized SQL database interactions and schema designs, ensuring data integrity and reducing query response times by 35%.',
      'Supported end users by developing technical documentation and assistance tools, facilitating smoother onboarding and troubleshooting processes.',
    ],
    technologies: ['Java', 'Python', 'React', 'TypeScript', 'SQL', 'Spring Boot', 'CI/CD'],
  },
  {
    id: 'exp-3',
    company: 'Capital Info Solutions',
    role: 'Web Application Developer',
    type: 'Internship',
    startDate: 'Mar 2019',
    endDate: 'Nov 2019',
    location: 'Remote',
    description:
      'Migrated legacy systems to modern React frontends and built secure REST API layers.',
    highlights: [
      'Migrated legacy pages to modern React and TypeScript frontends, significantly improving system maintainability while consistently supporting smoother weekly release cycles.',
      'Built secure Java and Spring Boot REST API layers for core business workflows, strictly enforcing clean boundaries to reduce response times for users.',
      'Integrated CI/CD pipelines using GitHub Actions to automate building and testing artifacts, enabling consistent deployments and effectively reducing manual release steps.',
      'Designed responsive user interfaces using HTML5 and CSS3, delivering consistent layouts across devices and improving form completion rates through clearer validation states.',
      'Optimized Relational Database access by tuning indexes and rewriting slow queries, improving page load performance for heavy report screens by 50%.',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'Go', 'SQL', 'HTML5', 'CSS3', 'GitHub Actions'],
  },
];

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Illinois Institute of Technology',
    degree: 'Master of Science',
    field: 'Computer Science',
    startDate: 'Jan 2024',
    endDate: 'Dec 2025',
    location: 'Illinois, USA',
  },
  {
    id: 'edu-2',
    institution: 'Jawaharlal Nehru Technological University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science',
    startDate: 'Aug 2017',
    endDate: 'May 2021',
    location: 'India',
  },
];

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
  },
  {
    id: 'cert-2',
    name: 'Oracle Certified Professional Java SE 17 Developer',
    issuer: 'Oracle',
    date: '2023',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    slug: slugify('Retail Store Application'),
    title: 'Retail Store Application',
    subtitle: 'Full-Stack E-Commerce Platform',
    description:
      'Built a comprehensive Retail Store web application with role-based access control, product management, and order processing.',
    overview:
      'A full-stack e-commerce platform built with Spring Boot and React that provides a complete retail experience with secure authentication, product catalog management, shopping cart functionality, and admin dashboard.',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST API', 'JWT', 'JUnit'],
    tags: ['Full Stack', 'Backend', 'Frontend'],
    highlights: [
      'Implemented role-based access control (RBAC) for secure user management',
      'Built comprehensive product catalog with search and filtering capabilities',
      'Developed shopping cart and checkout workflows with order management',
      'Created admin dashboard for inventory and user management',
      'Added input validation and JUnit tests to improve code reliability',
      'Designed RESTful APIs following best practices for scalability',
    ],
    links: { github: 'https://github.com/RohitKumar2306/retail_software_front_end' },
    color: '#f59e0b',
  },
  {
    id: 'proj-2',
    slug: slugify('Smart Micro-Learning Platform'),
    title: 'LearnSphere',
    subtitle: 'Smart Micro-Learning Platform',
    description:
      'Built an intelligent learning platform with AI-powered quiz generation, course management, and progress tracking.',
    overview:
      'An innovative micro-learning platform that uses AI to create adaptive quizzes and personalized learning experiences. Features include JWT authentication, role-based access, course creation tools, and comprehensive analytics dashboards.',
    technologies: ['Spring Boot', 'React', 'Vite', 'MySQL', 'JWT', 'AI Integration', 'REST API'],
    tags: ['Full Stack', 'AI', 'Frontend'],
    highlights: [
      'Implemented JWT authentication with RBAC for Student, Instructor, and Admin roles',
      'Built course creation and enrollment system with micro-lesson delivery',
      'Developed progress tracking dashboards with detailed analytics',
      'Integrated AI quiz generator for adaptive practice and personalized learning',
      'Created secure REST APIs with input validation and error handling',
      'Designed modular services architecture for scalability and maintainability',
    ],
    links: { github: 'https://github.com/RohitKumar2306/SmartLearnings_Frontend' },
    color: '#3bf6da',
  },
  {
    id: 'proj-3',
    slug: slugify('Responsive UI/UX Portfolio'),
    title: 'Personal Portfolio',
    subtitle: 'Responsive UI/UX Portfolio',
    description:
      'A high-performance, responsive portfolio website built to showcase software engineering projects and technical skills.',
    overview:
      'A modern personal website engineered for speed and accessibility. It features custom hook-based animations, a fully responsive layout, dark/light mode theming, and a working contact system. Built with strict TypeScript type safety and optimized for 60FPS performance.',
    technologies: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    tags: ['Frontend', 'UI/UX'],
    highlights: [
      'Engineered a component-based architecture using React and TypeScript for type safety',
      'Implemented custom scroll-triggered animations using Intersection Observer for 60FPS performance',
      'Built a global theme management system (Dark/Light mode) using React Context API',
      'Developed fully responsive navigation with a custom mobile menu and smooth scrolling',
      'Created reusable UI components (Cards, Buttons, Chips) to ensure design consistency',
      'Optimized build size and load times using Vite and lazy loading strategies',
    ],
    links: { github: 'https://github.com/RohitKumar2306/rohit_portfolio' },
    color: '#72934f',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'skills-1',
    title: 'Programming',
    icon: 'code',
    skills: ['Java', 'Node.js', 'Golang', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    id: 'skills-2',
    title: 'Frontend',
    icon: 'layers',
    skills: ['React', 'Redux', 'Angular', 'Tailwind CSS', 'Bootstrap', 'Vite', 'Vue.js'],
  },
  {
    id: 'skills-3',
    title: 'Databases',
    icon: 'database',
    skills: ['PostgreSQL', 'MySQL', 'Oracle', 'MongoDB', 'Redis', 'DocumentDB'],
  },
  {
    id: 'skills-4',
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI/CD', 'GitHub Actions', 'Terraform'],
  },
  {
    id: 'skills-5',
    title: 'AI & Tools',
    icon: 'tools',
    skills: ['Claude', 'ChatGpt', 'Git', 'Maven', 'NPM', 'Postman', 'Jira', 'IntelliJ IDEA', 'Ansible', 'AutoSys'],
  },
  {
    id: 'skills-6',
    title: 'Architecture',
    icon: 'shield',
    skills: ['Microservices', 'RESTful APIs', 'System Design', 'RBAC & Security', 'CI/CD Pipelines', 'Scalability'],
  },
];

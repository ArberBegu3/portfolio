export const GAME_CONFIG = {
  MAX_SECTIONS: 5,
  CHARACTER_SPEED: 20, // Increased from 10 to 20 for much faster movement
  CHARACTER_SIZE: 70, // Increased from 50 to 70
  BUG_SIZE: 45, // New config for bug size (increased from 30)
  // Collision detection sizes (20% larger to prevent tunneling)
  COFFEE_COLLISION_SIZE: 24, // Visual size: 20px, Collision size: 24px
  BUG_COLLISION_SIZE: 54, // Visual size: 45px, Collision size: 54px
  MAX_BUGS_LEVEL_1: 2, // 2 bugs in first section
  MAX_BUGS_LEVEL_2: 3, // 3 bugs in second section
  MAX_BUGS_LEVEL_3: 4, // 4 bugs in third section
  MAX_BUGS_LEVEL_4: 5, // 5 bugs in fourth section
  ANIMATION_DURATION: 0.5,
  SPRITE_SIZE: 200,
} as const

export const PORTFOLIO_DATA = {
  name: 'Arber Begu',
  title: 'Junior Full-Stack Developer',
  email: 'arber_begu@hotmail.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/arber-begu-481228224/',
    github: 'https://github.com/ArberBegu3',
  },
} as const

export const WOW_SKILL_TREES = {
  frontend: {
    name: 'Frontend Mastery',
    color: '#61dafb',
    icon: '🎨',
    tiers: [
      // Tier 1 - Foundation
      [
        {
          id: 'html5',
          name: 'HTML5',
          tier: 1,
          position: 0,
          maxRank: 5,
          currentRank: 5,
          unlocked: true,
          icon: 'src/assets/skillLogos/html5.svg',
          description: 'Semantic markup and modern HTML features',
          prerequisites: [],
        },
        {
          id: 'javascript',
          name: 'JavaScript',
          tier: 1,
          position: 1,
          maxRank: 5,
          currentRank: 4,
          unlocked: true,
          icon: '/src/assets/skillLogos/javascript.svg',
          description: 'Core JavaScript language features',
          prerequisites: [],
        },
        {
          id: 'react',
          name: 'React',
          tier: 1,
          position: 2,
          maxRank: 5,
          currentRank: 4,
          unlocked: true,
          icon: '/src/assets/skillLogos/reactjs.svg',
          description: 'Building component-based UIs, managing state, and creating interactive front-end applications.',
          prerequisites: ['javascript'], // React requires JS knowledge
        }

      ],
      // Tier 2 - Styling & Framework
      [
        {
          id: 'css3',
          name: 'CSS3',
          tier: 2,
          position: 0,
          maxRank: 5,
          currentRank: 5,
          unlocked: true,
          icon: '/src/assets/skillLogos/css3.svg',
          description: 'Advanced styling, animations, and layouts',
          prerequisites: ['html5'],
        },
        {
          id: 'vue1',
          name: 'Vue.js Lvl 1',
          tier: 2,
          position: 1,
          maxRank: 5,
          currentRank: 2,
          unlocked: true,
          icon: '/src/assets/skillLogos/vue.svg',
          description: 'Experience extending and customizing existing Vue.js applications, including state management and component logic.',
          prerequisites: ['javascript'],
        },
        {
          id: 'typescript',
          name: 'TypeScript',
          tier: 2,
          position: 2,
          maxRank: 5,
          currentRank: 2,
          unlocked: true,
          icon: '/src/assets/skillLogos/typescript.svg',
          description: 'Applied type-safe development practices to extend configuration and data structures in an existing project.',
          prerequisites: [],
        }
      ],
      // Tier 3 - Advanced Styling & Framework
      [
        {
          id: 'sass',
          name: 'SASS/SCSS',
          tier: 3,
          position: 0,
          maxRank: 5,
          currentRank: 3,
          unlocked: true,
          icon: '/src/assets/skillLogos/sass.svg',
          description: 'CSS preprocessing and advanced styling',
          prerequisites: ['css3'],
        },

      ],
      // Tier 4 - Master Level
    ],
  },
  backend: {
    name: 'Backend Engineering',
    color: '#68d391',
    icon: '⚙️',
    tiers: [
      // Tier 1 - Server Basics
      [
        {
          id: 'expressjs',
          name: 'Express.js',
          tier: 1,
          position: 0,
          maxRank: 5,
          currentRank: 3,
          unlocked: true,
          icon: '/src/assets/skillLogos/expressjs.svg',
          description: '',
          prerequisites: [],
        },
        {
          id: 'php',
          name: 'PHP',
          tier: 1,
          position: 1,
          maxRank: 5,
          currentRank: 2,
          unlocked: false,
          icon: '/src/assets/skillLogos/php.svg',
          description: 'Server-side scripting and web development',
          prerequisites: [],
        },
        {
          id: 'rest',
          name: 'REST APIs',
          tier: 1,
          position: 2,
          maxRank: 5,
          currentRank: 3,
          unlocked: true,
          icon: '/src/assets/skillLogos/restApi.svg',
          description: 'Consuming REST APIs to fetch and display data',
          prerequisites: [],
        },
      ],
      // Tier 2 - Modern Backend
      [
        {
          id: 'nodejs',
          name: 'Node.js',
          tier: 2,
          position: 0,
          maxRank: 5,
          currentRank: 2,
          unlocked: true,
          icon: '/src/assets/skillLogos/nodejs.svg',
          description: 'JavaScript runtime for server development',
          prerequisites: ['javascript'],
        },
        {
          id: 'postgresql',
          name: 'PostgreSQL',
          tier: 2,
          position: 1,
          maxRank: 3,
          currentRank: 3,
          unlocked: true,
          icon: '🐘',
          description: 'Advanced relational database features',
          prerequisites: ['mysql'],
        },
      ],
    ],
  },
  tools: {
    name: 'Development Tools',
    color: '#fbb6ce',
    icon: '🛠️',
    tiers: [
      // Tier 1 - Essential Tools
      [
        {
          id: 'git',
          name: 'Git',
          tier: 1,
          position: 0,
          maxRank: 5,
          currentRank: 4,
          unlocked: true,
          icon: '📚',
          description: 'Version control and collaboration',
          prerequisites: [],
        },
        {
          id: 'intellij',
          name: 'IntelliJ IDEA',
          tier: 1,
          position: 1,
          maxRank: 5,
          currentRank: 2,
          unlocked: true,
          icon: '💡',
          description: 'Powerful IDE for development',
          prerequisites: [],
        },
        {
          id: 'terminal',
          name: 'Terminal',
          tier: 1,
          position: 2,
          maxRank: 5,
          currentRank: 4,
          unlocked: true,
          icon: '⌨️',
          description: 'Command line proficiency',
          prerequisites: [],
        },


      ],
      // Tier 2 - Testing & Build
      [
        {
          id: 'figma',
          name: 'Figma',
          tier: 2,
          position: 0,
          maxRank: 5,
          currentRank: 4,
          unlocked: true,
          icon: '🎨',
          description: 'UI/UX design, prototyping, and creating design systems for web applications.',
          prerequisites: [],
        },
        {
        id: 'postman',
        name: 'Postman',
        tier: 2,
        position: 1,
        maxRank: 5,
        currentRank: 4,
        unlocked: true,
        icon: '📬',
        description: 'API testing and development tool for sending requests, testing endpoints, and automating workflows',
        prerequisites: ['git'],
        },
        {
          id: 'vitest',
          name: 'Vitest',
          position: 2,
          maxRank: 5,
          currentRank: 3,
          unlocked: true,
          icon: '🧪',
          description: 'Fast unit testing framework',
          prerequisites: ['git'],
        }
      ],
    ],
  },
}

export const SKILLS_DATA = {
  wow: WOW_SKILL_TREES,
  frontend: [
    { name: 'Html', level: 90 },
    { name: 'React', level: 85 },
    { name: 'CSS/SASS', level: 90 },
    { name: 'Vue.js', level: 40 },
    { name: 'TypeScript', level: 40 },
  ],
  backend: [
    { name: 'Express.js', level: 85 },
    { name: 'Node.js', level: 85 },
    { name: 'Java', level: 30 },
  ],
  database: [
    { name: 'PostgreSQL', level: 90 },
  ],
  tools: [
    { name: 'Git', level: 80 },
    { name: 'Figma', level: 90 },
  ],
}

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Restaurantista',
    description:
      'Built an online food ordering application with category-based menu browsing, cart functionality, and a fully responsive design to simplify the ordering process for customers and streamline restaurant operations.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image: '/project1.svg',
    github: 'https://github.com/ArberBegu3/restaurantista',
    demo: 'https://vercel.com/arber-begus-projects/restaurantista',
    category: 'Front-End Development',
    status: 'Mission Complete',
    achievements: ['Payment Integration Master', 'UI/UX Designer'],
    questType: 'Main Story',
  },
  {
    id: 2,
    title: 'GreenLand',
    description:
      'Created a fully interactive e-commerce web application with API integration for product listing and filtering, a single product page, dynamic cart functionality, and a fully responsive design for an enhanced user experience.',
    tech: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    image: '/project2.svg',
    github: 'https://github.com/ArberBegu3/greenLand',
    demo: 'https://green-land-gules.vercel.app/',
    category: 'Front End Development',
    status: 'Active Campaign',
    achievements: ['Real-time Master', 'Productivity Enhancer'],
    questType: 'Side Quest',
  },
  {
    id: 3,
    title: 'CarDealership',
    description:
      'Interactive Car Dealership Website with category-based car browsing, modern UI/UX design, smooth user experience, fully responsive layout, and features for purchasing vehicles or booking appointments. ',
    tech: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    image: '/project3.svg',
    github: 'https://github.com/ArberBegu3/carDealership',
    demo: 'https://car-dealership-ten-delta.vercel.app/',
    category: 'Front End Development',
    status: 'Mission Complete',
    achievements: ['API Integration Pro', 'UI/UX Designer', 'Performance Optimizer'],
    difficulty: 'Intermediate Level',
    questType: 'Exploration',
  },
  {
  id: 4,
    title: 'Employee Management System',
    description: 'A full-stack web application for managing departments, employees, and tasks. Includes user role management, a secure PostgreSQL database, and a complete CRUD interface.',
    tech: ['React.js', 'Express.js', 'PostgreSQL', 'JavaScript', 'Figma'],
    image: '/project4.svg',
    github: 'https://github.com/ArberBegu3/employee-management',
    demo: 'https://employee-management-demo.dev',
    category: 'Full-Stack Development',
    status: 'Mission Complete',
    achievements: ['Full-Stack Architect', 'Database Designer', 'Project MVP'],
    difficulty: 'Intermediate Level',
    questType: 'Main Story',
  },
  
]

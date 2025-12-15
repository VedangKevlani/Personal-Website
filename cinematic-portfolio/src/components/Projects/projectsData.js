// projectsData.js

const projects = [
  {
    id: 1,
    title: 'Neural Hands: Real Time American Sign Language Coach (Demo in Post)',
    year: '2025',
    role: 'Data Scientist',
    tech: ['Python', 'Tensorflow', 'Tailwind', 'React'],
    thumbnail: '/neuralHands.jpg',
    description:
      'A real-time ASL coach that interprets hand movements and provides feedback for learning American Sign Language.',
    outcomes: [
      'Real-time gesture recognition',
      'Improved learning efficiency',
      'Cross-platform web interface'
    ]
  },
  {
    id: 2,
    title: 'Yaad: Rental Price Intelligence System (Demo in Post)',
    year: '2025',
    role: 'Data Scientist',
    tech: ['Python', 'Tensorflow', 'Node', 'Vue'],
    thumbnail: '/yaad.jpg',
    description:
      'Analyzes rental prices using machine learning to provide intelligent insights for students and professionals.',
    outcomes: [
      'Accurate rental price prediction',
      'Interactive dashboard for insights',
      'Supported multiple property types'
    ]
  },
  {
    id: 3,
    title: 'Hopefield: School Website CMS (Demo in Post)',
    year: '2025',
    role: 'Full Stack Developer',
    tech: ['React', 'Tailwind', 'Node', 'MongoDB'],
    thumbnail: '/hopefield.jpg',
    description:
      'A content management system for school websites, allowing staff to manage pages, events, and resources efficiently.',
      projectLink: 'https://hopefieldprep.vercel.app/',
      outcomes: [
      'Simplified website management',
      'Responsive, fast-loading design',
      'Integrated news and events system'
    ]
  },
  {
    id: 4,
    title: 'THC: Taino Heritage Camp Website (Demo in Post)',
    year: '2025',
    role: 'Full Stack Developer',
    tech: ['Python', 'Twilio', 'Flask', 'Redis'],
    thumbnail: '/taino.jpg',
    description:
      'A website for the Taino Heritage Camp to manage registrations, communications, and camp activities.',
    projectLink: 'https://tainoheritagecamp.netlify.app/',
    outcomes: [
      'Streamlined registration process',
      'Automated notifications via Twilio',
      'Dynamic activity schedules'
    ]
  },
  {
    id: 5,
    title: 'Finny: Budgeting and Financial Literacy Assistant (Demo in Post)',
    year: '2024',
    role: 'Data Analyst',
    tech: ['Python', 'Node', 'Express', 'Firebase'],
    thumbnail: '/finny.jpg',
    description:
      'An assistant to help users track expenses, set goals, and improve financial literacy.',
    projectLink: 'https://finnovators.netlify.app/',
      outcomes: [
      'Interactive budgeting tools',
      'Goal tracking system',
      'Firebase integration for real-time updates'
    ]
  },
  {
    id: 6,
    title: 'Project OnePot: Vincent Hosang Venture Finals (Demo in Post)',
    year: '2025',
    role: 'Full Stack Developer',
    tech: ['HTML', 'CSS', 'JS'],
    thumbnail: '/onepot.png',
    description:
      'A subscription based service offering meal prep packages for students and professionals, reducing cleanup and cooking time. Visit Link: https://project-onepot.vercel.app/',
    projectLink: 'https://project-onepot.vercel.app/',
    outcomes: [
      'Online ordering system',
      'Community engagement features',
      'Authentic cookbook access'
    ]
  }
]

const videos = [
  {
    title: 'Neural Hands: ASL to English Translation using Deep Learning (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7386537763203948544',
    thumbnail: '/neuralHands.jpg',
  },
  {
    title: 'Yaad: AI Price Intelligence for Real Estate (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7328884745042300928',
    thumbnail: '/yaad.jpg',
  },
  {
    title: 'Hopefield School: A CMS supporting Jamaican Education (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7402081312725159936',
    thumbnail: '/hopefield.jpg',
  },
  {
    title: 'Taino Heritage Site: Web Experience for Cultural Preservation (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7374209400091070467',
    thumbnail: '/taino.jpg',
  },
  {
    title: 'Finny: Budgeting and Financial Literacy App (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:activity:7277796671449665538',
    thumbnail: '/finny.jpg',
  },
  {
    title: 'Project OnePot: Vincent Hosang Venture Finals (Demo in Post)',
    link: 'https://www.linkedin.com/embed/feed/update/urn:li:share:7305388739852193793',
    thumbnail: '/onepot.png',
  }
]

// Merge video link into projects
const projectsData = projects.map(project => {
  const video = videos.find(v =>
    v.title.toLowerCase().includes(project.title.split(':')[0].toLowerCase())
  )
  return {
    ...project,
    videoLink: video?.link || null
  }
})

export default projectsData

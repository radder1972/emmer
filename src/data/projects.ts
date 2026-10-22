export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  client: string;
  year: string;
  impactMetrics: { label: string; value: string }[];
  standardAgencyApproach: string;
  theEngineApproach: string;
  architecturalHighlights: string[];
  techStack: string[];
  detailedStory: {
    problem: string;
    domainLogic: string;
    technicalExecution: string;
    businessResult: string;
  };
  quote?: string;
  accentColor: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing',
    category: 'Domein Alpha',
    client: 'Opdrachtgever Alpha',
    year: '2025',
    accentColor: '#171717',
    impactMetrics: [
      { label: 'Placeholder Metric A', value: '100%' },
      { label: 'Placeholder Metric B', value: '-65%' },
      { label: 'Placeholder Metric C', value: 'Realtime' },
    ],
    standardAgencyApproach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    theEngineApproach: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    architecturalHighlights: [
      'Lorem ipsum dolor sit amet consectetur adipiscing elit',
      'Sed do eiusmod tempor incididunt ut labore et dolore',
      'Ut enim ad minim veniam quis nostrud exercitation ullamco',
      'Duis aute irure dolor in reprehenderit in voluptate velit',
    ],
    techStack: ['TypeScript', 'React', 'Tailwind', 'Architecture', 'API'],
    detailedStory: {
      problem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      domainLogic: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.',
      technicalExecution: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.',
      businessResult: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
  },
  {
    id: 'project-beta',
    title: 'Project Beta',
    subtitle: 'Sed do eiusmod tempor incididunt ut labore et dolore',
    category: 'Domein Beta',
    client: 'Opdrachtgever Beta',
    year: '2024 - 2025',
    accentColor: '#262626',
    impactMetrics: [
      { label: 'Placeholder Metric A', value: '+340%' },
      { label: 'Placeholder Metric B', value: 'Zero-Lag' },
      { label: 'Placeholder Metric C', value: '24/7' },
    ],
    standardAgencyApproach: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.',
    theEngineApproach: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    architecturalHighlights: [
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur',
      'Neque porro quisquam est qui dolorem ipsum quia dolor',
      'Ut enim ad minima veniam quis nostrum exercitationem ullam',
      'Quis autem vel eum iure reprehenderit qui in ea voluptate',
    ],
    techStack: ['Architecture', 'Engine', 'Data Model', 'Interface', 'Cloud'],
    detailedStory: {
      problem: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
      domainLogic: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam.',
      technicalExecution: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.',
      businessResult: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.',
    },
    quote: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur.',
  },
  {
    id: 'project-gamma',
    title: 'Project Gamma',
    subtitle: 'Ut enim ad minim veniam quis nostrud exercitation',
    category: 'Domein Gamma',
    client: 'Opdrachtgever Gamma',
    year: '2024',
    accentColor: '#404040',
    impactMetrics: [
      { label: 'Placeholder Metric A', value: '100% Core' },
      { label: 'Placeholder Metric B', value: 'Sub-30ms' },
      { label: 'Placeholder Metric C', value: 'Schaalbaar' },
    ],
    standardAgencyApproach: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.',
    theEngineApproach: 'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias.',
    architecturalHighlights: [
      'Et harum quidem rerum facilis est et expedita distinctio',
      'Nam libero tempore cum soluta nobis est eligendi optio',
      'Temporibus autem quibusdam et aut officiis debitis',
      'Itaque earum rerum hic tenetur a sapiente delectus',
    ],
    techStack: ['Systems', 'Core Logic', 'Integration', 'Tokens', 'UI/UX'],
    detailedStory: {
      problem: 'Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis.',
      domainLogic: 'Necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum.',
      technicalExecution: 'Rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut.',
      businessResult: 'Perferendis doloribus asperiores repellat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    quote: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus.',
  },
  {
    id: 'project-delta',
    title: 'Project Delta',
    subtitle: 'Duis aute irure dolor in reprehenderit in voluptate',
    category: 'Domein Delta',
    client: 'Opdrachtgever Delta',
    year: '2023 - 2025',
    accentColor: '#525252',
    impactMetrics: [
      { label: 'Placeholder Metric A', value: '+180%' },
      { label: 'Placeholder Metric B', value: 'End-to-End' },
      { label: 'Placeholder Metric C', value: 'Enterprise' },
    ],
    standardAgencyApproach: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    theEngineApproach: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    architecturalHighlights: [
      'Duis aute irure dolor in reprehenderit in voluptate velit',
      'Cillum dolore eu fugiat nulla pariatur excepteur sint',
      'Occaecat cupidatat non proident sunt in culpa qui officia',
      'Deserunt mollit anim id est laborum sed ut perspiciatis',
    ],
    techStack: ['Infrastructure', 'Domain Logic', 'Vector Tokens', 'Execution'],
    detailedStory: {
      problem: 'Unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae.',
      domainLogic: 'Ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem.',
      technicalExecution: 'Quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.',
      businessResult: 'Sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
    },
    quote: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'De Architect',
    subtitle: 'Systeemarchitectuur & Domeinmodel',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    icon: 'Cpu',
    bullets: [
      'Lorem ipsum dolor sit amet consectetur',
      'Consectetur adipiscing elit sed do eiusmod',
      'Tempor incididunt ut labore et dolore magna',
    ],
  },
  {
    number: '02',
    title: 'De Strateeg',
    subtitle: 'Productstrategie & Validatie',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    icon: 'Layers',
    bullets: [
      'Duis aute irure dolor in reprehenderit in voluptate',
      'Velit esse cillum dolore eu fugiat nulla pariatur',
      'Excepteur sint occaecat cupidatat non proident',
    ],
  },
  {
    number: '03',
    title: 'De Maker',
    subtitle: 'Realisatie & Directe Code',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
    icon: 'Compass',
    bullets: [
      'Sunt in culpa qui officia deserunt mollit anim',
      'Id est laborum sed ut perspiciatis unde omnis',
      'Iste natus error sit voluptatem accusantium',
    ],
  },
];

export const ENGINE_COMPARISONS = [
  {
    category: 'Domein Alpha',
    standardBureau: {
      title: 'Standaard Aanpak',
      items: [
        'Lorem ipsum dolor sit amet consectetur',
        'Sed do eiusmod tempor incididunt ut labore',
        'Ut enim ad minim veniam quis nostrud',
      ],
    },
    mrEngine: {
      title: 'RaddeR Aanpak',
      items: [
        'Duis aute irure dolor in reprehenderit in voluptate',
        'Excepteur sint occaecat cupidatat non proident',
        'Sunt in culpa qui officia deserunt mollit anim',
      ],
    },
  },
  {
    category: 'Domein Beta',
    standardBureau: {
      title: 'Standaard Aanpak',
      items: [
        'Temporibus autem quibusdam et aut officiis',
        'Debitis aut rerum necessitatibus saepe eveniet',
        'Ut et voluptates repudiandae sint et molestiae',
      ],
    },
    mrEngine: {
      title: 'RaddeR Aanpak',
      items: [
        'Itaque earum rerum hic tenetur a sapiente delectus',
        'Ut aut reiciendis voluptatibus maiores alias consequatur',
        'Perferendis doloribus asperiores repellat labore et dolore',
      ],
    },
  },
  {
    category: 'Domein Gamma',
    standardBureau: {
      title: 'Standaard Aanpak',
      items: [
        'Nemo enim ipsam voluptatem quia voluptas',
        'Sit aspernatur aut odit aut fugit sed quia',
        'Consequuntur magni dolores eos qui ratione',
      ],
    },
    mrEngine: {
      title: 'RaddeR Aanpak',
      items: [
        'Neque porro quisquam est qui dolorem ipsum quia dolor',
        'Sit amet consectetur adipisci velit sed quia non numquam',
        'Eius modi tempora incidunt ut labore et dolore magnam',
      ],
    },
  },
];

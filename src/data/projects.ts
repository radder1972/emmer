export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'Zorg & Healthtech' | 'Proptech & Geodata' | 'Enterprise Cloud' | 'Fysiek & Digitaal' | 'B2B & E-commerce';
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
    id: 'schematherapie-suite',
    title: 'Schematherapie Suite',
    subtitle: 'Local-first GGZ diagnostiek & AI-hypotheses',
    category: 'Zorg & Healthtech',
    client: 'Gespecialiseerde GGZ Praktijk',
    year: '2025',
    accentColor: '#ffffff',
    impactMetrics: [
      { label: 'Privacy & AVG', value: '100% Local-First' },
      { label: 'Diagnostische Tijdwinst', value: '-65%' },
      { label: 'AI Hypotheses', value: 'Geïntegreerd' },
    ],
    standardAgencyApproach: 'Brochure-website met een statische PDF-vragenlijst.',
    theEngineApproach: 'Local-first webapp met diagnostische rekenmodellen (YSQ/SMI), interactieve theoriekaarten en AI-assistentie.',
    architecturalHighlights: [
      'Client-side zero-knowledge encryptie (geen data lekt)',
      'Interactieve canvas visualisaties van modi en schema\'s',
      'AI-hypothese-assistent op lokale profielen',
      'Offline-first PWA met onmiddellijke synchronisatie',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB', 'WebCrypto', 'PWA'],
    detailedStory: {
      problem: 'Psychologen werken met papieren vragenlijsten en strenge AVG-beperkingen.',
      domainLogic: 'Klinische scoring van modi en schema\'s (Young YSQ/SMI) vereist exacte rekenmodellen.',
      technicalExecution: 'RaddeR bouwde een privacy-first webapp. Diagnostiek en AI-hypotheses draaien lokaal in de browser zonder dat data het apparaat verlaat.',
      businessResult: '65% tijdwinst bij intakes en 100% AVG-waterdicht.',
    },
    quote: 'Geen marketing, maar volwaardige productontwikkeling voor de zorg.',
  },
  {
    id: 'nieuwbouw-perceelkiezer',
    title: 'Nieuwbouw Perceelkiezer',
    subtitle: 'Geo-matching met openbare kadastrale data',
    category: 'Proptech & Geodata',
    client: 'Vastgoedontwikkeling',
    year: '2024 - 2025',
    accentColor: '#3b82f6',
    impactMetrics: [
      { label: 'Datakoppeling', value: 'Live PDOK / Kadaster' },
      { label: 'Kopersconversie', value: '+340%' },
      { label: 'Kavelmatching', value: 'Real-time' },
    ],
    standardAgencyApproach: 'Statische plattegrond-afbeelding met contactformulier.',
    theEngineApproach: 'Live koppeling met PDOK en Kadaster om grond, bestemmingsregels en kopers direct te matchen.',
    architecturalHighlights: [
      'Directe streaming van PDOK en Kadaster WFS/WMS registers',
      'Geometrische berekening van bezonning en bouwvlakken',
      'Interactieve matching op woonwensen en budget',
      'Sub-seconde vector-kaart rendering',
    ],
    techStack: ['WebGIS / Leaflet', 'GeoJSON streaming', 'PDOK Open Data', 'Kadaster WFS', 'Next.js'],
    detailedStory: {
      problem: 'Ondoorzichtig matchingsproces tussen kavelregels en koperswensen.',
      domainLogic: 'Ruimtelijke ordening: bouwvlakken, zon-oriëntaties en kadastrale grenzen.',
      technicalExecution: 'RaddeR koppelde openbare geo-registers live aan kavelmodellen. Kopers zien direct welke woning planologisch past.',
      businessResult: '+340% conversie en 4x snellere kavelreservering.',
    },
    quote: 'Koppeling met openbare data om daadwerkelijk grond en kopers te matchen.',
  },
  {
    id: 'enterprise-cloud-ebpf',
    title: 'Enterprise Cloud & eBPF Telemetry',
    subtitle: 'Cloudarchitectuur & kernel observabiliteit',
    category: 'Enterprise Cloud',
    client: 'High-Tech Enterprise (ASML Calibre)',
    year: '2024 - 2025',
    accentColor: '#8b5cf6',
    impactMetrics: [
      { label: 'Platform', value: 'Red Hat OpenShift' },
      { label: 'Observability', value: 'eBPF Kernel Probes' },
      { label: 'Security Model', value: 'Zero-Trust' },
    ],
    standardAgencyApproach: 'Oppervlakkige marketing-presentaties zonder technische diepgang.',
    theEngineApproach: 'OpenShift cluster topologies en eBPF kernel-telemetrie voor ASML-kaliber infrastructuur.',
    architecturalHighlights: [
      'Red Hat OpenShift cluster topologies en Kubernetes operators',
      'eBPF kernel-level packet inspection en Cilium service mesh',
      'Zero-trust microsegmentatie en automatische compliance',
      'Agentic IDE workflows (Antigravity) voor snelle validatie',
    ],
    techStack: ['Red Hat OpenShift', 'eBPF / Cilium', 'Kubernetes', 'Linux Kernel', 'Antigravity', 'Vercel Edge'],
    detailedStory: {
      problem: 'Latency en security bottlenecks in grootschalige industriële cloudomgevingen.',
      domainLogic: 'Microsecond latency, kernel-security en deterministische datastromen.',
      technicalExecution: 'RaddeR combineerde OpenShift topologies met eBPF instrumentation voor realtime inzicht zonder overhead.',
      businessResult: 'Audit-ready enterprise architectuurvoorstellen die direct overtuigden.',
    },
    quote: 'Wij snappen de techniek: van eBPF kernel-probes tot agentic edge deployments.',
  },
  {
    id: 'true-time-thai',
    title: 'True Time Thai (Pattaya)',
    subtitle: 'Van mobiele PWA tot fysieke storefront in Pattaya',
    category: 'Fysiek & Digitaal',
    client: 'True Time Thai Co., Ltd.',
    year: '2024',
    accentColor: '#f59e0b',
    impactMetrics: [
      { label: 'Scope', value: 'App tot Storefront' },
      { label: 'Locatie', value: 'Pattaya, Thailand' },
      { label: 'Integratie', value: '100% Volledig' },
    ],
    standardAgencyApproach: 'Los logo zonder koppeling met winkel of verhuursysteem.',
    theEngineApproach: 'Omnichannel concept: mobiele webapp, vlootbeheer en het fysieke gevel- en balie-ontwerp in Pattaya.',
    architecturalHighlights: [
      'PWA met QR-verhuurvalidatie voor toeristen',
      'Fysiek storefront- en gevelontwerp aan de straat in Pattaya',
      'Geïntegreerd borg- en sleuteloverdrachtprotocol',
      'PromptPay & internationale kaartbetalingen',
    ],
    techStack: ['Mobile PWA', 'Storefront Design', 'Signage Engineering', 'QR Protocol', 'PromptPay'],
    detailedStory: {
      problem: 'Nieuwe verhuurder in Pattaya moest direct opvallen in het straatbeeld en digitaal schalen.',
      domainLogic: 'Toeristische huurdynamiek, borgbeheer en frictieloze sleuteloverdracht.',
      technicalExecution: 'RaddeR overzag het complete traject: mobiele boekingsapp, vector branding en fysieke winkelinrichting.',
      businessResult: 'Marktleider in premium verhuur binnen 3 maanden.',
    },
    quote: 'Naadloos schakelen van app tot fysiek verhuurconcept en storefront.',
  },
  {
    id: 'palrom-staopstoelen',
    title: 'Palrom Products & Staopstoelen.nl',
    subtitle: 'B2B ketenstrategie, e-commerce en wagenpark',
    category: 'B2B & E-commerce',
    client: 'Palrom Products B.V. & Staopstoelen.nl',
    year: '2023 - 2025',
    accentColor: '#06b6d4',
    impactMetrics: [
      { label: 'Positionering', value: 'From Tree to Trade' },
      { label: 'Wagenpark', value: 'Complete Fleet Livery' },
      { label: 'B2B Conversie', value: '+180%' },
    ],
    standardAgencyApproach: 'Standaard webshop-template en losse bestanden in Dropbox.',
    theEngineApproach: 'B2B herpositionering ("From Tree to Trade"), configurator-logica en complete wagenpark-livery.',
    architecturalHighlights: [
      'Merkclaim "From Tree to Trade" voor internationale houtimport',
      'Selectielogica voor ergonomische zitoplossingen',
      'Vector design tokens voor uniforme merkidentiteit',
      'Productieklare bestelbus- en vrachtwagenbelettering',
    ],
    techStack: ['E-Commerce Architectuur', 'Vector Tokens', 'Fleet Livery Specs', 'Pricing Engine'],
    detailedStory: {
      problem: 'Verouderde uitstraling remde internationale B2B expansie.',
      domainLogic: 'B2B houtlogistiek, palletnormen en ergonomische consumentenbehoeften.',
      technicalExecution: 'RaddeR herpositioneerde de merken en vertaalde dit integraal door naar webshop en wagenpark.',
      businessResult: 'Grootschalige Europese B2B contracten en verdubbeling van adviesaanvragen.',
    },
    quote: 'Moeiteloos B2B logica doortrekken naar vector-iconen, bestelbussen en positionering.',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'De Motor, Niet Het Sausje',
    subtitle: 'Diepe Domeinlogica',
    description: 'Wij modelleren de kernlogica: diagnostische beslisbomen, geo-matching of B2B supply chains. Direct vertaald naar werkende software.',
    icon: 'Cpu',
    bullets: [
      'Complexe vakkennis direct in software',
      'Geen templates, maar op maat gemaakte dataflows',
      'Commerciële en operationele haalbaarheid',
    ],
  },
  {
    number: '02',
    title: 'Systeemarchitectuur',
    subtitle: 'Local-First, eBPF & Cloud',
    description: 'Duurzame techniek: zero-knowledge local-first apps, openbare geo-koppelingen en enterprise OpenShift clusters met eBPF telemetrie.',
    icon: 'Layers',
    bullets: [
      'Local-first privacy: 100% AVG-proof',
      'High-scale infrastructuren & kernel observabiliteit',
      'Snelle iteratie via agentic workflows',
    ],
  },
  {
    number: '03',
    title: 'Totale Executie',
    subtitle: 'Fysiek naar Digitaal',
    description: 'Echte merken bestaan ook offline. Van vector tokens en webapplicaties tot fysieke winkelpuien en complete wagenparken.',
    icon: 'Compass',
    bullets: [
      'Design tokens van favicon tot 6m bestelbus',
      'Fysieke storefronts en signage engineering',
      'Autoritaire positionering ("From Tree to Trade")',
    ],
  },
];

export const ENGINE_COMPARISONS = [
  {
    category: 'Zorg & GGZ',
    standardBureau: {
      title: 'Standaard Bureau',
      items: [
        'WordPress site met contactformulier',
        'Patiëntdata over openbare servers (AVG-risico)',
        'Eindigt bij oplevering brochure',
      ],
    },
    mrEngine: {
      title: 'RaddeR Product Engine',
      items: [
        '100% local-first: zero data leakage',
        'Geïntegreerde diagnostiek (YSQ, SMI)',
        'AI-hypothesegeneratie voor therapeuten',
      ],
    },
  },
  {
    category: 'Vastgoed & Grond',
    standardBureau: {
      title: 'Standaard Bureau',
      items: [
        'Statische JPEG plattegrond',
        'Geen koppeling met kadaster of bestemmingsplan',
        'Hoge uitval bij intake',
      ],
    },
    mrEngine: {
      title: 'RaddeR Product Engine',
      items: [
        'Live koppeling met PDOK & Kadaster',
        'Real-time kavel- & bouwvlak-matching',
        '+340% conversie door directe validatie',
      ],
    },
  },
  {
    category: 'Enterprise Cloud',
    standardBureau: {
      title: 'Standaard Bureau',
      items: [
        'Marketingpraatjes over "de cloud"',
        'Geen antwoord op microsecond latency of security',
        'Onbruikbaar voor Principal Engineers',
      ],
    },
    mrEngine: {
      title: 'RaddeR Product Engine',
      items: [
        'OpenShift topologies op ASML-niveau',
        'eBPF kernel-telemetrie & Cilium mesh',
        'Agentic workflows voor snelle validatie',
      ],
    },
  },
  {
    category: 'Omnichannel & Fysiek',
    standardBureau: {
      title: 'Standaard Bureau',
      items: [
        'Los logo in Dropbox zonder stijlsysteem',
        'Geen aansluiting met fysieke realiteit',
        'Gefragmenteerde merkbeleving',
      ],
    },
    mrEngine: {
      title: 'RaddeR Product Engine',
      items: [
        'End-to-end: webapp tot storefront in Pattaya',
        'Wagenpark- en fleet livery op schaal',
        'Consistente vector-executie van icon tot gevel',
      ],
    },
  },
];

export const TECH_RADAR_ITEMS = [
  {
    group: 'Architectuur & Local-First',
    skills: ['Local-First State', 'IndexedDB Encryptie', 'Zero-Knowledge Privacy', 'PWA Offline Execution'],
  },
  {
    group: 'Geodata & Ruimtelijk',
    skills: ['PDOK Open Services', 'Kadaster WFS / WMS', 'GeoJSON Streaming', 'Spatial Matching'],
  },
  {
    group: 'Enterprise Cloud & Infra',
    skills: ['Red Hat OpenShift', 'eBPF / Cilium Telemetrie', 'Kubernetes Clusters', 'Antigravity Agentic IDE'],
  },
  {
    group: 'Product & Brand Executie',
    skills: ['Design Systems & Tokens', 'Vector Engineering', 'Storefront Architectuur', 'Fleet Livery & Wagenpark'],
  },
];

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
    subtitle: 'Local-first webapplicatie voor psychodiagnostiek & AI-hypothesegeneratie',
    category: 'Zorg & Healthtech',
    client: 'Gespecialiseerde GGZ & Psychologiepraktijk',
    year: '2025',
    accentColor: '#ffffff', // monochrome pure white
    impactMetrics: [
      { label: 'Privacy & AVG', value: '100% Local-First' },
      { label: 'Diagnostische Tijdwinst', value: '-65%' },
      { label: 'AI Hypotheses', value: 'Geïntegreerd' }
    ],
    standardAgencyApproach: 'Een gelikte brochure-website op WordPress met een contactformulier en een PDF-download van een vragenlijst.',
    theEngineApproach: 'Geen marketingbrochure, maar volwaardige productontwikkeling voor de zorg: een local-first webapplicatie met geïntegreerde diagnostiek (YSQL/SMI), interactieve theoriekaarten en AI-gestuurde hypothesegeneratie.',
    architecturalHighlights: [
      'Client-side state & zero-knowledge architectuur (geen patiëntdata lekt naar externe servers)',
      'Interactieve canvas visualisaties van modi- en schemamodellen',
      'AI-gedreven klinische hypothese-assistent op geanonimiseerde cliëntprofielen',
      'Offline-first PWA met onmiddellijke synchronisatie en lokale encryptie'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'IndexedDB / Client Storage', 'Web Cryptography API', 'AI Reasoning Engine', 'PWA'],
    detailedStory: {
      problem: 'Psychologen en schematherapeuten worstelen met gefragmenteerde diagnostische tools, papieren schema-vragenlijsten en zware AVG-beperkingen bij het gebruik van moderne digitale hulpmiddelen.',
      domainLogic: 'Schematherapie vereist het nauwkeurig in kaart brengen van vroege disfunctionele schema\'s, copingstijlen en actuele modi. Dit vraagt om diepe domeinkennis van het Young Schema Questionnaire (YSQ) en Schema Mode Inventory (SMI).',
      technicalExecution: 'RaddeR ontwierp en programmeerde een privacy-by-design local-first applicatie. Diagnostische testen worden direct in de browser berekend en gevisualiseerd als interactieve theoriekaarten. Een AI-module assisteert de therapeut door behandelhypotheses te formuleren op basis van scores, zonder dat herleidbare patiëntgegevens ooit het apparaat verlaten.',
      businessResult: 'De psycholoog transformeerde van traditionele papieren intake naar een hypermodern digitaal diagnostiekplatform met aanzienlijke tijdsbesparing en superieure patiëntinzichten.'
    },
    quote: 'Dat is geen marketing meer, dat is volwaardige productontwikkeling voor de zorg.'
  },
  {
    id: 'nieuwbouw-perceelkiezer',
    title: 'Nieuwbouw Perceelkiezer',
    subtitle: 'Geo-matching engine op basis van openbare ruimtelijke overheidsdata',
    category: 'Proptech & Geodata',
    client: 'Vastgoedontwikkeling & Gemeentelijke Initiatieven',
    year: '2024 - 2025',
    accentColor: '#3b82f6', // blue
    impactMetrics: [
      { label: 'Datakoppeling', value: 'Live PDOK / Kadaster' },
      { label: 'Kopersconversie', value: '+340%' },
      { label: 'Kavelmatching', value: 'Real-time' }
    ],
    standardAgencyApproach: 'Een statische artist-impression website met een onoverzichtelijke plattegrond-afbeelding en een algemeen inschrijfformulier.',
    theEngineApproach: 'Volledige merkidentiteit gekoppeld aan openbare ruimtelijke overheidsdata om daadwerkelijk bouwgrond, bestemmingsplannen en kopersvoorkeuren interactief met elkaar te matchen.',
    architecturalHighlights: [
      'Rechtstreekse integratie met PDOK (Publieke Dienstverlening Op de Kaart) en Kadaster WFS/WMS services',
      'Geometrische berekening van bezonning, kavelgrenzen en maximale bouwhoogtes',
      'Interactieve koper-matching op basis van woonwensen, budget en bouwvlak',
      'Naadloze vector-kaart rendering met sub-seconde laadtijden'
    ],
    techStack: ['WebGIS / Leaflet', 'GeoJSON streaming', 'PDOK Open Data API', 'Kadaster WFS', 'Next.js / React', 'Tailwind CSS'],
    detailedStory: {
      problem: 'Bij nieuwbouwprojecten is het matchen van specifieke woningtypes met complexe kavels vaak een tijdrovend en ondoorzichtig proces voor zowel projectontwikkelaar als koper.',
      domainLogic: 'Het begrijpen van kadastrale percelen, ruimtelijke ordeningsregels, bouwvlakken, erfdienstbaarheden en zon-oriëntaties vereist meer dan een mooie UI; het vereist ruimtelijke data-analyse.',
      technicalExecution: 'Naast het ontwerpen van de visuele merkidentiteit bouwde RaddeR een live datakoppeling met openbare geo-registers. Bezoekers kunnen percelen filteren op afmeting, bezonning en bestemmingsvoorschriften en direct zien welk woningmodel exact past binnen de gemeentelijke bouwregels.',
      businessResult: 'Kavels werden 4x sneller gereserveerd met 80% minder uitval tijdens het intakegesprek doordat kopers vooraf exact wisten wat planologisch mogelijk was.'
    },
    quote: 'Niet alleen de branding ontwerpen, maar de koppeling met openbare ruimtelijke data leggen om daadwerkelijk grond en kopers te matchen.'
  },
  {
    id: 'enterprise-cloud-ebpf',
    title: 'Enterprise Cloud & eBPF Telemetry',
    subtitle: 'Mission-critical cloudarchitectuur & zero-trust observabiliteit voor high-tech industrie',
    category: 'Enterprise Cloud',
    client: 'Enterprise Cloud Proposals (ASML Calibre / Enterprise Infra)',
    year: '2024 - 2025',
    accentColor: '#8b5cf6', // purple
    impactMetrics: [
      { label: 'Platform', value: 'Red Hat OpenShift' },
      { label: 'Observability', value: 'eBPF Kernel Probes' },
      { label: 'Security Model', value: 'Zero-Trust' }
    ],
    standardAgencyApproach: 'Standaard slide decks met buzzwords over "de cloud" en vage schema\'s die geen rekening houden met enterprise compliance of microsecond-latency eisen.',
    theEngineApproach: 'Diepgaande technische en strategische sparring over Red Hat OpenShift, eBPF telemetry in de Linux kernel en agentic IDE-integraties voor enterprise cloudvoorstellen op het allerhoogste niveau.',
    architecturalHighlights: [
      'Architectuurontwerp op basis van Red Hat OpenShift Container Platform en Kubernetes operators',
      'eBPF (Extended Berkeley Packet Filter) voor kernel-level network tracing en zero-overhead telemetry',
      'Zero-trust microsegmentatie en geautomatiseerde compliance verificatie',
      'Inzet van moderne agentic IDE pipelines (o.a. Antigravity) voor razendsnelle prototype-validatie en Vercel deployments'
    ],
    techStack: ['Red Hat OpenShift', 'eBPF / Cilium', 'Kubernetes', 'Linux Kernel', 'Antigravity Agentic IDE', 'Vercel Edge'],
    detailedStory: {
      problem: 'In high-tech industriële omgevingen (zoals ASML-ecosystemen) volstaan traditionele cloudarchitecturen niet: netwerklatency, soevereiniteit, microsegmentatie en diepe kernel-inzichten zijn absolute randvoorwaarden.',
      domainLogic: 'Het snappen van de wisselwerking tussen bare-metal performance, containerisatie, deterministische data-stromen en strenge industriële security-richtlijnen.',
      technicalExecution: 'RaddeR formuleerde en structureerde voorstellen waarin OpenShift cluster topologies gecombineerd werden met eBPF instrumentation. Hierdoor ontstaat real-time inzicht in netwerkverkeer en security-anomalieën direct in de kernel, zonder overhead voor applicatie-containers.',
      businessResult: 'Geloofwaardige, diepgaande enterprise architecture proposals die direct resoneerden bij Chief Architects en Principal Engineers.'
    },
    quote: 'Wij snappen de onderliggende techniek en architectuur—of we nu sparren over Red Hat OpenShift en eBPF of een agentic IDE inzetten.'
  },
  {
    id: 'true-time-thai',
    title: 'True Time Thai (Pattaya)',
    subtitle: 'End-to-end concept: van mobile web app & huursysteem tot fysieke storefront in Thailand',
    category: 'Fysiek & Digitaal',
    client: 'True Time Thai Co., Ltd.',
    year: '2024',
    accentColor: '#f59e0b', // amber
    impactMetrics: [
      { label: 'Scope', value: 'App tot Storefront' },
      { label: 'Locatie', value: 'Pattaya, Thailand' },
      { label: 'Operationeel', value: '100% Geïntegreerd' }
    ],
    standardAgencyApproach: 'Een extern designbureau ontwerpt een logo en laat het fysieke winkelconcept en de lokale operationele software over aan lokale aannemers.',
    theEngineApproach: 'Volledige synergie tussen fysiek en digitaal: het verhuurconcept, de digitale boekingsapplicatie, fleet management én het complete ontwerp van de fysieke storefront in Pattaya.',
    architecturalHighlights: [
      'Progressive Web App voor internationale toeristen met QR-code verhuurvalidatie',
      'Fysiek gevel- en interieurontwerp voor de storefront aan de straatkant in Pattaya',
      'Geïntegreerd sleutelbeheer en borg-verwerking aangepast aan Thaise betalingssystemen (PromptPay & Kaart)',
      'Merksysteem dat direct herkenbaar is in zowel het drukke straatbeeld als op het smartphonescherm'
    ],
    techStack: ['Mobile PWA', 'Fysieke Storefront Design', 'Signage Engineering', 'QR Handover Protocol', 'Stripe & PromptPay'],
    detailedStory: {
      problem: 'Een nieuw verhuurbedrijf in een hypercompetitieve, internationale toeristenstad als Pattaya moet zowel direct opvallen in het straatbeeld als frictieloos digitaal te boeken zijn.',
      domainLogic: 'Begrijpen van de lokale toeristische huurdynamiek, borg-risico\'s, meertaligheid (Engels, Thais, Russisch) en de praktische overdracht van voertuigen of apparatuur.',
      technicalExecution: 'RaddeR overzag het gehele traject: de mobiele webapp voor soepele reserveringen, de vector-branding en het complete fysieke storefront-concept met opvallende signage, looproutes en balie-indeling in Pattaya.',
      businessResult: 'Een naadloze overgang van de online advertentie of QR-scan op straat naar een fysieke winkelbezoek met onmiddellijke conversie.'
    },
    quote: 'Extreem veelzijdig in visuele doorvertaling van fysiek naar digitaal: van app tot fysiek verhuurconcept en storefront.'
  },
  {
    id: 'palrom-staopstoelen',
    title: 'Palrom Products & Staopstoelen.nl',
    subtitle: 'Commerciële B2B strategie, e-commerce logica & complete merkdoorvertaling tot aan het wagenpark',
    category: 'B2B & E-commerce',
    client: 'Palrom Products B.V. & Staopstoelen.nl',
    year: '2023 - 2025',
    accentColor: '#06b6d4', // cyan
    impactMetrics: [
      { label: 'Positionering', value: 'From Tree to Trade' },
      { label: 'Wagenpark', value: 'Volledige Fleet Livery' },
      { label: 'B2B Conversie', value: '+180%' }
    ],
    standardAgencyApproach: 'Een losse webshop in WooCommerce zonder gevoel voor zware B2B-distributie, houtlogistiek of fysieke uitstraling van bestelbussen.',
    theEngineApproach: 'Scherpe B2B-strategie ("From Tree to Trade" voor Palrom), doordachte e-commerce logica voor Staopstoelen.nl, doorvertaald tot vector-iconensets en professionele bestelbus-belettering.',
    architecturalHighlights: [
      'Strategische positionering "From Tree to Trade" voor internationale houtimport en palletproductie',
      'Configurator-logica voor ergonomische zitoplossingen bij Staopstoelen.nl',
      'Vector iconensets en design tokens voor multi-channel inzetbaarheid',
      'Productieklare vector-bestanden voor wagenparkbelettering en fysieke beursstands'
    ],
    techStack: ['E-Commerce Architectuur', 'Vector Design Tokens', 'Fleet Livery Specs', 'B2B Pricing Engine', 'Illustrator & CAD'],
    detailedStory: {
      problem: 'Traditionele industriële en zorghandelbedrijven verliezen marges doordat hun merkidentiteit en digitale bestelprocessen achterlopen op hun daadwerkelijke kwaliteitsniveau.',
      domainLogic: 'De logistieke keten van houtimport (duurzaamheid, FSC-certificering, palletstandaarden) vraagt om autoriteit en transparantie; zorgconsumenten bij sta-op-stoelen zoeken juist comfort, ergonomie en vertrouwen.',
      technicalExecution: 'RaddeR vertaalde de B2B-logistiek van Palrom naar een autoritaire merkclaim ("From Tree to Trade") en structureerde de online catalogus. Voor Staopstoelen.nl werd de selectielogica vereenvoudigd. Beide merken kregen een integrale visuele doorvertaling naar kleding, beursmateriaal en het complete wagenpark.',
      businessResult: 'Palrom sloot grootschalige B2B-contracten af dankzij een professionele uitstraling op de Europese markt; Staopstoelen.nl zag de adviesaanvragen verdubbelen.'
    },
    quote: 'Moeiteloos de B2B-strategie of e-commerce logica doortrekken naar vector-iconen, bestelbussen en merkpositionering.'
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'De Motor, Niet Het Sausje',
    subtitle: 'Diepe Domeinlogica & Bedrijfsmodellen',
    description: 'Een gemiddeld bureau stopt waar het ingewikkeld wordt: bij formulieren en mooie plaatjes. Wij modelleren de daadwerkelijke business: diagnostische beslisbomen voor therapeuten, ruimtelijke matching van kaveldata of B2B supply chains.',
    icon: 'Cpu',
    bullets: [
      'Vertaling van complexe vakkennis naar software logica',
      'Geen generieke templates, maar op maat gemaakte dataflows',
      'Commerciële en operationele haalbaarheid direct ingebouwd'
    ]
  },
  {
    number: '02',
    title: 'Diepe Systeemarchitectuur',
    subtitle: 'Van Local-First & eBPF tot Agentic IDEs',
    description: 'De techniek onder de motorkap bepaalt de levensduur van elke digitale investering. Of het nu gaat om zero-knowledge local-first webapplicaties, openbare geo-APIs van het Kadaster, of enterprise OpenShift clusters met eBPF telemetry.',
    icon: 'Layers',
    bullets: [
      'Local-first privacy: data blijft waar het hoort (AVG-waterdicht)',
      'High-scale infrastructuren & Linux kernel observabiliteit',
      'Supersnelle iteratie via agentic workflows & Vercel edge deployment'
    ]
  },
  {
    number: '03',
    title: 'Total Execution (Fysiek naar Digitaal)',
    subtitle: 'Design Studio Snelheid & Fysieke Realiteit',
    description: 'Echte bedrijven bestaan niet alleen in een browser. Van interactieve mobiele applicaties en vector design tokens tot aan fysieke winkelpuien in Pattaya en bestelbus-beletteringen voor B2B-wagenparken.',
    icon: 'Compass',
    bullets: [
      'Design systems die schalen van 16px favicon tot 6-meter bestelbus',
      'Fysieke retail concepts & storefront ontwerpen',
      'Merkpositionering met tanden ("From Tree to Trade")'
    ]
  }
];

export const ENGINE_COMPARISONS = [
  {
    category: 'Zorg & GGZ',
    standardBureau: {
      title: 'Standaard Marketing Bureau',
      items: [
        'WordPress brochure-website met stock-foto\'s van lachende mensen',
        'Generiek contactformulier of onbeveiligde PDF-vragenlijst',
        'Patiëntgegevens over openbare webservers (AVG-risico)',
        'Eindigt bij oplevering van de brochure'
      ]
    },
    mrEngine: {
      title: 'MR Systems & Architecture',
      items: [
        'Local-first webapp: 100% privacy-by-design & zero data leakage',
        'Geïntegreerde diagnostische rekenmodellen (YSQ, SMI)',
        'Interactieve dynamische theoriekaarten en modi-modellen',
        'AI-gedreven klinische hypothese-generatie voor therapeuten'
      ]
    }
  },
  {
    category: 'Vastgoed & Grond',
    standardBureau: {
      title: 'Standaard Marketing Bureau',
      items: [
        'Statische plattegrond JPEG van het nieuwbouwproject',
        'Koper moet zelf bellen of kavel en droomhuis passen',
        'Geen koppeling met actuele bestemmingsplannen of kadaster',
        'Tijdrovende handmatige intake en hoge drop-off'
      ]
    },
    mrEngine: {
      title: 'MR Systems & Architecture',
      items: [
        'Live koppeling met PDOK & Kadaster WFS/WMS registers',
        'Interactieve kavelmatching op afmeting, bouwvlak en bezonning',
        'Automatische toetsing aan ruimtelijke bouwvoorschriften',
        'Directe visuele reservering met 340% hogere conversie'
      ]
    }
  },
  {
    category: 'Enterprise Cloud & Infra',
    standardBureau: {
      title: 'Standaard Marketing Bureau',
      items: [
        'Standaard agency marketingpraatjes over "de transitie naar de cloud"',
        'Oppervlakkige powerpoint slides zonder technische diepgang',
        'Geen antwoord op microsecond latency, kernel-security of compliance',
        'Onbruikbaar voor Chief Architects of Principal Engineers'
      ]
    },
    mrEngine: {
      title: 'MR Systems & Architecture',
      items: [
        'Architectuur sparren op ASML-niveau: Red Hat OpenShift topologies',
        'eBPF kernel-level tracing voor microsecond telemetry & Cilium mesh',
        'Zero-trust microsegmentatie & audit-ready infrastructure as code',
        'Agentic IDE-acceleratie voor continue prototype-validatie'
      ]
    }
  },
  {
    category: 'Omnichannel & Fysiek',
    standardBureau: {
      title: 'Standaard Marketing Bureau',
      items: [
        'Logo opgeslagen in een dropbox-mapje met een basic stijlgids',
        'Laat de fysieke storefront of wagenpark over aan willekeurige signmakers',
        'Geen aansluiting tussen de balie-ervaring en de online app',
        'Gefragmenteerde klantervaring'
      ]
    },
    mrEngine: {
      title: 'MR Systems & Architecture',
      items: [
        'End-to-end regie: van mobile webapp tot storefront in Pattaya',
        'Wagenpark- en fleet livery engineering op schaal (Palrom Products)',
        'Positionering die de B2B-markt herdefinieert ("From Tree to Trade")',
        'Vector-perfecte consistentie van 16px app-icon tot metershoge signage'
      ]
    }
  }
];

export const TECH_RADAR_ITEMS = [
  {
    group: 'Architectuur & Local-First',
    skills: ['Local-First State', 'IndexedDB / Client Encryption', 'Zero-Knowledge Privacy', 'PWA Offline Execution', 'Event-Driven Systems']
  },
  {
    group: 'Geodata & Ruimtelijk',
    skills: ['PDOK Open Services', 'Kadaster WFS / WMS', 'GeoJSON streaming', 'Spatial Matching Algorithms', 'Vector Mapping']
  },
  {
    group: 'Enterprise Cloud & Infra',
    skills: ['Red Hat OpenShift', 'eBPF / Cilium Telemetry', 'Kubernetes Architecture', 'Agentic IDE (Antigravity)', 'Vercel Edge & Cloudflare']
  },
  {
    group: 'Product & Brand Executie',
    skills: ['Design Systems & Tokens', 'Vector Asset Engineering', 'Physical Storefront Architecture', 'Fleet Livery & Signage', 'B2B Positioning']
  }
];

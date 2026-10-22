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
  liveUrl?: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'palrom-products',
    title: 'Palrom Products',
    subtitle: 'B2B-fabrikant van beukenhouten halffabrikaten met realtime offerte- en configuratiemachine.',
    category: 'B2B & Configuratoren',
    client: 'Palrom Products (Export & Meubelindustrie)',
    year: '2024 - 2025',
    liveUrl: 'https://palromproducts.com',
    accentColor: '#e7b124',
    impactMetrics: [
      { label: 'Offerte-doorlooptijd', value: 'Direct' },
      { label: 'Configuratiefouten', value: '0%' },
      { label: 'Internationale Aanvragen', value: '+160%' },
    ],
    standardAgencyApproach:
      'Een statische WordPress-catalogus met downloadbare PDF-maattabellen, vage contactformulieren en handmatige e-mailopvolging die dagen per offerte kost.',
    theEngineApproach:
      'Een interactieve B2B configuratie-engine in Next.js. Inkopers stellen diameters, lengtes, toleranties, bewerkingen (boren, frezen, lakken) en FSC-certificaten direct parametrisch samen, met realtime calculatie en directe offerte-generatie.',
    architecturalHighlights: [
      'Parametrische B2B configuratiewizard met realtime maattolerantie-validatie',
      'Dynamische offerte-sidebar met realtime volume- en transportcalculaties',
      'FSC®-certificeringstracking gekoppeld aan componentenlogica',
      'Ultra-responsive Next.js app met sub-500ms server-side rendering en meertalige exportstructuur',
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Parametric Calculation Engine', 'Vector Blueprints', 'Lead Automation'],
    detailedStory: {
      problem:
        'Palrom levert op industriële schaal beukenhouten halffabrikaten (stokken, latten, profielen) aan meubelfabrikanten en distributeurs door heel Europa. Traditionele offerte-aanvragen verliepen via statische tabellen en handmatige e-mails over maten, toleranties en houtbewerking. Dit leidde tot lange wachttijden, specificatiefouten en verloren B2B-deals.',
      domainLogic:
        'Houtproductie vereist strikte domeinparameters: vochtigheidspercentages, toleranties in millimeters, specifieke afschuiningen, boringen en FSC®-certificeringsketens. Deze parameters moesten worden omgezet in een rekenmodel dat uitsluit wat productietechnisch onmogelijk is en direct de juiste maattoleranties handhaaft.',
      technicalExecution:
        'RaddeR ontwierp een op maat gemaakte configurator-wizard waarin inkopers stapsgewijs producten samenstellen: van basishout en exacte millimeter-afmetingen tot complexe nabewerkingen en verpakkingswensen. State management bewaakt alle afhankelijkheden in realtime en genereert een gestructureerde offerte-aanvraag inclusief technische specificatielijst.',
      businessResult:
        'De offerte-doorlooptijd daalde van 48 uur naar seconden. Inkopers weten exact waar ze aan toe zijn en sturen direct bruikbare productiedata in. Het aantal internationale offerte-aanvragen steeg met 160% zonder extra administratieve last.',
    },
    quote: 'Van een statische catalogus naar een realtime B2B configuratiemachine die orders foutloos voorbereidt voor productie.',
  },
  {
    id: 'schematherapie-suite',
    title: 'Schematherapie Suite',
    subtitle: 'Klinisch werkstation voor psychotherapeuten met gevalideerde vragenlijsten en interactieve AI-tafelopstelling.',
    category: 'HealthTech & Psychologie',
    client: 'Schematherapie Suite (GGZ & Vrijgevestigde Praktijken)',
    year: '2024 - 2025',
    liveUrl: 'https://schematherapiesuite.vercel.app',
    accentColor: '#ff451a',
    impactMetrics: [
      { label: 'Sessie-efficiëntie', value: '+45%' },
      { label: 'Scoring & Analyse', value: 'Realtime' },
      { label: 'Klinische Validatie', value: '100% Richtlijn' },
    ],
    standardAgencyApproach:
      'Een generiek portaal of standaard formulieren-plugin die geen benul heeft van psychologische modellen, waardoor therapeuten nog steeds handmatig moeten rekenen en poppetjes moeten fotograferen.',
    theEngineApproach:
      'Een specialistisch klinisch platform met realtime 2D tafelopstelling, live interactie tussen modi en schema\'s, automatische normering van YSQ-S3 en SMI vragenlijsten en verantwoorde AI-ondersteuning voor casusconceptualisatie.',
    architecturalHighlights: [
      'Interactieve drag-and-drop tafelopstelling met dynamische modi-positionering en relatie-lijnen',
      'Geautomatiseerde scoring en visuele profielen voor YSQ-S3 (schema\'s) en SMI (modi)',
      'AI-geassisteerde casusconceptualisatie en patroonanalyse conform richtlijnen Vereniging voor Schematherapie',
      'Client-side privacy architectuur: geen persoonsgevoelige data onnodig naar externe servers',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Canvas Engine', 'Psychodiagnostic Scoring Model', 'Agentic AI'],
    detailedStory: {
      problem:
        'Schematherapie is een bewezen, maar methodisch veeleisende therapievorm. Therapeuten combineren complexe theorie (18 vroege disfunctionele schema\'s, modi, basisbehoeften) met zware vragenlijsten (YSQ-S3, SMI) en fysieke tafelopstellingen. Handmatige scoring kost kostbare behandeltijd en papieren opstellingen zijn lastig digitaal vast te leggen voor dossiervorming.',
      domainLogic:
        'Elk schema (bijv. verlating, emotioneel tekort) en elke modus (kind-, ouder- en copingmodi) kent specifieke relaties en scoringsnormen. De architectuur moest deze strikte psychodiagnostische domeinregels borgen, scores automatisch omrekenen naar visuele profielen en therapeuten een realtime werkbord bieden tijdens face-to-face of online consulten.',
      technicalExecution:
        'RaddeR bouwde de Schematherapie Suite als een modulair therapeutisch dashboard. De kern bestaat uit een interactieve tafelopstelling waarin therapeuten samen met de cliënt modi ruimtelijk kunnen plaatsen, groeperen en van annotaties voorzien. Daarnaast verwerkt de engine diagnostische vragenlijsten direct tot visuele grafieken en biedt het een AI-module voor suggesties rond casusconceptualisatie.',
      businessResult:
        'Therapeuten besparen gemiddeld 20 tot 30 minuten administratie per diagnostisch traject. De interactieve tafelopstelling vergroot het cliëntinzicht direct tijdens de sessie en biedt een professionele basis voor multidisciplinair overleg.',
    },
    quote: 'De motor achter klinische psychodiagnostiek: complexe zorgprotocollen vertaald naar een intuïtieve, veilige therapeutische interface.',
  },
  {
    id: 'staopstoelen-dordrecht',
    title: 'Staopstoelen.nl',
    subtitle: 'Lokale zorgdominantie en maatwerk zitadviesplatform met 100/100 Core Web Vitals en semantische Local SEO.',
    category: 'Local SEO & Performance',
    client: 'Schipper Compact Wonen / Fitform Dealer Drechtsteden',
    year: '2024 - 2025',
    liveUrl: 'https://staopstoelen.nl',
    accentColor: '#2563eb',
    impactMetrics: [
      { label: 'Core Web Vitals', value: '100/100' },
      { label: 'Lokale Google Ranking', value: '#1 Positie' },
      { label: 'Thuispas-aanvragen', value: '+220%' },
    ],
    standardAgencyApproach:
      'Een zware WordPress template vol logge plugins, trage afbeeldingsbestanden, pop-ups en generieke tekst die niet converteert voor senioren en mantelzorgers.',
    theEngineApproach:
      'Een sub-300ms laadtijd architectuur met next-gen beeldcompressie (AVIF/WebP), diepe Schema.org LocalBusiness en MedicalDevice entiteiten, en een extreem intuïtieve afspraakflow voor zitadvies in showroom of aan huis.',
    architecturalHighlights: [
      'Sub-300ms First Contentful Paint met 100/100 Google Lighthouse scores op mobiel en desktop',
      'Diep semantische Schema.org LocalBusiness, MedicalDeviceStore en Zitadvies markup',
      'Toegankelijkheidsarchitectuur (WCAG-geoptimaliseerd) speciaal afgestemd op senioren en mantelzorgers',
      'Lokale geo-targeting architectuur voor Dordrecht, Zwijndrecht, Papendrecht, Sliedrecht en Rijnmond',
    ],
    techStack: ['Performance Architecture', 'Core Web Vitals Engine', 'Local SEO Semantics', 'Next-Gen Media (AVIF)', 'WCAG Accessibility'],
    detailedStory: {
      problem:
        'In de markt voor ergonomische sta-op stoelen concurreren lokale specialisten met grote landelijke partijen die gigantische marketingbudgetten inzetten. Ondanks de diepe vakkennis van Bewegingstechnoloog Geertjan Klein Haneveld bleven online aanvragen achter door een gebrek aan gerichte lokale vindbaarheid en te complexe contactkanalen.',
      domainLogic:
        'Senioren en bezorgde mantelzorgers zoeken geen snelle webshop-aankoop van duizenden euro\'s; ze zoeken deskundig, medisch onderbouwd zitadvies, betrouwbaarheid en de mogelijkheid tot een vrijblijvende passing in de showroom of thuis. De website moest rust, autoriteit en frictieloze drempelverlaging uitstralen.',
      technicalExecution:
        'RaddeR herontwierp het platform vanaf de fundering: zero bloat, pure semantische HTML en CSS met sub-300ms laadtijd. Alle lokale Google Maps entiteiten en ergonomische diensten werden gestructureerd via JSON-LD graphs. Daarnaast werd een directe 1-klik thuispas-aanvraag geïmplementeerd die telefonisch en online direct converteert.',
      businessResult:
        'staopstoelen.nl veroverde topposities in Google voor alle relevante zoektermen in de regio Drechtsteden en Rijnmond. Het aantal aanvragen voor gratis zitadvies en demonstraties aan huis steeg met meer dan 220%.',
    },
    quote: 'Zero-lag performance gecombineerd met diepe lokale semantiek: de ideale formule voor regionale marktdominantie.',
  },
  {
    id: 'schipper-compact-wonen',
    title: 'Schipper Compact Wonen',
    subtitle: 'Moderne Scandinavische editorial storefront voor dé zit- en zorgspecialist van de Drechtsteden met 35+ jaar historie.',
    category: 'Omnichannel & Retail',
    client: 'Schipper Compact Wonen (Merwedestraat, Dordrecht)',
    year: '2024 - 2025',
    liveUrl: 'https://schippercompactwonen.vercel.app',
    accentColor: '#588157',
    impactMetrics: [
      { label: 'Bezoekersbetrokkenheid', value: '+180%' },
      { label: 'Laadtijd Storefront', value: '< 0.4s' },
      { label: 'Showroom Conversie', value: '+85%' },
    ],
    standardAgencyApproach:
      'Een klinische, medisch aandoende zorghulpmiddelen-catalogus die senioren stigmatiseert en interieurbewuste familieleden afschrikt.',
    theEngineApproach:
      'Een warme, hoogwaardige Scandinavische editorial ervaring (Fraunces & Figtree, rustgevende aardetinten) die ergonomie en zorgbedden presenteert als verlengstuk van een stijlvol interieur.',
    architecturalHighlights: [
      'High-end editorial esthetiek met maatwerk typografie en organische micro-details',
      'Virtuele showroom-integratie en modulaire collectie-showcases (zorgbedden, relaxstoelen)',
      'Regionale service- en bezorgdekking visualisatie voor Drechtsteden & Rijnmond',
      'Frictieloze modal-architectuur voor showroombezoeken en advies op maat',
    ],
    techStack: ['Editorial CSS Architecture', 'Semantic HTML5', 'Micro-interactions', 'Responsive Modal Engine', 'Local Authority Graph'],
    detailedStory: {
      problem:
        'Schipper Compact Wonen is al ruim 35 jaar een vertrouwde naam in Dordrecht en omstreken voor seniorenmeubilair, sta-op stoelen en hoog-laag zorgbedden. De fysieke showroom ademt warmte en deskundigheid, maar de online representatie deed tekort aan het kwaliteitsniveau en straalde te veel een \'ziekenhuisgevoel\' uit.',
      domainLogic:
        'Zitcomfort en zorghulpmiddelen voor thuis moeten emotioneel verbonden worden met waardigheid, rust en stijlvol wonen. De doelgroep bestaat zowel uit de oudere zelf als kinderen die meekijken en meebeslissen. Beiden hebben behoefte aan transparantie, rustige navigatie en een warme, betrouwbare sfeer.',
      technicalExecution:
        'RaddeR ontwikkelde een warm, Scandinavisch geïnspireerd interieurconcept met een zorgvuldig gekozen palet van saliegroen, haver en aardtinten. Zonder zware frameworks werd een vederlichte webarchitectuur neergezet met haarscherpe fotografie, duidelijke productspecificaties, klantervaringen en een directe showroom-tour.',
      businessResult:
        'De tijd op de pagina verdubbelde en bezoekers bekijken gemiddeld drie keer zoveel collectiestukken. Het platform transformeerde de showroom van een lokaal adres naar een regionale bestemming voor senioren en families in heel Zuid-Holland.',
    },
    quote: 'Van een klinisch hulpmiddel naar een warme, hoogwaardige interieurbeleving die waardigheid en ergonomie verenigt.',
  },
  {
    id: 'true-time-thai',
    title: 'True Time Thai',
    subtitle: 'Realtime verhuur- en boekingsengine voor geavanceerde AI-vertaalheadsets in Pattaya, Thailand.',
    category: 'AI Hardware & Travel',
    client: 'True Time Thai (Pattaya, Thailand)',
    year: '2024 - 2025',
    liveUrl: 'https://truetimethai.com',
    accentColor: '#00e5ff',
    impactMetrics: [
      { label: 'Boekingsconversie', value: '+240%' },
      { label: 'Reserveringsflow', value: '< 90 sec' },
      { label: 'Mobiele Laadtijd', value: '< 0.5s' },
    ],
    standardAgencyApproach:
      'Een standaard Shopify of WooCommerce webshop met standaard e-commerce winkelmandje, dat totaal ongeschikt is voor daghuur, borgstellingen en lokale hotelbezorging.',
    theEngineApproach:
      'Een dedicated rental booking engine met dynamische dagtarief-matrix, borgcalculatie, selectie van hotel-pickup of kantoorbezorging in Pattaya, en integratie van reis-add-ons (onbeperkte data/SIM).',
    architecturalHighlights: [
      'Interactieve huurcalculator met realtime tarief staffels per dag en borgreservering',
      'Geautomatiseerde bezorglogica voor hotels in Pattaya en kantoor-afhaallocaties',
      'Mobile-first glassmorphism interface geoptimaliseerd voor reizigers onderweg',
      'Geoptimaliseerde meertalige conversietrechter met frictieloze checkout flow',
    ],
    techStack: ['Rental Booking Engine', 'Dynamic Pricing Matrix', 'Location & Hotel Dispatch', 'Glassmorphism UI', 'Mobile Performance'],
    detailedStory: {
      problem:
        'Reizigers, ondernemers en expats in Thailand lopen dagelijks tegen taalbarrières aan bij overheidsinstanties, medische zorg, makelaars en taxichauffeurs. De geavanceerde Timekettle W4 Pro AI oordopjes bieden simultaanvertaling in 102 talen, maar aanschaf is kostbaar. True Time Thai wilde deze hardware verhuren, maar miste een intuïtief digitaal platform voor dagverhuur en logistiek.',
      domainLogic:
        'Hardware-verhuur in een toeristische hotspot vereist een specifiek rekenmodel: flexibele huurdagen, automatische borgberekening, hotelbezorging in plaats van postverzending, en add-ons zoals lokale databundels voor continue AI-vertaling onderweg.',
      technicalExecution:
        'RaddeR bouwde een vlijmscherpe booking engine. Toeristen selecteren hun huurperiode, kiezen voor hotelaflevering of kantoorafhaal aan Pattaya Sai Song Road, selecteren eventuele extra\'s en zien direct de transparante totaalprijs inclusief borg. Het gehele proces is geoptimaliseerd voor 4G/5G op smartphones.',
      businessResult:
        'De conversie van websitebezoeker naar gereserveerde headset steeg met 240%. Klanten voltooien hun boeking binnen anderhalve minuut, direct vanaf hun smartphone bij aankomst in Thailand.',
    },
    quote: 'Geavanceerde AI-hardware frictieloos toegankelijk gemaakt voor de reiziger via een realtime booking engine.',
  },
  {
    id: 'tt-clinics',
    title: 'TT Clinics',
    subtitle: 'Dynamisch vitaliteits- en clinicplatform met realtime Web Audio synthese en interactieve boekingsengine.',
    category: 'Sport & Vitaliteit',
    client: 'TT Clinics (Edward / Bedrijfsvitaliteit)',
    year: '2025 - 2026',
    liveUrl: 'https://ttclinics.vercel.app/',
    accentColor: '#ff6b00',
    impactMetrics: [
      { label: 'Offerte-aanvragen', value: '+190%' },
      { label: 'Audio Latency', value: '< 1ms' },
      { label: 'Asset Payload', value: '< 45 kB' },
    ],
    standardAgencyApproach:
      'Een zware WordPress-site met trage MP3-audiobestanden voor geluidseffecten, statische prijslijsten in PDF en een log contactformulier dat leidt tot trage afstemming over datum, materiaal en trainers.',
    theEngineApproach:
      'Een hypermoderne, vederlichte webarchitectuur. Inclusief een dynamische Web Audio API synthesizer die procedurale pingpong \'tok/tik\' stuitergeluiden genereert zónder zware audio-assets, interactieve clinic-pakketselectie voor bedrijfslocaties, en een soepele dark/light mode ervaring.',
    architecturalHighlights: [
      'Procedurale Web Audio API geluidssynthese (sub-1ms latency stuitergeluid zonder externe audio-downloads)',
      'Interactieve geanimeerde SVG fysica en canvas-gebaseerde pingpongbal visualisaties',
      'Dynamische clinic-calculator voor bedrijfslocaties, aantal tafels en trainersbezetting',
      'Vederlichte assets (< 45 kB) en zero-flicker dark mode state management',
    ],
    techStack: ['Semantic Web & HTML5', 'Web Audio API Synthesis', 'Tailwind CSS', 'Vector Physics & Animations', 'Clinic Booking Flow'],
    detailedStory: {
      problem:
        'Tafeltennis is een ongekend effectieve manier om medewerkers vitaal en verbonden te krijgen. Wat begon als een lokale woensdagochtendgroep groeide snel uit tot een professioneel concept voor teamuitjes en bedrijfstoernooien op locatie. TT Clinics had een digitaal platform nodig dat de dynamiek, energie en speelse competitie van de sport tastbaar overbrengt op HR-managers en teamleiders.',
      domainLogic:
        'Een sportclinic op een bedrijfslocatie vereist heldere organisatorische parameters: hoeveel tafels passen in de kantine of hal, hoeveel trainers zijn nodig bij 12, 24 of 50+ personen, en wat is de gewenste verhouding tussen techniektraining en toernooivorm? De flow moest deze keuzes intuïtief en overtuigend begeleiden.',
      technicalExecution:
        'RaddeR ontwierp een energieke, uiterst snelle storefront in \'TT Orange\' (#FF6B00) en diep antraciet. In plaats van zware audiobestanden te laden voor de kenmerkende pingpong-sfeer, werd een procedural sound engine gebouwd met de Web Audio API: met wiskundige oscillatoren en micro-gain envelopes ontstaat een levensecht \'tok\'-geluid bij interactie. Daarnaast biedt de site duidelijke pakketstructuren en directe offerte flows.',
      businessResult:
        'De interactieve ervaring leidde tot een stijging van 190% in offerte-aanvragen voor bedrijfsuitjes. De laadtijd bleef onder de 400ms dankzij de procedurale architectuur, wat resulteert in maximale betrokkenheid bij zowel desktop als mobiele bezoekers.',
    },
    quote: 'Van kantinesport naar vitale bedrijfservaring: procedurale audio en dynamische clinics verpakt in vlijmscherpe code.',
  },
];

export const PHILOSOPHY_PILLARS = [
  {
    number: '01',
    title: 'De Strateeg',
    subtitle: 'Productstrategie & Validatie',
    description: 'We ontrafelen de kern van je businessmodel en elimineren overbodige aannames. Geen ellenlange adviesrapporten, maar een scherpe technische koers die direct getoetst wordt aan de markt.',
    icon: 'Terminal',
    bullets: [
      'Scherpe scope & snelle marktvalidatie',
      'Directe vertaling van domeinregels naar architectuur',
      'Geen bureaucratie of trage managementlagen',
    ],
  },
  {
    number: '02',
    title: 'De Architect',
    subtitle: 'Systeemarchitectuur & Domeinmodel',
    description: 'We ontwerpen een robuust technisch fundament dat schaalt zonder frictie. State machines, schone datastructuren en API-koppelingen die complexe bedrijfslogica simpel en betrouwbaar maken.',
    icon: 'Cpu',
    bullets: [
      'Sub-second performance & 100/100 Core Web Vitals',
      'Modulair state management & schone datamodellen',
      'Toekomstvaste stack met 100% code-eigenaarschap',
    ],
  },
  {
    number: '03',
    title: 'De Maker',
    subtitle: 'Realisatie & Directe Code',
    description: 'Van prompt naar productie in één directe feedbackloop. We bouwen het systeem met moderne agentic tools, vlijmscherpe front-end esthetiek en solide backend-integraties.',
    icon: 'Compass',
    bullets: [
      'Productierijpe code in dagen in plaats van kwartalen',
      'Pixel-perfecte interfaces met editorial typografie',
      'Continu werkende releases zonder tussenpersonen',
    ],
  },
];

export const ENGINE_COMPARISONS = [
  {
    category: 'B2B Configuratoren & Maakindustrie',
    standardBureau: {
      title: 'Standaard Marketingbureau',
      items: [
        'Wekenlange vergadersessies en trage functionele ontwerpen',
        'Statische PDF-catalogus met handmatige e-mailopvolging die dagen kost',
        'Fragiele plugins bovenop generieke e-commerce templates',
      ],
    },
    mrEngine: {
      title: 'RaddeR Architectuur',
      items: [
        'Realtime parametrische rekenmotor met maattolerantie-validatie',
        'Directe offerte-calculatie en foutloze productiedata-dispatch in seconden',
        'High-performance Next.js architectuur met 100% code-eigenaarschap',
      ],
    },
  },
  {
    category: 'HealthTech & Zorgapplicaties',
    standardBureau: {
      title: 'Standaard Marketingbureau',
      items: [
        'Generieke formulier-plugins zonder begrip van klinische protocollen',
        'Papieren vragenlijsten en fysieke opstellingen blijven handmatig werk',
        'Privacy-risico’s door overbodige externe trackers en server-opslag',
      ],
    },
    mrEngine: {
      title: 'RaddeR Architectuur',
      items: [
        'Interactief 2D werkbord voor live therapeutische tafelopstellingen',
        'Geautomatiseerde normering en scoring van gevalideerde vragenlijsten (YSQ/SMI)',
        'Client-side privacy architectuur conform medische richtlijnen',
      ],
    },
  },
  {
    category: 'Lokale Dominantie & Performance',
    standardBureau: {
      title: 'Standaard Marketingbureau',
      items: [
        'Zware templates vol logge plugins en mobiele laadtijden boven 3 seconden',
        'Oppervlakkige SEO-zoekwoorddumping zonder semantische datastructuur',
        'Complexe formulieren en pop-ups die senioren en bezoekers afschrikken',
      ],
    },
    mrEngine: {
      title: 'RaddeR Architectuur',
      items: [
        'Sub-300ms laadtijd met 100/100 Core Web Vitals op mobiel en desktop',
        'Diepe Schema.org LocalBusiness entiteiten voor #1 Google Maps posities',
        'Frictieloze, toegankelijke conversietrechter voor afspraken en advies',
      ],
    },
  },
];

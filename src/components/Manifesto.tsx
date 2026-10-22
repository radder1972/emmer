import React from 'react';
import { RadderLogo } from './RadderLogo';
import {
  RadderIconManifest,
  RadderIconEngine,
  RadderIconZap,
  RadderIconTerminal,
  RadderIconShield,
  RadderIconCheck,
} from './RadderIconLibrary';
import {
  CornerReticles,
  CalibrationScale,
  TubularConduit,
} from './RadderStudioDetails';

export const Manifesto: React.FC = () => {
  const articles = [
    {
      roman: 'I',
      number: '01',
      title: 'Werkende code is de enige waarheid',
      subtitle: 'Tastbare executie boven papieren plannen',
      icon: RadderIconTerminal,
      lead: 'Geen luchtkastelen op papier of presentaties van tachtig slides.',
      body: 'Software bestaat pas wanneer het in productie draait, live data valideert en echte gebruikers bedient. Zolang het niet live staat, is elk ontwerp slechts een hypothese. Werkende software is het enige eerlijke bewijs van vooruitgang.',
    },
    {
      roman: 'II',
      number: '02',
      title: 'Bouw aan de motor, niet aan het sausje',
      subtitle: 'Diepe domeinlogica boven oppervlakkige templates',
      icon: RadderIconEngine,
      lead: 'Een mooie visuele schil over een logge standaardstack is window-dressing.',
      body: 'De werkelijke waarde van elk softwareproduct schuilt onder de motorkap: in het wiskundige rekenmodel, de state machines, de datastructuren en sub-second reactietijden. Als het fundament solide is, schaalt de rest vanzelf.',
    },
    {
      roman: 'III',
      number: '03',
      title: 'Elimineer de overdrachtsruis',
      subtitle: 'Eén directe feedbackloop van strategie naar stack',
      icon: RadderIconZap,
      lead: 'Geen bureaucratisch telefoonspelletje tussen zeven functietitels.',
      body: 'Bij elke overdracht tussen accountmanager, product owner, designer en programmeur verdampt 30% van de visie. Wie de bedrijfslogica doorgrondt, moet direct aan de code kunnen sleutelen. Eén ervaren architect vangt strategie, architectuur en realisatie in één creatiestroom.',
    },
    {
      roman: 'IV',
      number: '04',
      title: '100% Eigenaarschap & Eerlijke Vrijheid',
      subtitle: 'Zero vendor lock-in, volledige soevereiniteit',
      icon: RadderIconShield,
      lead: 'Wij bouwen geen proprietary black boxes om je vast te houden.',
      body: 'Geen maandelijkse bureau-abonnementen voor onderhoud dat nooit plaatsvindt. De klant bezit de repository, de architectuur en de code. Vrijheid is het ultieme teken van kwaliteit: je blijft bij ons omdat het werkt, niet omdat je vastzit.',
    },
    {
      roman: 'V',
      number: '05',
      title: 'Snelheid dwingt eenvoud af',
      subtitle: 'Focus als tegengif voor bureaucratische rot',
      icon: RadderIconCheck,
      lead: 'Complexe bureaucratie ontstaat wanneer projecten te lang duren.',
      body: 'Als je maanden de tijd neemt, bouw je overbodige ballast en aannames. Als je in dagen bouwt, dwing je jezelf om de absolute essentie te vinden. Snelheid is geen haastwerk; het is de meest meedogenloze filter voor relevantie.',
    },
    {
      roman: 'VI',
      number: '06',
      title: 'Esthetiek en techniek zijn ondeelbaar',
      subtitle: 'Architecturale rust, typografie en ergonomie',
      icon: RadderIconManifest,
      lead: 'Robuuste software hoeft er niet uit te zien als een rekenblad.',
      body: 'Typografie, visuele hiërarchie, sublieme micro-interacties en rust zijn geen oppervlakkige luxe: het is respect voor de tijd en de aandacht van de gebruiker. Vorm en functie zijn twee zijden van dezelfde medaille.',
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#f4f3ef] border-t border-neutral-300 relative overflow-hidden text-left">
      {/* Subtle watermark in deep black ink with fine paper opacity */}
      <div className="absolute -right-20 top-1/3 -translate-y-1/2 w-96 h-96 opacity-[0.03] pointer-events-none select-none text-neutral-950">
        <RadderLogo size={380} glow={false} color="#0a0a0a" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Document Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-300 mb-10 text-xs font-mono text-neutral-600">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-950 font-bold shadow-sm">
              <RadderIconManifest size={14} strokeWidth={2} color="#ff451a" />
              <span>HET RADDER MANIFEST // EDITIE 2026</span>
            </div>
            <CalibrationScale label="STD // RDR-2026" ticks={12} className="hidden sm:inline-flex" />
          </div>

          <div className="flex items-center gap-4 text-[11px] text-neutral-500">
            <span>DOC ID: RDR-MNFST-01</span>
            <span>•</span>
            <span>AUTEUR: MATTHIAS RADDER</span>
            <span>•</span>
            <span className="text-[#ff451a] font-bold">STATUS: ONHERROEPELIJK</span>
          </div>
        </div>

        {/* Big Proclamation Quote */}
        <div className="relative pl-6 sm:pl-10 border-l-4 border-[#ff451a] mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 leading-[1.12] tracking-tight">
            De software-industrie heeft zichzelf gegijzeld in overbodige lagen.{' '}
            <span className="text-neutral-400 font-bold">
              Wij doorbreken het theater van vergaderen en bouwen direct aan de motor.
            </span>
          </h2>

          {/* Wireframe Kop Onder De Kop */}
          <div
            className="mt-5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.15] text-transparent select-none pointer-events-none"
            style={{
              WebkitTextStroke: '1.5px rgba(10, 10, 10, 0.32)',
            }}
            aria-hidden="true"
          >
            De software-industrie heeft zichzelf gegijzeld in overbodige lagen.{' '}
            <span style={{ WebkitTextStroke: '1.5px rgba(10, 10, 10, 0.16)' }}>
              Wij doorbreken het theater van vergaderen en bouwen direct aan de motor.
            </span>
          </div>
        </div>

        {/* Prologue: The Shift */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff451a] font-bold">
              // HET PROBLEEM: DE STILLE VERDAMPING
            </h3>
            <p>
              In 25 jaar enterprise IT zagen we telkens hetzelfde patroon: hoe groter het bureau, hoe dikker de offertes en hoe trager het resultaat. Ideeën worden vermalen in stuurgroepen, sprint-retrospectieven over retrospectieven en dikke functionele ontwerpen die verouderd zijn voordat de eerste regel code is geschreven.
            </p>
            <p className="text-neutral-600 text-sm">
              Bij elke tussenlaag lekt visie en energie weg. Wat begon als een scherpe business-ambitie, eindigt te vaak in een log template vol compromissen.
            </p>
          </div>

          <div className="md:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#ff451a] font-bold">
              // DE REVOLUTIE: DE SYMBIOSE VAN DE MAKER
            </h3>
            <p>
              Wat begon met nieuwsgierige prompts en vroege chatbots, is geëvolueerd tot een ongekende werkelijkheid: de directe symbiose tussen doorgewinterde systeemarchitectuur en agentic ontwikkelkracht.
            </p>
            <p className="text-neutral-600 text-sm">
              AI vervangt het meesterschap niet; het versterkt het exponentieel. In handen van een ervaren architect elimineert het de fysieke wrijving van het programmeren. Van complexe B2B calculatoren tot klinische software: als we het kunnen modelleren, kunnen we het direct bouwen.
            </p>
          </div>
        </div>

        {/* Architectural Conduit Bridge */}
        <div className="relative -mb-4 flex items-center justify-between pointer-events-none select-none hidden md:flex">
          <TubularConduit direction="horizontal-loop" className="opacity-80" />
          <CalibrationScale label="TOLERANCE: ±0.01mm" ticks={10} className="opacity-60" />
        </div>

        {/* Section Divider: The 6 Articles */}
        <div className="mb-12 flex items-center justify-between pb-4 border-b border-neutral-300">
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-[#ff451a] uppercase font-bold tracking-wider">
              DE ZES FUNDAMENTELE PRINCIPES
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 font-mono tracking-tight">
              Onze Dogma’s van Executie
            </h3>
          </div>
          <div className="flex items-center gap-3 hidden sm:flex">
            <CalibrationScale label="AXIS // 01-06" ticks={8} />
            <span className="text-neutral-300">|</span>
            <span className="text-xs font-mono text-neutral-500">// ARTIKEL I T/M VI</span>
          </div>
        </div>

        {/* Articles Grid: 2 columns with authentic editorial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {articles.map((art) => {
            const Icon = art.icon;
            return (
              <div
                key={art.number}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-8 flex flex-col justify-between hover:border-neutral-400 hover:shadow-md transition-all duration-300 group relative"
              >
                <CornerReticles color="rgba(0,0,0,0.18)" />
                <div>
                  {/* Article Index & Icon */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-950 group-hover:text-[#ff451a] transition-colors">
                        <Icon size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                          ARTIKEL {art.roman}
                        </div>
                        <div className="text-xs font-mono text-neutral-950 font-bold">
                          {art.subtitle}
                        </div>
                      </div>
                    </div>
                    <span className="font-mono text-2xl font-extrabold text-neutral-300 group-hover:text-neutral-500 transition-colors">
                      {art.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-neutral-950 tracking-tight mb-3">
                    {art.title}
                  </h4>

                  {/* Lead text */}
                  <p className="text-sm font-semibold text-neutral-900 leading-snug mb-3">
                    {art.lead}
                  </p>

                  {/* Body description */}
                  <p className="text-sm text-neutral-600 leading-relaxed font-normal">
                    {art.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Epilogue & Architectural Seal */}
        <div className="rounded-2xl bg-neutral-950 text-white border-2 border-neutral-900 p-8 sm:p-12 relative overflow-hidden shadow-xl">
          <CornerReticles color="rgba(255,255,255,0.22)" />
          {/* Subtle background circuit watermark */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 opacity-10 pointer-events-none text-white">
            <RadderLogo size={280} color="#ffffff" glow={false} />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-white/10 text-white text-xs font-mono font-bold">
              <span>HET BESLUIT // DE BELOFTE AAN ELKE OPDRACHTGEVER</span>
            </div>

            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug tracking-tight">
              Wij bouwen software zoals een architect een gebouw ontwerpt en de meester-timmerman de spanten slaat:{' '}
              <span className="text-neutral-400">
                met liefde voor het vak, oog voor elk detail, en met de kracht van de modernste agentic instrumenten.
              </span>
            </p>

            <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="font-mono text-sm font-bold text-white uppercase tracking-wider">
                  Matthias Radder
                </div>
                <div className="text-xs font-mono text-neutral-400">
                  Oprichter, Systeemarchitect & Maker // RaddeR Studio
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 rounded-lg bg-[#ff451a]/20 border border-[#ff451a]/40 text-[#ff451a] font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff451a] animate-pulse"></span>
                  <span>VAN PROMPT NAAR PRODUCTIE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

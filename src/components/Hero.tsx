import React from 'react';
import { ArrowRight, Cpu, Layers, Terminal, Compass, Sparkles } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

interface HeroProps {
  onOpenContact: () => void;
  onExploreCases: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreCases }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-grid-pattern">
      {/* Background ambient lighting - Stark monochrome / titanium silver glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-gradient-to-b from-white/10 via-zinc-500/5 to-transparent blur-[140px] -z-10 pointer-events-none" />

      {/* Hero Architectural Emblem Watermark */}
      <div className="absolute right-4 sm:right-12 lg:right-24 top-28 sm:top-36 w-[320px] sm:w-[420px] lg:w-[500px] opacity-[0.06] pointer-events-none select-none text-white -z-10 transition-opacity">
        <RadderLogo size={500} glow={true} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technical HUD Topline */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-zinc-500 border-b border-white/10 pb-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="text-zinc-200 font-bold tracking-wider">RaddeR // SYSTEMS & PRODUCT ARCHITECTURE</span>
            <span className="text-zinc-700">|</span>
            <span>CORE FOCUS: DOMAIN LOGIC + CODE + PHYSICAL REALITY</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-zinc-400">
            <span>SPEC: LOCAL-FIRST // EBPF // CADASTRE MATCHING // PHYSICAL-TO-DIGITAL</span>
          </div>
        </div>

        {/* Hero Main Content */}
        <div className="max-w-4xl text-left space-y-7">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span>Niet het oppervlakkige sausje. <strong className="text-white font-bold">De motor.</strong></span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            Waar een standaard bureau stopt bij de buitenkant,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              bouwen wij de motor.
            </span>
          </h1>

          <p className="text-lg sm:text-2xl text-zinc-300 max-w-3xl font-normal leading-relaxed">
            Ons allergrootste onderscheidend vermogen zit in het vermogen om{' '}
            <span className="text-white font-semibold">complexe, domeinspecifieke logica direct te vertalen naar werkende, schaalbare bedrijfsmodellen</span>. 
            Van local-first diagnostiek voor psychologen en ruimtelijke kadaster-matching, tot enterprise cloudvoorstellen en fysieke storefronts.
          </p>

          {/* Quick Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={onExploreCases}
              className="px-7 py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold font-mono text-sm tracking-wide transition-all shadow-xl shadow-white/10 flex items-center gap-2 group cursor-pointer"
            >
              <span>Bekijk Cases & Architectuur</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#vergelijker"
              className="px-6 py-4 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 border border-white/15 font-mono text-sm tracking-wide transition-all flex items-center gap-2 hover:border-white/30 cursor-pointer"
            >
              <Layers className="w-4 h-4 text-white" />
              <span>Buitenkant vs. De Motor</span>
            </a>

            <button
              onClick={onOpenContact}
              className="px-5 py-4 rounded-xl text-zinc-400 hover:text-white font-mono text-sm transition-colors cursor-pointer"
            >
              Direct Sparren →
            </button>
          </div>
        </div>

        {/* 3 Core Competence Micro-Stamps: Balanced Across 3 Columns */}
        <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-white/25 transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-white mb-2">
              <Cpu className="w-4 h-4" />
              <span>01. DE ARCHITECT</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Local-first webapps, eBPF kernel telemetry, Red Hat OpenShift cluster topologies en ruimtelijke open data registers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-white/25 transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-zinc-200 mb-2">
              <Terminal className="w-4 h-4" />
              <span>02. DE STRATEEG</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              GGZ-diagnostische protocollen, kavelmatching met PDOK/Kadaster geodata en internationale B2B ketenlogica ("From Tree to Trade").
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 hover:border-white/25 transition-all text-left">
            <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-zinc-300 mb-2">
              <Compass className="w-4 h-4" />
              <span>03. DE MAKER</span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Studio-executiesnelheid: van vector tokens en interactieve PWA's tot fysieke storefronts in Pattaya en complete wagenparkbelettering.
            </p>
          </div>
        </div>

        {/* Telemetry Strip */}
        <div className="mt-6 p-4 rounded-xl bg-black/50 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-white font-semibold">RaddeR STUDIO ENGINE</span>
          </div>
          <div className="flex flex-wrap gap-4 text-[11px] text-zinc-500">
            <span>• 100% AVG LOCAL-FIRST</span>
            <span>• LIVE PDOK / KADASTER</span>
            <span>• RED HAT OPENSHIFT / EBPF</span>
            <span>• PHYSICAL STOREFRONTS & FLEETS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

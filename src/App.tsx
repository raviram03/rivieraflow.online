/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Plane, 
  Clock, 
  ShieldCheck, 
  EyeOff, 
  Lock, 
  UserCheck, 
  Send, 
  Copy, 
  Check, 
  ChevronRight, 
  Compass, 
  BookOpen, 
  Sliders, 
  Database,
  ArrowUpRight,
  Globe,
  DollarSign
} from 'lucide-react';
import { 
  PRIVATE_JETS, 
  HOROLOGY_ASSETS, 
  CLIENT_TESTIMONIALS, 
  EXCLUSIVITY_STRATEGY, 
  LUXURY_CSS_STYLE_GUIDE, 
  STREAMLIT_APP_CODE 
} from './data';
import { InquiryForm } from './types';

// Image references from our image-generation calls
const JET_IMAGE = '/src/assets/images/luxury_private_jet_1780376236762.png';
const WATCH_IMAGE = '/src/assets/images/patek_gold_watch_1780376257309.png';

export default function App() {
  // Clocks State
  const [monacoTime, setMonacoTime] = useState('');
  const [londonTime, setLondonTime] = useState('');
  const [genevaTime, setGenevaTime] = useState('');

  // UI Interactive States
  const [activeJet, setActiveJet] = useState(PRIVATE_JETS[0]);
  const [activeWatch, setActiveWatch] = useState(HOROLOGY_ASSETS[0]);
  const [isGuidemistOpen, setIsGuidemistOpen] = useState(true); // default open to help user see both live preview and Streamlit assets
  const [activeGuideTab, setActiveGuideTab] = useState<'strategy' | 'streamlit' | 'css'>('strategy');
  
  // Jet Quote Estimator
  const [departure, setDeparture] = useState('Nice (NCE)');
  const [destination, setDestination] = useState('Geneva (GVA)');
  const [selectedJetModel, setSelectedJetModel] = useState('g700');
  
  // Watch Vault Interactive States
  const [watchIndexMultiplier, setWatchIndexMultiplier] = useState(1.0);
  
  // Inquiry form states
  const [form, setForm] = useState<InquiryForm>({
    fullName: '',
    email: '',
    focus: 'dual',
    location: 'Monaco',
    estimatedNetWorth: '$5M - $20M',
    specificRequirements: '',
    phone: '',
    disclaimerAccepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{ success: boolean; token?: string; refCode?: string } | null>(null);

  // Copy state feedbacks
  const [copiedStreamlit, setCopiedStreamlit] = useState(false);
  const [copiedCSS, setCopiedCSS] = useState(false);

  // Keep clocks ticking
  useEffect(() => {
    const updateTimes = () => {
      const optionsMonaco = { timeZone: 'Europe/Monaco', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as const;
      const optionsLondon = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as const;
      const optionsGeneva = { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false } as const;

      const formatterMonaco = new Intl.DateTimeFormat('en-US', optionsMonaco);
      const formatterLondon = new Intl.DateTimeFormat('en-US', optionsLondon);
      const formatterGeneva = new Intl.DateTimeFormat('en-US', optionsGeneva);

      setMonacoTime(formatterMonaco.format(new Date()));
      setLondonTime(formatterLondon.format(new Date()));
      setGenevaTime(formatterGeneva.format(new Date()));
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  // Handle Form Submission
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email) {
      alert('Representative Name and Secure Email channel are mandatory.');
      return;
    }
    if (!form.disclaimerAccepted) {
      alert('Please acknowledge the Mutual NDA Agreement prior to transmission.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate high-glove operational verification delay
    setTimeout(() => {
      const uniqueCode = `RF-${form.location.slice(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setSubmitResult({
        success: true,
        refCode: uniqueCode,
        token: `0x${Math.random().toString(16).substring(2, 10).toUpperCase()}-SECURE-ROUTED`
      });
      setIsSubmitting(false);
    }, 2200);
  };

  const copyToClipboard = (text: string, type: 'streamlit' | 'css') => {
    navigator.clipboard.writeText(text);
    if (type === 'streamlit') {
      setCopiedStreamlit(true);
      setTimeout(() => setCopiedStreamlit(false), 2000);
    } else {
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 2000);
    }
  };

  // Estimate flight pricing based on route coordinates
  const calculateEstimatedFlightCost = () => {
    let base = 35000;
    if (departure.includes('NCE') && destination.includes('GVA')) base = 15000;
    if (departure.includes('NCE') && destination.includes('FAB')) base = 38000;
    if (departure.includes('GVA') && destination.includes('FAB')) base = 36000;
    if (departure === destination) base = 8500;

    let multiplier = 1.0;
    if (selectedJetModel === 'g700') multiplier = 1.35;
    if (selectedJetModel === 'falcon-10x') multiplier = 1.5;
    
    return (base * multiplier).toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  };

  return (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-gold-champagne selection:text-obsidian flex flex-col md:flex-row relative">
      
      {/* LEFT: MASTER PREVIEW (The Actual Riviera Flow Luxury Site Mockup) */}
      <div className={`flex-1 transition-all duration-500 overflow-y-auto max-h-screen p-4 md:p-10 `} id="preview-panel">
        
        {/* TOP STATUS RIBBON */}
        <div className="border border-gold-champagne/15 bg-slate-gray/30 rounded-sm px-6 py-3 flex flex-wrap gap-4 items-center justify-between text-xs font-mono-lux tracking-wider text-platinum-muted mb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>SECURE CRYPTO-NODE ACTIVE</span>
          </div>
          
          {/* LOCATION STATUS INDEX */}
          <div className="flex gap-6 items-center flex-wrap">
            <div className="flex gap-2 items-center">
              <span className="text-gold-champagne">MONACO</span>
              <span className="text-alabaster font-semibold">{monacoTime || '12:00:00'}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gold-champagne">LONDON</span>
              <span className="text-alabaster font-semibold">{londonTime || '11:00:00'}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-gold-champagne">GENEVA</span>
              <span className="text-alabaster font-semibold">{genevaTime || '12:00:00'}</span>
            </div>
          </div>
        </div>

        {/* ELEGANT LOGOMARK HERO HEADER */}
        <header className="text-center mb-16 py-8">
          <div className="inline-block px-4 py-1.5 border border-gold-champagne/20 text-[10px] tracking-[0.3em] uppercase text-gold-champagne font-serif-lux mb-4">
            MEMBERS ONLY SYSTEM
          </div>
          <h1 className="text-4xl md:text-6xl font-serif-lux font-semibold tracking-[0.2em] text-gold-champagne">
            RIVIERA FLOW
          </h1>
          <p className="text-xs uppercase tracking-[0.4em] text-platinum-muted mt-2 font-mono-lux">
            Monaco • London • Geneva
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-champagne/30 to-transparent mx-auto mt-6"></div>
        </header>

        {/* SECTION I: BRIEF MISSION ARCHITECTURE */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-slate-gray p-8 md:p-12 border border-gold-champagne/10 relative overflow-hidden rounded-sm">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-champagne/5 rounded-bl-full pointer-events-none"></div>
            
            <p className="text-xs font-mono-lux text-gold-champagne uppercase tracking-widest mb-3">
              I. Architectural Intent
            </p>
            <h2 className="text-2xl md:text-3xl font-editorial tracking-wide italic text-alabaster mb-6">
              "True Operational Discretion lies in absolute silence."
            </h2>
            <p className="text-platinum-muted leading-relaxed text-sm md:text-base">
              Riviera Flow acts as the sovereign intermediary. We facilitate the off-market, unrecorded procurement of long-range private aviation assets and blue-chip, investment-grade horological marvels. No public ledgers, no commercial compromises, absolute cryptographic alignment for the 0.001%.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-gold-champagne/10 text-center font-mono-lux">
              <div>
                <p className="text-[10px] text-platinum-muted uppercase">Min Liquidation</p>
                <p className="text-sm font-semibold text-gold-champagne mt-1">$500,000</p>
              </div>
              <div>
                <p className="text-[10px] text-platinum-muted uppercase">Default NDA</p>
                <p className="text-sm font-semibold text-gold-champagne mt-1">Swiss Escrow</p>
              </div>
              <div>
                <p className="text-[10px] text-platinum-muted uppercase">Escrow Logistics</p>
                <p className="text-sm font-semibold text-gold-champagne mt-1">Direct Armed Trust</p>
              </div>
              <div>
                <p className="text-[10px] text-platinum-muted uppercase">Off-market network</p>
                <p className="text-sm font-semibold text-gold-champagne mt-1">By Referral Only</p>
              </div>
            </div>
          </div>
        </section>

        {/* SPLIT EXPERIENCES: AVIATION & HOROLOGY */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          
          {/* AVIATION ACQUISITIONS */}
          <div className="bg-slate-gray border border-gold-champagne/10 p-6 md:p-8 rounded-sm hover:border-gold-champagne/25 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono-lux text-gold-champagne tracking-widest uppercase">SECTION II.A</span>
                  <h3 className="text-xl font-serif-lux text-alabaster tracking-widest mt-1">PRIVATE AVIATION</h3>
                </div>
                <div className="p-2 border border-gold-champagne/20 rounded-full">
                  <Plane className="w-5 h-5 text-gold-champagne" />
                </div>
              </div>

              {/* RENDER DYNAMIC ASSET IMAGE */}
              <div className="relative h-44 w-full bg-slate-light rounded-sm overflow-hidden mb-6 border border-gold-champagne/10">
                <img 
                  src={JET_IMAGE} 
                  alt="High-End Private Jet Cabin Interior" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-gray via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[9px] font-mono-lux bg-obsidian/75 p-1 border border-gold-champagne/20 rounded-xs text-gold-champagne">EST. RATE: FROM $13,800/HR</span>
                </div>
              </div>

              <p className="text-xs text-platinum-muted leading-relaxed mb-6">
                Avoid commercial transit tracking. Riviera Flow operates a luxury logistics mesh to charter and procure heavy long-range steel cabin transits (Gulfstreams and Globals) with non-commercial flight plans from private terminal gates.
              </p>

              {/* INTERACTIVE ROUTE PRICING COMPONENT */}
              <div className="bg-slate-light p-4 rounded-sm border border-gold-champagne/5 mb-6">
                <p className="text-[10px] font-mono-lux text-gold-champagne tracking-wider uppercase mb-3">⚜️ ROUTE CHARTER COST SIMULATOR</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div>
                    <label className="text-[9px] font-mono-lux text-platinum-muted block mb-1">DEPARTURE HUB</label>
                    <select 
                      value={departure} 
                      onChange={(e) => setDeparture(e.target.value)}
                      className="w-full bg-obsidian border border-gold-champagne/15 text-alabaster text-xs rounded-sm p-1.5 focus:outline-none focus:border-gold-champagne"
                    >
                      <option value="Nice (NCE)">Nice Côte d'Azur (NCE)</option>
                      <option value="Geneva (GVA)">Geneva Airport (GVA)</option>
                      <option value="London (FAB)">Farnborough (FAB)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[9px] font-mono-lux text-platinum-muted block mb-1">DESTINATION HUB</label>
                    <select 
                      value={destination} 
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-obsidian border border-gold-champagne/15 text-alabaster text-xs rounded-sm p-1.5 focus:outline-none focus:border-gold-champagne"
                    >
                      <option value="Geneva (GVA)">Geneva Airport (GVA)</option>
                      <option value="London (FAB)">Farnborough (FAB)</option>
                      <option value="Nice (NCE)">Nice Côte d'Azur (NCE)</option>
                    </select>
                  </div>
                </div>

                <div className="mb-3">
                  <label className="text-[9px] font-mono-lux text-platinum-muted block mb-1">AIRCRAFT SYSTEM CLASS</label>
                  <div className="flex gap-2">
                    {PRIVATE_JETS.map((j) => (
                      <button 
                        key={j.id}
                        type="button"
                        onClick={() => setSelectedJetModel(j.id)}
                        className={`flex-1 py-1 px-2 border text-[9px] font-mono-lux rounded-xs transition-all ${
                          selectedJetModel === j.id 
                            ? 'bg-gold-champagne text-obsidian border-gold-champagne' 
                            : 'bg-obsidian text-platinum-muted border-gold-champagne/10 hover:border-gold-champagne/30'
                        }`}
                      >
                        {j.model.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gold-champagne/10 flex justify-between items-center bg-obsidian p-2.5 rounded-sm">
                  <span className="text-[9px] font-mono-lux text-platinum-muted">OFF-MARKET CHARTER EXPORT:</span>
                  <span className="text-xs font-mono-lux text-gold-champagne font-bold">{calculateEstimatedFlightCost()}</span>
                </div>
              </div>

              {/* SPECIFICATION CARD SELECTION */}
              <div className="space-y-2 mt-4">
                {PRIVATE_JETS.map((jet) => (
                  <div 
                    key={jet.id}
                    onClick={() => setActiveJet(jet)}
                    className={`p-3 border rounded-sm cursor-pointer transition-all ${
                      activeJet.id === jet.id 
                        ? 'bg-obsidian border-gold-champagne/30' 
                        : 'bg-transparent border-transparent hover:bg-slate-light/50'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-serif-lux tracking-wider text-alabaster">{jet.model}</span>
                      <span className="text-[10px] font-mono-lux text-gold-champagne">{jet.hourlyRate}</span>
                    </div>
                    {activeJet.id === jet.id && (
                      <div className="mt-2 text-[11px] text-platinum-muted font-light animate-fadeIn">
                        <p className="mb-1 font-sans">{jet.description}</p>
                        <p className="font-mono-lux text-[9px] text-gold-champagne/80">🚀 {jet.range} // CAPACITY: {jet.capacity}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <a 
              href="#vip-intake" 
              className="mt-6 w-full text-center py-2.5 border border-gold-champagne/30 text-[10px] uppercase font-serif-lux tracking-[0.2em] hover:bg-gold-champagne hover:text-obsidian transition-all duration-300"
            >
              Request Aviation Manifest Access
            </a>
          </div>

          {/* HOROLOGY SERVICES */}
          <div className="bg-slate-gray border border-gold-champagne/10 p-6 md:p-8 rounded-sm hover:border-gold-champagne/25 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] font-mono-lux text-gold-champagne tracking-widest uppercase">SECTION II.B</span>
                  <h3 className="text-xl font-serif-lux text-alabaster tracking-widest mt-1">HOROLOGICAL PORTFOLIOS</h3>
                </div>
                <div className="p-2 border border-gold-champagne/20 rounded-full">
                  <Sliders className="w-5 h-5 text-gold-champagne" />
                </div>
              </div>

              {/* RENDER RESALED TIMEPIECE */}
              <div className="relative h-44 w-full bg-slate-light rounded-sm overflow-hidden mb-6 border border-gold-champagne/10">
                <img 
                  src={WATCH_IMAGE} 
                  alt="Investment-Grade Golden Luxury Mechanical Watch" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-gray via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-4">
                  <span className="text-[9px] font-mono-lux bg-obsidian/75 p-1 border border-gold-champagne/20 rounded-xs text-gold-champagne">VALUATION RADAR: $500k – $2.2M</span>
                </div>
              </div>

              <p className="text-xs text-platinum-muted leading-relaxed mb-6">
                Procure secure allocations of physical, historical, and highly hard-capped reference timepieces. We leverage direct family office holdings and elite Swiss trust archives to source pieces bypassing three-decade waiting lists.
              </p>

              {/* APPRECIATION CHART SIMULATOR */}
              <div className="bg-slate-light p-4 rounded-sm border border-gold-champagne/5 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[10px] font-mono-lux text-gold-champagne tracking-wider uppercase">📈 BLUE CHIP PORTFOLIO SCARCITY CURVE</p>
                  <label className="text-[9px] font-mono-lux text-platinum-muted">INDEX MULTIPLIER</label>
                </div>
                
                {/* INTERACTIVE VALUATION SLIDER */}
                <div className="flex gap-4 items-center mb-3">
                  <input 
                    type="range"
                    min="0.5"
                    max="2.5"
                    step="0.1"
                    value={watchIndexMultiplier}
                    onChange={(e) => setWatchIndexMultiplier(parseFloat(e.target.value))}
                    className="w-full accent-gold-champagne bg-obsidian border-none h-1 cursor-pointer"
                  />
                  <span className="text-xs font-mono-lux text-gold-champagne font-bold w-12 text-right">x{watchIndexMultiplier}</span>
                </div>

                {/* SVG MINI APPRECIATION PLOT */}
                <div className="h-20 w-full bg-obsidian flex items-end relative rounded-xs overflow-hidden pt-4 px-1">
                  <svg className="w-full h-full text-gold-champagne opacity-75" viewBox="0 0 100 30" preserveAspectRatio="none">
                    <path 
                      d={`M 0,25 Q 25,${20 - (5 * watchIndexMultiplier)} 50,${15 - (6 * watchIndexMultiplier)} T 100,${5 - (5 * watchIndexMultiplier)}`} 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5"
                    />
                    {/* Fill Area gradient simulation */}
                    <path 
                      d={`M 0,25 Q 25,${20 - (5 * watchIndexMultiplier)} 50,${15 - (6 * watchIndexMultiplier)} T 100,${5 - (5 * watchIndexMultiplier)} L 100,30 L 0,30 Z`} 
                      fill="currentColor" 
                      fillOpacity="0.05"
                    />
                  </svg>
                  <div className="absolute top-1 left-2 text-[8px] font-mono-lux text-platinum-muted">GENEVA VALUATIONS INDEX (2020 - 2026)</div>
                  <div className="absolute bottom-1 right-2 text-[8px] font-mono-lux text-gold-champagne">EST. RATING: {Math.round(230 * watchIndexMultiplier)}% GROWTH</div>
                </div>
              </div>

              {/* ASSET SELECTOR */}
              <div className="space-y-4">
                {HOROLOGY_ASSETS.map((watch) => (
                  <div 
                    key={watch.id}
                    onClick={() => setActiveWatch(watch)}
                    className={`p-3 border rounded-sm cursor-pointer transition-all ${
                      activeWatch.id === watch.id 
                        ? 'bg-obsidian border-gold-champagne/30' 
                        : 'bg-transparent border-transparent hover:bg-slate-light/50'
                    }`}
                  >
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-serif-lux text-alabaster">{watch.brand} — <span className="italic text-platinum-muted">{watch.model.split('"')[0]}</span></span>
                      <span className="font-mono-lux text-gold-champagne text-[10px]">
                        ${(parseFloat(watch.estimatedValue.split('$')[1].replace(/,/g, '')) * watchIndexMultiplier).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                      </span>
                    </div>
                    {activeWatch.id === watch.id && (
                      <div className="mt-2 text-[11px] text-platinum-muted font-light animate-fadeIn">
                        <p className="mb-1">{watch.description}</p>
                        <p className="font-mono-lux text-[9px] text-gold-champagne/80">Ref: {watch.reference} // Condition: {watch.condition}</p>
                        <p className="font-mono-lux text-[8px] text-[indigo-300] italic mt-1 text-purple-200">🔍 Scarcity Score: {watch.scarcityIndex}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <a 
              href="#vip-intake"
              className="mt-6 w-full text-center py-2.5 bg-gradient-to-r from-gold-champagne/10 to-transparent border border-gold-champagne/30 text-[10px] uppercase font-serif-lux tracking-[0.2em] hover:bg-gold-champagne hover:text-obsidian transition-all duration-300"
            >
              Request Watch Allocation Inquiry
            </a>
          </div>

        </div>

        {/* TRUST INDICATORS SECTION */}
        <section className="max-w-5xl mx-auto mb-20">
          <h4 className="text-xs uppercase font-mono-lux text-center text-gold-champagne tracking-[0.25em] mb-10">THE HANDSHAKE PROTOCOLS</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-slate-gray border border-gold-champagne/5 rounded-sm text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full border border-gold-champagne/20 bg-obsidian mb-4">
                <ShieldCheck className="w-5 h-5 text-gold-champagne" />
              </div>
              <h5 className="font-serif-lux text-sm text-alabaster uppercase tracking-wider mb-2">ESCROW DISCRETION PROTOCOL</h5>
              <p className="text-xs font-light text-platinum-muted">All physical timepiece transfers are authenticated by a designated Genevese notary and held in escrow custody before transport.</p>
            </div>
            <div className="p-6 bg-slate-gray border border-gold-champagne/5 rounded-sm text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full border border-gold-champagne/20 bg-obsidian mb-4">
                <Lock className="w-5 h-5 text-gold-champagne" />
              </div>
              <h5 className="font-serif-lux text-sm text-alabaster uppercase tracking-wider mb-2">ZERO TELEMETRY GUARANTEE</h5>
              <p className="text-xs font-light text-platinum-muted">Corporate registries and flight manifests are routed through private legal shielding. No tail codes or names are stored on servers.</p>
            </div>
            <div className="p-6 bg-slate-gray border border-gold-champagne/5 rounded-sm text-center">
              <div className="mx-auto w-10 h-10 flex items-center justify-center rounded-full border border-gold-champagne/20 bg-obsidian mb-4">
                <EyeOff className="w-5 h-5 text-gold-champagne" />
              </div>
              <h5 className="font-serif-lux text-sm text-alabaster uppercase tracking-wider mb-2">PRIVACY COMPASS LAWS</h5>
              <p className="text-xs font-light text-platinum-muted">Governed by standard Swiss legal privacy codes and private office representation. We act simply as finders and liasons.</p>
            </div>
          </div>
        </section>

        {/* SECURE REAL-TIME MONACO/GENEVA LEDGER (Interactive Component) */}
        <section className="bg-slate-gray/30 border border-gold-champagne/10 p-6 max-w-4xl mx-auto rounded-sm mb-20 font-mono-lux text-xs">
          <div className="flex justify-between items-center text-platinum-muted border-b border-gold-champagne/10 pb-3 mb-3 shrink-0">
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-gold-champagne" />
              <span className="font-bold">VERIFIABLE ACQUISITION LEDGER (SWISS BLOCKTIME)</span>
            </div>
            <span className="text-[10px]">CUSTODY SECURED</span>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            <div className="flex justify-between p-1.5 hover:bg-slate-light rounded-sm">
              <span className="text-[#96e072]">✓ TRANSIT APPROVED</span>
              <span className="text-alabaster font-semibold">G700 Nice ➔ Geneva</span>
              <span className="text-platinum-muted font-mono-lux text-[10px]">Hash: 0x9AF41A...201</span>
            </div>
            <div className="flex justify-between p-1.5 hover:bg-slate-light rounded-sm">
              <span className="text-gold-champagne">⚜️ ALLOCATION SECURED</span>
              <span className="text-alabaster font-semibold">Patek Philippe 5711/1A-018</span>
              <span className="text-platinum-muted font-mono-lux text-[10px]">Nice Escrow Office</span>
            </div>
            <div className="flex justify-between p-1.5 hover:bg-slate-light rounded-sm">
              <span className="text-[#96e072]">✓ TRANSIT APPROVED</span>
              <span className="text-alabaster font-semibold">Global 7500 Geneva ➔ London FAB</span>
              <span className="text-platinum-muted font-mono-lux text-[10px]">Hash: 0x4B31BC...519</span>
            </div>
          </div>
        </section>

        {/* EXCLUSIVE MEMBERS NOMINATION - FORM VIEW */}
        <section className="max-w-3xl mx-auto mb-20" id="vip-intake">
          <div className="text-center mb-8">
            <span className="text-[10px] font-mono-lux text-gold-champagne tracking-[0.25em] uppercase">SECTION III</span>
            <h3 className="text-3xl font-serif-lux tracking-wide text-gold-champagne mt-1">REQUEST PRIVATE PORTFOLIO ACCESS</h3>
            <p className="text-xs text-platinum-muted mt-2 max-w-xl mx-auto">
              Our service operates exclusively by referral. For unnominated representatives, complete our high-friction credential intake. We verify corporate credentials and corporate law firm proxies inside of two hours.
            </p>
          </div>

          <div className="bg-slate-gray border border-gold-champagne/15 p-6 md:p-10 rounded-sm">
            {!submitResult ? (
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">REPRESENTATIVE / FULL IDENTITY NAME</label>
                    <input 
                      type="text"
                      required
                      placeholder="Honorable Member, Counsel, or Proxy Advisor"
                      value={form.fullName}
                      onChange={(e) => setForm({...form, fullName: e.target.value})}
                      className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne placeholder:text-platinum-muted/30"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">SECURE PRIVATE COMM-CHANNEL (EMAIL / PHONE)</label>
                    <input 
                      type="email"
                      required
                      placeholder="e.g. secure@counsel-firm.com"
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne placeholder:text-platinum-muted/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">PRIMARY PORTFOLIO FOCUS</label>
                    <select 
                      value={form.focus}
                      onChange={(e) => setForm({...form, focus: e.target.value as any})}
                      className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne"
                    >
                      <option value="aviation">Private Aviation Brokerage</option>
                      <option value="horology">Horological Assets Allocations</option>
                      <option value="dual">Dual Integrated System (Both)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">PRIMARY WEALTH HUB REGISTRY</label>
                    <select 
                      value={form.location}
                      onChange={(e) => setForm({...form, location: e.target.value as any})}
                      className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne"
                    >
                      <option value="Monaco">Monaco (Carré d'Or)</option>
                      <option value="Geneva">Geneva (Rue du Rhône)</option>
                      <option value="London">London (Mayfair / Belgravia)</option>
                      <option value="Other">Other sovereign offshore registry</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">PROVISIONAL ANNUITY SCALE</label>
                    <select 
                      value={form.estimatedNetWorth}
                      onChange={(e) => setForm({...form, estimatedNetWorth: e.target.value})}
                      className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne"
                    >
                      <option value="$1M - $5M">$1,000,000 - $5,000,000</option>
                      <option value="$5M - $20M">$5,000,000 - $20,000,000</option>
                      <option value="$20M+">$20,000,000+ Liquid Assets</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-mono-lux tracking-wider text-platinum-muted block mb-1.5">SPECIAL DISCREET REQUIREMENTS</label>
                  <textarea 
                    rows={3}
                    placeholder="Provide aircraft model requirements, specific watch reference numbers, physical escrow pick-up coordinates, or security proxy contacts."
                    value={form.specificRequirements}
                    onChange={(e) => setForm({...form, specificRequirements: e.target.value})}
                    className="w-full bg-obsidian border border-gold-champagne/15 rounded-xs p-2.5 text-xs text-alabaster focus:outline-none focus:border-gold-champagne placeholder:text-platinum-muted/30"
                  />
                </div>

                <div className="flex items-start gap-3 bg-obsidian p-4 rounded-sm border border-orange-400/10">
                  <input 
                    type="checkbox"
                    id="declare-nda"
                    checked={form.disclaimerAccepted}
                    onChange={(e) => setForm({...form, disclaimerAccepted: e.target.checked})}
                    className="mt-1 w-4 h-4 accent-gold-champagne rounded-sm cursor-pointer border border-gold-champagne/20"
                  />
                  <label htmlFor="declare-nda" className="text-[10px] text-platinum-muted leading-relaxed cursor-pointer select-none">
                    I declare and initiate that this operational request is bound under standard mutual Swiss legal secrets and Geneva Escrow procedures. All submitted profiles are encrypted end-to-end to protect the requesting entity.
                  </label>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-gold-champagne hover:bg-gold-hover text-obsidian font-serif-lux font-bold tracking-[0.15em] text-xs uppercase cursor-pointer transition-all duration-300 rounded-xs flex items-center justify-center gap-2 disabled:bg-gold-champagne/50"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-obsidian/30 border-t-obsidian rounded-full animate-spin"></div>
                      SECURELY WRITING TO ESCROW LEDGER...
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      SUBMIT INTENT OF ADVISING ACCESS
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-6 animate-fadeIn font-mono-lux space-y-6">
                <div className="w-16 h-16 border border-gold-champagne/30 text-gold-champagne rounded-full flex items-center justify-center mx-auto bg-gold-champagne/5">
                  <UserCheck className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-serif-lux text-gold-champagne font-semibold tracking-wider">SECURE ADVISORY TICKET ISSUED</h4>
                  <p className="text-xs text-platinum-muted max-w-md mx-auto">
                    Your request has been saved securely to our private relational trust ledger. A private partner will contact your office in 120 minutes.
                  </p>
                </div>

                <div className="bg-obsidian border border-gold-champagne/20 p-4 rounded-sm text-left max-w-md mx-auto space-y-3">
                  <div className="flex justify-between border-b border-gold-champagne/10 pb-2 text-[11px]">
                    <span className="text-platinum-muted">SECURE TOKEN:</span>
                    <span className="text-alabaster font-bold select-all">{submitResult.token}</span>
                  </div>
                  <div className="flex justify-between border-b border-gold-champagne/10 pb-2 text-[11px]">
                    <span className="text-platinum-muted">REFERENCE ID:</span>
                    <span className="text-gold-champagne font-bold">{submitResult.refCode}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-platinum-muted">STATUS CODE:</span>
                    <span className="text-[#96e072] font-semibold animate-pulse">QUEUED FOR DIRECT VERIFICATION</span>
                  </div>
                </div>

                <button 
                  type="button" 
                  onClick={() => setSubmitResult(null)}
                  className="px-6 py-2 border border-gold-champagne/20 hover:border-gold-champagne/60 text-[10px] text-platinum-muted hover:text-alabaster uppercase tracking-widest transition-all rounded-xs"
                >
                  Issue New Inquiry Form
                </button>
              </div>
            )}
          </div>
        </section>

        {/* BRIGHT CITATION CLIENT TESTIMONIALS */}
        <section className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLIENT_TESTIMONIALS.map((t, idx) => (
              <div key={idx} className="p-6 border-l border-gold-champagne/25 bg-slate-gray/20 font-serif-lux text-xs space-y-2 italic">
                <p className="text-alabaster leading-relaxed">"{t.quote.replace(/"/g, '')}"</p>
                <div className="font-mono-lux text-[10px] text-gold-champagne not-italic pt-2">
                  — {t.clientType} ({t.location})
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LOWER FOOTER */}
        <footer className="border-t border-gold-champagne/10 pt-10 pb-16 text-center max-w-5xl mx-auto font-mono-lux text-[10px] text-platinum-muted">
          <p>© 2026 RIVIERA FLOW MONACO S.A. ALL RESERVED PORTFOLIOS SECURED WITH REGISTERED ATTORNEY OF MONACO AND GENEVA TRUSTS.</p>
          <p className="mt-1 flex items-center justify-center gap-2">
            <span>OFF-MARKET AFFILIATE LIAISON DISCLOSURE ACT</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-champagne"></span>
            <span>SECURE CRYPTO ACQUISITIONS APPROVED</span>
          </p>
        </footer>
      </div>

      {/* FLOAT BUTTON: STRATEGIC CONTROLS SIDE DRAWER PANEL */}
      <button 
        type="button"
        id="toggle-guide-btn"
        className="fixed bottom-6 right-6 bg-gold-champagne hover:bg-gold-hover text-obsidian px-5 py-3 rounded-full shadow-2xl font-serif-lux font-bold tracking-wider text-xs flex items-center gap-2 transition-all duration-300 transform hover:scale-105 select-none z-50 cursor-pointer"
        onClick={() => setIsGuidemistOpen(!isGuidemistOpen)}
      >
        <BookOpen className="w-4 h-4" />
        {isGuidemistOpen ? 'HIDE BRAND PLAYBOOK' : '⚜️ OPEN STREAMLIT CODE & BRAND PLAYBOOK'}
      </button>

      {/* RIGHT: STRATEGIC & STREAMLIT EXECUTABLES DRAWER */}
      {isGuidemistOpen && (
        <div className="w-full md:w-[480px] bg-slate-gray border-t md:border-t-0 md:border-l border-gold-champagne/20 flex flex-col md:max-h-screen shrink-0 animate-slideIn select-text" id="guide-drawer">
          
          <div className="p-6 border-b border-gold-champagne/15 bg-obsidian">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-md font-serif-lux text-gold-champagne uppercase tracking-wider flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-gold-champagne" />
                  Skins & Brand Playbook
                </h3>
                <p className="text-[10px] font-mono-lux text-platinum-muted mt-0.5">Streamlit free-hosting generation templates</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsGuidemistOpen(false)}
                className="text-platinum-muted hover:text-alabaster text-xs font-bold px-2 py-1 border border-gold-champagne/10 rounded-sm"
              >
                Close
              </button>
            </div>

            {/* TAB SYSTEM */}
            <div className="flex gap-2 mt-6">
              <button 
                type="button"
                onClick={() => setActiveGuideTab('strategy')}
                className={`flex-1 py-1 px-2 border text-[10px] font-mono-lux rounded-sm transition-all ${
                  activeGuideTab === 'strategy' 
                    ? 'bg-gold-champagne text-obsidian border-gold-champagne' 
                    : 'bg-transparent text-platinum-muted border-gold-champagne/10 hover:bg-slate-light'
                }`}
              >
                Exclusivity Playbook
              </button>
              <button 
                type="button"
                onClick={() => setActiveGuideTab('streamlit')}
                className={`flex-1 py-1 px-2 border text-[10px] font-mono-lux rounded-sm transition-all ${
                  activeGuideTab === 'streamlit' 
                    ? 'bg-gold-champagne text-obsidian border-gold-champagne' 
                    : 'bg-transparent text-platinum-muted border-gold-champagne/10 hover:bg-slate-light'
                }`}
              >
                Streamlit Python
              </button>
              <button 
                type="button"
                onClick={() => setActiveGuideTab('css')}
                className={`flex-1 py-1 px-2 border text-[10px] font-mono-lux rounded-sm transition-all ${
                  activeGuideTab === 'css' 
                    ? 'bg-gold-champagne text-obsidian border-gold-champagne' 
                    : 'bg-transparent text-platinum-muted border-gold-champagne/10 hover:bg-slate-light'
                }`}
              >
                CSS Guide
              </button>
            </div>
          </div>

          <div className="p-6 flex-1 overflow-y-auto space-y-6">
            
            {/* TAB 1: BRAND STRATEGY */}
            {activeGuideTab === 'strategy' && (
              <div className="space-y-6" id="strategy-tab-content">
                <div className="p-4 bg-obsidian border border-gold-champagne/10 rounded-sm">
                  <h4 className="font-serif-lux text-xs text-gold-champagne uppercase font-bold tracking-wider mb-2">⚜️ {EXCLUSIVITY_STRATEGY.title}</h4>
                  <p className="text-[11px] text-platinum-muted leading-relaxed italic">{EXCLUSIVITY_STRATEGY.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {EXCLUSIVITY_STRATEGY.principles.map((p, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex gap-2 items-center">
                        <span className="text-[10px] font-mono-lux text-gold-champagne">0{idx + 1}.</span>
                        <span className="font-serif-lux text-xs text-alabaster font-semibold uppercase tracking-wider">{p.title}</span>
                      </div>
                      <p className="text-[11px] font-light text-platinum-muted pl-6 leading-relaxed bg-obsidian/30 p-2 border-l border-gold-champagne/10">{p.detail}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gold-champagne/10 pt-4 space-y-3">
                  <h4 className="font-serif-lux text-xs text-gold-champagne uppercase font-bold tracking-wider">💼 HIGH-TICKET AFFILIATE PLAYBOOK</h4>
                  <p className="text-[11px] text-platinum-muted leading-relaxed">{EXCLUSIVITY_STRATEGY.affiliatePlaybook.description}</p>
                  <ul className="list-disc pl-5 space-y-2 text-[11px] text-platinum-muted">
                    {EXCLUSIVITY_STRATEGY.affiliatePlaybook.steps.map((st, sIdx) => (
                      <li key={sIdx} className="leading-relaxed">{st}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* TAB 2: STREAMLIT PYTHON CODE EXPORT */}
            {activeGuideTab === 'streamlit' && (
              <div className="space-y-4" id="streamlit-tab-content">
                <div className="flex justify-between items-center bg-obsidian p-2 rounded-xs border border-gold-champagne/10">
                  <span className="text-[10px] font-mono-lux text-gold-champagne">ST_APP.PY (FOR PYTHON WEB HOST)</span>
                  <button 
                    type="button"
                    onClick={() => copyToClipboard(STREAMLIT_APP_CODE, 'streamlit')}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono-lux text-gold-champagne border border-gold-champagne/20 hover:bg-gold-champagne hover:text-obsidian transition-all duration-200 cursor-pointer"
                  >
                    {copiedStreamlit ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedStreamlit ? 'COPIED' : 'COPY SCRIPT'}
                  </button>
                </div>

                <p className="text-[11px] text-platinum-muted leading-relaxed">
                  Streamlit allows deploying Python files entirely for free on Streamlit Community Cloud. This script matches the layout on the left, utilizes beautiful customized Google fonts, custom CSS tags, responsive layouts, and records premium credentials.
                </p>

                <div className="bg-obsidian border border-gold-champagne/10 p-3 rounded-sm">
                  <pre className="text-[10px] font-mono-lux text-platinum-muted max-h-96 overflow-x-auto whitespace-pre-wrap select-all select-text">
                    {STREAMLIT_APP_CODE}
                  </pre>
                </div>
              </div>
            )}

            {/* TAB 3: CSS STYLE GUIDE */}
            {activeGuideTab === 'css' && (
              <div className="space-y-4" id="css-tab-content">
                <div className="flex justify-between items-center bg-obsidian p-2 rounded-xs border border-gold-champagne/10">
                  <span className="text-[10px] font-mono-lux text-gold-champagne">STYLE_MAPPING.CSS</span>
                  <button 
                    type="button"
                    onClick={() => copyToClipboard(LUXURY_CSS_STYLE_GUIDE, 'css')}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-mono-lux text-gold-champagne border border-gold-champagne/20 hover:bg-gold-champagne hover:text-obsidian transition-all duration-200 cursor-pointer"
                  >
                    {copiedCSS ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    {copiedCSS ? 'COPIED' : 'COPY CSS'}
                  </button>
                </div>

                <p className="text-[11px] text-platinum-muted leading-relaxed">
                  The curated hex palette and layout borders used to render the classic Monaco yachting feel. Maintain these precise font hierarchies for optimal conversion trust signals.
                </p>

                <div className="bg-obsidian border border-gold-champagne/10 p-3 rounded-sm">
                  <pre className="text-[10px] font-mono-lux text-platinum-muted max-h-96 overflow-x-auto whitespace-pre-wrap select-all select-text">
                    {LUXURY_CSS_STYLE_GUIDE}
                  </pre>
                </div>
              </div>
            )}

          </div>

          <div className="p-4 bg-obsidian border-t border-gold-champagne/15 text-center text-[10px] text-platinum-muted font-serif-lux select-none">
            RIVIERA FLOW • ELITE BRAND CONSOLE
          </div>
        </div>
      )}

    </div>
  );
}

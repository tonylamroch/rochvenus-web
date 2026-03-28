import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Wind, 
  Droplets, 
  Building2, 
  Sun, 
  Mail,
  ArrowRight,
  Menu,
  X,
  HardHat,
  Mountain
} from 'lucide-react';

/**
 * ROCHVENTUS LOGO COMPONENT
 * 6-blade swirl with alternating Blue/Green logic
 * Central Droplet is perfectly centered (Snowflake completely removed)
 */
const RochvenusLogo = ({ className = "w-12 h-12" }) => (
  <div className={`${className} relative flex items-center justify-center`}>
    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
      <defs>
        <linearGradient id="bladeBlue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#003d99', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#0077ff', stopOpacity:1}} />
        </linearGradient>
        <linearGradient id="bladeGreen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor:'#008037', stopOpacity:1}} />
          <stop offset="100%" style={{stopColor:'#66cc33', stopOpacity:1}} />
        </linearGradient>
      </defs>
      
      {/* Orbital Swirl Lines */}
      <path d="M10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50" fill="none" stroke="#add8e6" strokeWidth="0.75" transform="rotate(-35 50 50)" opacity="0.8" />
      <path d="M15 50 C 15 25, 85 25, 85 50 C 85 75, 15 75, 15 50" fill="none" stroke="#add8e6" strokeWidth="0.75" transform="rotate(40 50 50)" opacity="0.8" />
      
      {/* 6-Blade Swirl (Blue/Green alternating) */}
      <g transform="translate(50,50)">
        {[0, 60, 120, 180, 240, 300].map((rot, i) => (
          <path 
            key={rot}
            d="M0 0 C 10 -35, 45 -25, 40 0 C 35 15, 10 10, 0 0" 
            fill={i % 2 === 0 ? "url(#bladeBlue)" : "url(#bladeGreen)"}
            transform={`rotate(${rot})`}
          />
        ))}
      </g>
      
      {/* Center White Core */}
      <circle cx="50" cy="50" r="14" fill="white" />
      
      {/* Central Icon: Perfectly Centered Droplet */}
      <g transform="translate(45.8, 44.5) scale(0.35)">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#003d99" />
      </g>
    </svg>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <RochvenusLogo className="w-12 h-12" />
            <div className="flex flex-col leading-tight pt-1">
              <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase leading-none">Rochvenus</span>
              <span className="text-[9px] font-bold tracking-[0.45em] text-blue-600 uppercase ml-0.5 mt-1">Technology</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-gray-600 hover:text-blue-700 font-bold transition-colors text-sm uppercase tracking-widest">Coatings</a>
            <a href="#applications" className="text-gray-600 hover:text-blue-700 font-bold transition-colors text-sm uppercase tracking-widest">Applications</a>
            <a href="#references" className="text-gray-600 hover:text-blue-700 font-bold transition-colors text-sm uppercase tracking-widest">Case Studies</a>
            <a href="mailto:info@rochvenus.com" className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-xl shadow-slate-200 uppercase ml-2">
              Contact Us
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden text-center lg:text-left">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-gradient-to-l from-blue-50/40 to-transparent rounded-bl-[150px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-black uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" /> Patented Surface Coating
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] text-slate-900 tracking-tighter uppercase">
              Next-Gen<br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-emerald-600">Maintenance</span><br/>
              Starts Here
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
              Revolutionary invisible protection for industrial, commercial, and solar assets. Keep surfaces cleaner and safer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
              <a href="#solutions" className="px-10 py-5 bg-blue-700 text-white rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-blue-800 transition-all shadow-2xl shadow-blue-200 group uppercase tracking-widest">
                Explore Systems <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#references" className="px-10 py-5 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black hover:bg-slate-50 transition-all text-center uppercase tracking-widest">
                View Cases
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative bg-white/60 backdrop-blur-md p-10 md:p-14 rounded-[80px] shadow-2xl border border-white/80">
              <RochvenusLogo className="w-64 h-64 md:w-96 md:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Systems */}
      <section id="solutions" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase">Core Technology</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <Droplets className="w-12 h-12 text-blue-700 mb-8 mx-auto" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Anti-Dirt</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Super Hydrophilicity technology. Water spreads evenly to lift away grime naturally for a permanent self-cleaning effect.
              </p>
            </div>
            <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <Wind className="w-12 h-12 text-emerald-700 mb-8 mx-auto" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Anti-Dust</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Mesoporous disruption. Prevents carbon and organic dust from bonding to micro-pores on glass and solar panels.
              </p>
            </div>
            <div className="p-12 rounded-[56px] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <ShieldCheck className="w-12 h-12 text-slate-700 mb-8 mx-auto" />
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tighter">Anti-Corrosion</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Advanced Sol-Gel Film. 7H hardness bonds permanently to shield against acid rain and salt spray in harsh environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-32 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tight uppercase">Proven Applications</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Building2 className="w-10 h-10 text-blue-400 mb-4" />
              <span className="font-bold text-sm uppercase tracking-widest text-slate-200">Glass Facades</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Sun className="w-10 h-10 text-emerald-400 mb-4" />
              <span className="font-bold text-sm uppercase tracking-widest text-slate-200">Solar Panels</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <Mountain className="w-10 h-10 text-slate-400 mb-4" />
              <span className="font-bold text-sm uppercase tracking-widest text-slate-200">Stone Walls</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all">
              <HardHat className="w-10 h-10 text-blue-300 mb-4" />
              <span className="font-bold text-sm uppercase tracking-widest text-slate-200">Infrastructure</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case References */}
      <section id="references" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">Case References</h2>
            <p className="text-slate-500 font-medium text-lg">Global experience, measurable results.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group">
               <div className="aspect-video bg-slate-100 rounded-[60px] mb-8 overflow-hidden flex items-center justify-center relative">
                  <Building2 className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    Facade Protection
                  </div>
               </div>
               <div className="px-6 text-center md:text-left">
                 <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase underline decoration-blue-600 decoration-4 underline-offset-8">Palace Museum</h3>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium">Preserving porous stone facades from grime and algae growth since late 2023.</p>
               </div>
            </div>
            <div className="group">
               <div className="aspect-video bg-slate-100 rounded-[60px] mb-8 overflow-hidden flex items-center justify-center relative">
                  <Sun className="w-20 h-20 text-slate-300 group-hover:scale-110 transition-transform" />
                  <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-slate-900 shadow-sm">
                    Solar Efficiency
                  </div>
               </div>
               <div className="px-6 text-center md:text-left">
                 <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase underline decoration-emerald-600 decoration-4 underline-offset-8">CitiTower Solar</h3>
                 <p className="text-slate-500 text-sm leading-relaxed font-medium">Maintaining peak energy generation for over 2 years without manual cleaning.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-24 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <RochvenusLogo className="w-20 h-20 mx-auto mb-8 bg-white p-4 rounded-[30px]" />
          <h2 className="text-4xl font-black mb-8 uppercase tracking-widest leading-none">ROCHVENUS.COM</h2>
          <div className="mt-8 flex flex-col items-center gap-4">
            <a href="mailto:info@rochvenus.com" className="inline-flex items-center gap-4 bg-white text-blue-700 px-10 py-4 rounded-full font-black text-lg hover:scale-105 transition-transform uppercase">
              <Mail className="w-5 h-5" /> Contact Us
            </a>
          </div>
          <p className="mt-16 text-[11px] font-black text-slate-500 uppercase tracking-[0.4em]">© 2026 Rochvenus Technology Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
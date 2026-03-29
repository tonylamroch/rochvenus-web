import { useState, useEffect } from 'react';
import { 
  Mail,
  Menu,
  X,
  Key
} from 'lucide-react';

/**
 * Rochvenus Logo Component
 * Professional brand logo built with gradients and SVG paths.
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
      <path d="M10 50 C 10 20, 90 20, 90 50 C 90 80, 10 80, 10 50" fill="none" stroke="#add8e6" strokeWidth="0.75" transform="rotate(-35 50 50)" opacity="0.8" />
      <path d="M15 50 C 15 25, 85 25, 85 50 C 85 75, 15 75, 15 50" fill="none" stroke="#add8e6" strokeWidth="0.75" transform="rotate(40 50 50)" opacity="0.8" />
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
      <circle cx="50" cy="50" r="14" fill="white" />
      <g transform="translate(45.8, 44.5) scale(0.35)">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" fill="#003d99" />
      </g>
    </svg>
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to change navbar styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      
      {/* NAVIGATION BAR */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <RochvenusLogo className="w-12 h-12" />
            <div className="flex flex-col leading-tight pt-1">
              <span className="font-black text-2xl tracking-tighter text-slate-900 uppercase">Rochvenus</span>
              <span className="text-[9px] font-bold tracking-[0.45em] text-blue-600 uppercase ml-0.5">Technology</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#portal" className="flex items-center gap-2 text-slate-400 hover:text-blue-700 font-bold transition-colors text-xs uppercase tracking-widest px-4 py-1.5 border border-slate-100 rounded-full">
              <Key className="w-3 h-3" /> Partner Sign In
            </a>
            <a href="mailto:info@rochvenus.com" className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-xl shadow-slate-200 uppercase ml-2">
              Contact Us
            </a>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-100">
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#portal" className="flex items-center gap-2 text-slate-400 hover:text-blue-700 font-bold transition-colors text-sm uppercase tracking-widest px-4 py-2 border border-slate-100 rounded-full">
                <Key className="w-4 h-4" /> Partner Sign In
              </a>
              <a href="mailto:info@rochvenus.com" className="bg-slate-900 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-black text-sm transition-all shadow-xl shadow-slate-200 uppercase text-center">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* GAMMA CONTENT SECTION - Full-width embedding */}
      <main className="pt-24 flex flex-col min-h-screen bg-white">
        <div className="w-full flex-grow">
          <iframe 
            src="https://gamma.app/embed/6p6yvwymicf2l2x" 
            style={{ width: '100%', height: 'calc(100vh - 96px)', minHeight: '600px', border: 'none' }} 
            allow="fullscreen" 
            title="Rochvenus Technology"
          ></iframe>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 py-16 text-white text-center">
        <div className="max-w-7xl mx-auto px-6">
          <RochvenusLogo className="w-16 h-16 mx-auto mb-6 bg-white p-3 rounded-2xl" />
          <h2 className="text-2xl font-black mb-6 uppercase tracking-widest leading-none">ROCHVENUS.COM</h2>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:info@rochvenus.com" className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-3 rounded-full font-black text-sm hover:scale-105 transition-transform uppercase">
              <Mail className="w-4 h-4" /> Get in Touch
            </a>
          </div>
          <p className="mt-12 text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em]">© 2026 Rochvenus Technology Limited</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
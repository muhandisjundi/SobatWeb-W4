import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Scissors, Instagram } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-500 py-4 md:py-6 px-6">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo Section - High Contrast */}
        <motion.div 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <div className="relative">
            <div className="w-10 h-10 bg-red-600 flex items-center justify-center rounded-br-2xl group-hover:rotate-90 transition-transform duration-500 shadow-lg shadow-red-600/20">
              <Scissors className="text-white" size={20} />
            </div>
            <div className="absolute -top-1 -left-1 w-10 h-10 border border-zinc-950/10 rounded-br-2xl -z-10" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-black italic uppercase tracking-tighter text-zinc-950">
              FI <span className="text-red-600">BARBER.</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400">Precision Studio</span>
          </div>
        </motion.div>

        {/* Desktop Navigation - Complex Glass Style */}
        <motion.div
          animate={{ 
            backgroundColor: scrolled ? "rgba(9, 9, 11, 0.95)" : "rgba(255, 255, 255, 0.8)",
            paddingLeft: scrolled ? "40px" : "20px",
            paddingRight: scrolled ? "40px" : "20px",
            borderColor: scrolled ? "rgba(220, 38, 38, 0.5)" : "rgba(244, 244, 245, 1)"
          }}
          className={`hidden md:flex items-center gap-10 py-3 rounded-full border shadow-2xl backdrop-blur-xl transition-all duration-500`}
        >
          {links.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className={`text-[11px] font-black uppercase tracking-widest transition-colors relative group ${
                scrolled ? 'text-zinc-400 hover:text-white' : 'text-zinc-500 hover:text-zinc-950'
              }`}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          
          <div className={`h-4 w-[1px] ${scrolled ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
          
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <Instagram size={18} className={scrolled ? 'text-white' : 'text-zinc-950'} />
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
            scrolled ? 'bg-red-600 text-white' : 'bg-zinc-950 text-white'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className="fixed inset-0 bg-zinc-950 z-[110] flex flex-col p-8 md:hidden"
    >
      <div className="flex justify-between items-center mb-12">
        <span className="text-2xl font-black italic text-white uppercase">FI <span className="text-red-600">.</span></span>
        <button onClick={() => setIsOpen(false)} className="text-white p-2 bg-zinc-900 rounded-xl">
          <X size={24} />
        </button>
      </div>
      
      <div className="flex flex-col gap-6">
        {links.map((link, i) => (
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-black italic uppercase tracking-tighter text-zinc-400 hover:text-red-600 transition-colors"
          >
            {link.name}
          </motion.a>
        ))}
      </div>

      <div className="mt-auto border-t border-zinc-900 pt-8">
        <p className="text-red-600 font-black italic uppercase text-[10px] tracking-widest mb-3">Franchise Open</p>
        <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-tight leading-relaxed">
          JKT • TNG • PLG • BB • BKS • CKR
        </p>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
};

export default Navbar;
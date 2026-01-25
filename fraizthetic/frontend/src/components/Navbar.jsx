import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'Services', 'Gallery', 'Testimonials', 'Contact'];

  return (
    <nav className="fixed w-full z-[100] flex flex-col items-center px-4 py-6 pointer-events-none">
      {/* --- MAIN NAVBAR PILL --- */}
      <motion.div
        animate={{
          width: scrolled ? '90%' : '100%',
          maxWidth: '1200px',
        }}
        className={`pointer-events-auto flex justify-between items-center rounded-full px-8 py-4 transition-all duration-500
          ${scrolled || isOpen ? 'bg-white/90 border border-purple-100 shadow-xl shadow-purple-500/10' : 'bg-transparent'}
          backdrop-blur-xl
        `}
      >
        <div className="flex items-center gap-2">
           <Sparkles className="text-purple-600" size={24} />
           <span className="font-black text-xl tracking-tighter text-slate-800 uppercase italic">
            Fraiz<span className="text-purple-600">thetic</span>
           </span>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-purple-600 transition-colors">
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-purple-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-purple-700 transition-all shadow-lg shadow-purple-200">
            Book Now
          </a>
        </div>

        {/* MOBILE TOGGLE */}
        <button 
          className="md:hidden text-slate-800 p-1" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* --- MOBILE MENU DROPDOWN --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 10, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="pointer-events-auto w-[90%] max-w-[1200px] bg-white/95 backdrop-blur-2xl rounded-[2.5rem] p-8 border border-purple-100 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((item, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black uppercase tracking-tighter text-slate-800 border-b border-purple-50 pb-2 flex justify-between items-center group"
                >
                  <span className="group-hover:text-purple-600 transition-colors">{item}</span>
                  <div className="w-2 h-2 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                </motion.a>
              ))}
              
              <button className="mt-4 w-full  bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-purple-200">
              
                Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
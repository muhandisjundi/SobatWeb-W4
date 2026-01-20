import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },   
    { name: 'Results', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    // px-4 untuk mobile agar tidak terlalu mepet, md:px-6 untuk desktop
    <nav className="fixed w-full z-50 flex justify-center px-4 md:px-6 py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          // Pastikan maxWidth tidak melebihi screen width pada mobile
          maxWidth: scrolled ? '1000px' : '1200px',
          width: '100%',
          y: scrolled ? 0 : 10,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className={`
          pointer-events-auto flex justify-between items-center
          rounded-full px-5 md:px-8 py-3 transition-all duration-500
          backdrop-blur-xl border shadow-2xl
          ${scrolled
            ? 'bg-[#050505]/90 border-white/10 shadow-amber-900/10' 
            : 'bg-black/40 border-white/5 shadow-transparent'}
        `}
      >
        {/* Brand */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-xl flex items-center justify-center text-black font-black text-lg md:text-xl shadow-[0_0_15px_rgba(245,158,11,0.5)] transform -rotate-3 border border-amber-400/50">
            F
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-white tracking-tighter text-lg md:text-2xl uppercase italic">
              FIRST
            </span>
            <span className="text-[6px] md:text-[7px] font-bold text-neutral-400 uppercase tracking-[0.25em] -mt-0.5 ml-0.5">
              detail n coating
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center font-bold text-[10px] uppercase tracking-[0.2em] text-neutral-400">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="relative hover:text-white transition-all group py-2">
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#f59e0b]" />
            </a>
          ))}
          <a href="#contact" className="ml-2 bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-amber-500 hover:text-white transition-all duration-300">
            <ShieldCheck size={14} />
            <span>BOOK NOW</span>
          </a>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu Perbaikan Lebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            // Gunakan left-4 right-4 agar sinkron dengan container nav
            className="absolute top-24 left-4 right-4 bg-[#0a0a0a]/98 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] p-6 flex flex-col gap-4 md:hidden pointer-events-auto"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-black text-white uppercase italic tracking-tighter hover:text-amber-500 flex justify-between items-center py-3 border-b border-white/5"
                >
                  {link.name}
                  <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center text-[10px] border border-white/10">→</div>
                </a>
              ))}
            </div>
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full py-4 bg-amber-500 text-black rounded-xl font-black uppercase tracking-widest text-center">
              Book Reservation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Programs', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  // Varians animasi untuk stagger effect pada menu mobile
  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, y: -20 },
    open: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed w-full z-50 flex justify-center px-4 sm:px-6 py-6 pointer-events-none">
      <motion.div
        initial={false}
        animate={{
          maxWidth: scrolled ? '900px' : '1150px',
          width: '100%',
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        className={`
          pointer-events-auto flex justify-between items-center 
          rounded-full px-5 sm:px-8 py-3 transition-all duration-500
          backdrop-blur-xl border border-white/60 shadow-lg
          ${scrolled ? 'bg-white/80' : 'bg-white/40'}
        `}
      >
        {/* Logo Section - Responsif: Teks memendek di mobile */}
        <div className="flex items-center gap-2 group cursor-pointer shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-teal-400 to-sky-400 rounded-full flex items-center justify-center text-white shadow-sm shrink-0">
            <Heart size={18} fill="currentColor" />
          </div>
          <span className="font-serif text-lg sm:text-xl tracking-tight text-slate-800 whitespace-nowrap">
            Eureka<span className="text-teal-500 font-sans font-light ml-1 text-[10px] sm:text-xs tracking-[0.1em] uppercase hidden xs:inline-block">Smart Community</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] lg:text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500 hover:text-teal-600 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-300/60 rounded-full group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            className="ml-2 px-5 py-2 bg-teal-500 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-teal-600 transition-all shadow-md shadow-teal-100"
          >
            Join Us
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden text-slate-600 p-2 hover:bg-white/50 rounded-full transition-colors pointer-events-auto" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop untuk menutup menu saat klik di luar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/10 backdrop-blur-sm md:hidden pointer-events-auto z-[-1]"
            />
            
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="absolute top-24 left-6 right-6 bg-white/95 backdrop-blur-2xl shadow-2xl rounded-[2.5rem] p-8 flex flex-col gap-6 md:hidden border border-white pointer-events-auto overflow-hidden"
            >
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <motion.a 
                    variants={itemVariants}
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-xl font-serif text-slate-700 border-b border-slate-50 pb-2 hover:text-teal-500 transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>
              
              <motion.a 
                variants={itemVariants}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-4 bg-teal-500 text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg shadow-teal-100"
              >
                Join Community
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
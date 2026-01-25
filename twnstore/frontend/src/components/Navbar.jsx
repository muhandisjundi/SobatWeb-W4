import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About', 'Gallery', 'Location'];

  return (
    <nav className="fixed w-full z-[100] px-4 py-4 md:py-6 flex justify-center pointer-events-none">
      <motion.div
        animate={{ 
          maxWidth: scrolled ? '1000px' : '1200px',
          backgroundColor: '#FFFFFF',
          y: scrolled ? 0 : 5
        }}
        className="pointer-events-auto w-full flex items-center justify-between rounded-2xl md:rounded-full px-5 md:px-10 py-3 md:py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500"
      >
        {/* LOGO */}
        <div className="flex-1 flex justify-start">
          <a href="#home" className="text-lg md:text-2xl font-black italic tracking-tighter text-black uppercase">
            TWN<span className="text-zinc-300">.</span>STORE
          </a>
        </div>
        
        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-[2] justify-center items-center gap-8 lg:gap-12 font-black text-[10px] uppercase tracking-[0.2em] text-black">
          {links.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className=" transition-all">{item}</a>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-3">
          <button onClick={() => window.open('https://www.instagram.com/twnstore.katalog/')} className="hidden md:flex bg-black text-white px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:invert transition-all items-center gap-2">
            <ShoppingBag size={14} /> Catalog
          </button>
          <button className="md:hidden text-black p-2 border-2 border-black rounded-lg" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

{/* MOBILE MENU - FIXED SIZE */}
      <AnimatePresence>
        {isOpen && (
          
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            className="absolute top-25 left-4 right-4 bg-white border-4 border-black p-6 flex flex-col gap-4 md:hidden rounded-[2rem] shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] pointer-events-auto z-[101]"
          >
            {links.map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={() => setIsOpen(false)} 
                className="text-2xl font-black text-black uppercase italic border-b-2 border-zinc-100 pb-2 flex justify-between items-center active:bg-zinc-50 transition-colors"
              >
                {item} <span className="text-zinc-300">→</span>
              </a>
            ))}
            
            {/* Tombol Katalog */}
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                window.open('https://www.instagram.com/twnstore.katalog/', '_blank');
              }}
              className="mt-2 bg-black text-white py-4 rounded-xl font-black uppercase italic text-sm active:scale-95 transition-transform"
            >
              Check Catalog
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'STYLES', href: '#styles' },
    { name: 'PRICING', href: '#pricing' },
  ];

  // Fungsi navigasi yang memastikan menu tertutup dan scroll berjalan
  const handleNavClick = (e, href) => {
    // 1. Matikan fungsi default anchor agar tidak loncat tiba-tiba
    e.preventDefault();
    // 2. Tutup menu mobile segera
    setIsOpen(false);
    
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    
    if (element) {
      // 3. Beri sedikit delay agar animasi tutup menu selesai dulu
      setTimeout(() => {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: id === 'home' ? 0 : offsetPosition,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] p-4 md:p-6 flex justify-center pointer-events-none">
      <motion.nav
        initial={false}
        animate={{
          width: "100%",
          maxWidth: isOpen ? "100%" : scrolled ? "950px" : "1200px",
          borderRadius: isOpen ? "20px" : "40px",
          // Warna gelap pekat agar tidak nembus background putih
          backgroundColor: isOpen 
            ? "rgba(0, 0, 0, 1)" 
            : scrolled 
              ? "rgba(10, 10, 10, 0.85)" 
              : "rgba(0, 0, 0, 1)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          border: scrolled ? "1px solid rgba(255, 255, 255, 0.15)" : "1px solid rgba(255, 255, 255, 0.05)",
        }}
        className="shadow-2xl pointer-events-auto overflow-hidden transition-all duration-500"
      >
        <div className="px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-[10px] font-black italic">B</span>
            </div>
            <span className="text-white font-bold tracking-[0.3em] text-[10px] hidden sm:block uppercase">Elite Barber</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] font-bold text-gray-300 hover:text-white tracking-[0.2em] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 relative z-[1001]"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black w-full"
            >
              <div className="flex flex-col items-center p-8 gap-2 border-t border-white/10">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white text-xs font-bold tracking-[0.4em] py-5 w-full border-b border-white/5 uppercase active:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button className="w-full bg-white text-black py-4 rounded-xl font-bold text-[10px] tracking-[0.2em] uppercase mt-6">
                  BOOKING NOW
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;
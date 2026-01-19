import React from 'react';

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 glass px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold font-display italic">B</span>
            </div>
            <span className="font-display font-bold tracking-widest text-xl">BARBER</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest">
            <a href="#" className="hover:text-muted transition-colors">HOME</a>
            <a href="#about" className="hover:text-muted transition-colors">ABOUT</a>
            <a href="#styles" className="hover:text-muted transition-colors">STYLES</a>
            <a href="#pricing" className="hover:text-muted transition-colors">PRICING</a>
            <a href="#academy" className="hover:text-muted transition-colors">ACADEMY</a>
        </div>
        <button className="bg-black text-white px-6 py-2 text-[10px] font-bold tracking-tighter hover:bg-accent transition-all uppercase">
            Visit Academy
        </button>
    </nav>
);

export default Navbar;

import React from 'react';

const Footer = () => (
    <footer className="bg-white border-t border-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold font-display italic">B</span>
                        </div>
                        <span className="font-display font-bold tracking-widest text-xl">BARBER</span>
                    </div>
                    <p className="text-muted text-xs leading-relaxed max-w-xs">
                        "Precision is not just a technique, it's a way of life. We believe every cut should be as unique and bold as the man who wears it."
                    </p>
                    <p className="text-[10px] font-bold text-gray-400 mt-6 tracking-widest">MADE WITH PRECISION © 2024</p>
                </div>
                <div>
                    <h4 className="font-display font-bold text-sm mb-6 tracking-widest">CONTACT</h4>
                    <ul className="text-muted text-xs space-y-4">
                        <li>123 Precision Way <br /> Suite 101, NY 10012</li>
                        <li>+ 1 (222) 333-1234</li>
                        <li>hello@barber.com</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-display font-bold text-sm mb-6 tracking-widest">HOURS</h4>
                    <ul className="text-muted text-xs space-y-4">
                        <li className="flex justify-between"><span>Mon - Fri</span> <span>10:00 - 20:00</span></li>
                        <li className="flex justify-between"><span>Saturday</span> <span>10:00 - 18:00</span></li>
                        <li className="flex justify-between"><span>Sunday</span> <span>Closed</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;

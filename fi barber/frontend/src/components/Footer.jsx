import { Instagram, Scissors } from 'lucide-react';

const Footer = () => {
  const links = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <footer className="bg-white pt-32 pb-10 border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-zinc-950 rounded-xl flex items-center justify-center text-white"><Scissors size={20} /></div>
              <span className="text-2xl font-black italic uppercase text-zinc-950">FI <span className="text-red-600">BARBER.</span></span>
            </div>
            <p className="text-zinc-400 font-bold text-xs uppercase italic leading-loose">
              Mastery in every cut. The ultimate studio for the modern gentleman across Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-black italic uppercase text-xs text-red-600 mb-6 tracking-widest underline underline-offset-8 decoration-2">Navigate</h4>
              <ul className="space-y-4">
                {links.map(link => (
                  <li key={link.id}>
                    <a href={`#${link.id}`} className="text-xs font-black uppercase text-zinc-500 hover:text-zinc-950 transition-colors tracking-widest">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black italic uppercase text-xs text-red-600 mb-6 tracking-widest underline underline-offset-8 decoration-2">Socials</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-xs font-black uppercase text-zinc-500 hover:text-zinc-950 transition-colors tracking-widest flex items-center gap-2"><Instagram size={14}/> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-black text-zinc-400 uppercase tracking-[0.3em]">
          <p>© 2026 FI BARBERSHOP • ALL RIGHTS RESERVED</p>
          <p>EST. 2022 — INDONESIA</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
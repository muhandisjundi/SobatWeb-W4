import { Instagram, Globe, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 md:grid-cols-4 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <span className="text-3xl font-black tracking-tighter text-white uppercase italic">
              FIRST<span className="text-amber-500">.</span>
            </span>
            <p className="text-neutral-500 text-sm font-medium leading-relaxed">
              Standard baru dalam perawatan otomotif premium. Menggabungkan presisi dan estetika.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-white">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold text-neutral-500 uppercase tracking-widest">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Portfolio</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-white">Get in Touch</h4>
            <div className="space-y-4 text-xs font-bold text-neutral-500">
              <p className="flex items-center gap-3 tracking-widest">
                <Instagram size={14} className="text-amber-500" /> @firstdenco.bintaro
              </p>
              <p className="flex items-center gap-3 tracking-widest">
                <Mail size={14} className="text-amber-500" /> firstdenco@gmail.com
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="md:text-right">
            <h4 className="mb-6 text-[10px] font-black tracking-[0.3em] uppercase text-white">Socials</h4>
            <div className="flex md:justify-end gap-3">
              {[Instagram, Globe].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-full bg-neutral-900 border border-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[9px] font-black tracking-[0.4em] text-neutral-600 uppercase">
            © {new Date().getFullYear()} FIRST DETAIL AND COATING. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8 text-[9px] font-black text-neutral-600 uppercase tracking-widest">
            <span>Bintaro</span>
            <span>Tangerang Selatan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
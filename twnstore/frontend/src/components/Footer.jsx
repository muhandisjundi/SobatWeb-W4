import { Instagram, Send, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-black italic uppercase text-black mb-4">TWN STORE.</h2>
            <p className="text-zinc-500 font-bold italic text-sm">Destinasi fashion streetwear terbaik di Kota Tasikmalaya. Berkualitas, trendy, dan terjangkau.</p>
          </div>
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-widest text-zinc-400 mb-6">Our Locations</h4>
            <ul className="space-y-4 text-sm font-bold italic text-black">
              <li className="flex gap-3"><MapPin size={16}/> Jl. Yudanegara No.37A</li>
              <li className="flex gap-3"><MapPin size={16}/> Jl. Cilembang (Depan SPBU SMAN 4)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-black uppercase text-[10px] tracking-widest text-zinc-400 mb-6">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/twn_storetasikmalaya" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><Instagram size={20}/></a>
              <a href="https://wa.me/6282214600622" className="w-12 h-12 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-all"><Send size={20}/></a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-zinc-100 text-center">
          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em]">© 2024 TWN STORE TASIKMALAYA. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
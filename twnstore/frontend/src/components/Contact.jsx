import { motion } from 'framer-motion';
import { MapPin, Phone, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="location" className="py-32 bg-white text-black border-t border-zinc-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black italic uppercase tracking-tighter">VISIT OUR STORE.</h2>
          <p className="text-zinc-500 font-bold italic">Buka Setiap Hari: 11.00 - 22.00 WIB</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-200">
            <MapPin className="mb-4" size={32} />
            <h3 className="font-black italic text-xl uppercase mb-2">Cabang Yudanegara</h3>
            <p className="text-zinc-600 font-bold italic">Jl. Yudanegara No.37A Kota Tasikmalaya</p>
          </div>
          <div className="p-8 bg-zinc-50 rounded-[2rem] border border-zinc-200">
            <MapPin className="mb-4" size={32} />
            <h3 className="font-black italic text-xl uppercase mb-2">Cabang Cilembang</h3>
            <p className="text-zinc-600 font-bold italic">Jl. Cilembang Depan SPBU SMAN 4 Kota Tasikmalaya</p>
          </div>
        </div>

        <div className="bg-black text-white p-12 rounded-[3rem] text-center">
          <h3 className="text-3xl font-black italic uppercase mb-6">Siap Upgrade Penampilan Lo?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.open('https://wa.me/6282214600622')}
              className="bg-white text-black px-10 py-4 rounded-full font-black uppercase italic tracking-widest flex items-center gap-3 hover:invert transition-all"
            >
              <Phone size={18} /> Chat Admin Sekarang
            </button>
            <button 
              onClick={() => window.open('https://www.instagram.com/twn_storetasikmalaya')}
              className="bg-zinc-800 text-white px-10 py-4 rounded-full font-black uppercase italic tracking-widest flex items-center gap-3 hover:bg-zinc-700 transition-all"
            >
              <Instagram size={18} /> Cek Instagram
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
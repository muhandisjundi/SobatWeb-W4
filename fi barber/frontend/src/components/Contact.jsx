import { motion } from 'framer-motion';
import { MapPin, Instagram, ExternalLink, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const locations = [
    { name: "FI Taman Royal", area: "Tangerang", id: "1" },
    { name: "FI Poris Indah", area: "Tangerang", id: "2" },
    { name: "FI Raden Saleh", area: "Tangerang", id: "3" },
    { name: "FI Graha Raya", area: "Tangsel", id: "4" },
    { name: "FI Palembang", area: "Kolonel Atmo", id: "5" },
    { name: "FI Bekasi", area: "Cikarang", id: "6" }
  ];

  return (
    <section id="contact" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          
          {/* SISI KIRI: MAP & LOCATIONS */}
          <div className="flex flex-col">
            <h2 className="text-6xl font-black italic uppercase text-zinc-950 mb-8 tracking-tighter leading-none">
              OUR <br/><span className="text-red-600">STATIONS.</span>
            </h2>
            
            <div className="relative group flex-1 min-h-[400px] mb-8 overflow-hidden rounded-[3rem] border-4 border-zinc-100 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126932.70132172087!2d106.62125134335938!3d-6.17798369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sFI%20Barbershop!5e0!3m2!1sid!2sid!4v1700000000000" 
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
                style={{ border: 0 }} allowFullScreen="" loading="lazy" 
              />
              <div className="absolute inset-0 pointer-events-none border-[12px] border-white/20 rounded-[3rem]"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {locations.map((loc) => (
                <div key={loc.id} className="p-4 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-red-600 transition-all group">
                  <p className="text-[10px] font-black italic text-zinc-400 uppercase tracking-widest mb-1">{loc.area}</p>
                  <p className="text-xs font-black italic text-zinc-900 uppercase tracking-tighter">{loc.name}</p>
                </div>
              ))}
            </div>
          </div>

         {/* SISI KANAN: FRANCHISE PANEL */}
          <div className="bg-zinc-950 rounded-[2.5rem] lg:rounded-[4rem] p-8 lg:p-20 text-white flex flex-col justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-[60px] -mr-16 -mt-16"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 lg:w-20 lg:h-20 bg-red-600 rounded-2xl lg:rounded-3xl flex items-center justify-center mb-6 lg:mb-10 rotate-3 shadow-xl shadow-red-600/20">
                <ShieldCheck className="text-white w-8 h-8 lg:w-10 lg:h-10" />
              </div>
              
              <h3 className="text-3xl lg:text-5xl font-black italic uppercase leading-none mb-4 lg:mb-6">
                BE PART OF <br/><span className="text-red-600">THE LEGACY.</span>
              </h3>
              
              <p className="text-zinc-400 font-bold text-xs lg:text-sm leading-relaxed mb-8 lg:mb-12 uppercase italic tracking-wide max-w-md">
                Bergabunglah dengan jaringan barbershop dengan pertumbuhan tercepat dan sistem bisnis yang teruji.
              </p>

              <div className="space-y-4 mb-8 lg:mb-12">
                <div className="flex items-center gap-4 bg-zinc-900/50 p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-zinc-800">
                  <div className="text-red-600 font-black italic text-2xl lg:text-3xl">10Y+</div>
                  <div className="text-[9px] lg:text-[10px] font-black uppercase text-zinc-500 tracking-[0.2em]">Proven Business Model</div>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-red-600 py-4 lg:py-6 rounded-xl lg:rounded-2xl text-white font-black italic uppercase tracking-[0.2em] text-[10px] lg:text-xs flex items-center justify-center gap-3 hover:bg-white hover:text-red-600 transition-all shadow-2xl"
              >
                Apply For Franchise <ArrowUpRight size={16} />
              </motion.button>
              
              <p className="text-center mt-6 lg:mt-8 text-[8px] lg:text-[9px] font-black text-zinc-600 uppercase tracking-[0.5em]">partnership@fibarber.com</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
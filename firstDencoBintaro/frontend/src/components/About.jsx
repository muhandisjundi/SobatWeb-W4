import { motion } from "framer-motion";
import { ScanEye, ShieldCheck, Sparkles, Gem } from "lucide-react";

const About = () => {
  // Keunggulan layanan Detailing & Coating
  const perks = [
    { 
      icon: ScanEye, 
      label: "Precision Detail", 
      desc: "Inspeksi cat mikroskopis & koreksi multi-tahap." 
    },
    { 
      icon: ShieldCheck, 
      label: "9H Ceramic Shield", 
      desc: "Proteksi nano partikel tahan gores & kimia." 
    },
    { 
      icon: Sparkles, 
      label: "Paint Correction", 
      desc: "Menghapus swirl mark hingga cat 'wet look'." 
    },
    { 
      icon: Gem, 
      label: "Showroom Finish", 
      desc: "Kilau kristal permanen & deep gloss." 
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#050505] relative overflow-hidden">
      
      {/* --- AMBIENT WARM LIGHT EFFECTS --- */}
      {/* Cahaya hangat di pojok kanan atas */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-600/10 blur-[150px] rounded-full pointer-events-none" />
      {/* Cahaya hangat di pojok kiri bawah */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* --- KOLOM GAMBAR (KIRI) --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          {/* Frame Silver Tipis */}
          <div className="absolute inset-0 border border-white/20 rounded-[2rem] transform rotate-3 group-hover:rotate-0 transition-transform duration-700" />
          
          {/* Gambar Detailing Dark Moody */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
            <img
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
              alt="Professional Auto Detailing"
              className="object-cover h-[600px] w-full filter grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
            />
          </div>

          {/* Badge Pengalaman */}
          <div className="absolute -bottom-8 -right-8 bg-neutral-900 border border-neutral-700 p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-1 z-20">
            <span className="text-4xl font-black text-white">5+</span>
            <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold">Years Expert</span>
          </div>
        </motion.div>

        {/* --- KOLOM TEKS (KANAN) --- */}
        <div>
          {/* Subheading Warm Silver */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-[1px] w-12 bg-amber-500" />
            <span className="text-amber-500 font-bold tracking-[0.3em] text-xs uppercase">
              The Art of Detailing
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black uppercase italic mb-8 leading-[0.9] text-white"
          >
            Beyond <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              Cleanliness.
            </span>
          </motion.h2>

          <p className="text-neutral-400 mb-12 font-medium leading-relaxed text-lg">
            Kami tidak hanya mencuci mobil. Kami merestorasi estetika kendaraan Anda. 
            Menggunakan kombinasi <span className="text-white font-bold">Paint Correction</span> presisi dan teknologi <span className="text-white font-bold">Nano Ceramic Coating</span>, kami mengunci kilau cat asli mobil Anda dan melindunginya dari penuaan dini.
          </p>

          {/* Grid Perk Cards */}
          <div className="grid grid-cols-2 gap-5">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                // Kartu Hitam dengan Border Halus
                className="p-6 bg-neutral-900/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-amber-500/50 hover:bg-neutral-900 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <p.icon className="text-neutral-500 group-hover:text-amber-500 transition-colors duration-300" size={24} />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-amber-500 transition-colors" />
                </div>
                
                <h4 className="font-bold text-white uppercase italic text-sm mb-2">{p.label}</h4>
                <p className="text-[10px] text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-400 transition-colors">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
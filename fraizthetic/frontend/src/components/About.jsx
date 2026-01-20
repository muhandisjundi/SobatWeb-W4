import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Users, HeartPulse } from "lucide-react";

const About = () => {
  const perks = [
    { 
      icon: Users, 
      label: "Expert Doctors", 
      desc: "Tim dokter spesialis kulit bersertifikat internasional." 
    },
    { 
      icon: ShieldCheck, 
      label: "Medical Grade", 
      desc: "Teknologi medis terbaru yang aman dan teruji klinis." 
    },
    { 
      icon: HeartPulse, 
      label: "Personalized", 
      desc: "Perawatan yang dirancang khusus untuk kondisi kulit Anda." 
    },
    { 
      icon: Sparkles, 
      label: "Glow Result", 
      desc: "Hasil nyata yang memberikan kilau alami pada kulit." 
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Dekorasi Background Bulatan Ungu Halus */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-50 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
        
        {/* --- IMAGE SIDE --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Aksen Frame di Belakang Gambar */}
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-purple-100 rounded-[3rem] -z-10 hidden md:block" />
          
          <img
            src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&auto=format&fit=crop"
            alt="Beauty Clinic Interior"
            className="rounded-[3rem] shadow-2xl shadow-purple-200/50 object-cover h-[400px] md:h-[600px] w-full"
          />
          
          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 -right-4 md:-right-8 bg-white p-6 rounded-3xl shadow-xl border border-purple-50 hidden sm:block"
          >
            <div className="flex items-center gap-4">
              <div className="bg-purple-600 p-3 rounded-2xl text-white">
                <Sparkles size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase text-purple-600 tracking-widest">Trust Since</p>
                <p className="text-2xl font-black text-slate-900 italic">2018</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* --- CONTENT SIDE --- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-purple-600 font-black tracking-[0.3em] text-[10px] uppercase block mb-4">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic leading-[0.9] tracking-tighter mb-8">
              Enhancing Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">True Radiance.</span>
            </h2>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Kami percaya bahwa kecantikan dimulai dari kulit yang sehat. Di <span className="font-bold text-purple-600">Fraiz</span>, kami menggabungkan keahlian medis dengan seni estetika untuk membantu Anda mencapai versi terbaik dari diri Anda.
            </p>
          </motion.div>

          {/* Grid Fitur */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {perks.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: '#d8b4fe' }}
                className="p-6 bg-white rounded-[2rem] border border-purple-50 shadow-sm transition-all duration-300"
              >
                <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
                  <p.icon className="text-purple-600" size={20} />
                </div>
                <h4 className="font-black text-slate-900 uppercase italic text-sm tracking-tight">{p.label}</h4>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
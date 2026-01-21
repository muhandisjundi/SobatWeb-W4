import { motion } from "framer-motion";
import { HeartHandshake, ShieldCheck, Sparkles, Brain } from "lucide-react";

const About = () => {
  const values = [
    { 
      icon: HeartHandshake, 
      label: "Empati Total", 
      desc: "Setiap suara didengar tanpa penghakiman.",
      bg: "bg-pink-50",
      iconColor: "text-pink-400"
    },
    { 
      icon: ShieldCheck, 
      label: "Privasi Terjaga", 
      desc: "Ruang aman dengan kerahasiaan identitas.",
      bg: "bg-sky-50",
      iconColor: "text-sky-400"
    },
    { 
      icon: Brain, 
      label: "Berbasis Sains", 
      desc: "Didampingi oleh praktisi psikologi ahli.",
      bg: "bg-teal-50",
      iconColor: "text-teal-500"
    },
    { 
      icon: Sparkles, 
      label: "Tumbuh Bersama", 
      desc: "Proses transformasi diri yang berkelanjutan.",
      bg: "bg-indigo-50",
      iconColor: "text-indigo-400"
    },
  ];

  return (
    <section id="about" className="py-32 bg-[#F8FBFC] overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* Image Section with Decorative Element */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100/50 rounded-full blur-3xl -z-10"
          />
          <motion.img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800"
            alt="Community Connection"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-[4rem] shadow-2xl shadow-teal-900/5 border-8 border-white object-cover aspect-square md:aspect-auto"
          />
        </div>

        {/* Content Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-8 leading-tight">
              Tempat di mana <span className="text-pink-400 italic">Kesehatan Mental</span> menemukan rumahnya.
            </h2>
            <p className="text-slate-500 font-light leading-relaxed mb-12 text-lg">
              Eureca Smart Community lahir dari keinginan untuk menciptakan lingkungan yang mendukung setiap individu dalam memahami diri mereka lebih dalam. Kami percaya bahwa tidak ada seorang pun yang harus berjuang sendirian.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className={`p-8 ${v.bg} rounded-[2.5rem] border border-white transition-all duration-300 shadow-sm`}
              >
                <v.icon className={`${v.iconColor} mb-4`} size={28} strokeWidth={1.5} />
                <h4 className="font-serif text-xl text-slate-800 mb-2">{v.label}</h4>
                <p className="text-sm text-slate-500 font-light leading-snug">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
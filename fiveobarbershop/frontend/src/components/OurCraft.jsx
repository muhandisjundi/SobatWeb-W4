import React from 'react';
import { motion } from 'framer-motion';
// Mengambil ikon yang relevan dengan Barber
import { Scissors, Ruler, Sparkles } from 'lucide-react';

const FeatureCard = ({ title, desc, Icon, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ y: -10 }}
    className="group relative bg-[#0f0f0f] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden"
  >
    {/* Decorative Background Number */}
    <span className="absolute -right-4 -bottom-4 text-white/[0.02] text-9xl font-black italic group-hover:text-white/[0.05] transition-colors pointer-events-none">
      0{index + 1}
    </span>
    
    {/* Lucide Icon Container */}
    <div className="mb-8 p-3 inline-block bg-white/5 rounded-xl group-hover:bg-white group-hover:text-black transition-all duration-500">
      <Icon size={32} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-500" />
    </div>

    <h3 className="text-2xl font-black tracking-tighter text-white mb-4 italic uppercase">
      {title}
    </h3>
    <p className="text-gray-400 text-sm leading-relaxed relative z-10 max-w-[250px]">
      {desc}
    </p>
    
    {/* Hover Line Animation */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-700 group-hover:w-full" />
  </motion.div>
);

const OurCraft = () => {
  const crafts = [
    { 
      icon: Scissors, 
      title: "Heritage", 
      desc: "Keahlian tradisional puluhan tahun yang diwariskan melalui generasi master barber terbaik." 
    },
    { 
      icon: Ruler, 
      title: "Precision", 
      desc: "Setiap potongan adalah mahakarya teknis dengan simetri matematis dan visi estetika tajam." 
    },
    { 
      icon: Sparkles, 
      title: "Lifestyle", 
      desc: "Bukan sekadar potong rambut, ini adalah pernyataan rasa percaya diri pada dunia." 
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-10 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase italic">
              Our <br /> 
              <span 
                className="text-transparent" 
                style={{ WebkitTextStroke: '1px rgba(255,255,255,0.6)' }}
              >
                Identity
              </span>
            </h2>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 border-l border-white/10 pl-8"
          >
            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
              "Berakar pada warisan, disempurnakan teknik modern. Kami tidak hanya memotong rambut; kami memahat identitas pria modern."
            </p>
          </motion.div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/5 shadow-2xl">
          {crafts.map((item, idx) => (
            <FeatureCard
              key={idx}
              index={idx}
              Icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-white opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
};

export default OurCraft;
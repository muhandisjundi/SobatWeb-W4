import { motion, AnimatePresence } from "framer-motion";
import { Heart, Camera } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  // Kategori disesuaikan dengan kegiatan komunitas
  const categories = ['All', 'Therapy', 'Workshop', 'Social', 'Seminar'];
  
  const projects = [
    { id: 1, title: "Sesi Healing Garden", category: "Therapy", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800" },
    { id: 2, title: "Workshop Relawan", category: "Workshop", img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800" },
    { id: 3, title: "Seminar Eureka", category: "Seminar", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800" },
    { id: 4, title: "Terapi Seni Bersama", category: "Therapy", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800" },
    { id: 5, title: "Berbagi Senyum", category: "Social", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800" },
    { id: 6, title: "Mental Health Talk", category: "Seminar", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800" },
  ];

  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
  };

  return (
    <section id="gallery" className="py-32 bg-[#FBFDFF]"> {/* Light blue-ish white */}
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight">
              Jejak <span className="text-teal-500 italic">Kedamaian.</span>
            </h2>
            <p className="text-slate-500 mt-4 font-light tracking-wide">Melihat lebih dekat aktivitas dan kebersamaan kami.</p>
          </motion.div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 relative
                ${filter === cat ? 'text-white' : 'text-slate-400 hover:text-teal-500'}`}
              >
                <span className="relative z-10">{cat}</span>
                {filter === cat && (
                  <motion.div 
                    layoutId="activeFilterGallery"
                    className="absolute inset-0 bg-teal-500 rounded-full shadow-lg shadow-teal-100"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden bg-white shadow-sm border border-slate-50"
              >
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105" 
                />
                
                {/* Overlay - Gradient Tosca/Blue/Pink Soft */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-sky-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-10 flex flex-col justify-end">
                  <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-[1px] bg-pink-300"></span>
                      <span className="text-pink-100 text-[10px] font-bold uppercase tracking-widest">{p.category}</span>
                    </div>
                    <h3 className="text-white text-3xl font-serif italic mb-6">{p.title}</h3>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-white/80 text-xs italic">
                        <Camera size={14} /> Documentation
                      </div>
                      <button className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-pink-400 transition-colors duration-300">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center"
        >
          <p className="font-serif text-slate-400 italic text-lg">Tertarik untuk menjadi bagian dari cerita kami berikutnya?</p>
          <a 
            href="#contact" 
            className="inline-block mt-6 px-10 py-4 bg-white border border-teal-100 text-teal-600 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-teal-500 hover:text-white hover:shadow-xl hover:shadow-teal-100 transition-all duration-300"
          >
            Gabung Komunitas
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
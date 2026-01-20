import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye, Heart } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Facial", "Body", "Anti-Aging", "Injectables"];

  const results = [
    { id: 1, title: "HydraFacial Glow", category: "Facial", tag: "Hot", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800" },
    { id: 2, title: "Laser Hair Removal", category: "Body", tag: "Best Seller", img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=800" },
    { id: 3, title: "Pico Laser Treatment", category: "Anti-Aging", tag: "Premium", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800" },
    { id: 4, title: "Lip Filler Sculpt", category: "Injectables", tag: "Natural", img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800" }
  ];

  const filtered = filter === "All" ? results : results.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decorative - Soft Purple Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] -z-10 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-fuchsia-50 rounded-full blur-[100px] -z-10 opacity-60" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8 text-center lg:text-left">
          <div>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-3">
              <Sparkles className="text-purple-500" size={18} />
              <span className="text-purple-600 font-black tracking-[0.3em] text-[10px] uppercase">Our Masterpiece</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900 leading-[0.9]">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Aesthetic   </span> Gallery.
            </h2>
          </div>

          {/* --- FILTER BUTTONS --- */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 md:px-7 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest transition-all border
                ${filter === cat 
                  ? "text-white bg-purple-600 border-purple-600 shadow-lg shadow-purple-200" 
                  : "text-slate-400 border-slate-100 hover:border-purple-200 hover:text-purple-400 bg-slate-50/50"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* --- GRID SHOWCASE --- */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.23, 1, 0.32, 1] // Custom Cubic Bezier untuk kesan mewah
                }}
                whileHover="hover" // Trigger animasi internal saat di-hover
                className="group relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-purple-100/30 border border-purple-50 cursor-pointer"
              >
                {/* Image Container with Smooth Zoom */}
                <motion.div 
                  variants={{
                    hover: { scale: 1.08 }
                  }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                
                {/* Overlay: Lebih halus & Elegan */}
                <motion.div 
                  variants={{
                    hover: { opacity: 1 }
                  }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-900/20 to-transparent z-10"
                />

                {/* Floating Heart: Muncul dengan efek Bounce */}
                <div className="absolute top-5 right-5 z-20">
                  <motion.div 
                    variants={{
                      hover: { scale: 1.1, y: 0, opacity: 1 }
                    }}
                    initial={{ scale: 0.8, y: -10, opacity: 0 }}
                    className="bg-white/90 backdrop-blur-md p-2.5 rounded-full shadow-lg"
                  >
                    <Heart size={14} className="text-fuchsia-500 fill-fuchsia-500" />
                  </motion.div>
                </div>
                  
                {/* Konten Teks: Animasi Reveal dari Bawah */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                  <motion.div
                    variants={{
                      hover: { y: 0, opacity: 1 }
                    }}
                    initial={{ y: 30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <span className="inline-block bg-purple-500/20 backdrop-blur-sm text-purple-200 text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-3 border border-white/10">
                      {p.category} • {p.tag}
                    </span>

                    <h3 className="text-white text-xl md:text-2xl font-black italic uppercase tracking-tighter mb-5 leading-none">
                      {p.title}
                    </h3>

                    <div className="flex gap-2">
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-[3] h-12 bg-white text-purple-600 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-colors hover:bg-purple-50"
                      >
                        Book Treatment
                      </motion.button>

                      <motion.button 
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 h-12 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center border border-white/30"
                      >
                        <Eye size={18} />
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- FOOTER CTA --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-slate-400 text-xs font-medium italic">
            *Hasil dapat bervariasi tergantung kondisi kulit setiap individu.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Gallery;
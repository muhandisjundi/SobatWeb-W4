import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Eye } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Interior", "Detailing", "Coating"];

  const results = [
    { id: 1, title: "Nano Coating 9H+", category: "Coating", price: "Ultimate", img: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=800" },
    { id: 2, title: "Paint Correction", category: "Detailing", price: "Premium", img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800" },
    { id: 3, title: "Luxury Interior", category: "Interior", price: "Fresh", img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800" },
    { id: 4, title: "Stage 3 Polish", category: "Detailing", price: "Advanced", img: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?q=80&w=800" }
  ];

  const filtered = filter === "All" ? results : results.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-32 bg-[#050505] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.05),_transparent_40%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-amber-500 font-bold tracking-widest uppercase text-[10px]">Portfolio</span>
            <h2 className="text-5xl font-black uppercase italic tracking-tighter text-white">The <span className="text-neutral-500">Exhibition.</span></h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-[10px] uppercase tracking-widest transition-all border
                ${filter === cat ? "text-black bg-white border-white" : "text-neutral-500 border-neutral-800 hover:border-amber-500"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-neutral-900 border border-white/5"
              >
                <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                  <span className="text-amber-500 text-[10px] font-black uppercase tracking-widest mb-2">{p.category}</span>
                  <h3 className="text-white text-2xl font-black italic uppercase tracking-tighter mb-4">{p.title}</h3>
                  <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all"><Eye size={20} /></button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
export default Gallery;
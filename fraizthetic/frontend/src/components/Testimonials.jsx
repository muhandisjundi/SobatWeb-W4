import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';
import { Sparkles, Star } from "lucide-react";

const Testimonials = () => {
  const comparisons = [
    { 
      title: "Glass Skin Laser", 
      desc: "Transformasi tekstur kulit lebih halus, mengecilkan pori-pori, dan memberikan efek glowing instan.", 
      before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80&sepia=30&blur=15", 
      after: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80", 
      category: "Dermatology" 
    },
    { 
      title: "Acne Scar Removal", 
      desc: "Pudarkan bekas jerawat mendalam dengan teknologi Pico Laser terbaru dalam 3 sesi perawatan.", 
      before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80&sepia=30&blur=15", 
      after: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=800&q=80", 
      category: "Aesthetic" 
    }
  ];  

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-white overflow-hidden relative">
      {/* Dekorasi Background Soft Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-purple-100/30 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="text-purple-500" size={20} />
              <span className="text-purple-600 font-black tracking-[0.3em] text-[10px] uppercase">Results & Stories</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter">
              Real <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Glow Up.</span>
            </h2>
            
            <p className="text-slate-500 uppercase tracking-[0.3em] text-[9px] md:text-[11px] mt-8 font-bold">
              Visualizing your skin transformation
            </p>
          </motion.div>
        </div>

        {/* --- GRID COMPARISON --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {comparisons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group"
            >
              {/* Slider Container */}
              <div className="relative h-[350px] sm:h-[450px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl shadow-purple-200/50 border-4 border-white group-hover:scale-[1.02] transition-transform duration-500">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={item.before} alt="Before" />}
                  itemTwo={<ReactCompareSliderImage src={item.after} alt="After" />}
                  handle={
                    <ReactCompareSliderHandle 
                      buttonStyle={{ 
                        background: '#9333ea', 
                        border: '4px solid #fff',
                        width: '45px',
                        height: '45px',
                        boxShadow: '0 10px 15px -3px rgba(147, 51, 234, 0.4)'
                      }} 
                    />
                  }
                />
                
                {/* Badge Labels */}
                <div className="absolute top-6 left-6 bg-slate-900/80 backdrop-blur-md text-[9px] font-black text-white px-4 py-1.5 rounded-full tracking-widest">
                  BEFORE
                </div>
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-[9px] font-black text-purple-600 px-4 py-1.5 rounded-full tracking-widest shadow-lg">
                  AFTER
                </div>
              </div>

              {/* Info Text */}
              <div className="mt-10 text-center md:text-left px-4">
                <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-purple-500 text-purple-500" />
                  ))}
                </div>
                <span className="text-purple-600 text-[11px] font-black uppercase tracking-[0.2em]">{item.category}</span>
                <h3 className="text-slate-900 text-2xl md:text-3xl font-black italic uppercase mt-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed font-medium">
                  "{item.desc}"
                </p>
                
                {/* Divider Tipis */}
                <div className="h-[1px] w-full bg-gradient-to-r from-purple-100 via-purple-50 to-transparent mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
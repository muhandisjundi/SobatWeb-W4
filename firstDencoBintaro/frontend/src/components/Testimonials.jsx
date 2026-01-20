import { motion } from "framer-motion";
import { ReactCompareSlider, ReactCompareSliderImage, ReactCompareSliderHandle } from 'react-compare-slider';

const Testimonials = () => {
  const comparisons = [
    { 
      title: "Paint Correction", 
      desc: "Menghilangkan swirl marks & mengembalikan kejernihan cat hingga 99%.", 
      before: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?grayscale=1", 
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d", 
      category: "Detailing" 
    },
    { 
      title: "Ceramic Result", 
      desc: "Proteksi 9H Nano Coating dengan efek water repellent (daun talas).", 
      before: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?grayscale=1", 
      after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7", 
      category: "Coating" 
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER RESPONSIVE --- */}
        <div className="text-center mb-12 md:mb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Ukuran font dinamis: text-3xl di HP, text-5xl di Tablet, text-6xl di Desktop */}
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white italic uppercase leading-[0.9] tracking-tighter">
              The <span className="text-amber-500">Metamorphosis.</span>
            </h2>
            
            {/* Deskripsi bawah dengan tracking yang disesuaikan */}
            <p className="text-neutral-500 uppercase tracking-[0.2em] md:tracking-[0.5em] text-[8px] md:text-[10px] mt-6 font-bold">
              Visualizing the perfection
            </p>
            
            {/* Garis dekoratif agar lebih mewah */}
            <div className="h-[1px] w-20 bg-amber-500 mx-auto mt-6" />
          </motion.div>
        </div>

        {/* --- GRID COMPARISON --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          {comparisons.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              {/* Slider Container: h-[300px] di HP agar tidak terlalu panjang, h-[450px] di Desktop */}
              <div className="relative h-[300px] sm:h-[400px] md:h-[450px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 group">
                <ReactCompareSlider
                  itemOne={<ReactCompareSliderImage src={item.before} style={{ filter: 'brightness(0.6)' }} />}
                  itemTwo={<ReactCompareSliderImage src={item.after} />}
                  handle={
                    <ReactCompareSliderHandle 
                      buttonStyle={{ 
                        background: '#f59e0b', 
                        border: '4px solid #000',
                        width: '40px',
                        height: '40px'
                      }} 
                    />
                  }
                />
                {/* Badge Label */}
                <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/80 backdrop-blur-md text-[8px] md:text-[9px] font-bold text-white px-3 py-1 rounded-full border border-white/10">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-amber-500 text-[8px] md:text-[9px] font-bold text-black px-3 py-1 rounded-full shadow-lg">
                  AFTER
                </div>
              </div>

              {/* Info Text */}
              <div className="mt-6 md:mt-8 px-2 md:px-4">
                <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.3em]">{item.category}</span>
                <h3 className="text-white text-xl md:text-2xl font-black italic uppercase mt-1 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-neutral-500 text-xs md:text-sm mt-3 leading-relaxed italic border-l-2 border-neutral-800 pl-4">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
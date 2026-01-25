import { motion } from "framer-motion";
import { MessageCircle, MapPin, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-28 md:pt-20 pb-20">
      
      {/* BG TEXT - Hidden on very small screens to avoid clutter */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <h1 className="text-[30vw] font-black italic uppercase leading-none text-black tracking-tighter">TASIK</h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-center text-center lg:text-left">
          
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <span className="h-[2px] w-8 md:w-12 bg-black"></span>
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">Authentic Streetwear</span>
              </div>
              
              <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black leading-[0.85] tracking-tighter italic uppercase text-black">
                TWN <br className="hidden md:block" /> 
                <span className="text-zinc-900">STORE</span>
                <span className="text-zinc-300">.</span>
              </h2>
            </motion.div>

            <motion.p className="max-w-md mx-auto lg:mx-0 text-zinc-500 font-bold italic text-sm md:text-lg leading-snug">
              Kurasi terbaik untuk sepatu & apparel. Update stok setiap hari. 
              All item starts from <span className="text-black underline">85K</span>.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <button onClick={() => window.open('https://wa.me/6282214600622')} className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase italic text-xs tracking-widest flex items-center justify-center gap-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)]">
                <MessageCircle size={18} /> Chat Admin
              </button>
              <a href="#location" className="bg-white text-black border-2 md:border-4 border-black px-8 py-4 rounded-xl font-black uppercase italic text-xs tracking-widest flex items-center justify-center gap-3">
                <MapPin size={18} /> Visit Store
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="lg:col-span-5 relative px-4 md:px-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              className="relative aspect-[4/5] bg-zinc-100 rounded-[2rem] md:rounded-[3rem] border-4 border-black overflow-hidden shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]"
            >
              <img src="https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800" alt="Product" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 bg-white border-2 border-black p-4 md:p-6 rounded-xl">
                <div className="flex justify-between items-center">
                  <h4 className="font-black italic uppercase text-[10px] md:text-sm">New Item</h4>
                  <div className="text-lg md:text-2xl font-black italic">85K</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="absolute bottom-0 w-full bg-black py-3 overflow-hidden whitespace-nowrap">
        <motion.div animate={{ x: ["0%", "-50%"] }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="flex gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-8 items-center text-white font-black italic uppercase text-sm md:text-lg">
              <span>TWN STORE TASIKMALAYA</span> <span>●</span>
              <span>ALL ITEM 85K</span> <span>●</span>
              <span>DAILY RESTOCK</span> <span>●</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
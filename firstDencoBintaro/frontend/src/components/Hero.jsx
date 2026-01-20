import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const heroBgImage = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2000&auto=format&fit=crop";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img src={heroBgImage} alt="Luxury Car" className="w-full h-full object-cover opacity-60 scale-105" />
        {/* Ambient Warm Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_100%)] opacity-70" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8 mx-auto"
        >
          <ShieldCheck size={16} className="text-amber-500" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/80">Premium Protection</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-[9.5rem] font-black leading-[0.85] tracking-tighter mb-8 italic text-white"
        >
          ULTIMATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-neutral-600">SHINE.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-400 text-base md:text-xl max-w-2xl mx-auto mb-12 font-medium"
        >
          Restorasi kilau showroom dengan teknologi <span className="text-white">Nano Ceramic 9H+</span>. Proteksi abadi untuk investasi otomotif Anda.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <button className="px-10 py-5 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-amber-500 hover:text-white transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)] group">
            Book Appointment
            <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
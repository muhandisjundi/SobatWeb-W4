import { motion } from "framer-motion";
import { Scissors, Star, ShieldCheck } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-white overflow-hidden">
      {/* Black Diagonal Background Section */}
      <div className="absolute right-0 top-0 w-full lg:w-[45%] h-full bg-zinc-950 skew-x-[-6deg] translate-x-20 hidden lg:block border-l-8 border-red-600" />

      <div className="container mx-auto px-6 relative z-10 pt-[140px] pb-20">
        <div className="grid lg:grid-cols-12 gap-4 items-center">
          
          {/* Left Side: Massive Typography */}
          <div className="lg:col-span-7 relative">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-[2px] w-12 bg-red-600" />
              <span className="text-xs font-black uppercase tracking-[0.4em] text-zinc-500">Premium Grooming Studio</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              className="text-8xl md:text-[11rem] font-black leading-[0.75] tracking-tighter uppercase text-zinc-950 italic"
            >
              FI <br />
              <span className="text-red-600">SHARP.</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="mt-10 grid grid-cols-2 gap-8 max-w-lg"
            >
              <p className="text-zinc-500 font-bold text-sm leading-relaxed uppercase italic">
                Bukan sekadar potong rambut. <br/>Kami membentuk karakter Anda.
              </p>
              <div className="flex flex-col border-l-2 border-zinc-100 pl-6">
                <span className="text-3xl font-black text-zinc-900 italic">10Y+</span>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Mastery Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Complex Image Composition */}
          <div className="lg:col-span-5 relative mt-20 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              {/* Main Image with Frame */}
              <div className="relative z-20 bg-zinc-900 p-3 rounded-2xl shadow-2xl rotate-3">
                <img 
                  src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800" 
                  className="w-full aspect-[4/5] object-cover rounded-xl transition-all duration-700" 
                  alt="FI Barber" 
                />
              </div>

              {/* Floating Black Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-zinc-950 rounded-full flex items-center justify-center border-4 border-red-600 z-30 shadow-2xl">
                <div className="text-center">
                  <Scissors className="text-white mx-auto mb-1" size={32} />
                  <span className="text-white font-black text-[10px] uppercase tracking-tighter italic">Top Rated</span>
                </div>
              </div>

              {/* Decorative Text */}
              <div className="absolute -right-12 bottom-1/4 rotate-90 origin-right text-white/10 text-8xl font-black italic select-none pointer-events-none uppercase">
                Est 2014
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Vertical Location Sidebar */}
      <div className="absolute left-6 bottom-12 hidden xl:flex flex-col gap-6 items-center">
        <div className="h-20 w-[1px] bg-zinc-200" />
        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.5em] [writing-mode:vertical-lr] rotate-180">
          JKT • TNG • PLG • BB • BKS • CKR
        </p>
      </div>
    </section>
  );
};
export default Hero;
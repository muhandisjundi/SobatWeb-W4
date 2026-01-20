import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#FAFAFA]">
      {/* Soft Background Blobs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-200/30 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-pink-200/30 blur-[150px] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-8">
            <Star size={14} className="text-purple-600 fill-purple-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-900">
              No. 1 Aesthetic Clinic in Town
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight mb-8 text-slate-900">
            Unlock Your <br/>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent italic pr-2">
              True Radiance.
            </span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Perpaduan teknologi medis modern dan seni estetika. 
            Konsultasikan kulit impian Anda bersama dermatologist ahli kami.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center gap-2 hover:gap-4">
              Book Appointment <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-purple-100 rounded-full font-bold hover:bg-purple-50 transition-all">
              View Treatments
            </button>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div style={{ y: y1 }} className="relative hidden lg:block">
           <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(168,85,247,0.3)] border-[8px] border-white">
              <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" alt="Beautiful Skin" className="w-full h-auto object-cover" />
           </div>
           {/* Floating Badge */}
           <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 z-20 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white"
           >
              <div className="flex items-center gap-4">
                 <div className="text-3xl font-black text-purple-600">5k+</div>
                 <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Happy <br/>Patients</div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
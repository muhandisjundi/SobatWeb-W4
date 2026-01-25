import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 100]); // Dikurangi sedikit agar tidak overlap jauh

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-12 overflow-hidden bg-[#FAFAFA]">
      {/* Background Blobs - Disesuaikan ukurannya untuk mobile */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-purple-200/30 blur-[80px] md:blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1" // Teks di bawah gambar saat mobile (opsional)
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Star size={14} className="text-purple-600 fill-purple-600" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-900">
              No. 1 Aesthetic Clinic
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 text-slate-900">
            Unlock Your <br/>
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent italic pr-2">
              True Radiance.
            </span>
          </h1>

          <p className="text-slate-500 text-base md:text-xl max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
            Perpaduan teknologi medis modern dan seni estetika. Konsultasikan kulit impian Anda bersama dermatologist ahli kami.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-bold shadow-xl shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
              Book Appointment <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 border border-purple-100 rounded-full font-bold hover:bg-purple-50 transition-all">
              View Treatments
            </button>
          </div>
        </motion.div>

        {/* Hero Image - Sekarang tampil di mobile (order-1) */}
        <motion.div 
          style={{ y: y1 }} 
          className="relative order-1 lg:order-2 px-4 md:px-0"
        >
           <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[6px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" 
                alt="Beautiful Skin" 
                className="w-full h-[300px] md:h-auto object-cover" 
              />
           </div>
           
           {/* Floating Badge - Ukuran menyesuaikan layar */}
           <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-2 md:-bottom-10 md:-left-10 z-20 bg-white/90 backdrop-blur-xl p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-white"
           >
              <div className="flex items-center gap-3 md:gap-4">
                 <div className="text-2xl md:text-3xl font-black text-purple-600">5k+</div>
                 <div className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider">Happy <br/>Patients</div>
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
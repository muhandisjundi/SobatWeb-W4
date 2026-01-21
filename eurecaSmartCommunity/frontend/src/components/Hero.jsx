import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Leaf, Sparkles } from "lucide-react";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 30 });

  const bgX = useTransform(smoothX, [0, 100], [0, -20]);
  const bgY = useTransform(smoothY, [0, 100], [0, -20]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    
    mouseX.set(x * 50);
    mouseY.set(y * 50);
  };

  return (
    <section 
      onMouseMove={handleMouseMove} 
      id="home" 
      // HAPUS bg-[#F4F9F9] dari sini agar tidak menutupi gambar
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-50"
    >
      
      {/* --- LAYER 1: Background Image (Paling Bawah) --- */}
      {/* Gunakan z-0 agar pasti di render di atas background default section tapi di bawah konten */}
      <motion.div 
        style={{ x: bgX, y: bgY, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2500&auto=format&fit=crop"
          alt="Peaceful Nature"
          // Opacity dinaikkan ke 60 (opacity-60) agar terlihat
          // Blur dikurangi sedikit agar tekstur daun lebih kelihatan
          className="w-full h-full object-cover opacity-60 filter blur-[1px]" 
        />
      </motion.div>

      {/* --- LAYER 2: Overlay Gradient (Pemanis) --- */}
      {/* Gunakan z-10 agar menimpa gambar, tapi di bawah teks */}
      {/* Opacity gradasi dikurangi (white/90 -> white/40) di bagian atas agar gambar terlihat */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-[#F0F9F9]/80 to-[#F0F9F9] z-10" />

      {/* --- LAYER 3: Decorative Orbs --- */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div style={{ x: smoothX, y: smoothY }} className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-teal-200/40 blur-[100px] rounded-full mix-blend-multiply" />
        <motion.div style={{ x: smoothX, y: smoothY }} className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-pink-200/40 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      {/* --- LAYER 4: Main Content (Paling Atas) --- */}
      {/* Gunakan z-20 agar teks bisa diklik dan dibaca jelas */}
      <div className="container mx-auto px-6 text-center relative z-20">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-white/50 shadow-sm mb-10"
        >
          <Leaf size={14} className="text-teal-600" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700">Safe Space for Everyone</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[6.5rem] font-serif text-slate-800 leading-[1.1] mb-8 tracking-tight drop-shadow-sm"
        >
          Healing <span className="italic text-teal-600 relative inline-block">
             Together
             <motion.span 
               initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 1, duration: 1 }}
               className="absolute bottom-2 left-0 h-[6px] bg-teal-200/50 -z-10 rounded-full"
             />
          </span>.<br />
          Growing <span className="italic text-pink-500 relative inline-block">
            Smarter
            <motion.span 
               initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 1.2, duration: 1 }}
               className="absolute bottom-2 left-0 h-[6px] bg-pink-200/50 -z-10 rounded-full"
             />
          </span>.
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-medium leading-relaxed tracking-wide"
        >
          Eureka Smart Community adalah ruang aman bagi jiwa untuk berbagi, 
          pulih, dan berkembang dengan dukungan psikologis yang hangat tanpa penghakiman.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <a href="#contact" className="group px-10 py-5 bg-gradient-to-r from-teal-500 to-teal-400 text-white rounded-full font-bold shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(20,184,166,0.4)] hover:-translate-y-1 transition-all flex items-center gap-3">
            Gabung Komunitas <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="#about" className="px-10 py-5 bg-white/80 backdrop-blur-sm text-slate-600 rounded-full font-bold border border-white hover:border-teal-200 hover:text-teal-600 hover:bg-white transition-all flex items-center gap-2 shadow-sm">
            Pelajari Dulu <Sparkles size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
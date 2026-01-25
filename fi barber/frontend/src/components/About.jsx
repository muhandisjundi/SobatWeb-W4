import { motion } from "framer-motion";
import { Scissors, ShieldCheck, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* SISI KIRI: VISUAL COMPOSITION */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-[12px] border-zinc-100 shadow-2xl">
              <img 
                src="logo.jpg" 
                alt="FI Barbershop Interior" 
                className="w-full object-cover  transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
            </div>

            {/* Decorative Floating Card */}
            <div className="absolute -bottom-10 -right-10 z-20 bg-red-600 p-8 rounded-[2rem] shadow-2xl rotate-6 hidden md:block">
              <Scissors size={40} className="text-white animate-pulse" />
            </div>
            
            {/* Background Shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-zinc-950 rounded-full -z-10 opacity-5" />
          </motion.div>

          {/* SISI KANAN: CONTENT */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 bg-zinc-900 px-4 py-2 rounded-lg mb-8"
            >
              <ShieldCheck size={14} className="text-red-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Premium Brand Indonesia</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-black italic uppercase mb-8 tracking-tighter leading-none text-zinc-950"
            >
              CRAFTING <br /><span className="text-red-600">CONFIDENCE.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-red-600 pl-6">
                "We dedicate ourselves to give you the best value of grooming experience by providing high quality services for men and boys with comfortable environment. All in a warm and friendly atmosphere."
              </p>
              
              <p className="text-zinc-400 font-bold text-sm uppercase tracking-wide leading-loose">
                Your satisfaction is our priority and that’s why we always try to keep our equipments clean and offer you more facilities so that you can relax to the fullest.
              </p>

              <div className="pt-8 border-t border-zinc-100">
                <p className="text-zinc-900 font-black italic text-lg uppercase mb-4">
                  FI Barbershop is a premium brand of barbershop in Indonesia.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Jakarta", "Tangerang", "Palembang", "Lubuk Linggau", "Bangka"].map((city) => (
                    <span key={city} className="px-4 py-2 bg-zinc-50 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-400 border border-zinc-200">
                      {city}
                    </span>
                  ))}
                  <span className="px-4 py-2 bg-red-600 rounded-full text-[10px] font-black uppercase tracking-widest text-white animate-pulse">
                    & More Cities Growing
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
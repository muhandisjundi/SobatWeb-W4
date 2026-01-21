import { motion } from 'framer-motion';
import { Heart, Users, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  const programs = [
    { 
      icon: Heart, 
      title: 'Support Group', 
      desc: 'Ruang aman untuk berbagi cerita dan saling menguatkan dalam perjalanan kesehatan mental.',
      color: 'bg-teal-50',
      iconColor: 'text-teal-500'
    },
    { 
      icon: Users, 
      title: 'Expert Talks', 
      desc: 'Edukasi mendalam bersama praktisi psikologi untuk memahami diri lebih baik.',
      color: 'bg-sky-50',
      iconColor: 'text-sky-500'
    },
    { 
      icon: MessageCircle, 
      title: 'Peer Counseling', 
      desc: 'Layanan pendengar setia dari rekan komunitas yang telah terlatih secara empatik.',
      color: 'bg-pink-50',
      iconColor: 'text-pink-400'
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#FBFDFF] relative overflow-hidden">
      {/* Dekorasi Latar Belakang - Soft Blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100/30 blur-[120px] rounded-full -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-100/30 blur-[120px] rounded-full -z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[11px] font-bold uppercase tracking-[0.3em] text-teal-600 mb-4 block"
          >
            Our Community Programs
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-slate-800 mb-6"
          >
            Bertumbuh dalam <span className="text-pink-400 italic font-medium">Harmoni</span>
          </motion.h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-200 to-pink-200 mx-auto rounded-full"></div>
        </div>

        {/* Grid Program */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {programs.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className={`p-12 rounded-[3.5rem] ${p.color} border border-white shadow-sm transition-all duration-500`}
            >
              <div className={`w-16 h-16 bg-white rounded-3xl flex items-center justify-center ${p.iconColor} shadow-sm mb-8`}>
                <p.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-slate-800">{p.title}</h3>
              <p className="text-slate-500 leading-relaxed font-light tracking-wide italic">
                "{p.desc}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Volunteer CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-sky-500 rounded-[4rem] p-10 md:p-20 overflow-hidden shadow-2xl shadow-teal-100"
        >
          {/* Animated Sparkles Background */}
          <div className="absolute top-0 right-0 p-10 opacity-20">
            <Sparkles size={120} className="text-white animate-pulse" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
              Mulai Perjalananmu <br className="hidden md:block" /> Sebagai Agen Perubahan
            </h3>
            <p className="max-w-2xl mx-auto mb-10 text-teal-50 font-light text-lg italic opacity-90">
              Jadilah bagian dari relawan Eureka dan bantu kami menciptakan lingkungan yang lebih sehat secara mental bagi semua orang.
            </p>
            
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white text-teal-600 px-12 py-5 rounded-full font-bold uppercase tracking-widest text-[11px] flex items-center gap-3 shadow-xl hover:bg-slate-50 transition-all"
            >
              Join as Volunteer 
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
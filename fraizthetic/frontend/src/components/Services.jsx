import { motion } from 'framer-motion';
import { Sparkles, ScanFace, Droplets, CheckCircle } from 'lucide-react';

const Services = () => {
  const treatments = [
    { 
      title: "Glow Facial", 
      price: "199", 
      desc: "Deep cleansing & serum booster untuk kulit kusam.",
      features: ["30 Mins", "Painless", "Instant Glow"],
      popular: false 
    },
    { 
      title: "Laser Rejuvenation", 
      price: "799", 
      desc: "Teknologi laser untuk memudarkan flek dan kerutan halus.",
      features: ["Downtime Minim", "Collagen Booster", "Free Consultation"],
      popular: true 
    },
    { 
      title: "Acne Fighter", 
      price: "499", 
      desc: "Kombinasi peeling & ekstraksi untuk tuntas jerawat.",
      features: ["Anti-Bacterial", "Calming Mask", "LED Therapy"],
      popular: false 
    }
  ];

  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-3 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Signature <span className="text-purple-600 italic">Treatments</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {treatments.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-[2.5rem] border transition-all duration-300 flex flex-col
                ${item.popular 
                  ? 'bg-purple-900 text-white border-purple-800 shadow-2xl shadow-purple-200 z-10 scale-105' 
                  : 'bg-white text-slate-800 border-purple-50 shadow-lg shadow-slate-100'}`}
            >
              {item.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">
                  Best Seller
                </div>
              )}
              
              <div className="mb-6">
                 <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                 <p className={`text-sm ${item.popular ? 'text-purple-200' : 'text-slate-500'}`}>{item.desc}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-sm font-semibold">IDR</span>
                <span className="text-4xl font-bold tracking-tight">{item.price}k</span>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {item.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle size={16} className={item.popular ? "text-pink-400" : "text-purple-500"} />
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all
                ${item.popular 
                  ? 'bg-white text-purple-900 hover:bg-purple-100' 
                  : 'bg-purple-50 text-purple-600 hover:bg-purple-100'}`}>
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
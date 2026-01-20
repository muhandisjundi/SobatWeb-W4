import { motion } from 'framer-motion';
import { ShieldCheck, Check, Calendar, Star, Zap, Gem, Gauge } from 'lucide-react';

const Services = () => {
  const packages = [
    { name: "Silver Shine", price: "150", unit: "K", features: ["Foam Wash", "Spray Wax", "Interior Vacuum"], popular: false },
    { name: "Gold Detail", price: "650", unit: "K", features: ["1-Stage Polish", "Engine Clean", "Deep Interior"], popular: false },
    { name: "Platinum Coating", price: "1.8", unit: "JT", features: ["Nano Ceramic 9H", "Paint Correction", "1 Year Warranty"], popular: true },
    { name: "Diamond Shield", price: "3.5", unit: "JT", features: ["Double Layer 9H+", "Full Coating", "3 Year Warranty"], popular: false },
  ];

  return (
    <section id="services" className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6 text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter">Signature <span className="text-neutral-500">Treatments</span></h2>
        <div className="w-24 h-1 bg-amber-500 mx-auto mt-6" />
      </div>

      <div className="grid md:grid-cols-4 gap-6 container mx-auto px-6">
        {packages.map((tier, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col relative
              ${tier.popular ? 'bg-neutral-900 border-amber-500 shadow-[0_0_40px_rgba(245,158,11,0.1)]' : 'bg-neutral-950 border-white/5'}`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-2 rounded-full flex items-center gap-1">
                <Star size={12} fill="black" /> RECOMMENDED
              </div>
            )}
            <h3 className="text-amber-500 font-black uppercase tracking-widest text-xs mb-8">{tier.name}</h3>
            <div className="mb-10">
              <span className="text-4xl font-black italic">{tier.price}</span>
              <span className="text-neutral-500 ml-2 font-bold uppercase">{tier.unit}</span>
            </div>
            <ul className="space-y-4 mb-12 flex-grow">
              {tier.features.map(f => (
                <li key={f} className="flex items-center gap-3 text-[11px] font-bold uppercase text-neutral-400">
                  <Check size={14} className="text-amber-500" /> {f}
                </li>
              ))}
            </ul>
            <button className={`w-full py-4 rounded-full font-black uppercase text-[10px] transition-all
              ${tier.popular ? 'bg-amber-500 text-black hover:bg-white' : 'bg-white text-black hover:bg-amber-500 hover:text-white'}`}>
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Services;
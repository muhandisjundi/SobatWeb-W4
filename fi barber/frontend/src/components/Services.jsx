import { motion } from 'framer-motion';

const Services = () => {
  const list = [
    { title: "ROYAL+ SERVICE", desc: "Haircut, hair wash, hair tonic, head massage, hot towel and styling with pomade", price: "01" },
    { title: "PREMIUM SERVICE", desc: "Haircut, hair tonic, head massage, hot towel and styling with pomade", price: "02" },
    { title: "KID CUT SERVICE", desc: "Haircut for kids under 12 years old", price: "03" },
    { title: "SHAVING", desc: "Removing all facial hair", price: "04" },
    { title: "HAIR COLORING", desc: "Get awesome hair color as you wish", price: "05" },
    { title: "FACEMASK", desc: "Hydrate skin, remove excess oils and help improve appearance of pores", price: "06" },
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-0 right-0 text-[25rem] font-black italic text-zinc-100/80 leading-none select-none pointer-events-none">
        FI
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24">
          <h2 className="text-7xl font-black italic uppercase text-zinc-950 tracking-tighter leading-none">
            MENU <br/><span className="text-red-600">SERVICES.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-zinc-200">
          {list.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="p-12 border-b border-r border-zinc-200 hover:bg-white transition-all group relative overflow-hidden"
            >
              <span className="text-5xl font-black italic text-zinc-100 group-hover:text-red-600/10 transition-colors absolute top-8 right-8">
                {s.price}
              </span>
              <h3 className="text-2xl font-black italic uppercase text-zinc-950 mb-6 relative z-10">
                {s.title}
              </h3>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed uppercase italic max-w-[200px]">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
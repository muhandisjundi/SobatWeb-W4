import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Banknote, MapPin } from 'lucide-react';

const Services = () => {
  const perks = [
    { icon: Banknote, title: "Harga Murah", desc: "Hampir semua apparel dibanderol dengan harga terbaik se-Tasikmalaya." },
    { icon: Truck, title: "Pengiriman Cepat", desc: "Order lewat WA, barang langsung diproses di hari yang sama." },
    { icon: ShieldCheck, title: "Kualitas Premium", desc: "Bahan pilihan, tebal, dan nyaman dipakai buat harian." },
    { icon: MapPin, title: "Dua Lokasi", desc: "Bisa fitting langsung di Jl. Yudanegara atau Jl. Cilembang." }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 border border-zinc-100 bg-zinc-50 rounded-[2.5rem] hover:border-black transition-all group"
            >
              <p.icon size={40} className="mb-6 text-black" />
              <h3 className="text-xl font-black uppercase italic text-black mb-3">{p.title}</h3>
              <p className="text-zinc-500 font-bold text-sm leading-relaxed italic">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;
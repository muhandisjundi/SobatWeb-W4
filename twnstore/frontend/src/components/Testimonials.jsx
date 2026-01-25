import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "Andika", text: "Gak nyangka harga 85rb dapet hoodie sebagus ini. Pas banget buat nongkrong." },
    { name: "Sari", text: "Lokasinya gampang dicari, pelayanannya ramah banget. Suka sama kemeja flanelnya!" },
    { name: "Fajar", text: "Kausnya adem, desainnya simpel tapi keliatan mahal. Bakal jadi langganan sih." },
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black uppercase italic text-black mb-16 tracking-tighter text-center">TRUSTED BY LOCAL.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 bg-white border border-zinc-200 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="black" />)}
              </div>
              <p className="text-zinc-600 font-bold italic mb-8 leading-relaxed text-lg">"{rev.text}"</p>
              <h4 className="font-black uppercase italic text-black">{rev.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
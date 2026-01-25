import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const reviews = [
    { name: "ANDI WIJAYA", text: "Cukuran paling presisi di Bekasi. Crew-nya beneran ngerti styling yang cocok!", city: "BEKASI" },
    { name: "RIZKY RAMADHAN", text: "Gak perlu nunggu lama, servis secepat kilat tapi hasilnya juara dunia.", city: "JAKARTA" },
    { name: "KEVIN SANJAYA", text: "Tempatnya nyaman, stylist asik. #SobatGantengFI terbaik.", city: "TANGERANG" },
  ];

  return (
    <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none mb-10">
              WHAT THEY <br/><span className="text-red-600">REVEAL.</span>
            </h2>
            <div className="flex gap-4 items-center">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-zinc-950 bg-zinc-800" />)}
              </div>
              <p className="text-xs font-black uppercase italic text-zinc-400 tracking-widest">Join 50k+ Sobat Ganteng</p>
            </div>
          </div>

          <div className="space-y-6">
            {reviews.map((rev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }}
                className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800 hover:border-red-600 transition-all group"
              >
                <div className="flex justify-between items-start mb-4">
                  <Quote className="text-red-600 group-hover:scale-110 transition-transform" />
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-red-600 text-red-600" />)}
                  </div>
                </div>
                <p className="text-lg italic font-medium text-zinc-300 mb-6">"{rev.text}"</p>
                <div className="flex justify-between items-center border-t border-zinc-800 pt-4">
                  <span className="font-black italic text-xs tracking-widest">{rev.name}</span>
                  <span className="text-red-600 font-black text-[10px] italic uppercase tracking-widest">{rev.city}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
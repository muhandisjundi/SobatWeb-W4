import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Ambient Warm Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full z-0" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-black text-white uppercase italic tracking-tighter">
            LOCATE THE <span className="text-neutral-500">STUDIO.</span>
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative min-h-[550px] bg-neutral-900 border border-white/5 rounded-[4rem] p-4 shadow-2xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.8749463598697!2d106.70341669999999!3d-6.2801667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTYnNDguNiJTIDEwNsKwNDInMTIuMyJF!5e0!3m2!1sid!2sid!4v1768362248343!5m2!1sid!2sid"
            className="absolute inset-0 w-full h-full rounded-[3.5rem] grayscale invert opacity-40 hover:opacity-60 transition-opacity"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />

          <div className="absolute bottom-10 left-10 right-10 flex justify-center">
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6 max-w-2xl">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black shrink-0 shadow-lg">
                <MapPin size={28} />
              </div>
              <div>
                <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-1">Our Base</p>
                <p className="text-sm font-bold text-neutral-300 leading-tight">
                  First detail and coating studio, Bintaro
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
import { motion } from 'framer-motion';
import { Send, Heart, Sparkles, ShieldCheck, Zap } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#F7FBFC] relative overflow-hidden">
      {/* Background Decor - Floating Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-teal-100/30 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-pink-100/20 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            
            {/* Left Side: Invitation Text & Values */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-10"
            >
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-6"
                >
                  Open Volunteer Registration
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight mb-6">
                  Temukan Rumah bagi <span className="text-teal-500 italic">Jiwamu.</span>
                </h2>
                <p className="text-slate-500 font-light leading-relaxed text-lg italic">
                  "Di Eureka, kamu tidak perlu berpura-pura. Jadilah dirimu sendiri, bertumbuhlah sesuai ritmemu."
                </p>
              </div>

              {/* Trust Points */}
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, title: "Ruang Aman & Rahasia", desc: "Privasimu adalah prioritas utama kami.", color: "text-sky-400" },
                  { icon: Heart, title: "Dukungan Tanpa Syarat", desc: "Komunitas yang mendengar tanpa menghakimi.", color: "text-pink-400" },
                  { icon: Zap, title: "Pertumbuhan Diri", desc: "Akses ke workshop dan sesi terapi eksklusif.", color: "text-teal-400" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className={`mt-1 ${item.color}`}><item.icon size={22} /></div>
                    <div>
                      <h4 className="font-serif text-lg text-slate-800 leading-none mb-1">{item.title}</h4>
                      <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Side: The Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_40px_80px_-20px_rgba(20,184,166,0.08)] border border-white"
            >
              <div className="mb-10">
                <h3 className="text-2xl font-serif text-slate-800 mb-2">Formulir Bergabung</h3>
                <p className="text-sm text-slate-400 font-light">Isi data singkatmu, tim kami akan menyapamu segera.</p>
              </div>

              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold ml-4">Nama Panggilan</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Budi"
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold ml-4">WhatsApp / Telegram</label>
                  <input 
                    type="text" 
                    placeholder="0812..."
                    className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all font-light"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold ml-4">Minat Utama</label>
                  <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all font-light text-slate-500 appearance-none">
                    <option>Pilih salah satu...</option>
                    <option>Self-Improvement</option>
                    <option>Support Group</option>
                    <option>Relawan (Volunteer)</option>
                    <option>Hanya Ingin Menyimak</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.15em] text-slate-400 font-bold ml-4">Ceritakan Sedikit Tentangmu</label>
                  <textarea 
                    placeholder="Apa yang membuatmu tertarik bergabung dengan Eureka?" 
                    rows="3" 
                    className="w-full bg-slate-50 border-none rounded-[2rem] px-6 py-5 outline-none focus:ring-2 focus:ring-teal-100 focus:bg-white transition-all font-light resize-none"
                  ></textarea>
                </div>

                <div className="md:col-span-2 mt-4">
                  <motion.button 
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-teal-500 to-sky-500 text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] shadow-xl shadow-teal-100 flex items-center justify-center gap-3 group"
                  >
                    Gabung Eureka Smart Community
                    <Sparkles size={16} className="group-hover:rotate-12 transition-transform" />
                  </motion.button>
                  <p className="text-[9px] text-center text-slate-400 mt-6 leading-relaxed">
                    Dengan menekan tombol di atas, kamu setuju untuk memulai perjalanan positif bersama Eureka Smart Community.
                  </p>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
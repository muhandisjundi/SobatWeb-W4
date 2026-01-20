import { motion } from 'framer-motion';
import { Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-200/40 blur-[120px] rounded-full z-0 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-200/40 blur-[120px] rounded-full z-0 -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-purple-600 font-semibold tracking-widest text-xs uppercase mb-3 block"
          >
            Reservasi & Lokasi
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight"
          >
            Start Your <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent italic">Glowing Journey</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-start">
          
          {/* Form Panel (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(168,85,247,0.1)] h-full"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Book Appointment</h3>
            <form className="space-y-5">
              <div className="space-y-1">
                <label className="text-xs font-bold text-purple-900 ml-4 uppercase tracking-wider">Full Name</label>
                <input type="text" placeholder="Your beautiful name" className="w-full bg-white border border-purple-100 rounded-2xl px-6 py-4 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all text-slate-600 placeholder:text-slate-300" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-purple-900 ml-4 uppercase tracking-wider">Phone</label>
                    <input type="tel" placeholder="0812..." className="w-full bg-white border border-purple-100 rounded-2xl px-6 py-4 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all text-slate-600 placeholder:text-slate-300" />
                 </div>
                 <div className="space-y-1">
                    <label className="text-xs font-bold text-purple-900 ml-4 uppercase tracking-wider">Date</label>
                    <input type="date" className="w-full bg-white border border-purple-100 rounded-2xl px-6 py-4 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all text-slate-500" />
                 </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-purple-900 ml-4 uppercase tracking-wider">Treatment</label>
                <select className="w-full bg-white border border-purple-100 rounded-2xl px-6 py-4 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all text-slate-600 appearance-none">
                    <option>Select Treatment</option>
                    <option>Facial Glow</option>
                    <option>Laser Rejuvenation</option>
                    <option>Acne Treatment</option>
                </select>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-bold text-purple-900 ml-4 uppercase tracking-wider">Message (Optional)</label>
                <textarea rows="3" placeholder="Tell us about your skin goals..." className="w-full bg-white border border-purple-100 rounded-3xl px-6 py-4 outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100 transition-all resize-none text-slate-600 placeholder:text-slate-300"></textarea>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-5 rounded-2xl font-bold uppercase tracking-widest shadow-xl shadow-purple-200 hover:shadow-2xl hover:shadow-purple-300 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 group">
                Confirm Booking <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Maps Panel (Right) - Split into 2 Branches */}
          <div className="flex flex-col gap-6 h-full">
            
            {/* Branch 1 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group flex-1 min-h-[300px] bg-white rounded-[2.5rem] overflow-hidden border border-purple-100 shadow-lg shadow-purple-100/50"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9061250811237!2d106.6624394!3d-6.2760723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb25948ad835%3A0x44ac4b6b0e64104f!2sFraizthetic%20Clinic%20BSD!5e0!3m2!1sid!2sid!4v1768914802838!5m2!1sid!2sid"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
              
              {/* Overlay Info */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-lg border border-white flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 text-purple-600 mb-1">
                            <MapPin size={16} fill="currentColor" className="opacity-20" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Cabang Gading Serpong</span>
                        </div>
                        <h4 className="font-bold text-slate-800">Golden Boulevard</h4>
                        <p className="text-xs text-slate-500">Tangerang Selatan, Banten</p>
                    </div>
                    <a href="#" className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                    </a>
                </div>
              </div>
            </motion.div>

            {/* Branch 2 */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group flex-1 min-h-[300px] bg-white rounded-[2.5rem] overflow-hidden border border-purple-100 shadow-lg shadow-purple-100/50"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.6289963586464!2d119.39346279999998!3d-5.1632409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbf1d58f68912dd%3A0xda355643683d3916!2sFraizthetic%20Clinic!5e0!3m2!1sid!2sid!4v1768914903055!5m2!1sid!2sid"
                className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>

               {/* Overlay Info */}
               <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-lg border border-white flex justify-between items-center">
                    <div>
                        <div className="flex items-center gap-2 text-pink-500 mb-1">
                            <MapPin size={16} fill="currentColor" className="opacity-20" />
                            <span className="text-[10px] font-bold uppercase tracking-widest">Cabang Makassar</span>
                        </div>
                        <h4 className="font-bold text-slate-800">Rolling Hills Metro</h4>
                        <p className="text-xs text-slate-500">Makassar, Sulawesi Selatan</p>
                    </div>
                    <a href="#" className="w-10 h-10 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                    </a>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
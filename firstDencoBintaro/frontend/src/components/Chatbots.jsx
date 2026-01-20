import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Car, ShieldCheck, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      role: 'bot', 
      text: 'Selamat datang di First Detail and Coating. Saya Gloss-Bot, spesialis detailing Anda. Ada yang bisa saya bantu mengenai proteksi kendaraan Anda hari ini?' 
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Opsi pertanyaan fokus ke Detailing & Coating
  const options = [
    { 
      q: 'Apa itu Nano Ceramic Coating?', 
      a: 'Nano Ceramic Coating adalah lapisan pelindung cair yang mengeras di atas cat mobil Anda, memberikan perlindungan permanen terhadap sinar UV, kimia, dan goresan halus dengan efek "High Gloss".' 
    },
    { 
      q: 'Berapa biaya Paint Correction?', 
      a: 'Layanan Paint Correction kami mulai dari IDR 1.2JT tergantung kondisi cat dan ukuran kendaraan untuk menghilangkan swirl marks (baret halus).' 
    },
    { 
      q: 'Berapa lama proses Coating?', 
      a: 'Proses detailing dan coating menyeluruh membutuhkan waktu 1-3 hari kerja untuk memastikan tahap pembersihan dan curing (pengerasan) maksimal.' 
    },
    { 
      q: 'Ada paket Interior Detailing?', 
      a: 'Tentu! Kami menyediakan Deep Cleaning interior termasuk ekstraksi jok, plafon, dan disinfektan uap untuk kabin yang steril.' 
    },
  ];
  
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setIsTyping(true);
    
    // Simulasi bot berpikir
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleWhatsApp = () => {
    const phone = "628123456789"; // Ganti dengan nomor admin
    const text = "Halo FIRST, saya tertarik untuk konsultasi paket Detailing/Coating...";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[99999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[calc(100vw-32px)] sm:w-[400px] h-[75vh] md:h-[650px] bg-[#0A0A0A] shadow-[0_40px_100px_-15px_rgba(0,0,0,0.9)] rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col"
          >
            {/* Header: Dark Chrome Style */}
            <div className="bg-neutral-900 p-6 text-white flex justify-between items-center border-b border-white/5 shrink-0">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                  <ShieldCheck size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="font-black italic uppercase tracking-tighter text-lg leading-none">Gloss-Bot</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[9px] text-amber-500 font-black uppercase tracking-[0.2em]">Coating Specialist</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-white/5 p-2 rounded-xl text-neutral-500 hover:text-white transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Chat Body: Ambient Dark */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-[#050505] to-[#0A0A0A]">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[13px] font-bold leading-relaxed border
                    ${msg.role === 'bot' 
                      ? 'bg-neutral-900 text-neutral-300 border-white/5 rounded-bl-none shadow-sm' 
                      : 'bg-white text-black rounded-br-none border-white shadow-lg'}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-neutral-900 p-4 rounded-2xl rounded-bl-none border border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer: Quick Actions */}
            <div className="p-6 bg-neutral-900 border-t border-white/5 space-y-4 shrink-0">
              <div className="flex flex-wrap gap-2 max-h-[120px] overflow-y-auto pr-1">
                {options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleOptionClick(opt)}
                    className="text-[9px] font-black uppercase tracking-widest px-4 py-2 bg-transparent hover:bg-white text-neutral-500 hover:text-black rounded-full border border-neutral-800 hover:border-white transition-all duration-300"
                  >
                    {opt.q}
                  </button>
                ))}
              </div>
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-amber-500 hover:bg-white text-black py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] flex items-center justify-center gap-3 transition-all active:scale-95 shadow-xl shadow-amber-500/10"
              >
                <Sparkles size={16} /> Konsultasi Detailing
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 md:w-20 md:h-20 bg-white text-black rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:bg-amber-500 transition-all relative border-4 border-black group"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X size={32} />
            </motion.div>
          ) : (
            <motion.div key="chat" initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
              <MessageSquare size={32} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-amber-500 rounded-full border-4 border-black animate-pulse flex items-center justify-center text-[10px] font-black">1</span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbot;
import { motion, AnimatePresence } from 'framer-motion';
import { X, Bot, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo cantik! Selamat datang di Fraizthetic. Ada treatment yang ingin ditanyakan?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { 
      q: 'Treatment untuk kulit berjerawat?', 
      a: 'Untuk acne prone, kami sarankan Acne Laser & Peeling Combo. Membunuh bakteri penyebab jerawat dan memudarkan bekasnya.' 
    },
    { 
      q: 'Apakah sakit saat treatment?', 
      a: 'Kebanyakan treatment kami painless (tanpa sakit) karena menggunakan anestesi topikal premium sebelum tindakan.' 
    },
    { 
      q: 'Berapa kisaran harganya?', 
      a: 'Treatment facial mulai dari 200rb, Laser mulai dari 700rb. Kami juga banyak paket bundling hemat bulan ini!' 
    },
    { 
      q: 'Harus reservasi dulu?', 
      a: 'Sangat disarankan reservasi H-1 agar tidak antri lama, Kak. Bisa reservasi lewat saya atau WhatsApp.' 
    },
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    setMessages(prev => [...prev, { role: 'user', text: option.q }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/628123456789`, '_blank');
  };

  return (
    <div className="fixed bottom-10 right-10 z-[99999]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-6 w-[350px] h-[500px] bg-white shadow-2xl shadow-purple-200/50 rounded-[2rem] border border-purple-100 overflow-hidden flex flex-col"
          >
            {/* Header Gradient */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-6 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-none">Beauty Assistant</h3>
                  <span className="text-[10px] text-purple-100 font-medium tracking-wide">Online • Reply fast</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors"><X size={20} /></button>
            </div>

            {/* Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-purple-50/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm
                    ${msg.role === 'bot' ? 'bg-white text-slate-600 rounded-tl-none border border-purple-50' : 'bg-purple-600 text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-slate-400 ml-4 animate-pulse">Typing...</div>}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-purple-50 space-y-3">
              <div className="flex flex-nowrap overflow-x-auto gap-2 pb-2 no-scrollbar">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="whitespace-nowrap text-[10px] font-bold text-purple-600 px-4 py-2 bg-purple-50 hover:bg-purple-100 rounded-full transition-colors">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button onClick={handleWhatsApp} className="w-full bg-green-500 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg shadow-green-100">
                <Phone size={14} /> Chat Dokter via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center shadow-xl shadow-purple-300 relative border-4 border-white"
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} fill="currentColor" />}
      </motion.button>
    </div>
  );
};
export default Chatbot;
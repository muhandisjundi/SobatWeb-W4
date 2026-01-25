import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Phone, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo cantik! Selamat datang di Fraizthetic. Ada treatment yang ingin ditanyakan?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Treatment untuk kulit berjerawat?', a: 'Untuk acne prone, kami sarankan Acne Laser & Peeling Combo.' },
    { q: 'Apakah sakit?', a: 'Kebanyakan treatment kami painless karena menggunakan anestesi topikal premium.' },
    { q: 'Berapa harganya?', a: 'Facial mulai 200rb, Laser mulai 700rb. Cek paket bundling kami!' },
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

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[99999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[320px] md:w-[350px] max-w-[calc(100vw-2rem)] h-[500px] bg-white shadow-2xl rounded-[2rem] border border-purple-100 overflow-hidden flex flex-col"
          >
            {/* Header - Tombol X dikunci di kanan dengan justify-between */}
            <div className="w-full bg-gradient-to-r from-purple-600 to-pink-500 p-5 text-white flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-none">Beauty Assistant</h3>
                  <span className="text-[10px] text-purple-100">Online • Reply fast</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="hover:bg-white/20 p-2 rounded-full transition-colors flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-purple-50/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm
                    ${msg.role === 'bot' ? 'bg-white text-slate-600 rounded-tl-none' : 'bg-purple-600 text-white rounded-tr-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-xs text-slate-400 ml-2 animate-pulse">Assistant sedang mengetik...</div>}
            </div>

            {/* Footer */}
            <div className="p-4 bg-white border-t border-purple-50 space-y-3">
              <div className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
                {options.map((opt, i) => (
                  <button key={i} onClick={() => handleOptionClick(opt)} className="whitespace-nowrap text-[10px] font-bold text-purple-600 px-3 py-2 bg-purple-50 rounded-full">
                    {opt.q}
                  </button>
                ))}
              </div>
              <button onClick={() => window.open('https://wa.me/628123456789')} className="w-full bg-green-500 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2">
                <Phone size={14} /> Chat WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-tr from-purple-600 to-pink-500 text-white rounded-full flex items-center justify-center shadow-xl border-4 border-white"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} fill="currentColor" />}
      </motion.button>
    </div>
  );
};

export default Chatbot;
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, MessageSquare, Phone, Heart, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const Chatbots = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Halo! Saya Eureka-AI. Selamat datang di Eureka Smart Community. Ada yang bisa kami bantu hari ini?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // --- CONFIGURATION: Opsi Pertanyaan & Jawaban ---
  const options = [
    {
      q: 'Apa itu Eureka Smart Community?',
      a: 'Eureka Smart Community adalah komunitas yang menyediakan ruang aman bagi jiwa untuk berbagi, pulih, dan berkembang dengan dukungan psikologis yang hangat.'
    },
    {
      q: 'Program apa saja yang tersedia?',
      a: 'Kami memiliki berbagai program seperti Healing Sessions, Peer Support Groups, Counseling, dan Workshop pengembangan diri.'
    },
    {
      q: 'Bagaimana cara bergabung?',
      a: 'Kamu bisa bergabung dengan mengklik tombol "Join Us" di navigasi atau mengisi formulir di bagian Contact kami.'
    },
    {
      q: 'Apakah layanan ini berbayar?',
      a: 'Kami menyediakan beberapa program gratis untuk komunitas, namun untuk sesi konseling profesional terdapat biaya yang sangat terjangkau.'
    },
    {
      q: 'Dimana lokasi kegiatannya?',
      a: 'Saat ini kegiatan kami dilakukan secara Hybrid (Online melalui Zoom/Meet dan Offline di beberapa partner space kami).'
    },
  ];

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleOptionClick = (option) => {
    // Tambah pertanyaan user ke chat
    const newMessages = [...messages, { role: 'user', text: option.q }];
    setMessages(newMessages);

    // Simulasi bot sedang mengetik
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: option.a }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleWhatsApp = () => {
    const phone = "6282124578144"; // GANTI DENGAN NO WA ASLI
    const text = "Halo Eureka, saya ingin bertanya lebih lanjut mengenai program komunitas...";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mb-4 w-[calc(100vw-3rem)] sm:w-[420px] md:w-[450px] max-h-[60vh] md:max-h-[500px] bg-white/80 backdrop-blur-xl shadow-2xl rounded-[2.5rem] border border-white/50 overflow-hidden flex flex-col origin-bottom-right"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500 to-teal-400 p-6 text-white flex justify-between items-center shrink-0 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <Heart size={20} fill="currentColor" className="text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg leading-none">Eureka-AI</h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    <span className="text-[10px] text-teal-50 font-bold uppercase tracking-widest">Active Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-teal-50/30 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 10, x: msg.role === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className={`flex ${msg.role === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-[1.5rem] text-sm font-medium shadow-sm border leading-relaxed
                    ${msg.role === 'bot'
                      ? 'bg-white text-slate-700 rounded-bl-none border-teal-100'
                      : 'bg-teal-500 text-white rounded-br-none border-teal-400'}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl rounded-bl-none border border-teal-50 shadow-sm">
                    <div className="flex gap-1.5">
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                      <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-teal-300 rounded-full" />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Quick Options & WA Button */}
            <div className="p-4 bg-white/90 border-t border-teal-50 space-y-4 shrink-0">
              <div className="grid grid-cols-2 gap-2">
                <AnimatePresence>
                  {options.map((opt, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOptionClick(opt)}
                      className="text-[10px] sm:text-[11px] font-bold px-3 py-2.5 bg-teal-50/50 hover:bg-teal-100 text-teal-700 rounded-2xl border border-teal-100 transition-all flex items-center gap-2 text-left leading-tight"
                    >
                      <Sparkles size={10} className="text-pink-400 shrink-0" />
                      <span>{opt.q}</span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-400 hover:shadow-lg hover:shadow-teal-100/50 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-[11px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Phone size={14} /> Live Support via WhatsApp
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95, rotate: -5 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 md:w-20 md:h-20 rounded-[2rem] flex items-center justify-center shadow-2xl transition-all relative border-4 border-white
          ${isOpen ? 'bg-pink-500' : 'bg-teal-500'}`}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={32} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="flex items-center justify-center"
            >
              <MessageSquare size={32} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-pink-500 rounded-full border-4 border-white animate-bounce flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
          </span>
        )}
      </motion.button>
    </div>
  );
};

export default Chatbots;

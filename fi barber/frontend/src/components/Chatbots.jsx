import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare,ArrowUpRight,  X, Phone, User, Bot } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Halo Sobat Ganteng! Ada yang bisa FI bantu hari ini?' }]);
  const scrollRef = useRef(null);

  // Auto Scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const options = [
    { q: 'Cabang mana saja?', a: 'FI hadir di JKT, TNG, PLG, BB, BKS, dan CKR! Cek section "Stations" untuk map lengkapnya.' },
    { q: 'Info Franchise?', a: 'Franchise FI selalu terbuka! Klik tombol "Apply For Franchise" di atas untuk detail kemitraan.' },
    { q: 'Jam Operasional?', a: 'Setiap hari jam 09:00 - 21:00. No days off for your style!' }
  ];

  const handleOption = (opt) => {
    // Tambah pesan user
    setMessages(prev => [...prev, { role: 'user', text: opt.q }]);
    
    // Efek Mikir
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: opt.a }]);
      setIsTyping(false);
    }, 1500); // Jedah 1.5 detik biar natural
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, y: 50, scale: 0.8, rotate: -5 }}
            className="mb-4 w-[340px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden border border-zinc-100"
          >
            {/* Header */}
            <div className="bg-zinc-950 p-6 flex justify-between items-center text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center"><Bot size={16} /></div>
                <div className="flex flex-col">
                  <span className="font-black italic uppercase text-[10px] tracking-widest">FI Virtual Assist</span>
                  <span className="text-[8px] text-red-500 font-bold animate-pulse uppercase">● Online</span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform"><X size={20} /></button>
            </div>
            
            {/* Chat Area */}
            <div ref={scrollRef} className="h-80 overflow-y-auto p-6 space-y-4 bg-zinc-50/50">
              {messages.map((msg, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-bold shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-red-600 text-white rounded-br-none' 
                    : 'bg-white text-zinc-800 rounded-bl-none border border-zinc-100'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {/* Thinking Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-zinc-100 p-4 rounded-2xl rounded-bl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Footer / Input Options */}
            <div className="p-6 border-t border-zinc-100 bg-white">
              <div className="flex flex-col gap-2 mb-4">
                {options.map((opt, i) => (
                  <motion.button 
                    whileHover={{ x: 5 }}
                    key={i} 
                    onClick={() => handleOption(opt)} 
                    disabled={isTyping}
                    className="text-[10px] font-black uppercase p-3 bg-zinc-100 hover:bg-zinc-950 hover:text-white rounded-xl transition-all text-left flex justify-between items-center group"
                  >
                    {opt.q}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.button>
                ))}
              </div>
              <button className="w-full bg-zinc-950 text-white py-4 rounded-xl font-black uppercase text-[10px] flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-lg">
                <Phone size={12} /> Live WhatsApp Support
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)} 
        className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all duration-500 border-2 border-white ${
          isOpen ? 'bg-red-600 text-white' : 'bg-zinc-950 text-white'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </motion.button>
    </div>
  );
};
export default Chatbot;
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageSquare, Send, Phone } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Halo! Ada yang bisa kami bantu seputar produk TWN Store?' }]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  const options = [
    { q: 'Cek Lokasi', a: 'Kami ada di Jl. Yudanegara No.37A & Jl. Cilembang (Depan SPBU SMAN 4) Tasikmalaya.' },
    { q: 'Promo 85K', a: 'Betul! Hampir semua item apparel kami harganya 85K. Langsung ke store yuk!' },
    { q: 'Jam Operasional', a: 'Toko buka setiap hari dari jam 11:00 sampai 22:00 WIB.' }
  ];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isTyping]);

  const ask = (opt) => {
    setMessages(prev => [...prev, { role: 'user', text: opt.q }]);
    setIsTyping(true);
    // Jeda mikir 1.5 detik
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'bot', text: opt.a }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[200] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-6 w-[90vw] md:w-[450px] h-[600px] bg-white border border-zinc-200 shadow-[0_30px_100px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-hidden flex flex-col"
          >
            <div className="bg-black p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="font-black italic uppercase leading-none">TWN Assistant</h3>
                <p className="text-[10px] opacity-60 mt-1 uppercase font-bold tracking-widest">Online</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'bot' ? 'justify-start' : 'justify-end'}`}>
                  <div className={`max-w-[80%] p-4 rounded-2xl text-sm font-bold italic ${m.role === 'bot' ? 'bg-zinc-100 text-black' : 'bg-black text-white'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-[10px] font-black uppercase italic animate-pulse">TWN lagi mikir...</div>}
            </div>

            <div className="p-6 border-t border-zinc-100 bg-zinc-50 space-y-3">
              <div className="flex flex-wrap gap-2">
                {options.map((o, i) => (
                  <button key={i} onClick={() => ask(o)} className="text-[10px] font-black uppercase border border-zinc-300 px-4 py-2 rounded-full hover:bg-black hover:text-white transition-all">
                    {o.q}
                  </button>
                ))}
              </div>
              <button onClick={() => window.open('https://wa.me/6282214600622')} className="w-full bg-green-500 text-white py-4 rounded-2xl font-black uppercase italic text-[11px] flex items-center justify-center gap-2">
                <Phone size={14} /> Hubungi Admin via WA
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-all active:scale-95"
      >
        {isOpen ? <X size={32} /> : <MessageSquare size={32} />}
      </button>
    </div>
  );
};
export default Chatbot;
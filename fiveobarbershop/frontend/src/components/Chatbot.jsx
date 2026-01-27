import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Send, MessageSquare, Phone } from 'lucide-react';

const faqData = [
    {
        question: "Jam buka Five-O Barbershop?",
        answer: "Kami buka setiap hari Senin - Jumat pukul 10:00 - 20:00, dan Sabtu pukul 10:00 - 18:00. Hari Minggu kami tutup."
    },
    {
        question: "Apakah perlu booking terlebih dahulu?",
        answer: "Sangat disarankan untuk melakukan booking via WhatsApp kami untuk menghindari antrean panjang, namun kami juga menerima walk-in."
    },
    {
        question: "Berapa harga potong rambut di sini?",
        answer: "Harga potong rambut (Gentleman's Cut) mulai dari Rp 85.000, sudah termasuk cuci rambut dan styling."
    },
    {
        question: "Di mana lokasi Five-O Barbershop?",
        answer: "Kami berlokasi di 123 Precision Way, Suite 101, NY 10012."
    }
];

const TypingIndicator = () => (
    <div className="flex gap-1 p-2 bg-white rounded-2xl rounded-tl-none shadow-sm border border-gray-100 self-start">
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        />
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        />
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        />
    </div>
);

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [history, setHistory] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) scrollToBottom();
    }, [history, isTyping, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const addMessage = (text, type) => {
        setHistory(prev => [...prev, { text, type }]);
    };

    const handleBotResponse = (answer) => {
        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            addMessage(answer, 'bot');
        }, 1500);
    };

    const handleQuestionClick = (faq) => {
        addMessage(faq.question, 'user');
        handleBotResponse(faq.answer);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;
        addMessage(inputValue, 'user');
        setInputValue("");
        handleBotResponse("Terima kasih atas pertanyaannya! Tim kami akan segera membantu Anda. Sementara itu, silakan pilih menu FAQ di atas.");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[1001] flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="bg-white rounded-[1.5rem] shadow-2xl w-[85vw] sm:w-[320px] md:w-[350px] max-h-[70vh] mb-4 overflow-hidden border border-gray-100 flex flex-col transition-all duration-300"
                    >
                        {/* Header */}
                        <div className="bg-black p-4 flex justify-between items-center text-white shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                    <span className="text-black text-[10px] font-black italic">B</span>
                                </div>
                                <div>
                                    <h3 className="font-display font-bold text-xs tracking-widest uppercase">FIVE-O AI</h3>
                                    <p className="text-[10px] text-gray-400 tracking-wide">ASSISTANT</p>
                                </div>
                            </div>
                            <button onClick={toggleChat} className="hover:rotate-90 transition-transform duration-300">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 custom-scrollbar min-h-0">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-xs text-muted max-w-[90%] border border-gray-100 leading-relaxed"
                            >
                                Halo! Ada yang bisa kami bantu mengenai reservasi hari ini?
                            </motion.div>

                            <AnimatePresence mode="popLayout">
                                {history.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        className={`p-3 rounded-2xl text-xs max-w-[85%] shadow-sm leading-relaxed ${msg.type === 'user'
                                                ? 'bg-black text-white self-end rounded-tr-none ml-auto'
                                                : 'bg-white text-muted self-start rounded-tl-none border border-gray-100'
                                            }`}
                                    >
                                        {msg.text}
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                    >
                                        <TypingIndicator />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Replies & Input */}
                        <div className="p-4 bg-white border-t border-gray-100 shrink-0">
                            {/* FAQ Quick Replies */}
                            <div className="flex flex-col gap-2 mb-4">
                                {faqData.map((faq, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ x: 3, backgroundColor: '#f9f9f9' }}
                                        onClick={() => handleQuestionClick(faq)}
                                        className="w-full text-left text-[10px] bg-gray-50 text-[#000000] px-3 py-2 rounded-xl border border-gray-100 flex justify-between items-center transition-colors shadow-sm uppercase font-bold tracking-wider"
                                    >
                                        <span>{faq.question}</span>
                                        <ChevronRight size={14} className="text-gray-300" />
                                    </motion.button>
                                ))}
                            </div>

                            {/* Custom Input */}
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Tanya sesuatu..."
                                    className="flex-1 bg-gray-50 border border-gray-100 rounded-full px-4 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-black placeholder:text-gray-400"
                                />
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    onClick={handleSend}
                                    className="bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors shadow-md"
                                >
                                    <Send size={16} />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                onClick={toggleChat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-2xl relative border-2 border-white/10"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageSquare size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 bg-red-500 w-3.5 h-3.5 rounded-full border-2 border-white animate-pulse shadow-md"></span>
                )}
            </motion.button>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #eeeeee;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
};

export default Chatbot;

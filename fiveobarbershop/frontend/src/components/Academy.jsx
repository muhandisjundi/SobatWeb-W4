import React from 'react';

const Academy = () => (
    <section id="academy" className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-2xl overflow-hidden relative min-h-[600px] flex flex-col items-center justify-center text-center p-12">
            <div className="absolute inset-0 opacity-40">
                <img
                    src="https://images.unsplash.com/photo-1512690118294-700366657827?q=80&w=2000&auto=format&fit=crop"
                    alt="Academy Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-2xl">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter">MASTER THE BLADE</h2>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10">
                    Join the elite ranks of professional barbers. Our intensive academy program covers traditional techniques and modern trends. From zero to professional.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-white text-black px-10 py-4 font-display font-bold text-sm tracking-widest hover:bg-gray-200 transition-all uppercase">
                        Join The Academy
                    </button>
                    <button className="border border-white/30 text-white px-10 py-4 font-display font-bold text-sm tracking-widest hover:bg-white/10 transition-all uppercase">
                        View Curriculum
                    </button>
                </div>
            </div>
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-black hidden md:block">
                <img
                    src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2000&auto=format&fit=crop"
                    alt="Learning in Academy"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>
        {/* Spacer for overlapping image */}
        <div className="h-32 hidden md:block"></div>
    </section>
);

export default Academy;

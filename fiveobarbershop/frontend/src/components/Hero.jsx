import React from 'react';

const Hero = () => (
    <section className="relative min-h-screen pt-24 pb-12 px-6 flex flex-col md:flex-row items-center justify-center gap-12 bg-[#F9F9F9]">
        <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[3/4] overflow-hidden rounded-lg shadow-2xl">
                <img
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2000&auto=format&fit=crop"
                    alt="Premium Barber"
                    className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6 max-w-xl">
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter">
                REAL <br />
                BARBER <br />
                FOR REAL <br />
                MEN
            </h1>
            <p className="text-muted text-sm md:text-base leading-relaxed max-w-md">
                Experience precision grooming in a premium atmosphere. Designed for the modern man who values excellence.
            </p>
            <button className="bg-prime text-white px-10 py-4 font-display font-bold text-sm tracking-widest transition-all hover:tracking-[0.2em] uppercase">
                Book Appointment
            </button>
        </div>
    </section>
);

export default Hero;

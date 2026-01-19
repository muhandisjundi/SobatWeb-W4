import React from 'react';

const FeatureCard = ({ title, desc, icon }) => (
    <div className="bg-white p-8 border border-gray-100 flex flex-col gap-4 hover:shadow-xl transition-all duration-300">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="text-xl font-display font-bold">{title}</h3>
        <p className="text-muted text-sm leading-relaxed">{desc}</p>
    </div>
);

const OurCraft = () => (
    <section id="about" className="py-24 px-6 bg-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="w-full md:w-1/3">
                <h2 className="text-4xl font-display font-bold tracking-tight">OUR CRAFT</h2>
            </div>
            <div className="w-full md:w-2/3">
                <p className="text-muted text-lg leading-relaxed max-w-2xl">
                    Rooted in heritage, refined by modern technique. Our barbers are architects of style, committed to the precision of the blade and the art of masculinity. We don't just cut hair; we sculpt identities.
                </p>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
                icon="✂️"
                title="Heritage"
                desc="Decades of traditional barbering expertise passed down through generations."
            />
            <FeatureCard
                icon="📐"
                title="Precision"
                desc="Every cut is a masterpiece of technical skill and mathematical symmetry."
            />
            <FeatureCard
                icon="💈"
                title="Lifestyle"
                desc="More than a haircut, it's a statement of how you present yourself to the world."
            />
        </div>
    </section>
);

export default OurCraft;

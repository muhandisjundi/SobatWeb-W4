import React from 'react';

const PricingItem = ({ name, price, duration }) => (
    <div className="flex justify-between items-end border-b border-gray-100 pb-4 mb-4 group cursor-default">
        <div className="flex flex-col">
            <span className="font-display font-bold text-lg group-hover:text-muted transition-colors uppercase">{name}</span>
            <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase">{duration}</span>
        </div>
        <span className="font-display font-bold text-xl">{price}</span>
    </div>
);

const PricingCategory = ({ title, icon, items }) => (
    <div className="flex flex-col">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-black">
            <span className="text-xl">{icon}</span>
            <h3 className="font-display font-bold text-xl tracking-widest">{title}</h3>
        </div>
        <div className="flex flex-col">
            {items.map((item, idx) => (
                <PricingItem key={idx} {...item} />
            ))}
        </div>
    </div>
);

const Pricing = () => {
    const categories = [
        {
            title: "HAIRCUTS",
            items: [
                { name: "Signature Cut", price: "$55", duration: "45 MINS" },
                { name: "Buzz Cut", price: "$35", duration: "30 MINS" },
                { name: "Restyle Session", price: "$70", duration: "60 MINS" },
            ]
        },
        {
            title: "SHAVES",
            items: [
                { name: "Hot Towel Shave", price: "$50", duration: "45 MINS" },
                { name: "Beard Sculpting", price: "$40", duration: "30 MINS" },
                { name: "Moustache Trim", price: "$20", duration: "15 MINS" },
            ]
        },
        {
            title: "TREATMENTS",
            items: [
                { name: "Scalp Therapy", price: "$30", duration: "20 MINS" },
                { name: "Charcoal Detox", price: "$45", duration: "30 MINS" },
                { name: "Eye Renewal", price: "$25", duration: "15 MINS" },
            ]
        }
    ];

    return (
        <section id="pricing" className="py-24 px-6 bg-[#FCFCFC]">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tighter uppercase italic">
                        SERVICES & <span className="text-muted">RITUALS</span>
                    </h2>
                    <p className="text-muted text-sm md:text-base leading-relaxed uppercase tracking-wider">
                        Experience the art of grooming where heritage meets precision. Every treatment is a bespoke ritual tailored for the modern gentleman.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
                    {categories.map((cat, idx) => (
                        <PricingCategory key={idx} {...cat} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;

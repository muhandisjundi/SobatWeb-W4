import React from 'react';

const Lifestyle = () => {
    const images = [
        "https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=400&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=400&auto=format&fit=crop",
        "https://cdn.medcom.id/images/library/images/Captain%20Barbershop%203.jpg",
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=400&auto=format&fit=crop",
        "https://images.stockcake.com/public/8/0/2/80240ea5-d91a-43f6-9a01-570093173da6_large/barber-shop-tools-stockcake.jpg",
    ];

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-2xl font-display font-bold mb-2">FOLLOW THE LIFESTYLE</h2>
                <p className="text-muted text-[10px] tracking-[0.3em] font-bold">@THE_BARBER_ELITE</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                {images.map((img, idx) => (
                    <div key={idx} className="aspect-square overflow-hidden bg-gray-100 group cursor-pointer">
                        <img
                            src={img}
                            alt={`Lifestyle ${idx}`}
                            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Lifestyle;

import React from 'react';

const StyleMenu = () => {
    const styles = [
        { name: "Burst Fade", price: "$45", desc: "Modern & Sharp", img: "https://image.popbela.com/post/20241230/9776b96a47e87a9168b2b4eeb98cc47a.jpg" },
        { name: "Curly Perm", price: "$120", desc: "Texture & Volume", img: "https://www.the5thelement.uk/wp-content/uploads/2025/06/hair-salon-in-reading-men-perm-in-reading.jpg" },
        { name: "Buzz Cut", price: "$50", desc: "Refined & Professional", img: "https://i.pinimg.com/originals/ec/a0/23/eca0230a1f315261d54409a85759525f.jpg" },
        { name: "Classic Taper", price: "$40", desc: "Timeless & Clean", img: "https://i.pinimg.com/736x/af/c3/e2/afc3e21e8a2cb5c8b8a885f314975697.jpg" },
    ];

    return (
        <section id="styles" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-display font-bold">THE STYLE MENU</h2>
                    <span className="text-[10px] font-bold tracking-widest text-muted border-b border-gray-200 pb-1 italic">CURATION 2024</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {styles.map((style, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 mb-4">
                                <img
                                    src={style.img}
                                    alt={style.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                                />
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h4 className="font-display font-bold text-lg">{style.name}</h4>
                                    <p className="text-muted text-[10px] tracking-wider uppercase">{style.desc}</p>
                                </div>
                                <span className="font-display font-bold">{style.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StyleMenu;

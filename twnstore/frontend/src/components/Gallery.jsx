import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Zap } from "lucide-react";

const Gallery = () => {
  // Data produk pilihan (Bisa kamu tambah/kurang sesuai kebutuhan)
  const products = [
    { id: 1, title: "Vintage Heavy Tee", cat: "Apparel", price: "85K", tag: "Best Seller", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800" },
    { id: 2, title: "Retro Dunk High", cat: "Shoes", price: "185K", tag: "Limited", img: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800" },
    { id: 3, title: "Boxy Hoodie Black", cat: "Apparel", price: "85K", tag: "Must Have", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800" },
    { id: 4, title: "Classic Low White", cat: "Shoes", price: "150K", tag: "New Drop", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" },
    { id: 5, title: "Cargo Workpants", cat: "Apparel", price: "120K", tag: "Sale", img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800" },
    { id: 6, title: "Flannel Oversize", cat: "Apparel", price: "85K", tag: "Best Seller", img: "https://images.unsplash.com/photo-1588359348347-9bc6cbb6cf97?w=800" },
    { id: 7, title: "Canvas Sneaker V2", cat: "Shoes", price: "110K", tag: "Restock", img: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800" },
    { id: 8, title: "Graphic Tee Series", cat: "Apparel", price: "85K", tag: "Limited", img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b-4 border-black pb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-black text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                <Zap size={10} fill="white" /> Featured Items
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase italic text-black tracking-tighter leading-none">
              PRODUCTS <br /> <span className="text-zinc-300">HIGHLIGHTS.</span>
            </h2>
            <p className="text-zinc-500 font-bold m-2 italic mt-6 text-lg">
              Koleksi pilihan terbaik kami.
              Gak nemu yang dicari? Langsung chat admin.
            </p>
          </div>
          
          <button 
            onClick={() => window.open('https://wa.me/6282214600622')}
            className="group bg-black text-white px-10 py-5 rounded-2xl font-black uppercase italic tracking-widest flex items-center gap-4 hover:bg-zinc-800 transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
          >
            Chat Admin <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="group"
            >
              {/* Image Card */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-2 border-black bg-zinc-100 shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* Badge Tag */}
                <div className="absolute top-6 left-6 bg-white border-2 border-black px-4 py-1 rounded-full text-[10px] font-black uppercase italic shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  {p.tag}
                </div>

               
              </div>

              {/* Product Info */}
              <div className="mt-6 px-2">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">{p.cat}</p>
                    <h3 className="text-xl font-black uppercase italic text-black leading-tight tracking-tighter">{p.title}</h3>
                  </div>
                  <span className="text-2xl font-black italic tracking-tighter">{p.price}</span>
                </div>
                
                {/* Visual Line Decor */}
                <div className="w-full h-[2px] bg-zinc-100 mt-4 group-hover:bg-black transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner - CTA Direct ke Lokasi */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 bg-zinc-100 border-4 border-dashed border-zinc-300 rounded-[3rem] p-12 text-center"
        >
          <h3 className="text-3xl font-black uppercase italic mb-4">MASIH BANYAK LAGI DI STORE!</h3>
          <p className="text-zinc-500 font-bold italic mb-8 max-w-xl mx-auto">
            Gak semua barang bisa kita pajang di sini. Datang langsung ke Yudanegara atau Cilembang buat fitting ratusan item lainnya.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => window.location.hash = 'location'}
              className="bg-white border-2 border-black text-black px-8 py-4 rounded-xl font-black uppercase italic text-[12px] hover:bg-black hover:text-white transition-all"
            >
              Cek Lokasi Store
            </button>
            <button 
              onClick={() => window.open('https://instagram.com/twn_storetasikmalaya')}
              className="bg-black text-white px-8 py-4 rounded-xl font-black uppercase italic text-[12px] hover:invert transition-all"
            >
              Update Instagram
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
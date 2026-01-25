import { motion } from 'framer-motion';

const Gallery = () => {
  const photos = [
    { url: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800", size: "md:col-span-2 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800", size: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800", size: "md:col-span-1 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800", size: "md:col-span-2 md:row-span-1" },
  ];

  return (
    <section id="gallery" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-6">
          <h2 className="text-6xl font-black italic uppercase text-white tracking-tighter">
            STUDIO <br/><span className="text-red-600">VISUALS.</span>
          </h2>
          <div className="h-px flex-1 bg-zinc-800 mx-10 hidden lg:block" />
          <p className="text-zinc-500 font-bold uppercase ms-4 italic text-xs tracking-widest">Captured Precision</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {photos.map((photo, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className={`${photo.size} overflow-hidden rounded-3xl relative group border-2 border-zinc-900 hover:border-red-600 transition-all duration-500`}
            >
              <img src={photo.url} className="w-full h-full object-cover  group-hover:scale-110 transition-all duration-700" alt="Gallery" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white font-black italic text-xs">FI</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
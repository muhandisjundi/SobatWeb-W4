import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-32 bg-white text-black">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
            alt="Store"
            className="rounded-[3rem] shadow-2xl w-full aspect-video object-cover"
          />
        </motion.div>
        <div>
          <h2 className="text-6xl font-black uppercase italic tracking-tighter mb-6">THE CULTURE.</h2>
          <p className="text-zinc-600 text-lg font-bold italic leading-relaxed mb-8">
            TWN Store bukan sekedar tempat belanja. Kami adalah wadah bagi skena streetwear di Tasikmalaya. Dengan mengutamakan kualitas material dan harga yang terjangkau (Start from 85K), kami ingin semua orang bisa tampil keren tanpa batas.
          </p>
          <div className="flex gap-10">
            <div>
              <div className="text-4xl font-black italic">100+</div>
              <div className="text-xs font-black uppercase text-zinc-400">Daily Items</div>
            </div>
            <div>
              <div className="text-4xl font-black italic">2</div>
              <div className="text-xs font-black uppercase text-zinc-400">Store Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
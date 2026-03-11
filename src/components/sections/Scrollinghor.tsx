import { motion } from 'framer-motion';

const images = [
  "/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg", "/img5.jpg"
];

export default function ScrollingLogos() {
  const duplicatedImages = [...images, ...images];

  return (
    <section className="bg-white py-12 overflow-hidden">
      <div className="flex w-max">
        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity, 
              repeatType: "loop",
              duration: 20, 
              ease: "linear",
            },
          }}
        >
          {duplicatedImages.map((src, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-72 h-48 bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200"
              whileHover={{ scale: 1.05 }} // Efecto de zoom al pasar el mouse
            >
              <img 
                src={src} 
                alt="Portfolio item" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
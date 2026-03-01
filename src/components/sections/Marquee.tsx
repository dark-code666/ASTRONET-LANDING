import { motion } from 'framer-motion';

const LOGOS = [
  { name: 'My Way', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }, // Reemplaza con tus archivos locales
  { name: 'Best Start', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
  { name: 'Typescript', src: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
  { name: 'JavaScript', src: 'https://logos-world.net/wp-content/uploads/2023/02/JavaScript-Logo.png' },
  { name: 'MongoDB', src: 'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_2db9200cbbe3b15909227b577824d381/mongodb.png' },
  { name: 'Node Js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
];

export default function LogoTicker() {
  return (
    <section className="bg-white py-10 border-y-0 border-zinc-100">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-[12px] font-black uppercase tracking-[0.3em] text-zinc-800">
         With the best technologies        </p>
      </div>

      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div 
          className="flex flex-none gap-24 pr-24"
          animate={{ x: ["0%", "-40%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...LOGOS, ...LOGOS].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
              />
              {/* Texto en Junto a la imagen: */}
              <span className="ml-4 text-xl font-bold text-zinc-400 grayscale">{logo.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
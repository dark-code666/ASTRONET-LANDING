import { motion } from "framer-motion";

const images = [
  "https://plantillashtmlgratis.com/wp-content/uploads/2019/images/page246/remember.jpeg",
  "https://s.tmimgcdn.com/scr/400x250/51600/plantilla-de-sitio-web-jquery-travel-theme-gratis_51647-0-original.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmyRQslEARLHo3PGHOJmECPYwFA1FmUYlM3A&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwA4bUg4fexjpi-eMQn5o3qDeK1NyTR-c0Q&s",
  "https://s.tmimgcdn.com/scr/400x250/297700/ti-flexible--servicios-empresariales-y-soluciones-de-ti-plantilla-de-sitio-web-adaptable-html5-multiproposito_297700-11-original.jpg",
];

export default function ScrollingLogos() {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="bg-white py-10 overflow-hidden">
      <motion.div 
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: ["0%", "-50%"] 
        }}
        transition={{
          ease: "linear",
          duration: 10, 
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-[250px] h-[160px] shadow-lg rounded-sm overflow-hidden border border-zinc-100 bg-slate-50 p-5 flex  items-center justify-center">
            <img 
              src={src} 
              alt={`Project ${index}`} 
              className="w-full h-full " //object-cover grayscale hover:grayscale-0 transition-all duration-500(opcional si quiero que este gris y cuando pase el puntero de el color) 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
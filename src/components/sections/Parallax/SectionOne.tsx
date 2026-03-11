import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SectionOne() {
  // Estado para cambiar la imagen de la laptop al pasar el cursor por el texto
  const [activeImage, setActiveImage] = useState("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800");

  const secondaryImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"; // Imagen de cambio

  return (
    <section   className="h-full w-full bg-[#0d1110] flex items-center">
      <div className="w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* BLOQUE DE TEXTO */}
        <Link to="/whatwedo/Company-Websites">
        <div 
          className="group flex flex-col items-start cursor-default"
          onMouseEnter={() => setActiveImage(secondaryImage)}
          onMouseLeave={() => setActiveImage("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800")}
        >
          <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-4">
            <span className="text-xs">↗</span> WHAT WE DO
          </p>

          <h2 className="text-white text-6xl lg:text-7xl font-serif mb-6 leading-[1.1] tracking-tight transform transition-transform duration-700 ease-out group-hover:translate-x-6">
            Company <br/> Websites.
          </h2>

          <p className="text-zinc-500 max-w-sm mb-8 text-lg leading-relaxed transform transition-transform duration-700 ease-out delay-75 group-hover:translate-x-6">
            Enhance your business with a bespoke online presence that promotes your work, services and brand.
          </p>
          
         
         
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transform transition-transform duration-700 ease-out delay-100 group-hover:translate-x-8">
            {['Financial Services', 'Start Ups', 'Non-profits', 'Creatives'].map(item => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400">
                <span className="text-[#A3FF00]">✔</span> {item}
              </div>
            ))}
          </div>
           
           <button className="px-10 py-4 bg-transparent border border-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#A3FF00] hover:text-black transition-all transform group-hover:translate-x-6 duration-700">
            Find out more
           </button>
        </div>
        </Link>

        {/* BLOQUE VISUAL: Laptop */}
        <div className="relative flex flex-col items-center">
          <div className="w-full h-48 bg-zinc-900 rounded-t-full mt-24 opacity-60 blur-3xl absolute bottom-0" />
          
          <div className="relative z-10 w-full max-w-lg transform -perspective-1000 rotate-x-12 rotate-y-[-5deg] transition-all duration-1000">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-zinc-800">
               <img 
                src={activeImage} 
                className="w-full h-auto transition-opacity duration-500 ease-in-out"
                alt="Project Showcase"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
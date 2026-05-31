import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgCompany from "../../../assets/Company.png";
import imgCompany1 from "../../../assets/Company1.png";

export default function SectionOne() {
  const [activeImage, setActiveImage] = useState(imgCompany);

  return (
    <section className="flex min-h-[calc(100svh-5rem)] w-full items-center bg-[#0d1110] py-16 lg:h-full lg:py-0">
      <div className="grid w-full grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-12">
        
        {/* BLOQUE DE TEXTO */}
        <Link to="/whatwedo/Software-Development">
        <div 
          className="group flex flex-col items-start cursor-pointer"
          onMouseEnter={() => setActiveImage(imgCompany)}
          onMouseLeave={() => setActiveImage(imgCompany1)}
        >
          <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-4">
            <span className="text-xs">↗</span> HOW WE DO
          </p>

          <h2 className="mb-5 text-4xl font-serif leading-[1.08] tracking-tight text-white transition-transform duration-700 ease-out group-hover:translate-x-0 sm:text-5xl lg:mb-6 lg:text-7xl lg:group-hover:translate-x-6">
            Software <br/> Development.
          </h2>

          <p className="mb-7 max-w-sm text-base leading-relaxed text-zinc-500 transition-transform delay-75 duration-700 ease-out group-hover:translate-x-0 sm:text-lg lg:mb-8 lg:group-hover:translate-x-6">
            Scalable digital products designed to launch faster, support growth, and reduce operational friction.
          </p>
          
          <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 transition-transform delay-100 duration-700 ease-out group-hover:translate-x-0 sm:grid-cols-2 lg:mb-10 lg:gap-x-8 lg:group-hover:translate-x-8">
            {['FULL-STACK SYSTEMS', 'CLOUD INFRASTRUCTURE', 'API INTEGRATIONS', 'MOBILE SOLUTIONS'].map(item => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400">
                <span className="text-[#A3FF00]">✔</span> {item}
              </div>
            ))}
          </div>
           
          <button className="rounded-lg border border-white/20 bg-transparent px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-all duration-700 hover:bg-[#A3FF00] hover:text-black lg:px-10 lg:group-hover:translate-x-6">
            Find out more
          </button>
        </div>
        </Link>

        {/* BLOQUE VISUAL: Laptop */}
        <div className="relative flex flex-col items-center">
          <div className="w-full h-48 bg-zinc-900 rounded-t-full mt-24 opacity-0 blur-3xl absolute bottom-0" />
          
          <div className="relative z-10 w-full max-w-sm transition-all duration-1000 sm:max-w-md lg:max-w-lg lg:-perspective-1000 lg:rotate-x-12 lg:rotate-y-[-5deg]">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-0 border-zinc-800">
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

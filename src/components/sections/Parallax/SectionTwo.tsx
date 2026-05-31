import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgEcommerce from "../../../assets/eCommerce2.png";
import imgEcommerce1 from "../../../assets/eCommerce3.png";

export default function SectionTwo() {
  const [activeImage, setActiveImage] = useState(imgEcommerce);

  return (
    <section className="flex min-h-[calc(100svh-5rem)] w-full items-center justify-center overflow-hidden bg-[#838e83] py-16 lg:h-screen lg:py-0">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        
        {/* LADO IZQUIERDO */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center sm:max-w-md lg:max-w-[550px]">
            <img 
              src={activeImage} 
              key={activeImage} 
              className="w-full h-full object-contain transition-all duration-700 ease-in-out opacity-100 animate-in fade-in" 
              alt="eCommerce Display" 
            />
            <div className="absolute -z-10 w-72 h-72 bg-white/5 blur-[120px] rounded-full" />
          </div>
        </div>

        {/* LADO DERECHO */}
        <Link to="/whatwedo/eCommerce" className="no-underline">
          <div 
            className="group cursor-pointer flex flex-col items-start"
            onMouseEnter={() => setActiveImage(imgEcommerce1)}
            onMouseLeave={() => setActiveImage(imgEcommerce)}
          >
            <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
              ↗ HOW WE DO
            </p>
            
            <h2 className="mb-5 text-4xl font-serif leading-tight text-white transition-transform duration-700 group-hover:translate-x-0 sm:text-5xl lg:mb-6 lg:text-7xl lg:group-hover:-translate-x-6">
              eCommerce <br/> Platforms.
            </h2>

            <p className="mb-7 max-w-sm text-base text-zinc-100 transition-transform delay-75 duration-700 group-hover:translate-x-0 sm:text-lg lg:mb-8 lg:group-hover:-translate-x-8">
              High-performance ecommerce platforms designed to streamline operations, improve customer experience, and support scalable growth.
            </p>
            
            <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 transition-transform delay-100 duration-700 group-hover:translate-x-0 sm:grid-cols-2 lg:mb-10 lg:gap-x-8 lg:group-hover:-translate-x-10">
              {[
                'Fashion & apparel', 'Home & garden', 'Electronics', 
                'Health & wellness', 'Cosmetics', 'Food & beverage'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-200">
                  <span className="text-[#A3FF00]">✔</span> {item}
                </div>
              ))}
            </div>

            <button className="rounded-lg border border-white/20 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white transition-all hover:bg-[#A3FF00] hover:text-black lg:px-10 lg:group-hover:-translate-x-8">
              Find out more
            </button>
          </div>
        </Link>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';

import imgEcommerce from "../../../assets/eCommerce2.png";
import imgEcommerce1 from "../../../assets/eCommerce3.png";

export default function SectionTwo() {

  const [activeImage, setActiveImage] = useState(imgEcommerce);

  return (
    <section className="h-screen w-full bg-[#838e83] flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-6xl w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* LADO IZQUIERDO */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
        
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
            className="group cursor-default flex flex-col items-start"
            onMouseEnter={() => setActiveImage(imgEcommerce1)}
            onMouseLeave={() => setActiveImage(imgEcommerce)}
          >
            <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
              ↗ WHAT WE DO
            </p>
            
            <h2 className="text-white text-6xl lg:text-7xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:-translate-x-6">
              eCommerce <br/> Platforms.
            </h2>

            <p className="text-zinc-100 max-w-sm mb-8 text-lg transition-transform duration-700 delay-75 group-hover:-translate-x-8">
              Boost your products with seamless online shopping. Simplify sales and increase revenue.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transition-transform duration-700 delay-100 group-hover:-translate-x-10">
              {[
                'Fashion & apparel', 'Home & garden', 'Electronics', 
                'Health & wellness', 'Cosmetics', 'Food & beverage'
              ].map(item => (
                <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-200">
                  <span className="text-[#A3FF00]">✔</span> {item}
                </div>
              ))}
            </div>

            <button className="px-10 py-4 border border-white/20 text-white rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#A3FF00] hover:text-black transition-all group-hover:-translate-x-8">
              Find out more
            </button>
          </div>
        </Link>

      </div>
    </section>
  );
}
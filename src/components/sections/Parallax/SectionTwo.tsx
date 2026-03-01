import { useState } from 'react';

export default function SectionTwo() {
  // Imágenestemporales 
  const imgPhone1 = "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800"; 
  const imgPhone2 = "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800"; 

  const [activeImage, setActiveImage] = useState(imgPhone1);

  return (
    <section  className="h-full w-full bg-[#838e83] flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* LADO IZQUIERDO: Visual de Teléfonos */}
        <div className="relative flex justify-center lg:justify-start perspective-[1200px]">
          {/* Bloques de fondo */}
          <div className="absolute -bottom-10 left-0 w-full h-32 bg-black/10 blur-3xl rounded-full" />
          
          <div className="relative flex gap-4 transform rotate-y-[15deg]">
            {/* Teléfono 1*/}
            <div className="w-56 aspect-[9/19] bg-black rounded-[2.5rem] p-3 shadow-2xl border border-white/10">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900 relative">
                <img 
                  src={activeImage} 
                  className="w-full h-full object-cover transition-all duration-700" 
                  alt="eCommerce App" 
                />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-xl" />
              </div>
            </div>

            {/* Teléfono 2  */}
            <div className="w-48 aspect-[9/19] bg-black rounded-[2.5rem] p-2.5 shadow-2xl border border-white/10 mt-12 opacity-80">
              <div className="w-full h-full rounded-[2rem] overflow-hidden bg-zinc-900">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800" 
                  className="w-full h-full object-cover" 
                  alt="Checkout Process" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* LADO DERECHO */}
        <div 
          className="group cursor-default flex flex-col items-start"
          onMouseEnter={() => setActiveImage(imgPhone2)}
          onMouseLeave={() => setActiveImage(imgPhone1)}
        >
          <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
            ↗ WHAT WE DO
          </p>
          <h2 className="text-white text-6xl lg:text-7xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:-translate-x-6">
            eCommerce <br/> Stores.
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

      </div>
    </section>
  );
}
import { useState } from 'react';

export default function SectionThree() {

  const img1 = "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
  const img2 = "https://images.unsplash.com/photo-1585790054762-36743f4b07ff?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [activeImage, setActiveImage] = useState(img1);

  // Pendiente la imagen de diseño por mì de momento dejaremos una rovisional
  //const [activeImage, setActiveImage] = useState("/images/booking-1.png");

  return (
    <section  className="h-full w-full bg-[#f4f4f4] flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* BLOQUE DE TEXTO (IZQUIERDA) */}
        <div 
          className="group cursor-default flex flex-col items-start"
          onMouseEnter={() => setActiveImage("/images/booking-2.png")}
          onMouseLeave={() => setActiveImage("/images/booking-1.png")}
        >
          <p className="text-[#838e83] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:translate-x-4">
            ↗ WHAT WE DO
          </p>
          
          <h2 className="text-zinc-900 text-6xl lg:text-7xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:translate-x-6">
            Booking & <br/> Listing.
          </h2>
          
          <p className="text-zinc-500 max-w-sm mb-8 text-lg transition-transform duration-700 delay-75 group-hover:translate-x-8">
            Manage appointments, rentals, or services with a high-performance booking engine.
          </p>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transition-transform duration-700 delay-100 group-hover:translate-x-10">
            {['Property Portals', 'Service Booking', 'Event Listings', 'Marketplaces'].map(item => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-500">
                <span className="text-[#838e83]">✔</span> {item}
              </div>
            ))}
          </div>

          <button className="px-10 py-4 border border-zinc-300 text-zinc-900 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-zinc-900 hover:text-white transition-all group-hover:translate-x-8">
            Find out more
          </button>
        </div>

        {/* BLOQUE VISUAL (DERECHA) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -bottom-10 right-0 w-full h-32 bg-zinc-200 blur-3xl rounded-full" />
          
          {/* Placeholder para las imagenes*/}
          <img 
            src={activeImage} 
            alt="Booking System" 
            className="relative z-10 w-full max-w-xl transition-opacity duration-500"
          />
        </div>

      </div>
    </section>
  );
}
import { Link } from 'react-router-dom';
import { useState } from 'react';

import imgBooking1 from "../../../assets/Booking1.jpg";
import imgBooking from "../../../assets/Booking.jpg";

export default function SectionThree() {
  const [activeImage, setActiveImage] = useState(imgBooking1);

  return (
    <section className="h-full w-full bg-[#f4f4f4] flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full px-15 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* BLOQUE DE TEXTO (IZQUIERDA) */}
        <Link to="/whatwedo/Outsourcing">
          <div 
            className="group cursor-pointer flex flex-col items-start"
            onMouseEnter={() => setActiveImage(imgBooking)}
            onMouseLeave={() => setActiveImage(imgBooking1)}
          >
            <p className="text-[#838e83] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:translate-x-4">
              ↗ HOW WE DO
            </p>
            
            <h2 className="text-zinc-900 text-5xl lg:text-6xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:translate-x-6">
              Dedicated <br/> Engineering Teams.
            </h2>
            
            <p className="text-zinc-500 max-w-sm mb-8 text-lg transition-transform duration-700 delay-75 group-hover:translate-x-8">
              Extend your internal capabilities with dedicated offshore developers, QA specialists, agile coaches, and managed product teams.
            </p>
            
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transition-transform duration-700 delay-100 group-hover:translate-x-10">
              {['DEDICATED DEVELOPERS', 'STAFF AUGMENTATION', 'MANAGED IT SERVICES', 'PROJECT-BASED TEAMS'].map(item => (
                <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-500">
                  <span className="text-[#838e83]">✔</span> {item}
                </div>
              ))}
            </div>

            <button className="px-10 py-4 border border-zinc-300 text-zinc-900 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#A3FF00] hover:text-black transition-all group-hover:translate-x-8">
              Find out more
            </button>
          </div>
        </Link>
        

        {/* BLOQUE VISUAL (DERECHA) */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -bottom-10 right-0 w-full h-0 bg-zinc-200 blur-3xl rounded-full" />
          
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

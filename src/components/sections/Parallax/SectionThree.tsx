import { Link } from 'react-router-dom';
import { useState } from 'react';

import imgBooking1 from "../../../assets/Booking1.jpg";
import imgBooking from "../../../assets/Booking.jpg";

export default function SectionThree() {
  const [activeImage, setActiveImage] = useState(imgBooking1);

  return (
    <section className="flex min-h-[calc(100svh-5rem)] w-full items-center justify-center bg-[#f4f4f4] py-16 lg:h-full lg:py-0">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        
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
            
            <h2 className="mb-5 text-4xl font-serif leading-tight text-zinc-900 transition-transform duration-700 group-hover:translate-x-0 sm:text-5xl lg:mb-6 lg:text-6xl lg:group-hover:translate-x-6">
              Dedicated <br/> Engineering Teams.
            </h2>
            
            <p className="mb-7 max-w-sm text-base text-zinc-500 transition-transform delay-75 duration-700 group-hover:translate-x-0 sm:text-lg lg:mb-8 lg:group-hover:translate-x-8">
              Extend your internal capabilities with dedicated offshore developers, QA specialists, agile coaches, and managed product teams.
            </p>
            
            <div className="mb-8 grid grid-cols-1 gap-x-6 gap-y-4 transition-transform delay-100 duration-700 group-hover:translate-x-0 sm:grid-cols-2 lg:mb-10 lg:gap-x-8 lg:group-hover:translate-x-10">
              {['DEDICATED DEVELOPERS', 'STAFF AUGMENTATION', 'MANAGED IT SERVICES', 'PROJECT-BASED TEAMS'].map(item => (
                <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-500">
                  <span className="text-[#838e83]">✔</span> {item}
                </div>
              ))}
            </div>

            <button className="rounded-lg border border-zinc-300 px-8 py-4 text-[10px] font-black uppercase tracking-widest text-zinc-900 transition-all hover:bg-[#A3FF00] hover:text-black lg:px-10 lg:group-hover:translate-x-8">
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
            className="relative z-10 w-full max-w-sm transition-opacity duration-500 sm:max-w-md lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
}

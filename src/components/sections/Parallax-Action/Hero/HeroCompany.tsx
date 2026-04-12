import imgCompany from "/src/assets/Company1.png";


export default function HeroCompany() {
  return (
    <section className="relative w-full h-[84vh] bg-[#0d1110] overflow-hidden">
      
      {/* 2. Imagen de fondo del Mockup del Portátil */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <img 
          src={imgCompany}
          className="w-full h-full object-contain object-right-bottom opacity-60" 
          alt="Background decor"
        />
      </div>

            {/*'pb-20', espacio con el borde de abajo */}
         <div className="absolute bottom-0 left-0 w-full px-6 md:px-20 pb-20 z-10">
            <div className="max-w-7xl mx-auto">
          
                <p className="text-[#A3FF00] font-black text-[14px] tracking-[0.4em] uppercase mb-6">
                  Software Development
                </p>

                <h2 className="text-white text-5xl lg:text-[85px] font-serif leading-[0.9] tracking-tighter">
                    Enhance your business with <br />
                    <span className="italic">Bespoke company websites</span>
                </h2>
          
             </div>
      </div>

        {/* Franja de transición  */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10"></div>
    </section>
  );
}
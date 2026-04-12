import imgEcommerce from "/src/assets/eCommerce4.png";
export default function HeroECommerce() {
  return (
   <section className="relative w-full h-[84vh] bg-[#838e83] overflow-hidden">
      
      {/* 2. Imagen de fondo del Mockup del Portátil */}
      <div className="absolute top-1 right-182 w-full h-full pointer-events-none z-0 ">
        <img  
          src={imgEcommerce}
          className="w-full h-full object-contain object-right-bottom opacity-90" 
          alt="Background decor"
        />
      </div>

        {/*'pb-20', espacio con el borde de abajo */}
         <div className="absolute bottom-0 right-0 w-full px-6 md:px-20 pb-20 z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-end text-right">
          
                <p className="text-[#A3FF00] font-black text-[14px] tracking-[0.4em] uppercase mb-6">
                   ECOMMERCE | ONLINE PLATFORMS
                </p>

                <h2 className="text-white text-5xl lg:text-[85px] font-serif leading-[0.9] tracking-tighter italic">
                    Boost Your Business<br />
                    <span className="italic">With Online Platforms</span>
                </h2>
          
             </div>
      </div>

        {/* Franja de transición  */}
        <div className="absolute bottom-0 right-0 w-full h-1 bg-white/10"></div>
    </section>
  );
}
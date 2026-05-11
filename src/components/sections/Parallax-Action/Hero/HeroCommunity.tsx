import BackgroundImg from "../../../../assets/IA2.png";
 

export default function HeroCommunity() {
  return (
    <section className="relative w-full min-h-[90vh] lg:h-[90vh] bg-gray-200 dark:bg-[#050505] overflow-hidden flex items-center pt-24 lg:pt-0">
      
      <div className="max-w-7xl mx-auto w-full px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado de la Imagen */}
        <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-md lg:max-w-xl aspect-square lg:aspect-auto lg:h-[70vh]">
            <img 
              src={BackgroundImg}
              className="w-full h-full object-contain object-center lg:object-left-bottom opacity-100" 
              alt="AI Robot"
            />
          </div>
        </div>

        {/* Lado del Texto */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right order-1 lg:order-2">
            <p className="text-zinc-900 dark:text-[#A3FF00] font-black text-[14px] tracking-[0.4em] uppercase mb-6">
                Artificial Intelligence
            </p>

            <h1 className="text-zinc-900 dark:text-white text-5xl lg:text-[85px] font-serif leading-[0.9] tracking-tighter italic">
                Build Smarter Solutions<br />
                <span className="italic">with Real-Time Data</span>
            </h1>
        </div>

      </div>

      {/* Franja de transición  */}
      <div className="absolute bottom-0 right-0 w-full h-1 bg-white/10 z-20"></div>
    </section>
  );
}
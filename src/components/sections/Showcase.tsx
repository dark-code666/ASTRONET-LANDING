import { motion } from 'framer-motion';

const IMAGES = [
  "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1661963874418-df1110ee39c1?q=80&w=786&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1769091878147-2f937e89efed?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500",
  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=500",
  "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=500",

];

export default function Showcase() {
  return (
    <section className="bg-white py-4 overflow-hidden dark:bg-[#050505]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* CONTENEDOR DE TELÉFONOS ALINEADOS */}
        <div className="relative flex justify-center gap-3 h-[480px] sm:h-[600px]"> 

          {[0, 1, 2].map((index) => (
            /* traslaciones para que queden en la misma posición */
            <div key={index} className="flex flex-col">
              
              {/* ESTRUCTURA DEL TELÉFONO */}
              <div className="relative mx-auto border-zinc-150 bg-zinc-950 border-[7px] rounded-[2.5rem] h-[420px] w-[180px] shadow-2xl sm:h-[500px] sm:w-[220px]">

                <div className="absolute -left-[9px] top-[80px] h-[30px] w-[3px] bg-zinc-800 rounded-l-lg" />
                <div className="absolute -left-[9px] top-[120px] h-[30px] w-[3px] bg-zinc-800 rounded-l-lg" />
                <div className="absolute -right-[9px] top-[110px] h-[50px] w-[3px] bg-zinc-800 rounded-r-lg" />
                
                {/* (Parte superior) 
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-zinc-950 rounded-full z-30" />*/}

                {/* PANTALLA CON SCROLL */}
                <div className="rounded-[2.1rem] overflow-hidden w-full h-full bg-white relative z-10 dark:bg-white">

                  <motion.div
                    animate={{ y: index % 2 === 0 ? [0, -800] : [-800, 0] }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex flex-col gap-1 p-0"
                  >
                    {[...IMAGES, ...IMAGES, ...IMAGES].map((src, i) => (
                      <img 
                        key={i} 
                        src={src} 
                        className="w-full rounded-2xl aspect-[9/16] object-cover" 
                        alt="project-view"
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* LADO DEL TEXTO */}
        <div className="space-y-10">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white leading-[1.1]">
            We help you manage every detail.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-white/70 leading-relaxed max-w-lg">
            We align technology with your business objectives through interfaces 
            designed to convert and scale.
          </p>

          <button className="px-10 py-4 bg-zinc-950 text-white rounded-2xl font-bold hover:bg-lime-400 hover:text-zinc-950 transition-all duration-300 cursor-pointer">
          Work with us
        </button>
        </div>

      </div>
    </section>
  );
}

      
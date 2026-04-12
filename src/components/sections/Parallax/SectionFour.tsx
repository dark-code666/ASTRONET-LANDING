import { Link } from "react-router-dom";
import imgBooking1 from "../../../assets/IA.png";

export default function SectionFour() {
  
  
  const staticImage = imgBooking1;

  return (
    <section  className="h-full w-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-6xl w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* BLOQUE VISUAL ESTÁTICO */}
        <div className="relative flex justify-center lg:justify-start">
          
          <div className="relative z-10 w-full max-w-xl ml-1 ">
            <img 
              src={staticImage} 
              alt="IA" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

        {/* BLOQUE DE TEXTO*/}
         <Link to="/whatwedo/Artificial-Intelligence">
        <div className="group cursor-default flex flex-col items-start">
      
          <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
            ↗ WHAT WE DO
          </p>
          
          <h2 className="text-zinc-900 text-6xl lg:text-7xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:-translate-x-6">
            Artificial <br/> Intelligence.
          </h2>
          
          <p className="text-zinc-500 max-w-sm mb-8 text-lg transition-transform duration-700 delay-75 group-hover:-translate-x-8">
            Empower your business growth with AI solutions designed to scale under one roof.
          </p>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transition-transform duration-700 delay-100 group-hover:-translate-x-10">
            {[
              'AI Agents', 'NEURAL NETWORKS', 
              'PREDICTIVE ANALYTICS', 'MACHINE LEARNING', 
              'MACHINE LEARNING', 'NLP SOLUTIONS'
            ].map(item => (
              <div key={item} className="flex items-center gap-3 text-[10px] font-black uppercase text-zinc-400">
                {/* Check */}
                <span className="text-[#A3FF00]">✔</span> {item}
              </div>
            ))}
          </div>
          <button className="px-10 py-4 border border-zinc-900 text-zinc-900 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-[#A3FF00] hover:text-black hover:border-[#A3FF00] transition-all group-hover:-translate-x-8">
            Find out more
          </button>

        </div>
        </Link>

      </div>
    </section>
  );
}
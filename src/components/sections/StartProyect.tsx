import { Rocket } from 'lucide-react'; // Opcional usar un SVG

export default function StartProyect() {
  return (
    <section  className="bg-white py-40 px-6 md:px-12 lg:px-24 flex flex-col items-center justify-center border-b border-zinc-100">
     
  
      {/* CONTENEDOR DEL COHETE ANIMADO */}
      <div className="mb-12 relative flex items-center justify-center">
        {/*Cohete Principal con animación */}
        <div className="animate-bounce-slow">
          <Rocket size={56} className="text-zinc-950 rotate-[-45deg]" strokeWidth={1} />
        </div>
        
        {/* Puntos/Estrellas Decorativos*/}
        <div className="absolute top-0 right-[-20px] w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse delay-150"></div>
        <div className="absolute bottom-[-10px] left-[-15px] w-1 h-1 bg-zinc-200 rounded-full animate-pulse"></div>
        
        {/* Estela de Propulsión */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          <div className="w-1.5 h-1.5 bg-zinc-300 rounded-full animate-pulse delay-75"></div>
          <div className="w-1.5 h-1.5 bg-zinc-200 rounded-full animate-pulse delay-100"></div>
        </div>
      </div>
  

      {/*TEXTO PRINCIPAL*/}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-zinc-950 text-5xl md:text-7xl font-serif mb-8 leading-tight tracking-[-0.03em]">
          Enquire Here for Website Design Services
        </h1>
        <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We specialise in creating custom websites tailored to reflect the unique identity and values of your business. 
          Enquire today about website design services and give your business the digital presence it deserves.
        </p>
      </div>

      {/* FORMULARIO */}
      <form className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">First Name</label>
          <input type="text" className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors" />
        </div>
        
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">Last Name</label>
          <input type="text" className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">Email</label>
          <input type="email" className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors" />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">Business Name</label>
          <input type="text" className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors" />
        </div>

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">Message</label>
          <textarea rows={5} className="w-full border border-zinc-200 p-4 rounded-md focus:outline-none focus:border-zinc-900 transition-colors resize-none" />
        </div>

        <button className="md:col-span-2 bg-[#1a2b2b] text-white py-5 rounded-md font-black text-xs uppercase tracking-[0.2em] hover:bg-[#253d3d] transition-all mt-4">
          Submit Enquiry
        </button>

        <p className="md:col-span-2 text-center text-zinc-400 text-[10px] mt-4">
          Please note, by submitting this form, you are agreeing to the <br/>
          terms in the <span className="text-zinc-900 underline cursor-pointer">Harry King Studio Privacy Policy</span>.
        </p>
      </form>
    </section>
  );
}
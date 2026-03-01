export default function SectionFour() {
  
  const staticImage = "https://images.unsplash.com/photo-1722503583817-ee834e31ce4b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section  className="h-full w-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
      <div className="mx-auto max-w-6xl w-full px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        
        {/* BLOQUE VISUAL ESTÁTICO */}
        <div className="relative flex justify-center lg:justify-start">
          
          <div className="relative z-10 w-full max-w-xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white">
            <img 
              src={staticImage} 
              alt="Community and Collaboration" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>

        {/* BLOQUE DE TEXTO*/}
        <div className="group cursor-default flex flex-col items-start">
      
          <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] mb-4 transition-transform duration-500 group-hover:-translate-x-4">
            ↗ WHAT WE DO
          </p>
          
          <h2 className="text-zinc-900 text-6xl lg:text-7xl font-serif mb-6 leading-tight transition-transform duration-700 group-hover:-translate-x-6">
            Community <br/> Platforms.
          </h2>
          
          <p className="text-zinc-500 max-w-sm mb-8 text-lg transition-transform duration-700 delay-75 group-hover:-translate-x-8">
            Fully connect with your customers and let them all communicate under one roof.
          </p>
          
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10 transition-transform duration-700 delay-100 group-hover:-translate-x-10">
            {[
              'Wellness Coaches', 'Online Learning', 
              'Interest Groups', 'Member Areas', 
              'Brand loyalty', 'Social Networking'
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

      </div>
    </section>
  );
}
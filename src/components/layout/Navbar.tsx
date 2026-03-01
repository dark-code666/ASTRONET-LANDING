import Button from '../ui/Button'


export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 w-full z-50 px-4">
      <div className="mx-auto max-w-6xl">
        <nav className="flex items-center justify-between bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl shadow-sm border border-zinc-200/50">
          
          {/* Logo a la izquierda */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-zinc-950 uppercase leading-none">
              AN<span className="text-zinc-400 font-light">′</span>
            </span>
            
            <div className="leading-tight  ml-2">
              <div className="text-sm font-semibold text-zinc-950">Astronet</div>
              <div className="text-xs text-zinc-500">Software Development Studio</div>
            </div>
          </a>

          {/* Central*/}
          <div className="hidden md:flex items-center gap-10">
            <a href="#services" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 hover:opacity-70 transition-opacity">
              What we do
            </a>
            <a href="#work" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 hover:opacity-70 transition-opacity">
              Case Studies
            </a>
            <a href="#contact" className="text-[11px] font-black uppercase tracking-widest text-zinc-900 hover:opacity-70 transition-opacity">
              Contact
            </a>
          </div>

          {/* Aqui falta la etiqueta de Location */}

          {/* Menú y Botón - Derecha */}
          <div className="flex items-center gap-8">
            <button className="flex items-center gap-2 group cursor-pointer">
              <span className="text-[11px] font-black uppercase tracking-widest text-zinc-900">Menu</span>
              <div className="flex flex-col gap-1 w-6">
                <span className="h-[2px] w-full bg-zinc-900 rounded-full"></span>
                <span className="h-[2px] w-full bg-zinc-900 rounded-full"></span>
              </div>
            </button>

            
            <Button 
              href="#contact" 
              variant="primary" 
              className="rounded-xl bg-[#A3FF00] text-zinc-950 font-black uppercase tracking-tight text-xs px-8 h-12 hover:brightness-105 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all"
            >
              Start a project
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
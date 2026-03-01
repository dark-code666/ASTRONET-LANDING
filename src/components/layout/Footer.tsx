/*

type FooterLink = {
  label: string
  href: string
}

export type FooterProps = {
  links?: FooterLink[]
}

export default function Footer({
  links = [
    { label: 'Services', href: '#services' },
    { label: 'Case studies', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ],
}: FooterProps) {
  return (
    <footer className="border-t border-zinc-900/10 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-zinc-950">Astronet</div>
            <div className="mt-1 text-sm text-zinc-600">
              Modern software for teams that move fast.
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Astronet. All rights reserved.
          </div>
          <div className="text-xs text-zinc-500">
            Crafted with React + TypeScript + Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}
*/

import { Mail, MessageCircle, Calendar } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();


const scrollToParallax = (sectionNumber: number) => {
  const container = document.getElementById('parallax-container');
  
  if (container) {
    // Calculamos la altura de una sección (100vh menos el header de 64px)
    const sectionHeight = window.innerHeight - 64; 
    
    // Calculamos la posición: el inicio del contenedor + (altura * (sección - 1))
    // Esto nos lleva al punto exacto donde la sección se vuelve visible
    const targetScroll = container.offsetTop + (sectionHeight * (sectionNumber - 1));

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  }
};

  return (
    <footer className="w-full bg-[#0d1110] text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* BARRA DE CONTACTO SUPERIOR */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 mb-20 gap-8">
          <div className="flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#A3FF00] font-black text-2xl">A</span>
              <span className="text-white font-black text-2xl tracking-tighter">N</span>
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80">
              Astronet
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {/* Redirección a WhatsApp */}
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#A3FF00]/10 transition-colors">
                <MessageCircle size={20} className="text-white group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">WhatsApp</p>
                <p className="text-sm font-bold uppercase tracking-tight">ASTRONET</p>
              </div>
            </a>

            {/* Redirección a Email */}
            <a href="mailto:hello@harryking.studio" className="group flex items-center gap-4">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#A3FF00]/10 transition-colors">
                <Mail size={20} className="text-white group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">Email</p>
                <p className="text-sm font-bold uppercase tracking-tight">ASTRONET@GMAIL.COM</p>
              </div>
            </a>

            {/* Redirección al CTA / Formulario de contacto */}
            <a href="#contact" className="group flex items-center gap-4 border-l border-white/10 pl-10 hidden sm:flex">
              <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#A3FF00]/10 transition-colors">
                <Calendar size={20} className="text-white group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">Schedule a call</p>
                <p className="text-sm font-bold uppercase tracking-tight">START A PROJECT</p>
              </div>
            </a>
          </div>
        </div>

        {/* COLUMNAS DE NAVEGACIÓN */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-24">
          
          {/* 1. Navigation*/}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A3FF00] mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <li><a href="#home" className="text-[#A3FF00] hover:brightness-125">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Latest Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#insights" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

            {/* 2. Our Websites */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">
                Our Websites
              </h4>
              <ul className="space-y-4 text-xs font-bold text-zinc-400 tracking-wide uppercase">
                <li>
                  <button 
                    onClick={() => scrollToParallax(1)} 
                    className="hover:text-white transition-colors text-left w-full uppercase"
                  >
                    Company Websites
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToParallax(2)} 
                    className="hover:text-white transition-colors text-left w-full uppercase"
                  >
                    Online Stores
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToParallax(3)} 
                    className="hover:text-white transition-colors text-left w-full uppercase"
                  >
                    Booking Websites
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToParallax(4)} 
                    className="hover:text-white transition-colors text-left w-full uppercase"
                  >
                    Community Platforms
                  </button>
                </li>
              </ul>
            </div>

          

          {/* 3. Latest Work */}
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Latest Work</h4>
            <ul className="space-y-4 text-[11px] font-medium text-zinc-400 leading-relaxed">
              <li><a href="#work" className="hover:text-white transition-colors">Salboy: An Award Winning Manchester Developer</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Mont à l'Abbé School Website Design & Development</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Jersey Construction Council: Jersey's Online Hub</a></li>
            </ul>
          </div>

          {/*Blog */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Web Insights</h4>
            <div className="space-y-6">
              <a href="#insights" className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-[#A3FF00] transition-all">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100" alt="Insight" className="w-full h-full object-cover opacity-60" />
                </div>
                <p className="text-[11px] font-bold leading-tight group-hover:text-[#A3FF00] transition-colors">
                  Discover the Industries Thriving with Booking Websites
                </p>
              </a>
              <a href="#insights" className="flex gap-4 group">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-[#A3FF00] transition-all">
                  <img src="https://images.unsplash.com/photo-1523206489230-c012c740c120?w=100" alt="Insight" className="w-full h-full object-cover opacity-60" />
                </div>
                <p className="text-[11px] font-bold leading-tight group-hover:text-[#A3FF00] transition-colors">
                  How to Open an Online Store with Astronet
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT Y LEGAL */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-medium text-zinc-600">
          <p>© {currentYear} Astronet Services Limited trading as Astronet - JFSC Registration Number: 134651</p>
          <div className="flex gap-6 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Privacy Settings</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
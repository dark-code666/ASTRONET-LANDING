import { Mail, MessageCircle, Calendar} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0d1110] text-zinc-950 pt-20 pb-10 dark:bg-[#0d1110] dark:text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        
        {/* BARRA DE CONTACTO SUPERIOR */}
        <div className="flex flex-col lg:flex-row items-center justify-between bg-zinc-50 border border-zinc-900/10 rounded-2xl p-6 lg:p-8 mb-20 gap-8 dark:bg-white/5 dark:border-white/10">
          <div className="flex flex-col items-center lg:items-start max-w-md">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-[#A3FF00] font-black text-2xl">A</span>
              <span className="text-zinc-950 dark:text-white font-black text-2xl tracking-tighter">N</span>
            </div>
            <p className="text-[10px] font-black tracking-[0.3em] uppercase opacity-80 mb-3">
              Astronet
            </p>
            <p className="text-xs font-bold text-zinc-950 dark:text-white mb-2 text-center lg:text-left">
              Offshore product execution partner for growing companies.
            </p>
            <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-400 text-center lg:text-left">
              Astronet helps US companies build scalable digital products, expand engineering capacity, and optimize operations through software, AI-powered systems, and dedicated offshore teams.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {/* WhatsApp */}
            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4">
              <div className="p-3 rounded-xl bg-zinc-950/5 group-hover:bg-[#A3FF00]/10 transition-colors dark:bg-white/5">
                <MessageCircle size={20} className="text-zinc-950 group-hover:text-[#A3FF00] dark:text-white" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">WhatsApp</p>
                <p className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">ASTRONET</p>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:hello@harryking.studio" className="group flex items-center gap-4">
              <div className="p-3 rounded-xl bg-zinc-950/5 group-hover:bg-[#A3FF00]/10 transition-colors dark:bg-white/5">
                <Mail size={20} className="text-zinc-950 group-hover:text-[#A3FF00] dark:text-white" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">Email</p>
                <p className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">ASTRONET@GMAIL.COM</p>
              </div>
            </a>

            {/* Contacto CTA */}
            <Link to="/contact" className="group flex items-center gap-4 border-l border-zinc-900/10 pl-10 hidden sm:flex dark:border-white/10">
              <div className="p-3 rounded-xl bg-zinc-950/5 group-hover:bg-[#A3FF00]/10 transition-colors dark:bg-white/5">
                <Calendar size={20} className="text-zinc-950 group-hover:text-[#A3FF00] dark:text-white" />
              </div>
              <div>
                <p className="text-[9px] font-black tracking-widest text-zinc-500 uppercase">Schedule a call</p>
                <p className="text-sm font-bold uppercase tracking-tight text-zinc-950 dark:text-white">START A PROJECT</p>
              </div>
            </Link>
          </div>
        </div>

        {/* COLUMNAS DE NAVEGACIÓN */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-24">
          
          {/* 1. Navigation */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#A3FF00] mb-8">Navigation</h4>
            <ul className="space-y-4 text-xs font-bold text-zinc-400 uppercase tracking-widest">
              <li>
                <Link to="/" className="text-[#A3FF00] hover:brightness-125">Home</Link>
              </li>
              <li>
                <Link to="/About-Us" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li><Link to="/#work" className="hover:text-white transition-colors">Latest Work</Link></li>
              <li><Link to="/#parallax-container" className="hover:text-white transition-colors">How We Do</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* 2. Our Services */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Our services</h4>
            <ul className="space-y-4 text-xs font-bold text-zinc-400 tracking-wide uppercase">
              <li>
                <Link to="/whatwedo/Software-Development" className="hover:text-white transition-colors text-left w-full uppercase">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/whatwedo/eCommerce" className="hover:text-white transition-colors text-left w-full uppercase">
                  eCommerce Platforms
                </Link>
              </li>
              <li>
                <Link to="/whatwedo/Outsourcing" className="hover:text-white transition-colors text-left w-full uppercase">
                  Outsourcing
                </Link>
              </li>
              <li>
                <Link to="/whatwedo/Artificial-Intelligence" className="hover:text-white transition-colors text-left w-full uppercase">
                  AI
                </Link>
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

          {/* Web Insights */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Web Insights</h4>
            <div className="space-y-6">
              <a href="#insights" className="flex gap-4 group text-white">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-[#A3FF00] transition-all">
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100" alt="Insight" className="w-full h-full object-cover opacity-60" />
                </div>
                <p className="text-[11px] font-bold leading-tight group-hover:text-[#A3FF00] transition-colors">
                  Discover the Industries Thriving with Booking Websites
                </p>
              </a>
              <a href="#insights" className="flex gap-4 group text-white">
                <div className="w-12 h-12 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden group-hover:ring-2 group-hover:ring-[#A3FF00] transition-all">
                  <img src="https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=100" alt="Insight" className="w-full h-full object-cover opacity-60" />
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

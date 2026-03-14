import { Link } from "react-router-dom";
import { MessageCircle, Mail, PhoneCall } from "lucide-react";

type MenuProps = {
  onNavigate?: () => void;
};

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#services" },
  { name: "Outsoursing", href: "#outsourcing-vas" },
  { name: "What we Do", href: "/whatwedo", active: true },
  { name: "Case Studies", href: "#work" },
  { name: "Contact", href: "#contact" },
];

const whatWeDoLinks = [
  { name: "Company Websites", href: "/whatwedo/Company-Websites" },
  { name: "Online Store", href: "/whatwedo/eCommerce" },
  { name: "Booking Websites", href: "/whatwedo/Booking" },
  { name: "Community Platforms", href: "/whatwedo/Community-Platforms" },
];

export default function Menu({ onNavigate }: MenuProps) {
  return (
    <div className="w-full h-full text-white p-6 sm:p-10 md:p-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 gap-8 md:grid-cols-3">
        
        
        <section className="w-full">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">
            Navegation
          </h3>
          <ul className="space-y-4 text-center md:text-left">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('#') ? (
                  <a
                    href={link.href}
                    onClick={() => onNavigate?.()}
                    className={`text-2xl sm:text-3xl md:text-4xl font-serif hover:text-[#A3FF00] transition-all ${
                      link.active ? "text-[#A3FF00]" : "text-white "
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => onNavigate?.()}
                    className={`text-2xl sm:text-3xl md:text-4xl font-serif hover:text-[#A3FF00] transition-all ${
                      link.active ? "text-[#A3FF00]" : "text-white "
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </section>

       
        <section>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">
           What we Do
          </h3>
          <ul className="space-y-6 text-center md:text-left">
            {whatWeDoLinks.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  onClick={() => onNavigate?.()}
                  className="text-xl sm:text-2xl md:text-3xl font-serif text-white hover:text-[#A3FF00] transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        
        <section>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">
            Contact
          </h3>
          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl space-y-8 backdrop-blur-sm">
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#A3FF00]/20 transition-colors">
                <MessageCircle size={24} className="group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Whatsapp</p>
                <p className="text-sm font-bold tracking-tight uppercase">Astronet.Studio</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#A3FF00]/20 transition-colors">
                <Mail size={24} className="group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Email</p>
                <p className="text-sm font-bold tracking-tight uppercase">Hello@astronet.studio</p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#A3FF00]/20 transition-colors">
                <PhoneCall size={24} className="group-hover:text-[#A3FF00]" />
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-widest text-zinc-500 mb-1">Schedule A Call</p>
                <p className="text-sm font-bold tracking-tight uppercase text-[#A3FF00]">Start A Project</p>
              </div>
            </div>

          </div>
        </section>

      </div>
    </div>
  );
}
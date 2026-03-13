import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle, Mail, PhoneCall } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Outsoursing", href: "/work" },
  { name: "What we Do", href: "/whatwedo", active: true },
  { name: "Case Studies", href: "" },
  { name: "Contact", href: "/contact" },
];

const whatWeDoLinks = [
  "Company Websites",
  "Online Store",
  "Booking Websites",
  "Community Platforms",
];

export default function Menu() {
  return (
    <div className="w-full h-full text-white p-10 md:p-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        
        
        <section>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">
            Navegation
          </h3>
          <ul className="space-y-4">
            {navigationLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className={`text-3xl md:text-4xl font-serif  hover:text-[#A3FF00] transition-all ${
                    link.active ? "text-[#A3FF00]" : "text-white "
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

       
        <section>
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 font-bold mb-8">
           What we Do
          </h3>
          <ul className="space-y-6">
            {whatWeDoLinks.map((item) => (
              <li key={item}>
                <Link
                  to="#"
                  className="text-2xl md:text-3xl font-serif text-white  hover:text-[#A3FF00] transition-all"
                >
                  {item}
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
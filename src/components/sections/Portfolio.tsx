import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';


const projects = [
  { id: 1, title: 'Belleek Castle', cat: 'BOOKING WEBSITES', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800', url: '/belleek' },
  { id: 2, title: 'Salboy', cat: 'COMPANY WEBSITES', img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800', url: '/salboy' },
  { id: 3, title: 'Spaces', cat: 'REQUEST SERVICES', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800', url: '/spaces' },
  { id: 4, title: 'Project Echo', cat: 'BRANDING', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800', url: '/echo' },
  { id: 5, title: 'Osneilling', cat: 'E-COMMERCE', img: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', url: '/Osneilling' },
  { id: 6, title: 'Zenith', cat: 'SaaS PLATFORMS', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', url: '/zenith' },
  { id: 7, title: 'Apex', cat: 'COMMUNITY', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800', url: '/apex' },
];

export default function PortfolioCarousel() {
  // SwiperType is optional since the ref starts as null
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden dark:bg-[#0d1110]">
      {/* CONTENEDOR DE TEXTO */}
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-12 relative mb-12 sm:mb-16">
        
        {/* FILA SUPERIOR: Label y Botón */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-center gap-2">
            <span className="text-[#A3FF00] text-sm">↗</span>
            <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] uppercase">
              LATEST WORK
            </p>
          </div>
          
          <button className="hidden md:block px-8 py-3 border border-zinc-900/20 text-zinc-950 rounded-lg text-[9px] font-black uppercase tracking-[0.2em] hover:bg-zinc-950 hover:text-white transition-all dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black">
            VIEW LATEST WORK
          </button>
        </div>

        {/* TÍTULO Y FLECHA: Alineados */}
        <div className="flex justify-between items-end">
          <h2 className="text-zinc-950 dark:text-white text-3xl lg:text-6xl font-serif leading-tight tracking-tighter">
            Website launches, collaborations & <br/> long-standing success stories.
          </h2>

          <button 
            onClick={() => swiperRef.current?.slideNext()}
            className="group flex items-center justify-center transition-transform hover:scale-110 mb-2"
          >
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12H58M58 12L48 2M58 12L48 22" stroke="#A3FF00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* CONTENEDOR DEL CARRUSEL*/}
      <div className="pl-0 md:pl-[calc((10vw-1152px)/2+48px)]">
        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={30}
          slidesPerView={1.3}
          loop={true} 
          breakpoints={{
            768: { slidesPerView: 2.3 },
            1024: { slidesPerView: 3.3 }, 
          }}
          className="!overflow-visible"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <Link to={project.url} className="group relative block aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-zinc-900 transition-all duration-500 hover:-translate-y-2">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover  transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-100"
                />
                
                {/* ETIQUETA FLOTANTE */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md px-5 py-2 rounded-full z-20">
                  <p className="text-[9px] font-black tracking-widest text-black uppercase">
                    {project.cat}
                  </p>
                </div>

                {/* TEXTO INFERIOR */}
                <div className="absolute bottom-10 left-10 right-10 z-20">
                  <h4 className="text-white text-4xl font-serif mb-2 tracking-tight">
                    {project.title}
                  </h4>
                  <div className="w-0 group-hover:w-full h-[2px] bg-[#A3FF00] transition-all duration-500" />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
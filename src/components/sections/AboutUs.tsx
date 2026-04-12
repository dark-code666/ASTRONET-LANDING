import { useGoogleLogin } from '@react-oauth/google';
import GUAPOS from "../../assets/GUAPOS.jpg";
import logoBussines from "../../assets/Logos/LogoBussines.jpg";
import  logoCompany from "../../assets/Logos/LogoCompany.jpg";
import logocontruction from "../../assets/Logos/logocontruction.png";


const AboutHero = () => (

  <section className="px-6 py-20 bg-white dark:bg-[#0a0a0a] mt-10">
    <div className="max-w-7xl mx-auto bg-[#0a1212] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center border border-zinc-800/50">
      <div className="w-full md:w-1/2 h-[500px]">
        <img 
           src={GUAPOS} 
          className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-700"
          alt="Astronet Creative Studio"
        />
      </div>
      <div className="w-full md:w-1/2 p-12 md:p-20 text-white">
        <div className="flex items-center gap-2 mb-6 text-[10px] font-bold tracking-[0.3em] text-lime-400 uppercase">
          <span className="w-3 h-[1px] bg-lime-400" />
          About Astronet Studio
        </div>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
          We build the future of <br />
          <span className="italic font-normal text-zinc-400">digital efficiency.</span>
        </h1>
        <p className="text-zinc-400 text-lg leading-relaxed font-light">
          At Astronet, we merge advanced software engineering with strategic AI 
          to transform how businesses operate in the digital age. We don't just 
          write code; we architect solutions that drive growth.
        </p>
      </div>
    </div>
  </section>
);


const ReviewsSection = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  const reviews = [
    { name: "Ryan Le Sueur", time: "9 months ago", initial: "R", color: "bg-blue-100 text-blue-600" },
    { name: "Gentle Steps", time: "1 year ago", initial: "G", color: "bg-emerald-100 text-emerald-600" },
    { name: "Chris Price", time: "1 year ago", initial: "C", color: "bg-purple-100 text-purple-600" },
    { name: "Pete Thompson", time: "1 year ago", initial: "P", color: "bg-orange-100 text-orange-600" },
  ];

  return (
    <section className="py-14 bg-[#f8f9fa] dark:bg-zinc-900/20 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 dark:text-white">Overall Rating</h2>
            <div className="flex items-center gap-4">
              <span className="text-5xl font-black dark:text-white">5.0</span>
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-zinc-500 text-sm">(21 reviews)</span>
            </div>
          </div>
          <button 
            onClick={() => login()}
            className="bg-zinc-950 dark:bg-white dark:text-black text-white px-8 py-3 rounded-full font-bold hover:opacity-80 transition-all active:scale-95"
          >
            Write a Review
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white dark:bg-zinc-800/50 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-700/50">
              <div className="flex items-center gap-3 mb-4">
                <div className={`size-10 rounded-full flex items-center justify-center font-bold ${rev.color}`}>{rev.initial}</div>
                <div>
                  <div className="text-sm font-bold flex items-center gap-1 dark:text-white">
                    {rev.name} <span className="text-blue-500 text-[10px]">●</span>
                  </div>
                  <div className="text-[10px] text-zinc-400 uppercase tracking-tighter">{rev.time}</div>
                </div>
              </div>
              <div className="text-yellow-400 text-xs mb-3">★★★★★</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed italic">
                "I'm over the moon with the software built by Astronet. Their attention to detail and AI integration is top-tier."
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-700 flex items-center justify-between">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-[10px] italic">Google</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const ClientsSection = () => {
  const logos = [
    { src: logoBussines, alt: "Bussines" },
    { src: logoCompany, alt: "Company" },
    { src: logocontruction, alt: "Construction" },
     { src: logoBussines, alt: "Bussines" },
    { src: logoCompany, alt: "Company" },
    { src: logocontruction, alt: "Construction" },
    
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl mb-16 italic dark:text-zinc-200">
          Some of Our Clients.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 items-center">
          {logos.map((logo, i) => (
            <div key={i} className="flex justify-center group">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 md:h-35 object-contain grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 dark:invert" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AboutUs() {
  return (
    <main className="bg-white dark:bg-[#0a0a0a] transition-colors overflow-hidden">
      <AboutHero />
      <ReviewsSection />
      <ClientsSection />
    </main>
  );
}
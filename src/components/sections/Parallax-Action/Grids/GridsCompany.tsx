import React from 'react';

interface Feature {
  title: string;
  description: string;
  dotColor: string; 
}

const featureData: Feature[] = [
  {
    title: "Bespoke Website Design",
    description: "Your website should reflect your brand’s unique character. We create bespoke website designs that capture your essence and engage your target audience.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Solutions for All Businesses",
    description: "Whether you’re a small start-up or a well-established company, we offer tailored website solutions. Our designs are flexible to meet the evolving needs of businesses of all sizes and industries.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Strategic Design for Results",
    description: "Our strategy focuses on achieving tangible results and fostering engagement. Each website we build is designed to attract traffic, encourage interaction, and provide a smooth user journey.",
    dotColor: "bg-zinc-300"
  },
  {
    title: "Single-Page to Multi-Page Sites",
    description: "From simple single-page portfolios to intricate multi-page websites, we can do it all. We create adaptable websites that suit your specific requirements and objectives.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Easy Management",
    description: "We build websites that are not only visually appealing but also easy to use so you can update and manage your site with ease, even if you’re not a tech expert.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Optimised for Google",
    description: "A great website needs to be easily found. Our websites are built with robust SEO (Search Engine Optimisation) practices to help you climb search engine rankings",
    dotColor: "bg-zinc-300"
  }
];


export default function GridsCompany() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-20">
      {/* Contenedor principal: 1 columna en móvil, 3 columnas en desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        
        {featureData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            
            {/* punto decorativo de color (Bullet) */}
            <div className={`mt-2 w-3.5 h-3.5 rounded-full shrink-0 transition-colors duration-300 hover:bg-[#8EC63F] ${feature.dotColor}`}></div>
            
            {/* Contenido de la Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold text-zinc-900 mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
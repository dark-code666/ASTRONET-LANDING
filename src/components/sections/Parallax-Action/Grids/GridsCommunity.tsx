

interface Feature {
  title: string;
  description: string;
  dotColor: string; 
}

const featureData: Feature[] = [
  {
    title: "Online Discussions",
    description: "Create a space for meaningful conversations with our custom discussion forums. Tailored to your community's needs, these forums encourage engagement and allow members to share ideas, ask questions, and connect with each other.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Paid Membership Websites",
    description: "Monetise your community with flexible paid membership options. Offer exclusive content, special access, and other perks to your members, providing additional value while generating revenue for your business.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Online Learning",
    description: "Empower your community with integrated e-learning features. Offer online courses, tutorials, and educational resources directly through your platform, providing valuable content that helps members grow and learn within your community.",
    dotColor: "bg-zinc-300"
  },
  {
    title: "Custom Branding & Design",
    description: "Reflect your brand's unique identity with custom branding and design options. Our community platforms can be tailored to match your brand’s aesthetics, ensuring a cohesive and professional look that resonates with your audience.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Advanced Analytics & Insights",
    description: "Understand your community better with advanced analytics and insights. Track member activity, engagement levels, and other key metrics to optimise your content and grow your platform effectively.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Collaboration & Interactive Tools",
    description: "From shared projects and group messaging to polls, live chats, webinars, and multimedia content, our platforms make it easy for members to work together and stay connected.",
    dotColor: "bg-zinc-300"
  }
];


export default function GridsCompany() {
  return (
    <section className="bg-white dark:bg-[#050505] py-16 px-6 sm:px-12 md:px-20">
      {/* Contenedor principal: 1 columna en móvil, 3 columnas en desktop */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        
        {featureData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            
            {/* punto decorativo de color (Bullet) */}
            <div className={`mt-2 w-3.5 h-3.5 rounded-full shrink-0 transition-colors duration-300 hover:bg-[#8EC63F] ${feature.dotColor}`}></div>
            
            {/* Contenido de la Card */}
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold text-zinc-900 dark:text-white mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
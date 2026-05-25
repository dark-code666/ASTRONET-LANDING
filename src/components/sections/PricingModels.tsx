import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const models = [
  {
    id: 1,
    title: "Fixed Scope",
    subtitle: "Milestone-Based Execution",
    description: "Best for: Clearly defined projects with predictable deliverables — landing pages, MVP features, internal tools, and product launches.",
    tag: "Milestone-Based",
    color: "border-zinc-200 dark:border-zinc-800",
    headerBg: "bg-zinc-50",
    features: ["Defined scope and deliverables", "Fixed pricing per milestone", "Structured timeline and execution plan"],
    benefits: ["Predictable investment", "Faster delivery cycles", "Clear expectations from day one"]
  },
  {
    id: 2,
    title: "Dedicated Team",
    subtitle: "Embedded Offshore Team",
    description: "Best for: Growing startups, SaaS companies, and businesses that need long-term product execution and scalable engineering capacity.",
    tag: "Embedded Team",
    isFeatured: true,
    color: "border-[#A3FF00]",
    headerBg: "bg-lime-400/5",
    features: ["Dedicated developers and product specialists", "Monthly engagement model", "Fully integrated into your workflows and roadmap"],
    benefits: ["Consistent execution", "Scalable engineering capacity", "No internal hiring overhead"]
  },
  {
    id: 3,
    title: "Time & Material",
    subtitle: "Agile Product Execution",
    description: "Best for: Complex or evolving products that require continuous iterations, experimentation, and flexible scope management.",
    tag: "Agile Scope",
    color: "border-zinc-200 dark:border-zinc-800",
    headerBg: "bg-zinc-50",
    features: ["Flexible development cycles", "Iterative execution approach", "Priorities evolve alongside your roadmap"],
    benefits: ["Maximum adaptability", "Faster decision-making", "Built for evolving products"]
  },
  {
    id: 4,
    title: "Hybrid Model",
    subtitle: "Strategic Custom Engagement",
    description: "Best for: Companies that require a tailored combination of product development, operational support, and dedicated offshore teams.",
    tag: "Strategic",
    color: "border-zinc-200 dark:border-zinc-800",
    headerBg: "bg-zinc-50",
    features: ["Custom execution structure", "Combination of dedicated teams and milestone-based delivery", "Built around your operational and product goals"],
    benefits: ["Strategic flexibility", "Optimized execution efficiency", "Long-term scalability"]
  }
];

const PricingModels = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 my-5">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Engagement Models</h2>
          <p className="text-gray-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Flexible execution models designed around your product roadmap, operational needs, and growth stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <motion.div
              key={model.id}
              whileHover={{ y: -8 }}
              className={`flex flex-col border-2 rounded-3xl overflow-hidden transition-shadow hover:shadow-xl dark:bg-[#0a0a0a] ${model.color}`}
            >
              {/* Header section */}
              <div className={`p-8 ${model.headerBg} dark:bg-white/5 border-b border-zinc-200 dark:border-zinc-800 relative`}>
                {model.isFeatured && (
                  <span className="absolute top-4 right-4 text-xs font-black uppercase bg-[#A3FF00] text-zinc-950 px-2 py-0.5 rounded-full shadow-sm">
                    ⭐ Recommended
                  </span>
                )}
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{model.tag}</span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 flex items-center gap-1.5">
                  {model.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-zinc-400 font-medium mt-1">{model.subtitle}</p>
                <div className="mt-6">
                  <Link to="/contact">
                    <button className={`w-full py-3 px-6 font-semibold rounded-xl transition-all uppercase tracking-tight text-xs ${
                      model.isFeatured 
                        ? 'bg-[#A3FF00] hover:bg-lime-300 text-zinc-950 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)]' 
                        : 'bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white/10 dark:hover:bg-white/20'
                    }`}>
                      Get Started
                    </button>
                  </Link>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-xs text-gray-600 dark:text-zinc-400 mb-6 italic leading-relaxed">
                    {model.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase mb-3 tracking-[0.15em]">How it works:</h4>
                      <ul className="space-y-2.5">
                        {model.features.map((f, i) => (
                          <li key={i} className="text-sm text-gray-700 dark:text-zinc-300 flex items-start leading-relaxed font-medium">
                            <span className="mr-2 text-zinc-400 dark:text-zinc-600">•</span> {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-[10px] font-black text-gray-400 dark:text-zinc-500 uppercase mb-3 tracking-[0.15em]">Why companies choose this:</h4>
                      <ul className="space-y-2.5">
                        {model.benefits.map((b, i) => (
                          <li key={i} className="text-sm text-gray-700 dark:text-zinc-300 flex items-start leading-relaxed font-medium">
                            <span className="mr-2 text-[#A3FF00]">✔</span> {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12 mx-auto max-w-4xl rounded-3xl p-8 border border-zinc-900/10 bg-white dark:border-white/10 dark:bg-[#0a0a0a] shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Contenedor de Texto */}
          <div className="text-left">
            <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-2 dark:text-white">
              Not sure which model fits you?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              We’ll recommend the best approach based on your project, timeline, and budget.
            </p>
          </div>

          <div className="flex-shrink-0">
            <Link to="/contact">
              <button className="w-full px-10 py-4 rounded-xl font-bold uppercase text-xs tracking-widest transition-colors shadow-lg bg-[#A3FF00] text-zinc-950 hover:bg-lime-300">
                Book a Call
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingModels;

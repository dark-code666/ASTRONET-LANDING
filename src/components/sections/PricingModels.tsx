import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';


const models = [
  {
    id: 1,
    title: "Fixed Scope",
    subtitle: "(Per Milestone)",
    description: "Best for: Small projects with clear requirements (Landing pages, MVP features, Quick  builds)",
    tag: "Predictable",
    color: "border-gray-200",
    headerBg: "bg-gray-50",
    features: ["Defined scope", "Fixed price per milestone", "Clear timeline & deliverables"],
    benefits: ["Predictable cost", "Fast execution", "No surprises"]
  },
  {
    id: 2,
    title: "Dedicated Team",
    subtitle: "(Monthly)",
    description: "Best for: Ongoing development & scaling (Startups,SaaS, Long-term projects)",
    tag: "Recommended",
    color: "border-blue-500",
    headerBg: "bg-blue-50",
    features: ["Dedicated developers assigned to your team", "Monthly fee", "Fully managed by us"],
    benefits: ["Consistency & speed", "Scalable team", "No hiring headaches"]
  },
  {
    id: 3,
    title: "Time & Material",
    subtitle: "(Flexible Scope)",
    description: "Best for: Evolving or complex projects (Custom platforms, Uncertain scope)",
    tag: "Agile",
    color: "border-red-500",
    headerBg: "bg-red-50",
    features: ["Pay for actual work done", "Flexible scope", "Continuous iterations"],
    benefits: ["Maximum flexibility", "Ideal for innovation", "Adapt as you grow"]
  },
  {
    id: 4,
    title: "Hybrid Model",
    subtitle: "(Custom Engagement)",
    description: "Best for: Unique or mixed needs",
    tag: "Strategic",
    color: "border-purple-500",
    headerBg: "bg-purple-50",
    features: ["Combine fixed scope + dedicated team", "Tailored structure", "Built around your goals"],
    benefits: ["Fully customized", "Strategic flexibility", "Optimized cost & efficiency"]
  }
];

const PricingModels = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 my-5">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Engagement Models</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the collaboration path that best fits your project's scale and complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {models.map((model) => (
            <motion.div
              key={model.id}
              whileHover={{ y: -10 }}
              className={`flex flex-col border-2 rounded-3xl overflow-hidden transition-shadow hover:shadow-xl ${model.color}`}
            >
              {/* Header section*/}
              <div className={`p-8 ${model.headerBg} border-b border-inherit`}>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{model.tag}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{model.title}</h3>
                <p className="text-sm text-gray-600 font-medium">{model.subtitle}</p>
                <div className="mt-6">
                   <button className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
                     Get Started
                   </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-sm font-semibold text-gray-800 mb-6 italic">
                  {model.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-tighter">How it works:</h4>
                    <ul className="space-y-2">
                      {model.features.map((f, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="mr-2 text-blue-500">•</span> {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase mb-3 tracking-tighter">Why choose this:</h4>
                    <ul className="space-y-2">
                      {model.benefits.map((b, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="mr-2 italic text-green-500">✔</span> {b}
                        </li>
                      ))}
                    </ul>
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
            <h3 className="text-2xl font-bold text-gray-900 mt-0 mb-2">
                Not sure which model fits you?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 ">
                We’ll recommend the best approach based on your project, timeline, and budget.
            </p>
            </div>

            
            <div className="flex-shrink-0">
            <Link to="/contact">
                <button className="bg-transparent text-zinc-900 font-semibold hover:bg-zinc-900/5 active:bg-zinc-900/10 w-full border border-zinc-900/10  px-10 py-4 rounded-xl transform hover:scale-102 active:scale-90 shadow-lg ">
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
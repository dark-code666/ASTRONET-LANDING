interface Feature {
  title: string
  description: string
  dotColor: string
}

const featureData: Feature[] = [
  {
    title: "AI-Powered Workflow Automation",
    description: "Automate repetitive operational tasks, approvals, notifications, and internal workflows with scalable AI-driven systems.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Custom AI Integrations",
    description: "Integrate AI capabilities directly into your software products, customer platforms, and operational infrastructure.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "AI Agents & Assistants",
    description: "Deploy intelligent AI agents designed to support customer operations, internal processes, and business workflows.",
    dotColor: "bg-zinc-300",
  },
  {
    title: "Operational Insights & Predictions",
    description: "Leverage AI-powered analytics, predictive systems, and operational data processing to improve decision-making and performance visibility.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Scalable AI Infrastructure",
    description: "We build scalable AI systems designed for long-term maintainability, operational reliability, and business growth.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "Product-Focused AI Solutions",
    description: "Every AI implementation is aligned with your workflows, operational needs, and product strategy, ensuring practical business value beyond experimentation.",
    dotColor: "bg-zinc-300",
  },
]

export default function GridsCommunity() {
  return (
    <section className="bg-white px-4 py-14 dark:bg-[#050505] sm:px-6 sm:py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
        {featureData.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className={`mt-2 size-3.5 shrink-0 rounded-full transition-colors duration-300 hover:bg-[#8EC63F] ${feature.dotColor}`} />
            <div className="flex flex-col">
              <h3 className="mb-3 text-xl font-extrabold leading-tight tracking-tight text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm font-normal leading-relaxed text-zinc-500 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

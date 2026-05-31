interface Feature {
  title: string
  description: string
  dotColor: string
}

const featureData: Feature[] = [
  {
    title: "Custom Software Systems",
    description: "We build scalable software platforms designed to support growth, improve operational efficiency, and accelerate digital execution.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Product-Focused Development",
    description: "Every system is designed around your operational workflows, business goals, and long-term scalability requirements.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "Scalable SaaS & Platforms",
    description: "From SaaS products and customer portals to internal business systems and operational tools, we build software engineered for reliability and growth.",
    dotColor: "bg-zinc-300",
  },
  {
    title: "Operational Efficiency",
    description: "Our solutions streamline workflows, automate repetitive processes, and reduce operational bottlenecks across teams.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Flexible Product Infrastructure",
    description: "We develop scalable architectures, API integrations, and cloud-based systems built to evolve alongside your business.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "Performance & Reliability",
    description: "Every product is built with scalability, speed, security, and maintainability in mind, ensuring long-term operational stability.",
    dotColor: "bg-zinc-300",
  },
]

export default function GridsCompany() {
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

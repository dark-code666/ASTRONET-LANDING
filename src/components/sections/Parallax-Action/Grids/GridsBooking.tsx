interface Feature {
  title: string
  description: string
  dotColor: string
}

const featureData: Feature[] = [
  {
    title: "Dedicated Product & Operations Teams",
    description: "Build offshore teams aligned with your business goals, operational workflows, and long-term execution strategy.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Embedded Engineering Teams",
    description: "Scale your development capacity with dedicated developers, QA specialists, DevOps engineers, and technical leads integrated into your product workflows.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "Operational Support Teams",
    description: "Improve operational efficiency with customer support specialists, operations assistants, appointment setters, and customer success teams.",
    dotColor: "bg-zinc-300",
  },
  {
    title: "Strategic & Technical Roles",
    description: "Access experienced professionals including software architects, fintech consultants, agile coaches, product strategists, and systems analysts.",
    dotColor: "bg-pink-300",
  },
  {
    title: "Scalable Team Structures",
    description: "From single-role specialists to fully managed offshore teams, we create scalable operational structures designed around your growth stage.",
    dotColor: "bg-emerald-200",
  },
  {
    title: "Structured Communication & Execution",
    description: "Every engagement is supported by clear workflows, reporting systems, and operational alignment to ensure reliable long-term execution.",
    dotColor: "bg-zinc-300",
  },
  {
    title: "Flexible Engagement Models",
    description: "Choose between dedicated teams, project-based execution, or hybrid engagement models tailored to your operational needs.",
    dotColor: "bg-pink-300",
  },
]

export default function GridsBooking() {
  return (
    <section className="bg-white px-4 py-14 dark:bg-[#050505] sm:px-6 sm:py-16 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-16">
        {featureData.map((feature) => (
          <div key={feature.title} className="flex items-start gap-4">
            <div className={`mt-2 size-3.5 shrink-0 rounded-full ${feature.dotColor}`} />
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

import { Link } from 'react-router-dom'
import Button from '../ui/Button'

type PillProps = {
  children: string
}

function Pill({ children }: PillProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-900/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-white">
      {children}
    </span>
  )
}

export default function OutsourcingVAs() {
  const roleCategories = [
    {
      name: 'Strategic Roles',
      roles: ['Software Architects', 'Fintech Consultants', 'Product Strategists', 'Technical Leads', 'AI Consultants', 'Systems Analysts'],
    },
    {
      name: 'Product Operations',
      roles: ['Project Managers', 'Agile Coaches', 'Product Owners', 'Scrum Masters'],
    },
    {
      name: 'Customer Operations',
      roles: ['Customer Support', 'Customer Success', 'Appointment Setters', 'Operations Assistants'],
    },
    {
      name: 'Technical Operations',
      roles: ['Developers', 'QA Specialists', 'IT Help Desk', 'DevOps'],
    },
  ]

  const process = [
    {
      title: 'Discovery Call',
      description: 'We analyze your product, operational needs, and growth goals.',
    },
    {
      title: 'Team Matching',
      description: 'We assemble dedicated offshore talent aligned with your requirements.',
    },
    {
      title: 'Execution & Scaling',
      description: 'Your team integrates into your workflows with clear communication and scalable execution.',
    },
  ]

  return (
    <section id="outsourcing-vas" className="bg-white dark:bg-[#050505] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto items-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Outsourcing & Offshore Talent</Pill>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tighter text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Scale Operations Without Internal Hiring Overhead
          </h2>
          <p className="text-sm leading-7 text-zinc-600 dark:text-white/70 sm:text-base">
            Build scalable operations with dedicated offshore talent specialized in product execution, customer operations, and technical support.
          </p>
        </div>

        {/* ROLES - CATEGORIZED */}
        <div className="mt-16">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-400 dark:text-zinc-500 mb-8 text-center">
            ROLES YOU CAN OUTSOURCE WITH US
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roleCategories.map((cat) => (
              <div key={cat.name} className="rounded-3xl border border-zinc-900/10 bg-zinc-50/30 p-6 dark:border-white/10 dark:bg-white/5 transition-all hover:bg-zinc-50 dark:hover:bg-white/10 hover:shadow-md flex flex-col justify-between">
                <div>
                  <div className="text-base font-bold text-zinc-950 dark:text-white border-b border-zinc-900/10 dark:border-white/10 pb-3 mb-4">
                    {cat.name}
                  </div>
                  <ul className="space-y-2.5">
                    {cat.roles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                        <span className="text-[#A3FF00] font-bold">✓</span>
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRECIOS Y PROCESO */}
        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-zinc-900/10 bg-white p-8 dark:border-white/10 dark:bg-[#0a0a0a] shadow-sm">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-lg font-bold text-zinc-950 dark:text-white mb-3">Flexible Engagement Models</div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-white/70">
                We structure dedicated offshore teams based on your product roadmap, operational needs, and growth stage — providing scalable execution without the overhead of internal hiring.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button variant="primary" className="w-full sm:w-auto bg-[#A3FF00] text-zinc-950 hover:bg-lime-300 font-bold uppercase tracking-tight text-xs sm:text-sm px-6 py-3 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all">
                    Book a Strategy Call
                  </Button>
                </Link>
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-zinc-950 dark:text-white mb-4">Our Process</div>
              <ol className="space-y-5 text-sm text-zinc-600 dark:text-white/70">
                {process.map((step, idx) => (
                  <li key={step.title} className="flex gap-4 items-start">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                      {idx + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-bold text-zinc-950 dark:text-white">{step.title}</span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 leading-relaxed">{step.description}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

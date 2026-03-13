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
  const roles = [
    {
      title: 'Customer Support',
      description: 'Ideal for SaaS, retail stores, eCommerce or Healthcare',
    },
    {
      title: 'Customer Service Leaders',
      description: 'Supervisors, trainers or Managers.',
    },
    { title: 'IT Help Desk', description: '' },
    { title: 'Legal Assistants', description: '' },
    { title: 'Operations Assistant', description: '' },
    { title: 'Admin Assistants', description: '' },
    { title: 'Appointment Setters', description: '' },
    {
      title: 'Custom Roles',
      description: 'Project Managers, Engineers, Data Analysts, etc.',
    },
  ]

  const process = [
    'Schedule a call',
    'We screen assistants',
    'You meet and choose best fit.',
  ]

  return (
    <section id="outsourcing-vas" className="bg-white dark:bg-[#050505] py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* ENCABEZADO */}
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto items-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Outsourcing & VAs</Pill>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tighter text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
            Reduce Operational Costs With Trained Virtual Assistants and AI-Powered Systems
          </h2>
          <p className="text-sm leading-7 text-zinc-600 dark:text-white/70 sm:text-base">
            We transform cost centers into revenue-generating centers. Build smarter operations to empower your business with elite talent in virtual assistance, software development, and AI engineering.
          </p>
        </div>

        {/* ROLES - ANCHO COMPLETO */}
        <div className="mt-16">
          <div className="text-sm font-semibold tracking-widest uppercase text-zinc-950 dark:text-white mb-6 text-center">
            Roles you can outsource with us
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {roles.map((r) => (
              <div key={r.title} className="rounded-2xl border border-zinc-900/10 bg-zinc-50/50 p-5 dark:border-white/10 dark:bg-white/5 transition-colors hover:bg-zinc-50 dark:hover:bg-white/10">
                <div className="text-sm font-semibold text-zinc-950 dark:text-white">{r.title}</div>
                {r.description ? (
                  <p className="mt-2 text-xs leading-5 text-zinc-600 dark:text-white/70">{r.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        {/* PRECIOS Y PROCESO */}
        <div className="mt-12 mx-auto max-w-4xl rounded-3xl border border-zinc-900/10 bg-white p-8 dark:border-white/10 dark:bg-[#0a0a0a] shadow-sm">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-lg font-bold text-zinc-950 dark:text-white mb-3">Pricing</div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-white/70">
                Flat fee or monthly fee if you need to outsource a full operational team. Reduce your operational costs significantly compared to traditional hiring while maintaining top-tier quality.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" className="w-full sm:w-auto">
                  Request a quote
                </Button>
                <Button
                  href="#contact"
                  variant="ghost"
                  className="w-full border border-zinc-900/10 bg-white text-zinc-900 hover:bg-zinc-900/5 active:bg-zinc-900/10 sm:w-auto dark:bg-transparent dark:text-white dark:hover:bg-white/10"
                >
                  Schedule a call
                </Button>
              </div>
            </div>

            <div>
              <div className="text-lg font-bold text-zinc-950 dark:text-white mb-4">Our process</div>
              <ol className="space-y-4 text-sm text-zinc-600 dark:text-white/70">
                {process.map((step, idx) => (
                  <li key={step} className="flex gap-4 items-center">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
                      {idx + 1}
                    </span>
                    <span className="leading-6 font-medium">{step}</span>
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

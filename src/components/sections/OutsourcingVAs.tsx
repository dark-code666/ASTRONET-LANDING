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
  const industries = [
    'Healthcare',
    'Retail',
    'eCommerce',
    'Technology',
    'Real Estate',
    'Dispatch',
    'Legal',
    'Marketing',
  ]

  const channels = [
    'Voice',
    'Chat',
    'Email',
    'Technical Support',
    'Back Office',
    'Telesales',
  ]

  const roles = [
    {
      title: 'Customer Support',
      description: 'Ideal for SaaS, retail stores, eCommerce o Healthcare',
    },
    {
      title: 'Customer Service leaders',
      description: 'Supervisors, trainers or Managers.',
    },
    { title: 'IT Help Desk', description: '' },
    { title: 'Legal assistants', description: '' },
    { title: 'Operations assistant', description: '' },
    { title: 'Admin assistants', description: '' },
    { title: 'Appointment setters', description: '' },
    {
      title: 'Custom Roles',
      description: 'Project Managers, Engineers, Data Analysts, etc.',
    },
  ]

  const process = [
    'Schedule a call',
    'We screen assistants',
    'You meet and choose Best fit.',
  ]

  return (
    <section id="outsourcing-vas" className="bg-white dark:bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>Outsourcing and VAs</Pill>
            <Pill>Roles you can outsource with us</Pill>
          </div>

          <h2 className="text-balance text-3xl font-bold tracking-tighter text-zinc-950 dark:text-white sm:text-4xl">
            We transform cost centers into revenue-generating centers
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-zinc-600 dark:text-white/70 sm:text-base">
            Our multichannel customer service ensures that your customers can reach you through various communication
            channels.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-zinc-900/10 bg-zinc-50 p-6 dark:border-white/10 dark:bg-white/5 lg:col-span-7">
            <div className="text-sm font-semibold text-zinc-950 dark:text-white">Channels</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {channels.map((c) => (
                <Pill key={c}>{c}</Pill>
              ))}
            </div>

            <div className="mt-10 text-sm font-semibold text-zinc-950 dark:text-white">Industries</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {industries.map((i) => (
                <Pill key={i}>{i}</Pill>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-900/10 bg-white p-6 dark:border-white/10 dark:bg-white/5 lg:col-span-5">
            <div className="text-sm font-semibold text-zinc-950 dark:text-white">Pricing</div>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-white/70">
              Flat fee or monthly fee if you need to outsource a full operational team
            </p>

            <div className="mt-8 text-sm font-semibold text-zinc-950 dark:text-white">Our process</div>
            <ol className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-white/70">
              {process.map((step, idx) => (
                <li key={step} className="flex gap-3">
                  <span className="mt-0.5 inline-flex size-6 flex-none items-center justify-center rounded-full bg-zinc-950 text-xs font-semibold text-white dark:bg-white dark:text-zinc-950">
                    {idx + 1}
                  </span>
                  <span className="leading-6">{step}</span>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" className="w-full sm:w-auto">
                Request a quote
              </Button>
              <Button
                href="#contact"
                variant="ghost"
                className="w-full border border-zinc-900/10 bg-white text-zinc-900 hover:bg-zinc-900/5 active:bg-zinc-900/10 sm:w-auto"
              >
                Schedule a call
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-sm font-semibold text-zinc-950 dark:text-white">Roles you can outsource with us</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {roles.map((r) => (
              <div key={r.title} className="rounded-2xl border border-zinc-900/10 bg-white p-5 dark:border-white/10 dark:bg-white/5">
                <div className="text-sm font-semibold text-zinc-950 dark:text-white">{r.title}</div>
                {r.description ? (
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-white/70">{r.description}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import Button from '../ui/Button'

export type CTAProps = {
  title?: string
  description?: string
}

export default function CTA({
  title = 'Ready to build something modern?',
  description =
    'Tell us what you are shipping. We will respond with a simple plan, timeline, and next steps.',
}: CTAProps) {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-950 px-6 py-10 text-white sm:px-10 sm:py-12">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(163,230,53,0.25),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.20),transparent_55%)]" />

          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h3 className="text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:text-base">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="#" className="w-full lg:w-56">
                Start a project
              </Button>
              <Button
                href="#"
                variant="ghost"
                className="w-full text-white hover:bg-white/10 active:bg-white/15 lg:w-56"
              >
                Request a quote
              </Button>
            </div>
          </div>

          <div id="location" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-white/70">
            <div>
              <span className="font-semibold text-white">Location:</span> Remote / LATAM
            </div>
            <div>
              <span className="font-semibold text-white">Response time:</span> 24–48h
            </div>
            <div>
              <span className="font-semibold text-white">Stack:</span> React, TypeScript, Tailwind
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

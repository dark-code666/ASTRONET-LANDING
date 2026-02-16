import Button from '../ui/Button'

export type HeroProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export default function Hero({
  eyebrow = 'ASTRONET • SOFTWARE DEVELOPMENT',
  title = 'Bespoke software that fits your orbit.',
  description =
    'We design and build web products that become the backbone for seamless operations, faster delivery, and measurable growth.',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-10rem] h-72 w-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#services" variant="secondary">
              What we do
            </Button>
            <Button href="#contact" variant="ghost" className="justify-start">
              <span className="inline-flex items-center gap-2">
                <span className="grid size-2 rounded-full bg-zinc-950" />
                Book a call
              </span>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white">1</span>
              Product design
            </div>
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white">2</span>
              Frontend engineering
            </div>
            <div className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white">3</span>
              Delivery & iteration
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-[2.5rem] border border-zinc-900/10 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(163,230,53,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500">ASTRONET</div>
                <div className="rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">
                  New
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4">
                  <div className="text-sm font-semibold text-zinc-950">Ship faster</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Clear scope, clean UI, maintainable code.
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4">
                  <div className="text-sm font-semibold text-zinc-950">Scale safely</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Components built to grow with your landing.
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4">
                  <div className="text-sm font-semibold text-zinc-950">Measure impact</div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Performance-first and conversion-ready.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-zinc-500">Built with Tailwind v4</div>
                <div className="h-2 w-24 rounded-full bg-zinc-950/10">
                  <div className="h-2 w-16 rounded-full bg-lime-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

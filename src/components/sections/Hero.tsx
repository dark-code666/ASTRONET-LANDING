import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export type HeroProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export default function Hero({
  eyebrow = 'ASTRONET — SOFTWARE & ENGINEERING PARTNER',
  title = 'Build and Scale Digital Products Faster',
  description =
    'We help growing companies launch digital products, scale engineering capacity, and streamline operations through software, AI-powered systems, and dedicated offshore teams.',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#050505]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-10rem] h-72 w-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pt-32 pb-14 sm:px-6 sm:pt-40 sm:pb-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-white/60">
            {eyebrow}
          </div>
          <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-zinc-600 dark:text-white/70 sm:text-lg">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/contact">
              <Button variant="primary" className="w-full sm:w-auto justify-center bg-[#A3FF00] text-zinc-950 hover:bg-lime-300 active:bg-lime-400/90 font-black uppercase tracking-tight text-xs sm:text-sm px-6 h-11 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all">
                <span className="inline-flex items-center gap-2 font-bold">
                  <span className="grid size-2 rounded-full bg-zinc-950" />
                  Book a Strategy Call
                </span>
              </Button>
            </Link>

            <Button href="/whatwedo#parallax-container" variant="ghost" className="w-full sm:w-auto justify-center border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-100 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 dark:hover:border-zinc-700 transition-all font-black uppercase tracking-tight text-xs sm:text-sm px-6 h-11">
              View our Work
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 text-xs text-zinc-700 font-medium dark:text-zinc-300">
            <div className="flex items-center gap-2 dark:text-white">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold">✓</span>
              Faster product launches
            </div>
            <div className="flex items-center gap-2 dark:text-white">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold">✓</span>
              Scalable Engineering teams
            </div>
            <div className="flex items-center gap-2 dark:text-white">
              <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold">✓</span>
              Operational Efficiency
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-[2.5rem] border border-zinc-900/10 bg-gradient-to-b from-zinc-50 to-white p-6 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/0">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(163,230,53,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_55%)]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-white/60">ASTRONET</div>
                <div className="rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">
                  New
                </div>
              </div>

              <div className="grid gap-4">
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">Ship Faster</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                    Reliable execution with scalable engineering teams.
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">Scale With Confidence</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                    Systems and infrastructure built for long-term growth.
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-zinc-950 dark:text-white">Reduce Operational Bottlenecks</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-white/70">
                    AI-powered workflows and product-focused execution.
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-xs text-zinc-500 dark:text-white/60">Built for scalable growth</div>
                <div className="h-2 w-24 rounded-full bg-zinc-950/10 dark:bg-white/10">
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

import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export type HeroProps = {
  eyebrow?: string
  title?: string
  description?: string
}

export default function Hero({
  eyebrow = 'ASTRONET',
  title = 'Launch faster. Scale smarter.',
  description =
    'Astronet helps companies execute digital products with dedicated offshore engineering teams, AI-powered systems, and scalable operational support built for long-term growth.',
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#050505]">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-lime-400/20 blur-3xl" />
        <div className="absolute -bottom-24 right-[-10rem] h-72 w-[40rem] rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-36 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-white/60 sm:tracking-[0.2em]">
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
              <Button variant="primary" className="h-11 w-full justify-center bg-[#A3FF00] px-6 text-xs font-black uppercase tracking-tight text-zinc-950 shadow-[0_4px_14px_0_rgba(163,255,0,0.3)] transition-all hover:bg-lime-300 active:bg-lime-400/90 sm:w-auto sm:text-sm">
                <span className="inline-flex items-center gap-2 font-bold">
                  <span className="grid size-2 rounded-full bg-zinc-950" />
                  Book a Strategy Call
                </span>
              </Button>
            </Link>

            <Button href="/whatwedo#parallax-container" variant="ghost" className="h-11 w-full justify-center border border-zinc-200 bg-white px-6 text-xs font-black uppercase tracking-tight text-zinc-950 transition-all hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:border-zinc-700 dark:hover:bg-zinc-800 sm:w-auto sm:text-sm">
              View our Work
            </Button>
          </div>

          <div className="mt-10 grid gap-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 sm:flex sm:flex-wrap sm:gap-6">
            {['Faster product launches', 'Scalable engineering teams', 'Operational efficiency'].map((item) => (
              <div key={item} className="flex items-center gap-2 dark:text-white">
                <span className="grid size-5 place-items-center rounded-lg bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-bold">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] border border-zinc-900/10 bg-gradient-to-b from-zinc-50 to-white p-5 shadow-sm dark:border-white/10 dark:from-white/5 dark:to-white/0 sm:max-w-md sm:rounded-[2.5rem] sm:p-6">
            <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_30%_20%,rgba(163,230,53,0.35),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.18),transparent_55%)] sm:rounded-[2.5rem]" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500 dark:text-white/60">ASTRONET</div>
                <div className="rounded-full bg-zinc-950 px-3 py-1 text-[11px] font-semibold text-white">
                  New
                </div>
              </div>

              <div className="grid gap-3 sm:gap-4">
                {[
                  ['Ship Faster', 'Reliable execution with scalable engineering teams.'],
                  ['Scale With Confidence', 'Systems and infrastructure built for long-term growth.'],
                  ['Reduce Operational Bottlenecks', 'AI-powered workflows and product-focused execution.'],
                ].map(([cardTitle, cardText]) => (
                  <div key={cardTitle} className="rounded-2xl border border-zinc-900/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5">
                    <div className="text-sm font-semibold text-zinc-950 dark:text-white">{cardTitle}</div>
                    <div className="mt-1 text-sm text-zinc-600 dark:text-white/70">{cardText}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="text-xs text-zinc-500 dark:text-white/60">Built for scalable growth</div>
                <div className="h-2 w-20 shrink-0 rounded-full bg-zinc-950/10 dark:bg-white/10 sm:w-24">
                  <div className="h-2 w-14 rounded-full bg-lime-400 sm:w-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

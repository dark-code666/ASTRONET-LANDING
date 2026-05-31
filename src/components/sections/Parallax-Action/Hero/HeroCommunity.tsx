import BackgroundImg from "../../../../assets/IA2.png"
import { Link } from "react-router-dom"

export default function HeroCommunity() {
  return (
    <section className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-gray-200 pb-14 pt-28 dark:bg-[#050505] sm:pt-32 lg:h-[90vh] lg:pb-0 lg:pt-0">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-20">
        <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
          <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:h-[70vh] lg:max-w-xl lg:aspect-auto">
            <img
              src={BackgroundImg}
              className="h-full w-full object-contain object-center lg:object-left-bottom"
              alt="AI-powered systems"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-start text-left lg:order-2 lg:items-end lg:text-right">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-zinc-900 dark:text-[#A3FF00] sm:text-sm sm:tracking-[0.4em]">
            Artificial Intelligence
          </p>

          <h1 className="max-w-3xl text-4xl font-serif italic leading-none tracking-tight text-zinc-900 dark:text-white sm:text-5xl md:text-6xl lg:text-[85px]">
            AI-Powered Systems Built for Smarter Operations
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-700 dark:text-white/70 sm:text-lg">
            Streamline operations, automate repetitive processes, and enhance digital products with intelligent capabilities.
          </p>

          <Link to="/contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-950 px-6 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800 dark:bg-[#A3FF00] dark:text-zinc-950 dark:hover:bg-lime-300">
            Build Smarter Systems
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-20 h-1 w-full bg-white/10" />
    </section>
  )
}

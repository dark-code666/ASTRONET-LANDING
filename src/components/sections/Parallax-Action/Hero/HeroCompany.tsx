import imgCompany from "/src/assets/Company1.png"
import { Link } from "react-router-dom"

export default function HeroCompany() {
  return (
    <section className="relative flex min-h-[92svh] w-full items-center overflow-hidden bg-[#0d1110] pb-14 pt-28 sm:pt-32 lg:h-[90vh] lg:pb-0 lg:pt-0">
      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:px-12 lg:grid-cols-2 lg:gap-12 lg:px-20">
        <div className="relative order-2 flex justify-center lg:order-1 lg:justify-start">
          <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:h-[70vh] lg:max-w-xl lg:aspect-auto">
            <img
              src={imgCompany}
              className="h-full w-full object-contain object-center opacity-70 lg:object-left-bottom"
              alt="Custom software platform mockup"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-start text-left lg:order-2">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-[#A3FF00] sm:text-sm sm:tracking-[0.4em]">
            Software Development
          </p>

          <h1 className="max-w-3xl text-4xl font-serif leading-none tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[85px]">
            Custom Software Built for <span className="italic">Scalable Growth</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
            Modern businesses need scalable digital systems that support operations, improve efficiency, and accelerate growth.
          </p>

          <Link to="/contact" className="mt-8">
            <span className="inline-flex min-h-11 items-center justify-center rounded-md bg-[#A3FF00] px-6 text-xs font-black uppercase tracking-[0.18em] text-zinc-950 transition hover:bg-lime-300">
              Build Your Product
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/10" />
    </section>
  )
}

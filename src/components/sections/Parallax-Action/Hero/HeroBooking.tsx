import imgBooking from "/src/assets/Booking.jpg"
import { Link } from "react-router-dom"

export default function HeroBooking() {
  return (
    <section className="relative flex min-h-[92svh] w-full items-end overflow-hidden bg-[#f4f4f4] px-4 pb-14 pt-28 sm:px-6 sm:pb-20 md:px-12 lg:h-[84vh] lg:px-20">
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={imgBooking}
          className="h-full w-full object-contain object-right-bottom opacity-30 sm:opacity-55 lg:opacity-100"
          alt="Offshore operations team"
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <p className="mb-5 text-xs font-black uppercase tracking-[0.28em] text-zinc-950 sm:text-sm sm:tracking-[0.4em]">
          Outsourcing
        </p>

        <h1 className="max-w-4xl text-4xl font-serif leading-none tracking-tight text-zinc-950 sm:text-5xl md:text-6xl lg:text-[85px]">
          Scale Your Operations With <span className="italic">Dedicated Offshore Teams</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
          Extend your operational and engineering capacity with embedded teams aligned to product execution, customer operations, and technical workflows.
        </p>

        <Link to="/contact" className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-950 px-6 text-xs font-black uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800">
          Build Your Offshore Team
        </Link>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-white/10" />
    </section>
  )
}

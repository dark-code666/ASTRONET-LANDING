import { Rocket } from 'lucide-react'

type StartProyectOneProps = {
  title?: string
  description?: string
  buttonLabel?: string
}

export default function StartProyectOne({
  title = 'Start Your Software Project',
  description = 'Tell us what you are building. Our team will help you define the right product architecture, execution strategy, and offshore team structure to launch faster and scale with confidence.',
  buttonLabel = 'Book a Strategy Call',
}: StartProyectOneProps) {
  return (
    <section className="flex flex-col items-center justify-center border-b border-zinc-100 bg-zinc-50 px-4 py-16 dark:border-white/5 dark:bg-[#050505] sm:px-6 sm:py-20 md:px-12 lg:px-24">
      <div className="relative mb-10 flex items-center justify-center sm:mb-12">
        <div className="animate-bounce-slow">
          <Rocket size={56} className="rotate-[-45deg] text-zinc-950 dark:text-white" strokeWidth={1} />
        </div>

        <div className="absolute right-[-20px] top-0 size-1.5 animate-pulse rounded-full bg-zinc-300 delay-150" />
        <div className="absolute bottom-[-10px] left-[-15px] size-1 animate-pulse rounded-full bg-zinc-200" />
        <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 gap-1">
          <div className="size-1.5 animate-pulse rounded-full bg-zinc-300 delay-75" />
          <div className="size-1.5 animate-pulse rounded-full bg-zinc-200 delay-100" />
        </div>
      </div>

      <div className="mb-12 max-w-3xl text-center sm:mb-16">
        <h1 className="mb-6 text-4xl font-serif leading-tight tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg md:text-xl">
          {description}
        </p>
      </div>

      <form className="grid w-full max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
        {['First Name', 'Last Name', 'Email', 'Business Name'].map((label) => (
          <div key={label} className="flex flex-col gap-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">{label}</label>
            <input
              type={label === 'Email' ? 'email' : 'text'}
              className="w-full rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 transition-colors focus:border-zinc-900 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white"
            />
          </div>
        ))}

        <div className="flex flex-col gap-2 md:col-span-2">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900 dark:text-white">Message</label>
          <textarea rows={5} className="w-full resize-none rounded-md border border-zinc-200 bg-white p-4 text-zinc-950 transition-colors focus:border-zinc-900 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white" />
        </div>

        <button className="mt-2 rounded-md bg-[#1a2b2b] py-5 text-xs font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-[#253d3d] dark:bg-[#A3FF00] dark:text-zinc-950 dark:hover:bg-[#b4ff33] md:col-span-2">
          {buttonLabel}
        </button>

        <p className="text-center text-[10px] leading-5 text-zinc-400 dark:text-zinc-500 md:col-span-2">
          Please note, by submitting this form, you are agreeing to the terms in the{' '}
          <span className="cursor-pointer text-zinc-900 underline dark:text-white">ASTRONET Privacy Policy</span>.
        </p>
      </form>
    </section>
  )
}

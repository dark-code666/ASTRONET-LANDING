export default function InfoSegment() {
  return (
    <div className="w-full bg-white dark:bg-[#050505]">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-serif leading-tight text-zinc-900 dark:text-white sm:text-5xl">
              What Our <br className="hidden sm:block" /> Clients Say.
            </h2>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                className="size-10 shrink-0 rounded-full grayscale"
                alt="Client Dan Johnson"
              />
              <p className="text-sm font-medium italic leading-relaxed text-zinc-500 dark:text-white/70 sm:text-[13px]">
                "Astronet helped us move faster with clear communication, reliable execution, and a development process that actually scaled with our business."
              </p>
            </div>
            <div className="ml-14 border-t border-zinc-100 pt-4 dark:border-white/10">
              <p className="text-[10px] font-black uppercase tracking-tight text-zinc-900 dark:text-white">Dan Johnson</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">CEO - THE MOVE CHANNEL</p>
            </div>
          </div>

          <div className="space-y-6 lg:col-span-4">
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                className="size-10 shrink-0 rounded-full grayscale"
                alt="Client Louis Hatchwell"
              />
              <p className="text-sm font-medium italic leading-relaxed text-zinc-500 dark:text-white/70 sm:text-[13px]">
                "Working with Astronet felt like adding an experienced product team to our company. Fast execution, strong ownership, and zero unnecessary complexity."
              </p>
            </div>
            <div className="ml-14 border-t border-zinc-100 pt-4 dark:border-white/10">
              <p className="text-[10px] font-black uppercase tracking-tight text-zinc-900 dark:text-white">Louis Hatchwell</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Content Creator / Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-32">
        <div className="relative grid min-h-[520px] grid-cols-1 overflow-hidden rounded-[2rem] bg-[#0d1110] lg:grid-cols-10 lg:rounded-[2.5rem]">
          <div className="relative h-[320px] lg:col-span-4 lg:h-auto bg-[#0a0f0d]">
            <img
              src="/imagenes/juridico.png"
              className="absolute inset-0 h-full w-full object-contain object-center"
              alt="Juridiconect project"
            />
            <div className="absolute bottom-8 left-6 sm:left-10">
              <p className="font-serif text-2xl text-white">Astronet Team</p>
              <p className="text-[8px] uppercase tracking-[0.35em] text-zinc-500">Software, AI & Offshore Teams</p>
            </div>
          </div>

          <div className="flex flex-col justify-center p-6 sm:p-10 lg:col-span-6 lg:p-20">
            <div className="mb-6 flex items-center gap-3">
              <img src="/imagenes/logo.png" alt="Astronet logo" className="h-8 w-8 rounded-md object-contain" />
              <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#A3FF00]">
                Astronet
              </p>
            </div>

            <h3 className="mb-8 text-3xl font-serif leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Launch faster. Scale smarter.
            </h3>

            <p className="text-base font-semibold leading-relaxed text-zinc-400 sm:text-lg">
              Astronet helps companies execute digital products with dedicated offshore engineering teams, AI-powered systems, and scalable operational support built for long-term growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

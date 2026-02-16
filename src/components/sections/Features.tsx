type Feature = {
  title: string
  description: string
}

export type FeaturesProps = {
  title?: string
  description?: string
  items?: Feature[]
}

export default function Features({
  title = 'What we do',
  description = 'A focused toolkit for modern SaaS and internal products.',
  items = [
    {
      title: 'UI engineering',
      description:
        'Responsive, accessible interfaces with a clean component architecture.',
    },
    {
      title: 'Product design',
      description:
        'From wireframes to polished visuals, designed for clarity and conversion.',
    },
    {
      title: 'Delivery & iteration',
      description:
        'Fast releases, feedback loops, and code that stays maintainable.',
    },
  ],
}: FeaturesProps) {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-base leading-7 text-zinc-600 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-zinc-950">
                  {f.title}
                </div>
                <div className="grid size-10 place-items-center rounded-xl bg-white shadow-sm">
                  <span className="text-xs font-black text-zinc-950">AN</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

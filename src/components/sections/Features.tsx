type Feature = {
  title: string
  subtitulo?: string
  description: string
}

export type FeaturesProps = {
  title?: string
  subtitulo?: string
  description?: string
  items?: Feature[]
}

export default function Features({
  title = 'What we do ?',
  subtitulo = 'At Dock Yard, we turn digital product ideas into reality.',
  description = 'From strategy and desing to full-scale product development, we combine human expertise with AI-poweres tools to:',
  items = [
    {
      title: 'Product Strategy & Discovery',
      description:
        'Aling your vision with user needs and bussiness goals to create a roadmap for success.',
    },
    {
      title: 'Custom Websites & Mobile Apps',
      description:
        'Build scalable, higth-performing web and native applications with modern frameworks.',
    },
    {
      title: 'Architectural Reviews & Technical Audits',
      description:
        'Ensure your system is built for scalability, security, and long-term success with expert architecture assessments.',
    },
     {
      title: 'UI engineering',
      description:
        'Responsive, accessible interfaces with a clean component architecture.',
    },
    {
      title: 'Application Maintenance',
      description:
        'Keep your applixation runnung at peak performance with our maintenance, updates, and optimization offerings.',
    },
    {
      title: 'Engineering Consulting & Team Augmentation',
      description:
        'Needs expert developers? Our teanm integrates seamlessly to accelerate your roadmap.',
    },
  ],
}: FeaturesProps) {
  return (
    <section id="services" className="bg-white dark:bg-[#050505]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tighter text-zinc-900 dark:text-white sm:text-3xl">
            {title}
          </h2>
           <p className="mt-2  text-sm leading-7  font-bold text-zinc-900 dark:text-white/70 sm:text-">
            {subtitulo}
          </p>
          <p className="mt-2  text-sm leading-7 text-zinc-600 dark:text-white/70 sm:text-">
            {description}
          </p>

          <div className="space-y-2 mt-4">
             <li className="text-sm ml-4  text-gray-700 flex items-start">
                 <span className="mr-2 text-zinc-900">•</span> 
                <span className=" text-zinc-600 dark:text-white/70">Enhance our development process, and reduce time and cost</span>
             </li>
              <li className="text-sm ml-4 text-gray-700 flex items-start">
                 <span className="mr-2 text-zinc-900">•</span> 
                  <span className=" text-zinc-600 dark:text-white/70">Give your product, Platform, or service an edge over the competition</span>
              </li>
              <li className="text-sm ml-4 text-gray-700 flex items-start">
                <span className="mr-2 text-zinc-900">•</span> 
                <span className=" text-zinc-600 dark:text-white/70">Streamline your business operations and internal workflows</span>
               </li>
         </div>

        <br />
         <h4 className="text-xs font-bold text-blue-900 uppercase mb-3 tracking-tighter dark:text-[#A3FF00]">SEE ALL SERVICES</h4>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-zinc-900/10 bg-zinc-50 p-6 py-10 sm:p-8 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-zinc-950 dark:text-white">
                  {f.title}
                </div>
                <div className="grid size-10 place-items-center rounded-xl bg-white shadow-sm dark:bg-white/10">
                  <span className="text-xs font-black text-zinc-950 dark:text-white">AN</span>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-white/70">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

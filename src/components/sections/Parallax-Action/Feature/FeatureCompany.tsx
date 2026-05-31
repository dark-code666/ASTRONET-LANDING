import { Link } from "react-router-dom"

export default function FeatureCompany() {
  return (
    <section className="bg-white px-4 py-14 dark:bg-[#050505] sm:px-6 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <h2 className="text-3xl font-serif italic leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-4xl lg:text-[42px]">
            Astronet develops custom software solutions designed around your business goals, operational workflows, and long-term scalability.
          </h2>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-6">
            <p className="text-base font-light leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg">
              From SaaS platforms and internal business systems to ecommerce infrastructure and customer-facing applications, we build reliable software engineered for performance and execution.
            </p>
            <p className="text-base font-light leading-relaxed text-zinc-500 dark:text-zinc-400 sm:text-lg">
              Whether you are launching a new product, modernizing operations, or expanding engineering capacity, our offshore product teams help you execute faster without the overhead of internal hiring.
            </p>
          </div>

          <Link to="/contact">
            <button className="min-h-11 border border-zinc-900 px-7 py-3 text-base font-serif leading-tight tracking-tight text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-[#A3FF00] dark:hover:text-zinc-950 sm:px-10 sm:py-4 sm:text-[18px]">
              Build Your Product
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

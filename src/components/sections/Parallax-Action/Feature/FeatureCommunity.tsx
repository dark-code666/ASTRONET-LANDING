import { Link } from "react-router";

export default function FeatureCommunity() {
  return (
    <>

      <section className="bg-white dark:bg-[#050505] py-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
    
        <div className="max-w-md">
          <h2 className="text-zinc-900 dark:text-white text-5xl lg:text-[42px] font-serif leading-[1.2] tracking-tighter italic">
            Business owners are now looking to create their own community platforms to connect with their audience.
          </h2>
        </div>

        
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-6">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light">
              Businesses and creators are turning to more specialised and bespoke community platforms to engage with their audience.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light">
              We recognise the importance of fostering meaningful connections and nurturing online communities. Our dynamic community platforms are designed to facilitate interaction, collaboration, and monetisation opportunities for businesses, coaches, tutors, and special interest groups alike.
            </p>
          </div>


          <Link to="/contact">
          <button className="px-10 py-4 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white font-serif text-[18px] leading-[1.2] tracking-tighter  hover:bg-zinc-900 hover:text-white dark:hover:bg-[#A3FF00] dark:hover:text-zinc-950 transition-all duration-300">
            Work with us
          </button>
          </Link>

        </div>

      </div>
      </section>
     
    </>
  )
}

import { Link } from "react-router";

export default function FeatureeCommerce() {
  return (
    <>

      <section className="bg-white dark:bg-[#050505] py-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
    
        <div className="max-w-md">
          <h2 className="text-zinc-900 dark:text-white text-5xl lg:text-[42px] font-serif leading-[1.2] tracking-tighter italic">
            Effective eCommerce stores can make all the difference for your business.
          </h2>
        </div>

        
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-6">
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light">
         Whether you're selling cosmetics, furniture, or any other products, you need a platform that not only showcases your offerings but also makes it easy for customers to make purchases.            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed font-light">
            At ASTRONET, we specialise in creating online stores that streamline the shopping experience and maximise revenue. Our solutions are designed to simplify everything from inventory management to payment processing, allowing you to focus on growing your business.            </p>
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

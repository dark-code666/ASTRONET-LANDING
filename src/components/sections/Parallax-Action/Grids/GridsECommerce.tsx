
interface Feature {
  title: string;
  description: string;
  dotColor: string; 
}

const featureData: Feature[] = [
  {
    title: "Easy Shopping Experiences",
    description: "We design eCommerce stores that provide a seamless shopping experience. Our intuitive navigation and user-friendly interfaces make it easy for customers to find and purchase your products.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Efficient Inventory Management",
    description: "We can integrate your store with a variety of payment methods, including debit and credit cards, Apple Pay, and PayPal, providing a safe and convenient checkout experience for your customers.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Mobile-Optimised Design",
    description: "Reach more customers with a mobile-optimised online store. With the majority of stores now receiving more smartphone traffic than from other devices, it's important to ensure a strong focus on smartphone designs.",
    dotColor: "bg-zinc-300"
  },
  {
    title: "Advanced Analytics & Reporting",
    description: "Make informed decisions with advanced analytics and reporting tools. Monitor key metrics such as sales trends, customer behaviour, and conversion rates to optimise your store's performance and marketing strategies.",
    dotColor: "bg-pink-300"
  },
  {
    title: "Secure Payment Processing",
    description: "Ensure secure transactions with our integrated payment processing solutions. We support a variety of payment methods, including debit and credit cards, Apple Pay, and PayPal, providing a safe and convenient checkout experience for your customers.",
    dotColor: "bg-emerald-200"
  },
  {
    title: "Personalised Online Stores",
    description: "Increase customer loyalty with personalised shopping experiences. Implement features like product recommendations, affiliate programmes, gift vouchers & rewards to engage customers and encourage repeat business.",
    dotColor: "bg-zinc-300"
  }
];


export default function GridsECommerce() {
  return (
    <section className="bg-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
        
        {featureData.map((feature, index) => (
          <div key={index} className="flex gap-4 items-start">
            

            <div className={`mt-2 w-3.5 h-3.5 rounded-full shrink-0 ${feature.dotColor}`}></div>
          
            <div className="flex flex-col">
              <h3 className="text-xl font-extrabold text-zinc-900 mb-3 tracking-tight leading-tight">
                {feature.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-normal">
                {feature.description}
              </p>
            </div>
            
          </div>
        ))}
        
      </div>
    </section>
  );
}
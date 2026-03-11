export default function FeatureCompany() {
  return (
    <section className="bg-white py-10 px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
    
        <div className="max-w-md">
          <h2 className="text-zinc-900 text-5xl lg:text-[42px] font-serif leading-[1.2] tracking-tighter italic">
            In today’s digital world, having a strong online presence is crucial for the success of your business.
          </h2>
        </div>

        
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-6">
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
              Your website serves as the face of your brand, often being the first point of contact for potential customers. At Astronet, we understand the importance of making a lasting impression.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed font-light">
              That’s why we specialise in creating custom company websites tailored to reflect the unique identity and values of your business. Whether you’re a small startup or a well-established company, our team works closely with you to ensure that your website not only looks great but also effectively communicates your message to your target audience.
            </p>
          </div>

          <button className="px-10 py-4 border border-zinc-900 text-zinc-900 font-serif text-[18px] leading-[1.2] tracking-tighter  hover:bg-zinc-900 hover:text-white transition-all duration-300">
            Work with us
          </button>
        </div>

      </div>
    </section>
  );
}
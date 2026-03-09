export default function InfoSegment() {
  return (
    <div className="w-full bg-white dark:bg-[#050505]">
      {/* 1. Sub-segmento de Testimonios  */}
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 py-20 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <h2 className="text-zinc-900 dark:text-white text-4xl sm:text-5xl font-serif leading-tight">
              What Our <br/> Clients Say.
            </h2>
          </div>

          {/* Testimonios Individuales */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" 
                className="w-10 h-10 rounded-full grayscale" 
                alt="Client Dan" 
              />
              <p className="text-[11px] leading-relaxed font-medium text-zinc-500 dark:text-white/70 italic">
                "Harry is a talented designer, with flair and attention to detail. He's exceptionally easy to work with..."
              </p>
            </div>
            <div className="border-t border-zinc-100 dark:border-white/10 pt-4 ml-14">
              <p className="text-[10px] font-black uppercase tracking-tighter text-zinc-900 dark:text-white">Dan Johnson</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">CEO — THE MOVE CHANNEL</p>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="flex gap-4">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" 
                className="w-10 h-10 rounded-full grayscale" 
                alt="Client Louis" 
              />
              <p className="text-[11px] leading-relaxed font-medium text-zinc-500 dark:text-white/70 italic">
                "Really listening is a bit of a rare skill nowadays... it was awesome to work with someone who actually delivers."
              </p>
            </div>
            <div className="border-t border-zinc-100 dark:border-white/10 pt-4 ml-14">
              <p className="text-[10px] font-black uppercase tracking-tighter text-zinc-900 dark:text-white">Louis Hatchwell</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-400">Content Creator / Athlete</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonio Unico*/}
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 pb-20 sm:pb-32">
        <div className="relative bg-[#0d1110] rounded-[2.5rem] overflow-hidden grid grid-cols-1 lg:grid-cols-10 min-h-[550px]">
          
          <div className="lg:col-span-4 relative h-[400px] lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80" 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
              alt="Harry King Profile"
            />
            <div className="absolute bottom-10 left-10">
              <p className="text-white font-serif text-2xl">Harry King</p>
              <p className="text-[8px] text-zinc-500 uppercase tracking-[0.4em]">Website Designer Jersey</p>
            </div>
          </div>

          <div className="lg:col-span-6 p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[#A3FF00] font-bold">↗</span>
              <p className="text-[#A3FF00] font-black text-[10px] tracking-[0.4em] uppercase">
                Harry King Studio
              </p>
            </div>

            <h3 className="text-white text-4xl lg:text-5xl font-serif mb-8 leading-[1.2] tracking-tight">
              A website design agency supporting SMEs in Jersey for over 6 years.
            </h3>

            <p className="text-zinc-400 text-lg leading-relaxed  font-Semibold">
              From the early days of being a versatile freelancer, Harry's journey has evolved into the establishment of Harry King Studio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
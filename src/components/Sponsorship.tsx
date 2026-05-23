"use client";

export function Sponsorship() {
  return (
    <section id="sponsorship" className="py-40 bg-zinc-950 border-t border-white/5 relative overflow-hidden px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Pitch & Value Propositions */}
        <div className="space-y-8">
          <div className="inline-block border border-white/10 px-4 py-1 rounded-none text-[9px] font-mono uppercase tracking-[0.3em] text-zinc-400 bg-zinc-900/50">
            Build Monetization Program
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">
            GET SPONSORED <span className="text-zinc-600">BY KNDS</span>
          </h2>
          
          <p className="text-zinc-400 text-xs uppercase tracking-widest leading-loose">
            We are actively scouting built platforms, track configurations, and digital creators looking for factory brand backup. If your build pushes limits, we supply premium hardware, custom variants, and banner decals in exchange for media exposure and transparent reviews.
          </p>
          
          {/* Per-tier breakdown lines */}
          <div className="space-y-4 pt-4 border-t border-white/5">
            <div className="flex space-x-4 items-start">
              <div className="font-mono text-zinc-600 text-xs mt-0.5">01 //</div>
              <div>
                <h4 className="text-xs uppercase font-black tracking-wider text-white">HARDWARE ALLOCATION</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1 leading-relaxed">
                  Receive tailored carbon elements, pre-production steering configurations, and high-visibility track livery.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4 items-start pt-4 border-t border-white/5">
              <div className="font-mono text-zinc-600 text-xs mt-0.5">02 //</div>
              <div>
                <h4 className="text-xs uppercase font-black tracking-wider text-white">MEDIA HANDSHAKE MATRIX</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest mt-1 leading-relaxed">
                  Produce high-resolution unboxings, structural installs, and community content to unlock deeper part scaling cycles.
                </p>
              </div>
            </div>
          </div>

          <button className="px-8 py-5 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-zinc-200 transition-all shadow-xl active:scale-[0.98]">
            Apply For Sponsorship Matrix
          </button>
        </div>
        
        {/* Right Column: Full-Color High Contrast Visual Asset Panel */}
        <div className="relative bg-zinc-900 aspect-video md:aspect-square border border-white/5 overflow-hidden group">
          {/* Slightly lowered the overlay opacity to let the image colors pop dynamically */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-50" />
          
          <div 
            className="w-full h-full bg-cover bg-center contrast-[1.10] brightness-[0.65] group-hover:scale-105 transition duration-700 ease-out" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200')` }}
          />
          
          <div className="absolute bottom-6 left-6 z-20 font-mono text-[9px] tracking-[0.2em] text-zinc-300 bg-black/40 backdrop-blur-sm px-2 py-1 uppercase border border-white/5">
            Chassis Testing System // KNDS Grid
          </div>
        </div>

      </div>
    </section>
  );
}
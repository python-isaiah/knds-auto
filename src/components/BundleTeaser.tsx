"use client";

export function BundleTeaser() {
  return (
    <section id="bundles" className="py-40 bg-black border-t border-white/5 px-10 relative overflow-hidden">
      {/* Background Glow Variant */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
          <div className="space-y-2">
            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-emerald-400 font-bold">Comprehensive Optimization</p>
            <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">THE FULL BUILD BUNDLE</h2>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest max-w-sm leading-loose">
            Lock in complete configuration syncs. Group your components into a unified factory order allocation to unlock exclusive custom tier tier packaging rates.
          </p>
        </div>

        {/* Bundle Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Left Column: The Package Pitch */}
          <div className="bg-zinc-950 border border-white/5 p-8 flex flex-col justify-between h-full space-y-8 lg:col-span-1">
            <div className="space-y-6">
              <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em]">Tier // 01 Complete Spec</span>
              <h3 className="text-3xl font-black uppercase italic tracking-tight text-white leading-none">THE KNDS STAGE 3 PACK</h3>
              <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-relaxed">
                Stop building in fragments. Elevate your cockpit and chassis layout simultaneously. This custom matrix batches your manufacturing run across all four tracking divisions at a heavily discounted package valuation.
              </p>
              
              {/* Price Callout */}
              <div className="pt-4 border-t border-white/5">
                <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500 block">Bundle Vault Entry</span>
                <div className="flex items-baseline space-x-3 mt-1">
                  <span className="text-3xl font-mono font-black text-emerald-400">SAVE 15%</span>
                  <span className="text-xs text-zinc-500 line-through uppercase tracking-widest font-mono">ON TOTAL BUILD</span>
                </div>
              </div>
            </div>

            <button className="w-full py-5 bg-emerald-400 text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-300 transition-all shadow-xl active:scale-[0.98]">
              Configure Stage 3 Bundle
            </button>
          </div>

          {/* Right Columns: The 4 Included Core Assets Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            
            {/* Asset 1: Carbon Wheels */}
            <div className="bg-zinc-950 border border-white/5 p-6 flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-zinc-600 font-mono">ASSET // 01</span>
                  <span className="text-[8px] bg-white/5 text-zinc-400 px-2 py-0.5 font-mono uppercase tracking-wider">Included</span>
                </div>
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white">Bespoke Carbon Wheels</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">Your choice of autoclave-cured carbon steering core layouts with customized Alcantara tracking parameters.</p>
              </div>
            </div>

            {/* Asset 2: Carbon Exterior Pieces */}
            <div className="bg-zinc-950 border border-white/5 p-6 flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-zinc-600 font-mono">ASSET // 02</span>
                  <span className="text-[8px] bg-white/5 text-zinc-400 px-2 py-0.5 font-mono uppercase tracking-wider">Included</span>
                </div>
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white">Carbon Aero Components</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">Dry composite matching carbon mirror casings, splitters, or rear diffuser matrix arrays matching your chassis layout.</p>
              </div>
            </div>

            {/* Asset 3: Dynamic LED Optics */}
            <div className="bg-zinc-950 border border-white/5 p-6 flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-zinc-600 font-mono">ASSET // 03</span>
                  <span className="text-[8px] bg-white/5 text-zinc-400 px-2 py-0.5 font-mono uppercase tracking-wider">Included</span>
                </div>
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white">Dynamic LED Laser Optics</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">Sequential scrolling animation path setups, startup lighting grids, and high-intensity error-free headlight replacement assemblies.</p>
              </div>
            </div>

            {/* Asset 4: Precision Seat Covers */}
            <div className="bg-zinc-950 border border-white/5 p-6 flex flex-col justify-between group hover:border-zinc-700 transition duration-300">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-zinc-600 font-mono">ASSET // 04</span>
                  <span className="text-[8px] bg-white/5 text-zinc-400 px-2 py-0.5 font-mono uppercase tracking-wider">Included</span>
                </div>
                <h4 className="text-lg font-black uppercase italic tracking-tight text-white">Ergonomic Seat Overhauls</h4>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest leading-relaxed">Laser-measured full seat covers lined with tactical patterns, matching stitch colors, and high-friction side bolsters.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
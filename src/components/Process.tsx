export function Process() {
  const steps = [
    {
      num: "01",
      title: "Core Selection",
      desc: "WE SOURCE OEM CORES TO ENSURE PERFECT FITMENT AND FULL RETAINMENT OF FACTORY BUTTON AND AIRBAG FUNCTIONALITY."
    },
    {
      num: "02",
      title: "Weave Integration",
      desc: "HAND-LAID 3K TWILL OR FORGED CARBON FIBER IS VACUUM-SEALED FOR A BUBBLE-FREE, AEROSPACE-GRADE FINISH."
    },
    {
      num: "03",
      title: "Ergonomic Sculpting",
      desc: "CONTOURED THUMB RESTS AND FLAT-BOTTOM ARCHITECTURE ARE MOLDED FOR MAXIMUM TACTILE FEEDBACK."
    },
    {
      num: "04",
      title: "Final Curation",
      desc: "THREE LAYERS OF UV-RESISTANT CLEAR COAT ARE HAND-POLISHED TO A MIRROR SHINE BEFORE QUALITY INSPECTION."
    }
  ];

  return (
    <section id="process" className="max-w-7xl mx-auto px-10 py-40 border-t border-white/5">
      {/* Mission Statement */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        <div>
          <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-500 mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-zinc-800"></span>
            Mission Statement
          </h2>
          <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter leading-[0.9]">
            Precision is not <span className="text-zinc-600">negotiable.</span>
          </p>
        </div>
        <div className="flex items-end">
          <p className="text-zinc-500 uppercase text-[11px] tracking-[0.2em] leading-relaxed max-w-md">
            KNDS Auto exists at the intersection of high-performance engineering and bespoke luxury. 
            We believe the steering wheel is the most vital point of contact—it is where the 
            intent of the driver becomes the motion of the machine.
          </p>
        </div>
      </div>

      {/* Process Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
        {steps.map((step) => (
          <div key={step.num} className="group p-8 bg-zinc-950 border border-white/5 hover:bg-white hover:text-black transition-all duration-500 cursor-default">
            <span className="text-[10px] font-black tracking-widest block mb-12 opacity-30 group-hover:opacity-100">
              PHASE // {step.num}
            </span>
            <h3 className="text-xl font-black uppercase italic tracking-tighter mb-4">
              {step.title}
            </h3>
            <p className="text-[9px] font-bold tracking-widest leading-loose opacity-50 group-hover:opacity-100">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
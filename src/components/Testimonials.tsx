import React from "react";
import { Star, ShieldCheck, Mail, Camera } from "lucide-react";
import { FadeIn } from "./FadeIn";

export function Testimonials() {
  const archives = [
    {
      type: "DIRECT_INQUIRY",
      id: "LOG_882",
      name: "ISAAC P.",
      text: "THE WEIGHT DISTRIBUTION ON THE YOKE IS PERFECT. NO DELAY IN PADDLE RESPONSE. KNDS IS ON ANOTHER LEVEL.",
      rating: 5,
      featured: true,
    },
    {
      type: "SOCIAL_VERIFIED",
      id: "LOG_741",
      name: "@BIMMER_BOY",
      text: "BEST MOD I'VE DONE TO THE M3. PERIOD.",
      rating: 5,
      featured: false,
    },
    {
      type: "CLIENT_EMAIL",
      id: "LOG_901",
      name: "SARAH L.",
      text: "I WAS SKEPTICAL ABOUT THE LEAD TIMES BUT THE WAIT WAS COMPLETELY JUSTIFIED BY THE QUALITY OF THE STITCHING. FLAWLESS.",
      rating: 5,
      featured: false,
    },
    {
      type: "TECHNICAL_REVIEW",
      id: "LOG_662",
      name: "PRO_TRACK_NY",
      text: "WE RUN KNDS WHEELS ON OUR TRACK BUILDS. ZERO THERMAL EXPANSION IN THE RESIN UNDER HIGH HEAT.",
      rating: 5,
      featured: true,
    },
    {
      type: "DIRECT_INQUIRY",
      id: "LOG_102",
      name: "TYLER W.",
      text: "JUST INSTALLED THE FORGED CARBON UNIT. THE INTERIOR FEELS LIKE A SUPERCAR NOW.",
      rating: 5,
      featured: false,
    },
    {
      type: "SOCIAL_VERIFIED",
      id: "LOG_334",
      name: "@LEXUS_LUX",
      text: "THE TEXTURE OF THE ALCANTARA IS SUPERIOR TO OEM.",
      rating: 5,
      featured: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-10 py-40 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
        <div className="max-w-2xl">
          <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-600 mb-8 flex items-center gap-4">
            <span className="w-12 h-[1px] bg-zinc-800"></span>
            Public Archive
          </h2>
          <p className="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.8]">
            User Verified <br />{" "}
            <span className="text-zinc-700">Performance.</span>
          </p>
        </div>
        <div className="text-right">
          <div className="text-6xl font-black italic tracking-tighter">5.0</div>
          <div className="flex gap-1 justify-end my-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={10} fill="white" />
            ))}
          </div>
          <p className="text-[9px] font-bold tracking-[0.3em] text-zinc-500 uppercase">
            Average Satisfactory Rating
          </p>
        </div>
      </div>

      {/* Masonry-Style Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
        {archives.map((item, index) => (
          <FadeIn key={item.id} delay={index * 50}>
            <div
              className={`break-inside-avoid p-8 border border-white/5 bg-zinc-950/50 backdrop-blur-sm group hover:border-white/20 transition-all duration-500 ${
                item.featured ? "pt-12" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-zinc-600">
                  {/* Logic: If Social use Camera, if Technical use Shield, else Mail */}
                  {item.type === "SOCIAL_VERIFIED" ? (
                    <Camera size={10} />
                  ) : item.type === "TECHNICAL_REVIEW" ? (
                    <ShieldCheck size={10} />
                  ) : (
                    <Mail size={10} />
                  )}
                  <span className="text-[9px] font-black tracking-widest">
                    {item.type}
                  </span>
                </div>
                <span className="text-[9px] font-medium text-zinc-800 tracking-tighter">
                  {item.id}
                </span>
              </div>

              <p
                className={`font-bold tracking-widest uppercase leading-loose text-zinc-200 ${
                  item.featured ? "text-sm" : "text-[10px]"
                }`}
              >
                "{item.text}"
              </p>

              <div className="mt-10 flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-[10px] font-black italic uppercase tracking-tighter">
                  {item.name}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={6} fill="white" stroke="none" />
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Final Trusted From Status */}
      <div className="mt-32 pt-16 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-600 uppercase">
            Status // Online
          </span>
          <p className="text-xs font-bold tracking-widest uppercase">
            Trusted by 500+ Enthusiasts Worldwide
          </p>
        </div>
        <div className="flex gap-16 opacity-20 hover:opacity-50 transition-opacity duration-700">
          <div className="text-xl font-black italic tracking-tighter uppercase">
            BMW_CLUB_NA
          </div>
          <div className="text-xl font-black italic tracking-tighter uppercase">
            TESLA_CREW
          </div>
          <div className="text-xl font-black italic tracking-tighter uppercase">
            AMG_DRIVERS
          </div>
        </div>
      </div>
    </section>
  );
}
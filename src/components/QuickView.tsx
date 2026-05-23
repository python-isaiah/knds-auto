"use client";
import Image from "next/image";

export function QuickView({ isOpen, onClose, product }: any) {
  if (!product) return null;
  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-zinc-950 border-l border-white/5 z-[201] p-12 transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={onClose} className="text-[9px] tracking-[0.5em] uppercase text-zinc-500 hover:text-white mb-20">Close // ESC</button>
        <div className="space-y-10">
          <div className="aspect-square relative bg-zinc-900 border border-white/5 overflow-hidden">
            <Image src={product.images[0]} alt={product.title} fill className="object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter">{product.title}</h2>
            <p className="text-xl text-zinc-600 mt-4 italic">{product.price}</p>
          </div>
          <p className="text-xs text-zinc-400 uppercase tracking-widest leading-loose pt-10 border-t border-white/5">
            Bespoke carbon fiber construction. Precision stitched. <br/> Estimated delivery: 2-4 weeks.
          </p>
          <button className="w-full bg-white text-black font-black py-5 uppercase tracking-[0.3em] text-[10px] hover:bg-zinc-200 transition-all shadow-xl">
            Add to Build
          </button>
        </div>
      </div>
    </>
  );
}
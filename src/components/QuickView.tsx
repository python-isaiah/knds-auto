"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface QuickViewProps {
  isOpen: boolean;
  onClose: () => void;
  product: any;
  onAddToCart?: () => void; // Added to trigger the green check notification
}

export function QuickView({ isOpen, onClose, product, onAddToCart }: QuickViewProps) {
  const [isAdding, setIsAdding] = useState(false);

  // Reset loading state automatically whenever the drawer opens or closes
  useEffect(() => {
    if (!isOpen) {
      setIsAdding(false);
    }
  }, [isOpen]);

  if (!product) return null;

  const handleCartClick = () => {
    setIsAdding(true);
    
    // Fire the green toast checkmark pipeline immediately
    if (onAddToCart) onAddToCart();
    
    // Give the user a brief moment of visual feedback before sliding the drawer shut
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />
      
      {/* Slide-out Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[500px] bg-zinc-950 border-l border-white/5 z-[201] p-8 md:p-12 transform transition-transform duration-700 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Header (Sticky) */}
        <button onClick={onClose} className="text-[9px] tracking-[0.5em] uppercase text-zinc-500 hover:text-white mb-8 shrink-0 text-left">
          Close // ESC
        </button>
        
        {/* SCROLLABLE PERSUASION SPACE */}
        <div className="flex-1 overflow-y-auto space-y-10 pr-2 scrollbar-thin scrollbar-thumb-zinc-900 overflow-x-hidden pb-6">
          
          {/* Media Engine */}
          <div className="aspect-square relative bg-zinc-900 border border-white/5 overflow-hidden shrink-0">
            <Image src={product.images?.[0] || product.image} alt={product.title} fill className="object-cover" />
          </div>
          
          {/* Main Typography */}
          <div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter text-white">{product.title}</h2>
            <p className="text-xl text-zinc-500 mt-2 italic font-mono">{product.price}</p>
          </div>

          {/* Urgency Factor Block */}
          <div className="bg-red-950/20 border border-red-900/30 p-5 rounded-sm">
            <p className="text-[10px] uppercase tracking-[0.2em] font-black text-red-400 mb-1">⚡ Limit Allocation Warning</p>
            <p className="text-[11px] text-zinc-400 uppercase tracking-wider leading-relaxed">
              Each framework requires dedicated curing parameters. Production slots are strictly limited for this calendar window to ensure structural integrity.
            </p>
          </div>

          {/* High-Persuasion Sales Bullet Matrix */}
          <div className="space-y-6 pt-6 border-t border-white/5">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-black">Material Blueprint</h3>
            
            <div className="space-y-4">
              <div>
                <p className="text-[11px] text-white uppercase tracking-widest font-bold mb-1">✓ Toray T1200 Carbon Matrix</p>
                <p className="text-xs text-zinc-400 leading-relaxed pl-4">
                  Autoclave-cured 3K twill weave providing extreme structural tensile performance at a sub-pound mass profile.
                </p>
              </div>

              <div>
                <p className="text-[11px] text-white uppercase tracking-widest font-bold mb-1">✓ Ergonomic Motorsport Grips</p>
                <p className="text-xs text-zinc-400 leading-relaxed pl-4">
                  Deeply contoured layout wrapped in ultra-premium authentic Italian Alcantara or perforated top-grain leather with handcrafted tracking stitching.
                </p>
              </div>

              <div>
                <p className="text-[11px] text-white uppercase tracking-widest font-bold mb-1">✓ True Plug & Play Ecosystem</p>
                <p className="text-xs text-zinc-400 leading-relaxed pl-4">
                  Engineered with direct match internal channels to accept your original equipment manufacture control pods, paddle integrations, and airbag modules cleanly with zero error flags.
                </p>
              </div>
            </div>
          </div>

          {/* QA Matrix Blueprint Text */}
          <div className="pt-6 border-t border-white/5 space-y-3">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-zinc-500 font-black">Quality Verification</h3>
            <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-loose">
              Bespoke carbon fiber construction. Precision stitched. Ultrasonic integrity scanned. Fitment configuration guaranteed. <br/>
              <span className="text-zinc-500 block mt-2">Estimated custom build latency: 2-4 weeks.</span>
            </p>
          </div>
          
        </div>

        {/* Footer Interaction Action Block (Sticky at bottom) */}
        <div className="pt-4 border-t border-white/5 bg-zinc-950 shrink-0">
          <button 
            disabled={isAdding}
            onClick={handleCartClick}
            className={`w-full font-black py-5 uppercase tracking-[0.3em] text-[10px] transition-all shadow-xl active:scale-[0.98] ${
              isAdding 
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                : "bg-white text-black hover:bg-zinc-200"
            }`}
          >
            {isAdding ? "Adding to Build..." : "Add to Build"}
          </button>
        </div>

      </div>
    </>
  );
}
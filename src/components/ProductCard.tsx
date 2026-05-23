"use client";

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductCardProps {
  title: string;
  price: string;
  images: string[];
  handle: string;
  onQuickView: () => void;
}

export function ProductCard({ title, price, images, onQuickView }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (images && images.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }
  };

  return (
    <div className="group block">
      <div className="aspect-square bg-zinc-900 border border-white/5 relative mb-4 overflow-hidden">
        <Image 
          src={images[currentIndex]} 
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Quick View Bar */}
        <div 
          onClick={onQuickView}
          className="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-md border-t border-white/10 py-3 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 z-10 cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
            View Details
          </span>
        </div>
        
        {/* Preview Arrow */}
        {images && images.length > 1 && (
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/40 border border-white/20 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 hover:bg-white hover:text-black"
          >
            →
          </button>
        )}
      </div>
      
      <div className="flex flex-col gap-1 text-center px-2">
        <h3 className="text-sm font-bold uppercase tracking-widest leading-tight">
          {title}
        </h3>
        <p className="text-zinc-500 text-xs tracking-tighter">
          {price}
        </p>
      </div>
    </div>
  );
}
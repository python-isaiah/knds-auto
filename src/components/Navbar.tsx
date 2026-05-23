"use client";
import Link from 'next/link';

export function Navbar() {
  const categories = [
    { label: 'Brands', items: ['Tesla', 'BMW', 'Mercedes', 'Infiniti'] },
    { label: 'Makes', items: ['Model 3/Y', 'G-Series', 'C-Class', 'Q50/60'] },
    { label: 'Finishes', items: ['Matte', 'Gloss', 'Forged', 'Honey'] }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-500">
      <div className="max-w-7xl mx-auto px-10 h-20 flex items-center justify-between">
        
        {/* Brand Core Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter uppercase italic group">
          KNDS<span className="text-zinc-500 font-light group-hover:text-white transition-colors">AUTO</span>
        </Link>
        
        {/* Navigation Anchors Array */}
        <div className="hidden md:flex gap-12 text-[10px] font-bold tracking-[0.4em] uppercase items-center">
          
          {/* Mega Dropdown Hover System for Collection */}
          <div className="group relative py-8">
            <span className="text-white cursor-pointer transition-colors flex items-center gap-2 hover:text-zinc-400">
              Collection
            </span>
            <div className="absolute top-[100%] left-[-100%] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 pt-4">
              <div className="bg-zinc-950 border border-white/10 p-10 w-[600px] grid grid-cols-3 gap-8 backdrop-blur-3xl shadow-2xl">
                {categories.map((cat) => (
                  <div key={cat.label}>
                    <h4 className="text-zinc-600 mb-6 text-[9px] tracking-[0.5em] border-b border-white/5 pb-2 uppercase">{cat.label}</h4>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li key={item} className="text-zinc-400 hover:text-white transition-colors cursor-pointer tracking-widest">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Section Anchors */}
          <a href="#process" className="text-zinc-500 hover:text-white cursor-pointer transition-colors py-8">
            Process
          </a>

          <a href="#bundles" className="text-zinc-500 hover:text-white cursor-pointer transition-colors py-8">
            Bundles
          </a>

          <a href="#sponsorship" className="text-zinc-500 hover:text-white cursor-pointer transition-colors py-8">
            Sponsorship
          </a>
        </div>

         {/* Action Right Element Interfacing with Build Drawer
        <div className="group flex items-center gap-4 cursor-pointer">
          <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/70 group-hover:text-white">
            Cart <span className="text-zinc-600 group-hover:text-white ml-1">(0)</span>
          </div>
          <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 group-hover:bg-white transition-all duration-500" />
        </div>  */}

      </div>
    </nav>
  );
}
import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Process } from "@/components/Process";
import { FadeIn } from "@/components/FadeIn";
import { shopifyFetch } from "@/lib/shopify";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { Sponsorship } from "@/components/Sponsorship";
import { BundleTeaser } from "@/components/BundleTeaser";

const getProductsQuery = `
  query getProducts {
    products(first: 6) {
      edges {
        node {
          id
          title
          handle
          images(first: 5) { 
            edges {
              node {
                url
              }
            }
          }
          variants(first: 1) {
            edges {
              node {
                id
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const response = await shopifyFetch({ query: getProductsQuery });
  const rawProducts = response?.data?.products?.edges || [];

  // Clean duplicates by ID
  const products = rawProducts.filter((v: any, i: any, a: any) => 
    a.findIndex((t: any) => t.node.id === v.node.id) === i
  );

  return (
    <main className="min-h-screen bg-black text-white pb-32 selection:bg-white selection:text-black">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover brightness-[0.7]">
          <source src="/hero-carbon.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
        <div className="relative z-20 max-w-7xl mx-auto w-full">
          <FadeIn>
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter uppercase italic leading-[0.8]">
              KNDS AUTO
            </h1>
            <p className="text-zinc-400 tracking-[0.5em] text-[10px] uppercase mt-8 font-bold">
              Automotive Grade Carbon Composites
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Statement */}
      <section className="max-w-7xl mx-auto px-10 pt-40 pb-20">
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="text-[10px] font-bold tracking-[0.5em] uppercase text-zinc-600 mb-8 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-zinc-800"></span>
              The Collection
            </h2>
            <p className="text-3xl md:text-5xl font-light leading-tight tracking-tighter italic">
              We engineer <span className="text-zinc-500 underline decoration-zinc-800 underline-offset-8">tactile connections</span> between the driver and the machine.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* Products Catalog Gallery Matrix (Handles Drawer and Toast Interactivity) */}
      <section id="wheels">
        <ProductGrid products={products} />
      </section>

      {/* Process & Mission */}
      <Process />


      {/* TESTIMONIALS MASONRY */}
      <BundleTeaser />
      <Testimonials />

      {/* NEW UPGRADE: FUTURE CARBON & LIGHTING CATALOG TEASERS */}
      <section id="upcoming" className="py-32 bg-black border-t border-white/5 px-10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-white/5 pb-10">
            <div>
              <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-zinc-600 mb-2">Ecosystem Extension</p>
              <h2 className="text-4xl font-black uppercase italic tracking-tighter">FUTURE ALLOCATIONS</h2>
            </div>
            <p className="text-zinc-500 text-xs uppercase tracking-widest max-w-sm leading-loose">
              We are scaling optimization pipelines. Specialized molds are currently processing advanced elements outside steering interfaces.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box 1: Carbon Aero Trims */}
            <div className="bg-zinc-950 border border-white/5 p-8 flex flex-col justify-between h-80 relative group hover:border-zinc-700 transition duration-300">
              <div className="space-y-4">
                <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em]">SERIES // 02</span>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-white">CARBON AERO & TRIMS</h3>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-relaxed">Dry composite mirror housings, splitters, and rear performance diffusers calibrated for targeted chassis dynamics.</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-white/5 px-3 py-2 w-max">TEASING Q3 PRODUCTION</span>
            </div>

            {/* Box 2: LED Laser Optics */}
            <div className="bg-zinc-950 border border-white/5 p-8 flex flex-col justify-between h-80 relative group hover:border-zinc-700 transition duration-300">
              <div className="space-y-4">
                <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-[0.2em]">SERIES // 03</span>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-white">DYNAMIC LED OPTICS</h3>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-relaxed">Custom matrix startups, progressive sequential paths, and high-intensity structural replacement shells.</p>
              </div>
              <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-widest bg-zinc-900 border border-white/5 px-3 py-2 w-max">TEASING Q3 PRODUCTION</span>
            </div>

            {/* Box 3: Premium Garments (Merch) */}
            <div className="bg-zinc-950 border border-dashed border-zinc-800 p-8 flex flex-col justify-between h-80 relative group hover:border-zinc-700 transition duration-300">
              <div className="space-y-4">
                <span className="text-[9px] text-emerald-400 font-mono uppercase tracking-[0.2em] font-black">CAPSULE DROP</span>
                <h3 className="text-xl font-black uppercase italic tracking-tight text-white">KNDS GARMENT LAB</h3>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest leading-relaxed">Heavy-weight boxy silhouettes, customized tactical washes, distressed textures, and industrial luxury hardware accents.</p>
              </div>
              <span className="text-[9px] font-mono font-black text-black uppercase tracking-widest bg-emerald-400 px-4 py-2 w-max shadow-lg shadow-emerald-950/20">COMING SOON</span>
            </div>
          </div>
        </div>
      </section>
      <Sponsorship />
      <Footer />
    </main>
  );
}
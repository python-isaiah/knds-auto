import { Navbar } from "@/components/Navbar";
import { ProductGrid } from "@/components/ProductGrid";
import { Process } from "@/components/Process";
import { FadeIn } from "@/components/FadeIn";
import { shopifyFetch } from "@/lib/shopify";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

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
    <main className="min-h-screen bg-black text-white pb-32">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center px-10 overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
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

      {/* Products & Side-Panel Logic */}
      <ProductGrid products={products} />

      {/* Process & Mission */}
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
}
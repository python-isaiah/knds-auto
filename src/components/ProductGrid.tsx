"use client";
import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { QuickView } from "./QuickView";
import { FadeIn } from "./FadeIn";

export function ProductGrid({ products }: { products: any[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<any>(null);

  const openQuickView = (product: any) => {
    setActiveProduct(product);
    setIsOpen(true);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-10 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {products.map(({ node }: any, i: number) => (
            <FadeIn key={node.id} delay={i * 100}>
              <ProductCard
                title={node.title}
                price={`$${parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2)}`}
                images={node.images?.edges.map((edge: any) => edge.node.url) || []}
                handle={node.handle}
                onQuickView={() => openQuickView({
                  title: node.title,
                  price: `$${parseFloat(node.priceRange.minVariantPrice.amount).toFixed(2)}`,
                  images: node.images?.edges.map((edge: any) => edge.node.url) || []
                })}
              />
            </FadeIn>
          ))}
        </div>
      </section>
      <QuickView isOpen={isOpen} onClose={() => setIsOpen(false)} product={activeProduct} />
    </>
  );
}
"use client";
import { useState } from "react";
import Image from "next/image";
import { QuickView } from "./QuickView";
import { CartNotification } from "./CartNotification";

interface ProductGridProps {
  products: any[];
}

export function ProductGrid({ products }: ProductGridProps) {
  // Navigation & Drawer Open States
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  
  // Notification States
  const [showToast, setShowToast] = useState(false);
  const [toastItemName, setToastItemName] = useState("");

  // Local Frontend Cart Array Memory Engine
  const [cart, setCart] = useState<any[]>([]);
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Trigger Local Add & Toast Alerts
  const handleAddToCart = (productNode: any) => {
    // Extract the valid variant ID explicitly right here before adding to cart
    const targetVariantId = productNode.variantId || productNode.variants?.edges?.[0]?.node?.id || productNode.id;

    const normalizedItem = {
      ...productNode,
      variantId: targetVariantId // Force assignment onto the root level
    };

    // Append normalized tracking node into state layout
    setCart((prevCart) => [...prevCart, normalizedItem]);
    
    // Set notification toast text strings
    setToastItemName(productNode.title);
    setShowToast(true);
    
    // Auto clear badge within 3.5 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  // TRIGGER SECURE SHOPIFY REDIRECT MATRIX
  const handleCheckoutRedirect = async () => {
    if (cart.length === 0) return;
    setIsCheckoutLoading(true);

    const lineItems = cart.map((item) => ({
      // Targets the explicitly guaranteed root variantId string
      variantId: item.variantId, 
      quantity: 1
    }));

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ lineItems })
      });

      const data = await response.json();

      if (data?.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error("Shopify Pipeline Details Error Output:", data.error);
        alert(`Configuration pipeline error: ${data.error || 'Check local server logs'}`);
        setIsCheckoutLoading(false);
      }
    } catch (error) {
      console.error("Network error executing checkout routing:", error);
      setIsCheckoutLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-10 py-12">
      {/* GRID CONTAINER FOR PRODUCTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((edge: any) => {
          const product = edge.node;
          const imageUrl = product.images?.edges?.[0]?.node?.url || "/placeholder-carbon.jpg";
          const displayPrice = product.priceRange?.minVariantPrice?.amount 
            ? `$${Math.round(product.priceRange.minVariantPrice.amount)}` 
            : "Spec Required";

          // Pre-extract the real variant GID straight from the GraphQL node tree
          const variantGid = product.variants?.edges?.[0]?.node?.id || product.id;

          return (
            <div 
              key={product.id} 
              className="bg-zinc-950 border border-white/5 p-6 space-y-4 group hover:border-zinc-700 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="aspect-square relative bg-zinc-900 overflow-hidden border border-white/5">
                  <Image 
                    src={imageUrl} 
                    alt={product.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black uppercase italic tracking-tight text-white">{product.title}</h3>
                  <p className="text-sm font-mono text-zinc-500 mt-1">{displayPrice}</p>
                </div>
              </div>

              <button 
                onClick={() => {
                  setSelectedProduct({
                    id: product.id,
                    title: product.title,
                    price: displayPrice,
                    image: imageUrl,
                    variantId: variantGid
                  });
                  setIsSidebarOpen(true);
                }}
                className="w-full mt-4 bg-zinc-900 border border-white/10 hover:bg-white hover:text-black py-4 uppercase text-[10px] tracking-[0.2em] font-black transition-all"
              >
                Inspect Framework // Open
              </button>
            </div>
          );
        })}
      </div>

      {/* FLOATING PERSISTENT FOOTER CART CONTROLLER BAR */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 left-0 w-full bg-zinc-950/90 backdrop-blur-xl border-t border-white/10 z-[150] px-10 py-6 flex items-center justify-between shadow-2xl animate-fade-in">
          <div className="flex items-center space-x-6">
            <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
              Active Specification Queue: <span className="text-white font-black">[{cart.length} Build Slot(s)]</span>
            </div>
            <button 
              onClick={() => setCart([])} 
              className="text-[9px] uppercase tracking-widest font-mono text-red-400/60 hover:text-red-400 transition-all underline underline-offset-4"
            >
              Flush Queue
            </button>
          </div>

          <button 
            disabled={isCheckoutLoading}
            onClick={handleCheckoutRedirect}
            className="bg-white text-black font-black uppercase tracking-[0.3em] text-[10px] px-10 py-4 hover:bg-zinc-200 transition-all shadow-xl disabled:bg-zinc-800 disabled:text-zinc-600 disabled:cursor-not-allowed"
          >
            {isCheckoutLoading ? "Routing to Secure Engine..." : "Finalize Build & Secure Slot"}
          </button>
        </div>
      )}

      {/* QUICKVIEW SIDE PANEL DRAWER */}
      <QuickView 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        product={selectedProduct} 
        onAddToCart={() => handleAddToCart(selectedProduct)} 
      />

      {/* SEAMLESS LIVE TOAST POPUP NOTIFICATION */}
      <CartNotification isVisible={showToast} itemName={toastItemName} />
    </div>
  );
}
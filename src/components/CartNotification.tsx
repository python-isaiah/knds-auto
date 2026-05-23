"use client";

interface CartNotificationProps {
  isVisible: boolean;
  itemName: string;
}

export function CartNotification({ isVisible, itemName }: CartNotificationProps) {
  return (
    <div
      className={`fixed bottom-6 right-6 bg-zinc-950 border border-white/10 text-white px-6 py-5 z-[300] max-w-sm shadow-2xl transition-all duration-500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Crisp Green Checkmark Container */}
        <div className="h-5 w-5 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center shrink-0">
          <svg
            className="w-3 h-3 text-emerald-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Text Payload */}
        <div className="space-y-0.5">
          <p className="text-[10px] tracking-[0.2em] font-black uppercase text-white">
            Added to Configuration
          </p>
          <p className="text-[11px] text-zinc-500 uppercase tracking-widest truncate max-w-[220px]">
            {itemName || "Custom Spec Wheel"}
          </p>
        </div>
      </div>
    </div>
  );
}
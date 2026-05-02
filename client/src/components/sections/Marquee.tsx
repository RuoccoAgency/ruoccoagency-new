import React from "react";
import { Star, ShieldCheck, Zap, Users } from "lucide-react";

const stats = [
  { text: "+50% Tasso di conversione", icon: Zap },
  { text: "Risposte entro 5 secondi", icon: Star },
  { text: "Copertura H24 / 7 giorni", icon: ShieldCheck },
  { text: "Decine di clienti soddisfatti", icon: Users },
  { text: "Lead qualificati automaticamente", icon: Zap },
];

export function Marquee() {
  return (
    <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-6 flex relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee gap-12 px-6">
        {/* We double the list to make the infinite scroll smooth */}
        {[...stats, ...stats, ...stats, ...stats].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="flex items-center gap-3 text-white/70">
              <Icon className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base font-medium whitespace-nowrap">{stat.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

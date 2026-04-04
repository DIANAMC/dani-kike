import { Heart } from "lucide-react";

const FooterSection = () => (
  <footer className="py-12 bg-wedding-charcoal text-center">
    <p className="font-display text-2xl text-primary-foreground/90 mb-2">Fran & Kike</p>
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="w-8 h-px bg-wedding-gold/50" />
      <Heart className="w-4 h-4 text-wedding-gold" />
      <div className="w-8 h-px bg-wedding-gold/50" />
    </div>
    <p className="font-body text-xs tracking-[0.2em] uppercase text-primary-foreground/50">
      15 · 11 · 2026
    </p>
  </footer>
);

export default FooterSection;

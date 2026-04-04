import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GiftsSection = () => {
  return (
    <section id="regalos" className="wedding-section bg-background">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Mesa de Regalos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-heading text-foreground mb-4"
        >
          Lluvia de Sobres
        </motion.h2>
        <div className="wedding-divider" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center gap-6 mt-8"
        >
          <div className="w-16 h-16 rounded-full bg-wedding-sage-light flex items-center justify-center">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <p className="wedding-body text-muted-foreground leading-relaxed">
            Su presencia es el mejor regalo que nos pueden dar. Si desean
            hacernos un obsequio, nuestra mesa de regalos será una{" "}
            <span className="font-semibold text-foreground">lluvia de sobres</span>.
          </p>
          <p className="wedding-body text-muted-foreground leading-relaxed">
            Con mucho amor, ¡gracias por celebrar este día tan especial con
            nosotros! 💌
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftsSection;

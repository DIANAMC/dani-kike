import { motion } from "framer-motion";
import { Shirt } from "lucide-react";

const reservedColors = [
  { name: "Blanco", hex: "#FFFFFF", border: true },
  { name: "Azul", hex: "#3B5998" },
  { name: "Gris", hex: "#9E9E9E" },
];

const DressCodeSection = () => {
  return (
    <section id="dresscode" className="wedding-section bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            Vestimenta
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="wedding-heading text-foreground mb-4"
          >
            Dress Code
          </motion.h2>
          <div className="wedding-divider" />
        </div>

        <div className="flex flex-col items-center gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-wedding-sage-light flex items-center justify-center">
              <Shirt className="w-7 h-7 text-primary" />
            </div>
            <p className="font-display text-2xl text-foreground">Formal sin corbata</p>
            <p className="wedding-body text-muted-foreground max-w-md">
              Te pedimos asistir con vestimenta formal. Los caballeros pueden prescindir de la corbata.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6 text-center"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground">
              Colores reservados
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {reservedColors.map((color) => (
                <div key={color.name} className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 h-14 rounded-full shadow-md"
                    style={{
                      backgroundColor: color.hex,
                      border: color.border ? "1.5px solid #d1d5db" : undefined,
                    }}
                  />
                  <p className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                    {color.name}
                  </p>
                </div>
              ))}
            </div>
            <p className="wedding-body text-muted-foreground max-w-sm text-sm">
              Por favor evita usar estos colores para que los novios puedan lucir únicos. ¡Gracias!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DressCodeSection;

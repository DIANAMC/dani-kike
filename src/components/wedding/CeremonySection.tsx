import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays, Church } from "lucide-react";
import venueImage from "@/assets/venue.jpg";

const details = [
  { icon: CalendarDays, label: "Fecha", value: "21 de agosto, 2026" },
  { icon: Clock, label: "Hora", value: "10:00 AM" },
  { icon: Church, label: "Ceremonia", value: "Cajicá - 3.5 Km. Adelante de Centro Chía vía, Cajicá - Chía, Camino de la Mejorana" },
  
];

const CeremonySection = () => {
  return (
    <section id="ceremonia" className="wedding-section bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
          >
            La Celebración
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="wedding-heading text-foreground mb-4"
          >
            Ceremonia & recepción
          </motion.h2>
          <div className="wedding-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-lg shadow-xl"
          >
            <img
              src={venueImage}
              alt="Lugar de la ceremonia"
              loading="lazy"
              width={1200}
              height={800}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {details.map((detail, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-wedding-sage-light flex items-center justify-center flex-shrink-0">
                  <detail.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">
                    {detail.label}
                  </p>
                  <p className="font-display text-lg text-foreground">{detail.value}</p>
                </div>
              </div>
            ))}

            <div className="pt-4">
              <p className="wedding-body text-muted-foreground mb-6">
                Iglesia El Lugar de Su Presencia - Sede Campestre - Cajicá
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-body text-sm tracking-wider uppercase hover:opacity-90 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                Ver en Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CeremonySection;

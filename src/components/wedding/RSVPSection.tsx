import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/573001234567";

const RSVPSection = () => {
  return (
    <section id="confirmar" className="wedding-section bg-wedding-blush">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Confirma tu Asistencia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-heading text-foreground mb-4"
        >
          RSVP
        </motion.h2>
        <div className="wedding-divider" />
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="wedding-body text-muted-foreground mb-12"
        >
          Por favor confirma antes del 21 de Julio de 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <p className="wedding-body text-muted-foreground">
            Escríbenos por WhatsApp para confirmar tu asistencia 💕
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white rounded-md font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            Chatear por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;

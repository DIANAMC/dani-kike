import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const messages = [
  {
    from: "Fran",
    text: "Desde el día en que te conocí, supe que mi vida cambiaría para siempre. Gracias por ser mi mejor amigo, mi confidente y mi compañero de aventuras. No puedo esperar para comenzar este nuevo capítulo juntos. Te amo infinitamente. 💕",
  },
  {
    from: "Kike",
    text: "Cada día a tu lado es una bendición. Me haces ser una mejor persona y me enseñas el verdadero significado del amor. Este día es el comienzo de nuestra eternidad juntos, y no podría estar más agradecido por tenerte en mi vida. ❤️",
  },
];

const SpecialMessages = () => {
  return (
    <section id="mensajes" className="wedding-section bg-wedding-sage-light">
      <div className="max-w-4xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Palabras del Corazón
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-heading text-foreground mb-4"
        >
          Mensajes Especiales
        </motion.h2>
        <div className="wedding-divider" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-card p-8 md:p-10 rounded-lg shadow-md border border-border text-left"
            >
              <Heart className="w-6 h-6 text-wedding-gold mb-6" />
              <p className="wedding-body text-muted-foreground italic mb-6 leading-relaxed">
                "{msg.text}"
              </p>
              <div className="wedding-divider !mx-0 !w-10" />
              <p className="font-display text-lg text-foreground mt-4">— {msg.from}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20"
        >
          <p className="font-display text-2xl md:text-3xl italic text-foreground">
            "El amor no se mide en tiempo, sino en momentos"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialMessages;

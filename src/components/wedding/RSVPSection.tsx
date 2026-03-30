import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    guests: "1",
    attendance: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attendance) {
      toast.error("Por favor completa los campos obligatorios");
      return;
    }
    toast.success("¡Gracias por confirmar! Nos vemos pronto 💕");
    setFormData({ name: "", email: "", guests: "1", attendance: "", dietary: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Tu nombre"
                maxLength={100}
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="correo@ejemplo.com"
                maxLength={255}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                ¿Asistirás? *
              </label>
              <select
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecciona...</option>
                <option value="yes">¡Sí, ahí estaré!</option>
                <option value="no">Lo siento, no podré asistir</option>
              </select>
            </div>
            <div>
              <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
                Número de invitados
              </label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={String(n)}>{n} {n === 1 ? "persona" : "personas"}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
              Restricciones alimentarias
            </label>
            <input
              type="text"
              name="dietary"
              value={formData.dietary}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Vegetariano, vegano, alergias..."
              maxLength={200}
            />
          </div>

          <div>
            <label className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">
              Mensaje para los novios
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-card border border-border rounded-md font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Escribe un mensaje especial..."
              maxLength={500}
            />
          </div>

          <div className="text-center pt-4">
            <button
              type="submit"
              className="px-10 py-4 bg-primary text-primary-foreground rounded-md font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
            >
              Confirmar Asistencia
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default RSVPSection;

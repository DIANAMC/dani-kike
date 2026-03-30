import { motion } from "framer-motion";
import prewedding1 from "@/assets/prewedding-1-optimized.jpg";
import prewedding2 from "@/assets/prewedding-2-optimized.jpg";
import prewedding3 from "@/assets/prewedding-3-optimized.jpg";
import prewedding1Webp from "@/assets/prewedding-1.webp";
import prewedding2Webp from "@/assets/prewedding-2.webp";
import prewedding3Webp from "@/assets/prewedding-3.webp";

const defaultPhotos = [
  { src: prewedding1Webp, alt: "Sesión preboda en el parque", w: 800, h: 1024, fallback: prewedding1 },
  { src: prewedding2Webp, alt: "Pareja riendo en viñedo", w: 1024, h: 800, fallback: prewedding2 },
  { src: prewedding3Webp, alt: "Retrato romántico en campo de flores", w: 800, h: 1024, fallback: prewedding3 },
];

const defaultPhotosAsUrls = defaultPhotos;

const formatAltFromPath = (path: string) => {
  const name = path.split('/').pop()?.replace(/\.(jpe?g|png|webp)$/i, '') ?? 'Foto';
  return name.replace(/[-_]/g, ' ').replace(/\b\w/g, (ch) => ch.toUpperCase());
};

const photoImports = import.meta.glob('../assets/fotos-boda/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

const photosFromFolder = Object.entries(photoImports).map(([path, src]) => ({
  src,
  alt: formatAltFromPath(path),
  w: 1024,
  h: 768,
}));

import videoFile from "@/assets/video.mp4";

const photos = photosFromFolder.length > 0 ? photosFromFolder : defaultPhotos;

const GallerySection = () => {
  return (
    <section id="galeria" className="wedding-section bg-wedding-sage-light">
      <div className="max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4"
        >
          Nuestra Historia
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="wedding-heading text-foreground mb-4"
        >
          Preboda
        </motion.h2>
        <div className="wedding-divider" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="wedding-body text-muted-foreground max-w-2xl mx-auto mb-16"
        >
          Algunos de nuestros momentos más especiales antes del gran día. 
          Cada fotografía cuenta un pedacito de nuestra historia de amor.
        </motion.p>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <picture>
                <source type="image/webp" srcSet={photo.src} />
                <img
                  src={"fallback" in photo ? photo.fallback : photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  width={photo.w}
                  height={photo.h}
                  className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </picture>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
            Nuestro Video
          </p>
          <div className="aspect-video rounded-lg overflow-hidden shadow-xl bg-wedding-charcoal/10 flex items-center justify-center border border-border">
            <video
              src={videoFile}
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              Tu navegador no soporta video HTML5.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;

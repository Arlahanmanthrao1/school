import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import galleryLab from "@/assets/gallery-lab.jpg";
import gallerySports from "@/assets/gallery-sports.jpg";
import galleryClassroom from "@/assets/gallery-classroom.jpg";
import galleryEvent from "@/assets/gallery-event.jpg";
import galleryLibrary from "@/assets/gallery-library.jpg";
import galleryArt from "@/assets/gallery-art.jpg";
import galleryComputer from "@/assets/gallery-computer.jpg";

const images = [
  { src: galleryClassroom, alt: "Modern classroom with students learning", category: "Campus" },
  { src: galleryLab, alt: "Science laboratory with students conducting experiments", category: "Labs" },
  { src: galleryLibrary, alt: "School library with students studying", category: "Campus" },
  { src: gallerySports, alt: "Students playing sports on the school field", category: "Sports" },
  { src: galleryEvent, alt: "Annual day celebration with student performances", category: "Events" },
  { src: galleryArt, alt: "Art room with students creating artwork", category: "Arts" },
  { src: galleryComputer, alt: "Computer lab with students working", category: "Labs" },
];

const categories = ["All", ...Array.from(new Set(images.map(img => img.category)))];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16" aria-label="Gallery hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">Gallery</h1>
            <p className="text-lg text-primary-foreground/80">A glimpse into life at Global Techno School.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-24" aria-label="Photo gallery">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
                aria-label={`View ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors" />
                <span className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-card/90 text-xs font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {img.category}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-card/20 text-primary-foreground hover:bg-card/40 transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-full max-h-[85vh] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;

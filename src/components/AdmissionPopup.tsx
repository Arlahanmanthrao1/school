import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, GraduationCap, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AdmissionPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative bg-card rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center border border-border"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors text-muted-foreground"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-accent" />
            </div>

            <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
              Admissions Open!
            </h2>
            <p className="text-muted-foreground text-sm mb-1">
              2026–27 Academic Year
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Enroll now to secure your child's future at Global Techno School.
            </p>

            <div className="flex items-center justify-center gap-2 text-foreground font-medium mb-6">
              <Phone className="w-4 h-4 text-accent" />
              <span> +91 94936 82828</span>
            </div>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopup;

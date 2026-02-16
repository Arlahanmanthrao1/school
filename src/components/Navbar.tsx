import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import schoolLogo from "@/assets/school-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 group">
          <img src={schoolLogo} alt="Greenwood Academy logo" className="w-11 h-11 rounded-full object-cover" />
          <div>
            <span className={`font-serif font-bold text-lg leading-tight block transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              Global Techno 
            </span>
            <span className={`text-xs font-medium tracking-wider uppercase transition-colors ${scrolled ? 'text-accent' : 'text-secondary'}`}>
              School
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? scrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/20 text-primary-foreground"
                    : scrolled ? "text-foreground hover:bg-muted" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="ml-2 px-5 py-2 rounded-md bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Enroll Now
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-md transition-colors ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="block mt-2 px-4 py-3 rounded-md bg-accent text-accent-foreground font-semibold text-sm text-center"
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-serif font-bold text-lg block">Global Techno</span>
                <span className="text-xs tracking-wider uppercase text-primary-foreground/70">School</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Nurturing excellence and inspiring futures since 1985. Building tomorrow's leaders today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/academics", label: "Academics" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-primary-foreground/70 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span> 12-2-834/A, Asif Nagar Rd, Sri Ram Nagar Colony, MIGH Colony, Murad Nagar, Hyderabad, Telangana 500006</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>94936 82828</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>info@globaltechnoschool.edu</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Global Techno School. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

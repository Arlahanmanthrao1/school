import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2 } from "lucide-react";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type ContactForm = z.infer<typeof contactSchema>;

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setSending(true);
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    } catch {
      toast({ title: "Failed to send", description: "Please try again or contact us directly.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const inputClass = (field: keyof ContactForm) =>
    `w-full px-4 py-3 rounded-lg border ${
      errors[field] ? "border-destructive" : "border-border"
    } bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-colors`;

  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16" aria-label="Contact hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-lg text-primary-foreground/80">We'd love to hear from you. Reach out with questions, feedback, or to schedule a visit.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 lg:py-24" aria-label="Contact information and form">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Info + Map */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                {[
                  { icon: MapPin, label: "Address", value: "12-2-834/A, Asif Nagar Rd, Sri Ram Nagar Colony, MIGH Colony, Murad Nagar, Hyderabad, Telangana 500006" },
                  { icon: Phone, label: "Phone", value: "+91 94936 82828" },
                  { icon: Mail, label: "Email", value: "info@globaltechnoschool.edu" },
                  { icon: Clock, label: "Office Hours", value: "Mon-Fri: 8:00 AM - 4:00 PM" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{label}</p>
                      <p className="text-sm text-muted-foreground">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border aspect-video">
                <iframe
                  title="Global Techno School location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.00550732845!2d78.44230977493483!3d17.3929609834952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9711278cb3df%3A0xdbac06cd5b671268!2sGlobal%20Techno%20School!5e1!3m2!1sen!2sin!4v1771227103801!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send a Message</h2>
              <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Full Name *</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className={inputClass("name")} placeholder="Your full name" />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email Address *</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} className={inputClass("email")} placeholder="you@example.com" />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">Subject *</label>
                  <input id="subject" name="subject" value={form.subject} onChange={handleChange} className={inputClass("subject")} placeholder="What is this about?" />
                  {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} className={inputClass("message")} placeholder="Your message..." />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

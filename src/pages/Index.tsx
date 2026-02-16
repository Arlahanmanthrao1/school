import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BookOpen, Users, Trophy, GraduationCap, Star, Clock, Megaphone, ArrowRight } from "lucide-react";

const heroImg =
  "https://res.cloudinary.com/dl8hswxt2/image/upload/v1771230706/hero-school_orbhm6.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const features = [
  { icon: BookOpen, title: "Academic Excellence", desc: "Rigorous curriculum with personalized learning paths for every student." },
  { icon: Users, title: "Expert Faculty", desc: "Dedicated teachers with advanced degrees and years of experience." },
  { icon: Trophy, title: "Sports & Activities", desc: "State-of-the-art facilities for athletics, arts, and extracurriculars." },
  { icon: GraduationCap, title: "College Prep", desc: "95% of our graduates are accepted into their first-choice universities." },
];

const news = [
  { date: "Feb 10, 2026", title: "Spring Admissions Now Open", desc: "Applications for the 2026-27 academic year are now being accepted." },
  { date: "Jan 28, 2026", title: "Science Fair Winners Announced", desc: "Congratulations to our students who swept the regional science fair." },
  { date: "Jan 15, 2026", title: "New STEM Lab Opening", desc: "Our brand new robotics and engineering lab opens next month." },
];

const Index = () => {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center" aria-label="Hero">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Greenwood Academy campus with students" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>
        <div className="relative container mx-auto px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-6 border border-accent/30">
              Admissions Open 2026-27
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6">
              Nurturing Excellence,{" "}
              <span className="text-gradient-gold">Inspiring Futures</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
              At Global Techno School, we cultivate curious minds and compassionate hearts, 
              preparing students for a lifetime of learning and leadership.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-accent" aria-label="Statistics">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { num: "1,200+", label: "Students" },
              { num: "98%", label: "Pass Rate" },
              { num: "50+", label: "Faculty" },
              { num: "40+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-accent-foreground">{stat.num}</div>
                <div className="text-sm text-accent-foreground/70 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About brief */}
      <section className="py-16 lg:py-24" aria-label="About">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <Star className="w-8 h-8 text-accent mx-auto mb-4" />
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                About Global Techno School
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Founded in 1985, Global Techno School has been a beacon of educational excellence for over four decades.
                Our commitment to holistic development — academic, social, and emotional — ensures that every child
                thrives and reaches their full potential. We blend traditional values with innovative teaching
                methodologies to create an inspiring learning environment.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:underline"
              >
                Read Our Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 section-alt" aria-label="Key features">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">Why Global Techno School?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">What sets us apart in shaping the leaders of tomorrow.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-16 lg:py-24" aria-label="News and announcements">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Megaphone className="w-8 h-8 text-accent mx-auto mb-3" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {news.map((item, i) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="w-3 h-3" />
                  <time>{item.date}</time>
                </div>
                <h3 className="font-serif font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 hero-gradient" aria-label="Call to action">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8">
              Take the first step towards an exceptional education. Schedule a campus tour or apply online today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                Enroll Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                Schedule a Tour
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;

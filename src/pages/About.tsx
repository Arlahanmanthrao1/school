import { motion } from "framer-motion";
import { Target, Eye, BookOpen, Users } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const staff = [
  { name: "Dr. Sarah Mitchell", role: "Principal", desc: "Ed.D. in Educational Leadership, 25 years in education." },
  { name: "Mr. James Carter", role: "Vice Principal", desc: "M.Ed. in Curriculum Development, passionate about student success." },
  { name: "Ms. Priya Sharma", role: "Head of Sciences", desc: "Ph.D. in Physics, award-winning science educator." },
  { name: "Mr. David Okonkwo", role: "Head of Humanities", desc: "M.A. in Literature, published author and mentor." },
  { name: "Ms. Elena Rodriguez", role: "Head of Arts", desc: "MFA in Fine Arts, exhibited in galleries worldwide." },
  { name: "Mr. Robert Kim", role: "Athletic Director", desc: "Former Olympic coach with 20 years of sports leadership." },
];

const About = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16" aria-label="About hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">About Us</h1>
            <p className="text-lg text-primary-foreground/80">
              Discover the story, mission, and people behind Global Techno School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 lg:py-24" aria-label="School history">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <BookOpen className="w-8 h-8 text-accent mb-4" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our History</h2>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Global Techno School was founded in 1985 by a group of visionary educators who believed in creating
                a school that nurtures the whole child. Starting with just 50 students and 5 teachers in a small 
                community building, the school has grown into a premier institution serving over 1,200 students.
              </p>
              <p>
                Over four decades, we have built a legacy of academic excellence, graduating students who have gone 
                on to attend top universities worldwide and become leaders in their fields. Our campus has expanded 
                to include modern science labs, a performing arts center, athletic facilities, and a state-of-the-art library.
              </p>
              <p>
                Today, Global Techno School stands as a testament to the power of dedicated education, continuing to 
                evolve and innovate while staying true to its founding principles of excellence, integrity, and compassion.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 section-alt" aria-label="Vision and mission">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <Eye className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a globally recognized institution that develops compassionate, innovative, and
                responsible citizens who make a positive impact on society. We envision a world where
                every child has the opportunity to discover their potential and pursue their passions.
              </p>
            </motion.div>
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="bg-card rounded-xl p-8 border border-border"
            >
              <Target className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide an inclusive, challenging, and supportive educational environment that fosters
                intellectual curiosity, creative thinking, and moral character. We are committed to
                developing the academic, social, and emotional potential of every student.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-16 lg:py-24" aria-label="Principal's message">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Principal's Message</h2>
            <div className="bg-card rounded-xl p-8 border border-border">
              <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-6">
                "At Global Techno School, we believe that education is not just about acquiring knowledge — it's about
                igniting a lifelong passion for learning. Our dedicated team works tirelessly to create an environment
                where every student feels valued, challenged, and inspired to reach their highest potential. 
                Together, we are building a community of learners who will shape a brighter future."
              </blockquote>
              <div className="mt-6">
                <p className="font-serif font-semibold text-foreground">Dr. Sarah Mitchell</p>
                <p className="text-sm text-muted-foreground">Principal, Global Techno School</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-16 lg:py-24 section-alt" aria-label="Staff directory">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Users className="w-8 h-8 text-accent mx-auto mb-3" />
            <h2 className="text-3xl font-serif font-bold text-foreground mb-3">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Meet the dedicated professionals guiding our school.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {staff.map((person, i) => (
              <motion.div
                key={person.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-serif font-bold text-accent">
                    {person.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-serif font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-accent font-medium mb-2">{person.role}</p>
                <p className="text-sm text-muted-foreground">{person.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;

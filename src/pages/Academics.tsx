import { motion } from "framer-motion";
import { BookOpen, Beaker, Globe, Calculator, Palette, Music, Code, Dumbbell } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const subjects = [
  { icon: Calculator, name: "Mathematics", grades: "K-12" },
  { icon: Beaker, name: "Sciences", grades: "K-12" },
  { icon: BookOpen, name: "English & Literature", grades: "K-12" },
  { icon: Globe, name: "Social Studies", grades: "K-12" },
  { icon: Code, name: "Computer Science", grades: "6-12" },
  { icon: Palette, name: "Visual Arts", grades: "K-12" },
  { icon: Music, name: "Music & Performing Arts", grades: "K-12" },
  { icon: Globe, name: "Foreign Languages", grades: "6-12" },
];

const levels = [
  { name: "Elementary (K-5)", desc: "Building strong foundations through inquiry-based learning, phonics, basic mathematics, and exploratory science." },
  { name: "Middle School (6-8)", desc: "Developing critical thinking with advanced subjects, electives, and project-based learning opportunities." },
  { name: "High School (9-12)", desc: "College-preparatory curriculum with AP courses, honors programs, and career exploration pathways." },
];

const activities = [
  { icon: Dumbbell, name: "Athletics", items: ["Basketball", "Soccer", "Track & Field", "Swimming", "Tennis"] },
  { icon: Palette, name: "Creative Arts", items: ["Drama Club", "Art Studio", "Photography", "Creative Writing", "Film Making"] },
  { icon: Code, name: "STEM Clubs", items: ["Robotics", "Science Olympiad", "Math League", "Coding Club", "Engineering Design"] },
  { icon: Globe, name: "Community", items: ["Student Council", "Debate Team", "Model UN", "Volunteer Corps", "Environmental Club"] },
];

const Academics = () => {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16" aria-label="Academics hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">Academics</h1>
            <p className="text-lg text-primary-foreground/80">
              A comprehensive curriculum designed to inspire, challenge, and prepare students for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum levels */}
      <section className="py-16 lg:py-24" aria-label="Curriculum overview">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">Curriculum Overview</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Our programs cater to every stage of a student's educational journey.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {levels.map((level, i) => (
              <motion.div
                key={level.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-shadow"
              >
                <h3 className="font-serif font-semibold text-lg text-foreground mb-3">{level.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{level.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-16 lg:py-24 section-alt" aria-label="Subjects offered">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">Subjects Offered</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {subjects.map((subj, i) => (
              <motion.div
                key={subj.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-5 border border-border text-center hover:shadow-md transition-shadow"
              >
                <subj.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-sm text-foreground">{subj.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">Grades {subj.grades}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurriculars */}
      <section className="py-16 lg:py-24" aria-label="Extracurricular activities">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-3">Extracurricular Activities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Beyond the classroom — opportunities to explore passions and build skills.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {activities.map((act, i) => (
              <motion.div
                key={act.name}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={i}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <act.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-serif font-semibold text-foreground mb-3">{act.name}</h3>
                <ul className="space-y-1.5">
                  {act.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Academics;

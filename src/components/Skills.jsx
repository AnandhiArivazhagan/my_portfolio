import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/Skills.css";

const categories = [
  {
    icon: "🖥️",
    title: "Frontend",
    color: "#4E56C0",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI Development"],
  },
  {
    icon: "⚙️",
    title: "Backend",
    color: "#9B5DE0",
    skills: ["Java", "PHP", "Python"],
  },
  {
    icon: "🗄️",
    title: "Database",
    color: "#D78FEE",
    skills: ["MongoDB"],
  },
  {
    icon: "🛠️",
    title: "Tools & Others",
    color: "#FDCFFA",
    skills: ["VS Code", "MS Office", "Git", "Figma"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-inner">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Skill Set</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Tools and technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skills-category"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="skills-cat-header">
                <div className="skills-cat-icon">{cat.icon}</div>
                <div className="skills-cat-title">{cat.title}</div>
              </div>
              <div className="skills-tags">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.12 + si * 0.06 + 0.2 }}
                  >
                    <span
                      className="skill-tag-dot"
                      style={{ background: cat.color }}
                    />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

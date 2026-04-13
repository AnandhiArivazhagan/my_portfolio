import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "../styles/About.css";

const highlights = [
  {
    icon: "🎓",
    label: "Education",
    text: "IT Undergraduate with a strong foundation in software development and web technologies.",
  },
  {
    icon: "💻",
    label: "Frontend Focus",
    text: "Skilled in HTML, CSS & JavaScript — building responsive, pixel-perfect interfaces.",
  },
  {
    icon: "🎨",
    label: "UI/UX Passion",
    text: "Driven by a love for design systems, usability, and creating delightful user experiences.",
  },
  {
    icon: "🚀",
    label: "Always Growing",
    text: "Actively building real-world projects and exploring modern frameworks and tools.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        {/* Left */}
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">
            Crafting Interfaces<br />
            {/* <span className="gradient-text">People Love</span> */}
          </h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            I'm a motivated IT undergraduate and frontend developer with a deep passion
            for building user-friendly web applications. I blend technical skill with
            design sensibility to create experiences that are both beautiful and functional.
          </p>

          <div className="about-highlights">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="about-highlight-item"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                <div className="about-highlight-icon">{h.icon}</div>
                <div>
                  <div className="about-highlight-label">{h.label}</div>
                  <div className="about-highlight-text">{h.text}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="about-card-main glass">
<div className="about-avatar">
  <img src="/anandhiprof.png" alt="AA" />
</div>            <div className="about-card-name">Anandhi Arivazhagan</div>
            <div className="about-card-role">Frontend Developer · UI/UX Enthusiast</div>
            <div className="about-stats">
              {[
                { num: "8+", label: "Projects" },
                { num: "3+", label: "Languages" },
                { num: "∞", label: "Curiosity" },
              ].map((s) => (
                <div key={s.label} className="about-stat">
                  <div className="about-stat-num">{s.num}</div>
                  <div className="about-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="about-edu-card glass"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="about-edu-icon">🎓</div>
            <div>
              <div className="about-edu-title">B.Tech — Information Technology</div>
              <div className="about-edu-sub">Undergraduate · Currently Pursuing</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";

const ROLES = [
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Creative Coder",
  "Problem Solver",
];

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const PARTICLE_COUNT = 18;

export default function Home() {
  const typed = useTypewriter(ROLES);
  const particles = useRef(
    Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${6 + Math.random() * 8}s`,
      size: `${1 + Math.random() * 3}px`,
    }))
  ).current;

  return (
    <section className="home" id="home">
      {/* Orbs */}
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />
      {/* Grid */}
      <div className="home-grid" />

      {/* Particles */}
      <div className="home-particles">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              bottom: 0,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>

      <div className="home-content">
        {/* Badge */}
        <motion.div
          className="home-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="home-badge-dot" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          className="home-name"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="line-1">ANANDHI</span>
          <span className="line-2">ARIVAZHAGAN</span>
        </motion.h1>

        {/* Role typewriter */}
        <motion.p
          className="home-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {typed}
          <span className="typed-cursor" />
        </motion.p>

        {/* Description */}
        <motion.p
          className="home-desc"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.7 }}
        >
          Passionate IT undergraduate crafting beautiful, user-centric web experiences.
          Where elegant design meets clean code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="home-actions"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Work ↓
          </a>
          <a
            className="btn btn-ghost"
            href="mailto:anandhiarivazhagan30@gmail.com"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="home-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span>Scroll</span>
        <div className="home-scroll-line" />
      </motion.div>
    </section>
  );
}

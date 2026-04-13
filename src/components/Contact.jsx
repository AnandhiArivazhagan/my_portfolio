import { useRef } from "react";
import {motion, useInView } from "framer-motion";
import "../styles/Contact.css";

const socials = [
  { icon: "💼", label: "LinkedIn", href: "https://www.linkedin.com/in/anandhi-arivazhagan/" },
  { icon: "🐙", label: "GitHub", href: "https://github.com/AnandhiArivazhagan" },
  { icon: "📄", label: "Resume", href: "/resumee.pdf"
 },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Open to internship opportunities, collaborations, and interesting projects.
            Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          className="contact-card glass"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          {/* Left: Contact info */}
          <div>
            <div className="contact-side-title">Say Hello 👋</div>
            <div className="contact-side-sub">
              I'm always excited to connect with fellow creators and recruiters.
              Reach out via email or phone — I'll respond promptly.
            </div>

            <div className="contact-items">
              <a
                className="contact-item"
                href="mailto:anandhiarivazhagan30@gmail.com"
              >
                <span className="contact-item-icon">✉️</span>
                <div>
                  <div className="contact-item-label">Email</div>
                  <div className="contact-item-value">anandhiarivazhagan30@gmail.com</div>
                </div>
              </a>

              {/* <a className="contact-item" href="tel:+919952397639">
                <span className="contact-item-icon">📱</span>
                <div>
                  <div className="contact-item-label">Phone</div>
                  <div className="contact-item-value">+91 9952397639</div>
                </div>
              </a> */}

              <div className="contact-item" style={{ cursor: "default" }}>
                <span className="contact-item-icon">📍</span>
                <div>
                  <div className="contact-item-label">Location</div>
                  <div className="contact-item-value">Thiruvarur, Tamil Nadu, India</div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-divider" />

          {/* Right: Socials */}
          <div>
            <div className="contact-side-title">Find Me Online</div>
            <div className="contact-side-sub">
              Follow my journey, browse my code, or check out my professional profile.
            </div>
            <div className="contact-social-grid">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  className="contact-social-btn"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  // download={s.download ? "Anandhi_Resume.pdf" : undefined}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.07 }}
                  whileHover={{ y: -4 }}
                >
                  <span className="contact-social-icon">{s.icon}</span>
                  {s.label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.footer
          className="contact-footer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          Designed & Built with <span>♥</span> by Anandhi Arivazhagan · {new Date().getFullYear()}
        </motion.footer>
      </div>
    </section>
  );
}

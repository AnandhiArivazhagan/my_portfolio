import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects.js";
import "../styles/Projects.css";

function Modal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="modal-header">
              <div className="modal-title-group">
                <div className="modal-emoji">{project.emoji}</div>
                <div>
                  <div className="modal-title">{project.title}</div>
                  <div className="modal-tag">{project.tag}</div>
                </div>
              </div>
              <button className="modal-close" onClick={onClose}>✕</button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <p className="modal-desc">{project.description}</p>

              {/* Screenshot placeholder */}
              {project.screenshotOnly && (
                <div className="modal-screenshot">
                  <div className="modal-screenshot-icon">🖼️</div>
                  <span>Screenshot available — project showcased visually</span>
                </div>
              )}

              {/* Tech stack */}
              <div className="modal-tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="modal-actions">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    🔗 Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.ongoing && (
                  <span className="btn btn-ghost" style={{ cursor: "default" }}>
                    🔨 In Progress
                  </span>
                )}
                {project.screenshotOnly && !project.liveLink && !project.githubLink && (
                  <span className="btn btn-ghost" style={{ cursor: "default" }}>
                    📸 Screenshot Only
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [selected, setSelected] = useState(null);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-inner">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Portfolio</p>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects I've crafted — click any card to explore details.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelected(p)}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="project-card-top">
                <span className="project-emoji">{p.emoji}</span>
                <span className={`project-badge ${p.ongoing ? "ongoing" : ""}`}>
                  {p.ongoing ? "🟣 " : ""}{p.tag}
                </span>
              </div>

              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.description}</div>

              <div className="project-tech">
                {p.tech.slice(0, 3).map((t) => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
              </div>

              <div className="project-cta">
                View Details <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <Modal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

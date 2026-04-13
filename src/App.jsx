import { useEffect, useRef, useState } from "react";
import "./styles/global.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    let ringX = 0, ringY = 0;
    let dotX = 0, dotY = 0;
    let raf;

    const moveCursor = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const loop = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      if (dotRef.current) {
        dotRef.current.style.left = dotX + "px";
        dotRef.current.style.top = dotY + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = ringX + "px";
        ringRef.current.style.top = ringY + "px";
      }
      raf = requestAnimationFrame(loop);
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", moveCursor);
    const interactives = document.querySelectorAll("a, button, [data-hover]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className={`cursor-ring ${hovering ? "hover" : ""}`} ref={ringRef} />
    </>
  );
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

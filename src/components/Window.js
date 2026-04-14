import { motion } from "framer-motion";
import { useState, useRef } from "react";

import Terminal from "./Terminal";
import AIChat from "./AIChat";

export default function Window({ type, close }) {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - 400,
    y: window.innerHeight / 2 - 250,
  });

  const [dragging, setDragging] = useState(false);

  const offset = useRef({ x: 0, y: 0 });

  // 🖱 Drag Logic
  function startDrag(e) {
    setDragging(true);

    offset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  }

  function onDrag(e) {
    if (!dragging) return;

    setPosition({
      x: e.clientX - offset.current.x,
      y: e.clientY - offset.current.y,
    });
  }

  function stopDrag() {
    setDragging(false);
  }

  // 📄 Window Content
  const getContent = () => {
    switch (type) {
      case "about":
        return (
          <>
            <h1>👨‍💻 Vijay R Gali</h1>

            <p>🚀 Full Stack Developer | DevOps Learner | AI Enthusiast</p>

            <p>
              🎓 BE CSE Student (CGPA: 8.88)
              <br />
              💡 Passionate about scalable apps & AI systems
            </p>

            <p>
              🧠 Strong in DSA, OS, OOPS
              <br />
              🏆 500+ CodeChef Problems
            </p>
          </>
        );

      case "projects":
        return (
          <>
            <h1>🚀 Projects</h1>

            <div style={styles.project}>
              <h3>SkillBridge</h3>
              <p>Service booking platform with real-time chat</p>
            </div>

            <div style={styles.project}>
              <h3>AgroConnect</h3>
              <p>AI agriculture ecosystem</p>
            </div>

            <div style={styles.project}>
              <h3>EduPath AI</h3>
              <p>AI career recommendation system</p>
            </div>
          </>
        );

      case "skills":
        return (
          <>
            <h1>🧠 Skills</h1>

            <div style={styles.tags}>
              {[
                "C",
                "Java",
                "React",
                "Node.js",
                "SQL",
                "JavaScript",
                "HTML",
                "CSS",
              ].map((s, i) => (
                <span key={i} style={styles.tag}>
                  ⚡ {s}
                </span>
              ))}
            </div>
          </>
        );

      case "achievements":
        return (
          <>
            <h1>🏆 Achievements</h1>

            <ul>
              <li>🚀 IEEE Internship</li>
              <li>📄 Research Publication</li>
              <li>💻 500+ CodeChef Problems</li>
            </ul>
          </>
        );

      case "contact":
        return (
          <>
            <h1>🌐 Contact</h1>

            <button
              style={styles.btn}
              onClick={() => window.open("https://github.com/vijayrgali26")}
            >
              GitHub
            </button>

            <button
              style={styles.btn}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/vijay-r-gali-2b1a302ab/",
                )
              }
            >
              LinkedIn
            </button>
          </>
        );

      case "terminal":
        return <Terminal />;

      case "ai":
        return <AIChat />;

      default:
        return <h1>Coming soon...</h1>;
    }
  };

  return (
    <>
      {/* 🌫 Background Blur */}
      <div style={styles.blur}></div>

      {/* 🪟 Window */}
      <motion.div
        initial={{
          scale: 0.6,
          opacity: 0,
          y: 100,
        }}
        animate={{
          scale: 1,
          opacity: 1,
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        style={styles.window}
        onMouseMove={onDrag}
        onMouseUp={stopDrag}
      >
        {/* 🪟 Window Header */}
        <div style={styles.header} onMouseDown={startDrag}>
          {/* Window Buttons */}
          <div style={styles.buttons}>
            <span style={styles.closeBtn} onClick={close}></span>

            <span style={styles.minBtn}></span>

            <span style={styles.maxBtn}></span>
          </div>

          <span style={styles.title}>{type.toUpperCase()}</span>
        </div>

        {/* 📄 Window Content */}
        <div style={styles.content}>{getContent()}</div>
      </motion.div>
    </>
  );
}

// 🎨 STYLES

const styles = {
  blur: {
    position: "fixed",
    width: "100%",
    height: "100%",
    backdropFilter: "blur(6px)",
    background: "rgba(0,0,0,0.3)",
    zIndex: 998,
  },

  window: {
    position: "fixed",
    width: "800px",
    height: "520px",
    background: "rgba(0,0,0,0.75)",
    borderRadius: "14px",
    backdropFilter: "blur(18px)",
    boxShadow: "0 0 40px rgba(0,255,200,0.7)",
    overflow: "hidden",
    zIndex: 999,
  },

  header: {
    height: "40px",
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    cursor: "grab",
  },

  buttons: {
    display: "flex",
    gap: "8px",
    marginRight: "12px",
  },

  closeBtn: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#ff5f56",
    cursor: "pointer",
  },

  minBtn: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#ffbd2e",
  },

  maxBtn: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#27c93f",
  },

  title: {
    color: "#ccc",
    fontSize: "14px",
  },

  content: {
    padding: "25px",
    color: "white",
    overflowY: "auto",
    height: "calc(100% - 40px)",
  },

  project: {
    margin: "20px 0",
    padding: "15px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
  },

  tags: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  tag: {
    background: "rgba(0,255,200,0.2)",
    padding: "8px 15px",
    borderRadius: "20px",
  },

  btn: {
    margin: "10px",
    padding: "10px 20px",
    background: "#00ffcc",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

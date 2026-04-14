import { useEffect, useState } from "react";

export default function Boot({ onFinish }) {
  const [showLogo, setShowLogo] = useState(true);
  const [showText, setShowText] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [progress, setProgress] = useState(0);

  const lines = [
    "Initializing Vijay OS...",
    "Loading Core Modules...",
    "Starting AI Engine...",
    "Launching Portfolio System...",
    "Welcome to Vijay R Gali Portfolio 🚀",
  ];

  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  // 🔊 Startup Sound
  useEffect(() => {
    const audio = new Audio("/startup.mp3");
    audio.volume = 0.4;
    audio.play().catch(() => {});
  }, []);

  // 🎬 LOGO → TERMINAL
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(false);
      setShowText(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  // ⌨️ Typing Logic
  useEffect(() => {
    if (!showText) return;

    if (lineIndex < lines.length) {
      if (charIndex < lines[lineIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(
            (prev) => prev + lines[lineIndex][charIndex]
          );
          setCharIndex(charIndex + 1);
        }, 35);

        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + "\n");
          setLineIndex(lineIndex + 1);
          setCharIndex(0);

          setProgress((p) => Math.min(p + 20, 100));
        }, 350);

        return () => clearTimeout(timeout);
      }
    } else {
      setTimeout(onFinish, 1600);
    }
  }, [charIndex, lineIndex, showText]);

  return (
    <div style={styles.container}>
      {/* 🌌 GRID BACKGROUND */}
      <div style={styles.grid}></div>

      {/* ✨ FLOATING PARTICLES */}
      <div style={styles.particles}></div>

      {/* ⚡ LOGO */}
      {showLogo && (
        <div style={styles.logoContainer}>
          <div style={styles.logo}>⚡</div>
          <h1 style={styles.title}>VIJAY OS</h1>
          <p style={styles.subtitle}>
            Booting Intelligent Portfolio System
          </p>
        </div>
      )}

      {/* 💻 TERMINAL */}
      {showText && (
        <div style={styles.box}>
          {/* Terminal Header */}
          <div style={styles.terminalHeader}>
            <span style={styles.dotRed}></span>
            <span style={styles.dotYellow}></span>
            <span style={styles.dotGreen}></span>

            <span style={styles.terminalTitle}>
              vijay-os@system:~ boot
            </span>
          </div>

          {/* Text */}
          <pre style={styles.text}>
            {displayedText}
            <span style={styles.cursor}>|</span>
          </pre>

          {/* Progress */}
          <div style={styles.progressBar}>
            <div
              style={{
                ...styles.progressFill,
                width: `${progress}%`,
              }}
            ></div>
          </div>

          <p style={styles.percentText}>
            System Loading... {progress}%
          </p>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
  },

  /* 🌌 GRID BACKGROUND */

  grid: {
    position: "absolute",
    width: "200%",
    height: "200%",
    backgroundImage:
      "linear-gradient(rgba(0,255,200,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.1) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    animation: "moveGrid 20s linear infinite",
  },

  /* ✨ PARTICLES */

  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at 30% 30%, rgba(0,255,200,0.15), transparent 60%), radial-gradient(circle at 70% 70%, rgba(0,150,255,0.15), transparent 60%)",
    animation: "float 6s infinite alternate",
  },

  /* ⚡ LOGO */

  logoContainer: {
    textAlign: "center",
    zIndex: 2,
    animation: "fadeIn 1.5s ease",
  },

  logo: {
    fontSize: "100px",
    color: "#00ffcc",
    textShadow: "0 0 50px #00ffcc",
    animation: "pulse 2s infinite",
  },

  title: {
    color: "#00ffcc",
    fontSize: "36px",
    letterSpacing: "4px",
  },

  subtitle: {
    color: "#aaa",
    fontSize: "14px",
  },

  /* 💻 TERMINAL */

  box: {
    width: "75%",
    maxWidth: "850px",
    background: "rgba(0,0,0,0.75)",
    borderRadius: "12px",
    boxShadow: "0 0 50px rgba(0,255,200,0.8)",
    backdropFilter: "blur(12px)",
    zIndex: 2,
  },

  terminalHeader: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    background: "rgba(255,255,255,0.05)",
  },

  dotRed: {
    width: "10px",
    height: "10px",
    background: "#ff5f56",
    borderRadius: "50%",
    marginRight: "6px",
  },

  dotYellow: {
    width: "10px",
    height: "10px",
    background: "#ffbd2e",
    borderRadius: "50%",
    marginRight: "6px",
  },

  dotGreen: {
    width: "10px",
    height: "10px",
    background: "#27c93f",
    borderRadius: "50%",
    marginRight: "12px",
  },

  terminalTitle: {
    color: "#ccc",
    fontSize: "13px",
  },

  text: {
    color: "#00ffcc",
    fontFamily: "monospace",
    fontSize: "17px",
    padding: "20px",
    whiteSpace: "pre-wrap",
    minHeight: "150px",
  },

  cursor: {
    animation: "blink 1s infinite",
  },

  progressBar: {
    height: "8px",
    margin: "0 20px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    background: "#00ffcc",
    boxShadow: "0 0 10px #00ffcc",
    transition: "width 0.4s ease",
  },

  percentText: {
    textAlign: "right",
    padding: "10px 20px 15px",
    fontSize: "13px",
    color: "#aaa",
  },
};
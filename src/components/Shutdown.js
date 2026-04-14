import { useEffect } from "react";

export default function Shutdown() {
  useEffect(() => {
    const audio = new Audio("/shutdown.mp3");
    audio.volume = 0.4;

    const playAudio = async () => {
      try {
        await audio.play();
      } catch (err) {
        // autoplay blocked → ignore safely
      }
    };

    playAudio();

    const timer = setTimeout(() => {
      window.location.reload();
    }, 3000);

    return () => clearTimeout(timer);
  }, []); // ✅ FIXED: empty dependency safe here

  return (
    <div style={styles.container}>
      <div style={styles.glow}></div>
      <h1 style={styles.text}>Shutting Down Vijay OS...</h1>
      <div style={styles.spinner}></div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#00ffcc",
    overflow: "hidden",
    position: "relative",
  },

  glow: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle at center, rgba(0,255,200,0.15), transparent 60%)",
    animation: "pulse 3s infinite",
  },

  text: {
    fontSize: "28px",
    marginBottom: "25px",
    zIndex: 2,
  },

  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid rgba(0,255,200,0.2)",
    borderTop: "5px solid #00ffcc",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    zIndex: 2,
  },
};

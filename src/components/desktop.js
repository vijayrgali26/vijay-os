import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Desktop() {
  const [time, setTime] = useState(new Date());
  const navigate = useNavigate();

  // ⏰ CLOCK
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const icons = [
    { name: "About", type: "about", icon: "👨‍💻" },
    { name: "Projects", type: "projects", icon: "🚀" },
    { name: "Skills", type: "skills", icon: "🧠" },
    { name: "Achievements", type: "achievements", icon: "🏆" },
    { name: "Contact", type: "contact", icon: "🌐" },
    { name: "Academics", type: "academics", icon: "🎓" },
    { name: "AI", type: "ai", icon: "🤖" },
  ];

  return (
    <div style={styles.container}>
      {/* 🎥 VIDEO BACKGROUND */}
      <video autoPlay loop muted style={styles.video}>
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* 🖼 FALLBACK IMAGE */}
      <div style={styles.bgImage}></div>

      {/* 🌌 OVERLAY */}
      <div style={styles.overlay}></div>

      {/* ✨ FLOATING PARTICLES */}
      <div style={styles.particles}></div>

      {/* 💎 ICON GRID */}
      <div style={styles.desktop}>
        {icons.map((item, i) => (
          <div
            key={i}
            style={styles.icon}
            onClick={() => navigate(`/${item.type}`)}
          >
            <div style={styles.iconBox}>{item.icon}</div>
            <span style={styles.iconText}>{item.name}</span>
          </div>
        ))}
      </div>

      {/* 🕒 TASKBAR */}
      <div style={styles.taskbar}>
        <span style={styles.logo}>⚡ Vijay OS</span>

        <div style={styles.taskbarRight}>
          {/* 🔴 Shutdown Button */}
          <button
            style={styles.shutdownBtn}
            onClick={() => {
              const confirmShutdown = window.confirm("Shutdown Vijay OS?");
              if (confirmShutdown) {
                navigate("/shutdown");
              }
            }}
          >
            ⏻
          </button>

          <span style={styles.clock}>{time.toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    position: "relative",
    overflow: "hidden",
    fontFamily: "Segoe UI, sans-serif",
  },

  // 🎥 VIDEO
  video: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -3,
  },

  // 🖼 IMAGE BACKGROUND
  bgImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.6,
    zIndex: -4,
  },

  // 🌌 DARK OVERLAY
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.85))",
    zIndex: -2,
  },

  // ✨ PARTICLES EFFECT
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background:
      "radial-gradient(circle at 20% 30%, rgba(0,255,200,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(0,150,255,0.15), transparent 60%)",
    animation: "float 8s infinite alternate",
    zIndex: 0,
    pointerEvents: "none",
  },

  // 💎 ICON GRID
  desktop: {
    display: "grid",
    position: "relative",
    gridTemplateColumns: "repeat(auto-fit, minmax(130px,1fr))",
    gap: "70px",
    padding: "80px",
    zIndex: 2,
  },

  // 🧊 ICON
  icon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },

  iconBox: {
    width: "100px",
    height: "100px",
    borderRadius: "25px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(15px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "42px",
    boxShadow: "0 10px 40px rgba(0,255,200,0.6)",
    transition: "all 0.3s ease",
  },

  iconText: {
    color: "white",
    marginTop: "12px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    textShadow: "0 0 10px rgba(0,255,200,0.8)",
  },

  // 🕒 TASKBAR
  taskbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(12px)",
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 25px",
    zIndex: 3,
    borderTop: "1px solid rgba(255,255,255,0.1)",
  },

  logo: {
    color: "#00ffcc",
    fontWeight: "bold",
    fontSize: "16px",
  },

  clock: {
    color: "white",
    fontWeight: "500",
  },

  taskbarRight: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  shutdownBtn: {
    background: "rgba(255,0,0,0.2)",
    border: "none",
    color: "white",
    fontSize: "18px",
    padding: "6px 10px",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },

};

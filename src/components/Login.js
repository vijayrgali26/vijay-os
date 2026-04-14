import { useState } from "react";

export default function Login({ onLogin }) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);

    // Simulate authentication
    setTimeout(() => {
      onLogin();
    }, 1500);
  }

  return (
    <div style={styles.container}>
      {/* 🌌 Background */}
      <div style={styles.background}></div>

      {/* 👤 Login Card */}
      <div style={styles.card}>
        <div style={styles.avatar}>👨‍💻</div>

        <h2 style={styles.name}>Vijay R Gali</h2>

        <p style={styles.subtitle}>Full Stack Developer | DevOps Engineer</p>

        <button style={styles.button} onClick={handleLogin}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </div>
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
    position: "relative",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle at center, rgba(0,255,200,0.2), transparent 60%)",
    animation: "pulse 4s infinite",
  },

  card: {
    background: "rgba(0,0,0,0.7)",
    padding: "40px",
    borderRadius: "18px",
    textAlign: "center",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 40px rgba(0,255,200,0.8)",
    zIndex: 2,
  },

  avatar: {
    fontSize: "70px",
    marginBottom: "10px",
  },

  name: {
    color: "#00ffcc",
    fontSize: "24px",
  },

  subtitle: {
    color: "#aaa",
    fontSize: "14px",
    marginBottom: "25px",
  },

  button: {
    padding: "10px 30px",
    background: "#00ffcc",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

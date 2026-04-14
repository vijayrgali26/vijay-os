import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Boot from "./components/Boot";
import Login from "./components/Login";
import Desktop from "./components/desktop";
import AppPage from "./components/AppPage";
import Shutdown from "./components/Shutdown";

export default function App() {
  const [bootDone, setBootDone] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // 🔥 Boot First
  if (!bootDone) {
    return <Boot onFinish={() => setBootDone(true)} />;
  }

  // 🔐 Login Screen
  if (!loggedIn) {
    return <Login onLogin={() => setLoggedIn(true)} />;
  }

  // 🖥 Desktop Routing
  return (
    <Routes>
      <Route path="/" element={<Desktop />} />

      <Route path="/about" element={<AppPage type="about" />} />

      <Route path="/projects" element={<AppPage type="projects" />} />

      <Route path="/skills" element={<AppPage type="skills" />} />

      <Route path="/achievements" element={<AppPage type="achievements" />} />

      <Route path="/academics" element={<AppPage type="academics" />} />

      <Route path="/contact" element={<AppPage type="contact" />} />

      <Route path="/ai" element={<AppPage type="ai" />} />

      <Route path="/shutdown" element={<Shutdown />} />
    </Routes>
  );
}

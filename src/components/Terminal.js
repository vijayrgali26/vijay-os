import { useState } from "react";

export default function Terminal() {
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");

  const run = (cmd) => {
    let output = "";

    if (cmd === "github") window.open("https://github.com/vijayrgali26");
    else if (cmd === "resume") window.open("/resume.pdf");
    else output = "Unknown";

    setHistory([...history, "> " + cmd, output]);
  };

  return (
    <div style={{ background: "black", color: "lime" }}>
      {history.map((h, i) => (
        <div key={i}>{h}</div>
      ))}
      <input
        onKeyDown={(e) => e.key === "Enter" && (run(input), setInput(""))}
      />
    </div>
  );
}

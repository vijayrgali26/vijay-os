import { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  };

  const listen = () => {
    const rec = new (
      window.SpeechRecognition || window.webkitSpeechRecognition
    )();
    rec.start();
    rec.onresult = (e) => setInput(e.results[0][0].transcript);
  };

  const send = async () => {
    const newMsgs = [...messages, { role: "user", content: input }];
    setMessages(newMsgs);

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: newMsgs,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
      },
    );

    const reply = res.data.choices[0].message;
    setMessages([...newMsgs, reply]);
    speak(reply.content);
  };

  return (
    <div>
      {messages.map((m, i) => (
        <p key={i}>{m.content}</p>
      ))}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && send()}
      />
      <button onClick={send}>Send</button>
      <button onClick={listen}>🎤</button>
    </div>
  );
}

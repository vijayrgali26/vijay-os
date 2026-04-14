import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AppPage({ type }) {
  const navigate = useNavigate();

  // 🤖 AI STATE (MOVE HERE)

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I am Vijay AI. Ask me about projects, skills, academics, or contact info.",
    },
  ]);

  const [input, setInput] = useState("");
  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiReply = getAIResponse(input);

    setMessages([...messages, userMessage, aiReply]);

    setInput("");
  }

  function getAIResponse(question) {
    const q = question.toLowerCase();

    if (q.includes("project")) {
      return {
        sender: "ai",
        text: "🚀 Vijay has built projects like SkillBridge, AgroConnect, Smart NCO, MidFusion AI, Event Management System, and Spam Detection using WEKA.",
      };
    }

    if (q.includes("skill")) {
      return {
        sender: "ai",
        text: "🧠 Vijay's skills include React, Node.js, MongoDB, Java, Python, Machine Learning, MERN Stack, and JWT Authentication.",
      };
    }

    if (q.includes("academic") || q.includes("marks")) {
      return {
        sender: "ai",
        text: "🎓 Vijay is pursuing BE in Computer Science with CGPA 8.88 from ATME College of Engineering.",
      };
    }

    if (q.includes("contact") || q.includes("email")) {
      return {
        sender: "ai",
        text: "📧 You can contact Vijay via email: vijayrgaligali@gmail.com.",
      };
    }

    if (q.includes("career") || q.includes("goal")) {
      return {
        sender: "ai",
        text: "🎯 Vijay aims to become a Full Stack Developer and DevOps Engineer building scalable systems.",
      };
    }

    return {
      sender: "ai",
      text: "🤖 Try asking about projects, skills, academics, or contact info.",
    };
  }
  function renderContent() {
    switch (type) {
      // 👨‍💻 ABOUT
      case "about":
        return (
          <div style={styles.aboutContainer}>
            {/* HEADER */}
            <div style={styles.profileCard}>
              <div style={styles.avatar}>👨‍💻</div>

              <h1 style={styles.name}>VIJAY R GALI</h1>

              <p style={styles.title}>Full Stack Developer | DevOps Engineer</p>

              <p style={styles.college}>
                🎓 BE — ATME College of Engineering, Mysuru
                <br />
                📅 3rd Year | 📊 CGPA: <b>8.88</b>
              </p>
            </div>

            {/* SUMMARY */}
            <div style={styles.sectionBox}>
              <h2>🚀 Professional Summary</h2>

              <p>
                Passionate Full Stack Developer and DevOps learner with strong
                fundamentals in software engineering, system design, and
                scalable web development.
              </p>

              <p>
                Experienced in building modern web applications using MERN
                Stack, implementing secure authentication systems, and designing
                API-driven architectures.
              </p>

              <p>
                Highly motivated to learn cloud technologies and DevOps
                workflows to build production-ready applications.
              </p>
            </div>

            {/* SKILLS */}
            <div style={styles.sectionBox}>
              <h2>🧠 Technical Skills</h2>

              <div style={styles.tags}>
                {[
                  "C",
                  "Java",
                  "React",
                  "Node.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "MySQL",
                  "MongoDB",
                  "DSA",
                  "OS",
                  "OOP",
                  "DBMS",
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Postman",
                  "MongoDB Compass",
                  "MERN Stack",
                  "Machine Learning",
                  "Token Authentication",
                  "IntelliJ IDEA",
                ].map((skill, i) => (
                  <span key={i} style={styles.skillTag}>
                    ⚡ {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* STRENGTHS */}
            <div style={styles.sectionBox}>
              <h2>💡 Strengths</h2>

              <ul style={styles.list}>
                <li>Strong problem-solving skills</li>
                <li>Full Stack Development expertise</li>
                <li>API and Authentication design</li>
                <li>Clean and maintainable coding style</li>
                <li>Continuous learner in DevOps</li>
              </ul>
            </div>

            {/* CAREER GOAL */}
            <div style={styles.sectionBox}>
              <h2>🎯 Career Objective</h2>

              <p>
                To work in a dynamic software environment where I can utilize my
                Full Stack Development skills and DevOps knowledge to create
                scalable, high-performance applications.
              </p>
            </div>
          </div>
        );

      // 🚀 PROJECTS
      // 🚀 PROJECTS
      case "projects":
        return (
          <>
            <h1 style={styles.heading}>🚀 Featured Projects</h1>

            <div style={styles.projectGrid}>
              {/* 🔹 SkillBridge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>🔧 SkillBridge</h2>

                <p style={styles.projectDesc}>
                  A full-stack service booking platform that connects users with
                  skilled professionals. Includes authentication, real-time
                  communication, and secure booking workflows.
                </p>

                <div style={styles.techStack}>
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "Express",
                    "JWT Auth",
                    "Socket.io",
                  ].map((tech, i) => (
                    <span key={i} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={styles.featureList}>
                  <li>🔐 Token-based authentication</li>
                  <li>💬 Real-time chat system</li>
                  <li>📅 Booking & scheduling module</li>
                  <li>📊 Admin dashboard</li>
                </ul>
              </motion.div>

              {/* 🔹 AgroConnect */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>🌱 AgroConnect</h2>

                <p style={styles.projectDesc}>
                  AI-powered agriculture ecosystem designed to help farmers
                  analyze crop conditions and receive intelligent
                  recommendations.
                </p>

                <div style={styles.techStack}>
                  {[
                    "React",
                    "Node.js",
                    "MongoDB",
                    "AI/ML",
                    "Python",
                    "REST API",
                  ].map((tech, i) => (
                    <span key={i} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={styles.featureList}>
                  <li>🤖 AI crop recommendations</li>
                  <li>📊 Agriculture insights dashboard</li>
                  <li>🌾 Farmer-friendly interface</li>
                  <li>📡 Real-time data visualization</li>
                </ul>
              </motion.div>

              {/* 🧠 Smart NCO Semantic Search Portal */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>🧠 Smart NCO Semantic Search Portal</h2>

                <p style={styles.projectDesc}>
                  AI-powered occupation classification system developed during
                  Statathon Hackathon. Uses semantic search to match job titles
                  with official occupation categories using advanced NLP models.
                </p>

                <div style={styles.techStack}>
                  {[
                    "Python",
                    "BERT NLP",
                    "FAISS",
                    "Machine Learning",
                    "Semantic Search",
                    "Multilingual AI",
                  ].map((tech, i) => (
                    <span key={i} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={styles.featureList}>
                  <li>🌍 Multilingual occupation search</li>
                  <li>🧠 BERT-based semantic matching</li>
                  <li>📊 Top occupation predictions</li>
                  <li>🔐 OTP authentication system</li>
                  <li>📄 Resume parsing integration</li>
                </ul>
              </motion.div>

              {/* 🏥 MidFusion AI — Multimodal Disease Detection */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>🏥 MidFusion AI — Multimodal Disease Detection</h2>

                <p style={styles.projectDesc}>
                  Multimodal AI healthcare system designed to detect diseases
                  early by combining medical imaging, clinical records, and
                  wearable device data into a unified predictive model.
                </p>

                <div style={styles.techStack}>
                  {[
                    "Python",
                    "Deep Learning",
                    "CNN",
                    "RNN",
                    "Transformers",
                    "Healthcare AI",
                  ].map((tech, i) => (
                    <span key={i} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={styles.featureList}>
                  <li>🧠 Multimodal data fusion</li>
                  <li>📊 Predictive disease modeling</li>
                  <li>📡 Medical imaging analysis</li>
                  <li>⚡ Real-time risk scoring</li>
                  <li>📋 Clinical dashboard insights</li>
                </ul>
              </motion.div>

              {/* 🔹 Event Management System */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>🎉 Event Management System</h2>

                <p style={styles.projectDesc}>
                  A web-based platform designed to manage events, registrations,
                  scheduling, and attendee tracking efficiently.
                </p>

                <div style={styles.techStack}>
                  {["React", "Node.js", "MongoDB", "Express", "REST API"].map(
                    (tech, i) => (
                      <span key={i} style={styles.techTag}>
                        {tech}
                      </span>
                    ),
                  )}
                </div>

                <ul style={styles.featureList}>
                  <li>📅 Event creation & scheduling</li>
                  <li>👥 Attendee registration system</li>
                  <li>📊 Event analytics dashboard</li>
                  <li>🔐 Secure authentication</li>
                </ul>
              </motion.div>

              {/* 🔹 WEKA Spam Detection */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={styles.projectCard}
              >
                <h2>📧 Spam Email Detection (WEKA)</h2>

                <p style={styles.projectDesc}>
                  Machine Learning-based spam detection system developed using
                  WEKA to classify emails as spam or legitimate messages.
                </p>

                <div style={styles.techStack}>
                  {[
                    "WEKA",
                    "Machine Learning",
                    "Naive Bayes",
                    "Decision Tree",
                    "Data Preprocessing",
                  ].map((tech, i) => (
                    <span key={i} style={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                <ul style={styles.featureList}>
                  <li>📊 Dataset preprocessing</li>
                  <li>🧠 Model training & testing</li>
                  <li>📈 Accuracy comparison</li>
                  <li>📄 Performance evaluation</li>
                </ul>
              </motion.div>
            </div>
          </>
        );

      // 🧠 SKILLS
      // 🧠 SKILLS (UPGRADED UI ONLY)
      case "skills":
        return (
          <>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🧠 Skills & Technologies
            </motion.h1>

            <motion.div
              style={styles.skillsGlass}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {/* CATEGORY */}
              {[
                {
                  title: "💻 Programming Languages",
                  items: ["C", "Java", "JavaScript", "Python"],
                },
                {
                  title: "🌐 Web Development",
                  items: [
                    "React",
                    "Node.js",
                    "Express.js",
                    "HTML",
                    "CSS",
                    "REST API",
                    "JWT Auth",
                  ],
                },
                {
                  title: "🗄️ Databases",
                  items: ["MongoDB", "MySQL", "MongoDB Compass"],
                },
                {
                  title: "🧠 Core CS",
                  items: ["DSA", "Operating Systems", "OOPS", "DBMS"],
                },
                {
                  title: "🤖 AI / ML",
                  items: ["Machine Learning", "NLP", "BERT", "FAISS", "WEKA"],
                },
                {
                  title: "⚙️ Tools",
                  items: ["Git", "GitHub", "VS Code", "Postman", "MERN Stack"],
                },
              ].map((section, i) => (
                <div key={i} style={styles.skillBlock}>
                  <h3 style={styles.skillTitle}>{section.title}</h3>

                  <div style={styles.skillGrid}>
                    {section.items.map((skill, j) => (
                      <motion.div
                        key={j}
                        style={styles.skillChip}
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0 0 20px rgba(0,255,200,0.8)",
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        ⚡ {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </>
        );

      // 🏆 ACHIEVEMENTS
      case "achievements":
        return (
          <>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🏆 Achievements & Certifications
            </motion.h1>

            <div style={styles.projectGrid}>
              {/* 📄 Research Paper */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/research-paper.pdf",
                    "_blank",
                  )
                }
              >
                <h2>📄 Research Paper Publication</h2>

                <p>
                  Published research work in AI-based skill matching and
                  intelligent systems.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🚀 IEEE Internship */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL +
                      "/certificates/ieee-internship.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🚀 IEEE Internship</h2>

                <p>
                  Successfully completed IEEE Internship with practical
                  technical exposure.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🧠 IEEE Hackathon */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL +
                      "/certificates/ieee-hackathon.jpeg",
                    "_blank",
                  )
                }
              >
                <h2>🧠 IEEE Hackathon Volunteer</h2>

                <p>
                  As a volunteer for IEEE Hackathon, I contributed to organizing
                  and managing the event, ensuring smooth operations and a great
                  experience for participants.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🧪 Infosys */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/infosys-cert.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🧪 Infosys Certification</h2>

                <p>
                  Completed professional certification from Infosys learning
                  platform.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🧠 C++ */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/cpp-cert.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🧠 Programming in Modern C++</h2>

                <p>
                  Certified in modern C++ programming concepts and development
                  in NPTEL.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🏆 Tech Summit */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/tech-summit.jpeg",
                    "_blank",
                  )
                }
              >
                <h2>🏆 Tech Summit Participation</h2>

                <p>
                  Participated in technical summit showcasing innovative
                  technologies.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🏥 RIMS Hackathon */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/rims-hackathon.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏥 RIMS Hackathon — MidFusion AI</h2>

                <p>
                  Built MidFusion AI — a multimodal healthcare system for early
                  disease detection using deep learning models.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* 🌐 TechTies Meetup Participation */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL +
                      "/certificates/techties-meetup.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🌐 TechTies Meetup Participation</h2>

                <p>
                  Actively participated in TechTies — Bridging Minds, Building
                  Bonds meetup, demonstrating strong engagement in technical
                  community learning.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* ☕ Java Programming Certification — TUF */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/certificates/java-tuf-cert.pdf",
                    "_blank",
                  )
                }
              >
                <h2>☕ Java Programming Certification — TUF</h2>

                <p>
                  Successfully completed Java Programming course from Take U
                  Forward, strengthening core Java and problem-solving skills.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* ☕ codechef problem solved */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    "https://www.codechef.com/users/vijayrgali26",
                    "_blank",
                  )
                }
              >
                <h2>☕ CodeChef Problem Solving</h2>

                <p>
                  Achieved significant milestones on CodeChef with over 250
                  problems solved, demonstrating strong problem-solving skills
                  and competitive programming expertise.
                </p>
                <span style={styles.viewBtn}>📂 View Profile</span>
              </motion.div>

              {/* ☕ GFG Python */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL +
                      "/certificates/gfg-python-cert.pdf",
                    "_blank",
                  )
                }
              >
                <h2>☕ GFG Python</h2>

                <p>
                  Completed Python Programming course from GeeksforGeeks,
                  gaining proficiency in Python syntax, libraries, and
                  application development.
                </p>

                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>

              {/* ☕ GSSS Escape Room Challenge */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL +
                      "/certificates/gsss-escape-room.pdf",
                    "_blank",
                  )
                }
              >
                <h2>☕ GSSS Escape Room Challenge</h2>

                <p>
                  Successfully completed the GSSS Escape Room Challenge,
                  demonstrating strong problem-solving skills and teamwork in a
                  competitive environment.
                </p>
                <span style={styles.viewBtn}>📂 View Certificate</span>
              </motion.div>
            </div>
          </>
        );

      // 🌐 CONTACT
      case "contact":
        return (
          <>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              🌐 Contact Me
            </motion.h1>

            <motion.div
              style={styles.contactGrid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {/* 📧 Email */}
              <motion.div
                style={styles.contactCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() => {
                  navigator.clipboard
                    .writeText("vijayrgaligali@gmail.com")
                    .then(() => {
                      alert("Email copied to clipboard!");
                    })
                    .catch(() => {
                      alert("Failed to copy email.");
                    });
                }}
              >
                <h2>📧 Email</h2>

                <p>Click to copy email address</p>

                <span style={styles.viewBtn}>📋 Copy Email</span>
              </motion.div>

              {/* 🐙 GitHub */}
              <motion.div
                style={styles.contactCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open("https://github.com/vijayrgali26", "_blank")
                }
              >
                <h2>🐙 GitHub</h2>

                <p>Explore my code repositories and development work.</p>

                <span style={styles.viewBtn}>🔗 Open GitHub</span>
              </motion.div>

              {/* 💼 LinkedIn */}
              <motion.div
                style={styles.contactCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vijay-r-gali-2b1a302ab/",
                    "_blank",
                  )
                }
              >
                <h2>💼 LinkedIn</h2>

                <p>Connect professionally and view my profile.</p>

                <span style={styles.viewBtn}>🔗 Open LinkedIn</span>
              </motion.div>

              {/* 📄 Resume */}
              <motion.div
                style={styles.contactCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <h2>📄 Resume</h2>

                <p>View or download my latest resume.</p>

                <span style={styles.viewBtn}>📂 View Resume</span>
              </motion.div>
            </motion.div>
          </>
        );

      // 📚 ACADEMIC RECORDS
      case "academics":
        return (
          <>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              📚 Academic Records
            </motion.h1>

            <div style={styles.projectGrid}>
              {/* 🎓 10th Marks */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/10th-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🎓 10th Standard</h2>

                <p>
                  Secondary School marks card showcasing academic foundation.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 📘 PUC */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/puc-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>📘 PUC Marks Card</h2>

                <p>
                  Pre-University academic records demonstrating core subjects
                  performance.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🏫 1st Semester */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/1sem-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏫 1st Semester Marks</h2>

                <p>
                  Engineering semester academic performance details in I Sem.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🏫 2nd Semester */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/2sem-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏫 2nd Semester Marks</h2>

                <p>
                  Engineering semester academic performance details in II Sem.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🏫 3rd Semester */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/3sem-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏫 3rd Semester Marks</h2>

                <p>
                  Engineering semester academic performance details in III Sem.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🏫 4th Semester */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/4sem-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏫 4th Semester Marks</h2>

                <p>
                  Engineering semester academic performance details in IV Sem.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🏫 5th Semester */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/5sem-marks.pdf",
                    "_blank",
                  )
                }
              >
                <h2>🏫 5th Semester Marks</h2>

                <p>
                  Engineering semester academic performance details in V Sem.
                </p>

                <span style={styles.viewBtn}>📂 View Marks Card</span>
              </motion.div>

              {/* 🖊 Digital Signature */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/signature.JPEG",
                    "_blank",
                  )
                }
              >
                <h2>🖊 Digital Signature</h2>

                <p>Official digital signature for verification purposes.</p>

                <span style={styles.viewBtn}>📂 View Signature</span>
              </motion.div>

              {/* 🧑 Photo */}
              <motion.div
                style={styles.achievementCard}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(0,255,200,0.8)",
                }}
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/academics/photo.JPEG",
                    "_blank",
                  )
                }
              >
                <h2>🧑 Personal Photo</h2>

                <p>Official student profile photo.</p>

                <span style={styles.viewBtn}>📂 View Photo</span>
              </motion.div>
            </div>
          </>
        );

      // 🤖 AI SECTION
      // 🤖 AI SECTION — WORKING CHATBOT
      case "ai":
        return (
          <>
            <motion.h1
              style={styles.heading}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              🤖 Vijay AI Assistant
            </motion.h1>

            <div style={styles.aiContainer}>
              <div style={styles.chatBox}>
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={
                      msg.sender === "user"
                        ? styles.userMessage
                        : styles.aiMessage
                    }
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              <div style={styles.chatInputBox}>
                <input
                  type="text"
                  value={input}
                  placeholder="Ask Vijay AI..."
                  onChange={(e) => setInput(e.target.value)}
                  style={styles.chatInput}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSend();
                  }}
                />

                <button onClick={handleSend} style={styles.chatButton}>
                  Send
                </button>
              </div>
            </div>
          </>
        );
    }
  }
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={styles.container}
    >
      <button style={styles.close} onClick={() => navigate("/")}>
        ⬅ Back to Desktop
      </button>

      {renderContent()}
    </motion.div>
  );
}

// 🎨 STYLES
const styles = {
  container: {
    minHeight: "100vh",
    overflowY: "auto",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    color: "white",
    padding: "40px",
  },

  close: {
    marginBottom: "20px",
    padding: "8px 16px",
    background: "#ff4d4d",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  /* HEADINGS */

  heading: {
    fontSize: "42px",
    marginBottom: "40px",
    textAlign: "center",
    textShadow: "0 0 20px rgba(0,255,200,0.8)",
  },

  sub: {
    color: "#00ffcc",
    marginBottom: "20px",
  },

  /* ABOUT */

  aboutContainer: {
    maxWidth: "900px",
    margin: "auto",
    textAlign: "left",
  },

  profileCard: {
    textAlign: "center",
    marginBottom: "40px",
    padding: "30px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "15px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 30px rgba(0,255,200,0.4)",
  },

  avatar: {
    fontSize: "70px",
  },

  name: {
    fontSize: "36px",
    fontWeight: "bold",
  },

  title: {
    fontSize: "18px",
    color: "#00ffcc",
  },

  college: {
    marginTop: "10px",
  },

  sectionBox: {
    marginBottom: "30px",
    padding: "25px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "12px",
  },

  /* TAGS */

  tags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  skillTag: {
    background: "rgba(0,255,200,0.2)",
    padding: "8px 14px",
    borderRadius: "20px",
  },

  list: {
    paddingLeft: "20px",
    lineHeight: "1.8",
  },

  /* PROJECTS */

  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "30px",
    padding: "20px",
    position: "relative", // ✅ ADD
    zIndex: 1,
  },

  projectCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "25px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 25px rgba(0,255,200,0.4)",
    transition: "0.3s",
  },

  projectDesc: {
    marginTop: "10px",
    lineHeight: "1.6",
    color: "#ddd",
  },

  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "15px",
  },

  techTag: {
    background: "rgba(0,255,200,0.2)",
    padding: "6px 12px",
    borderRadius: "15px",
    fontSize: "13px",
  },

  featureList: {
    marginTop: "15px",
    lineHeight: "1.6",
    color: "#ccc",
  },

  /* GENERAL CARD */

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    backdropFilter: "blur(10px)",
  },

  /* ACHIEVEMENTS */

  achievementCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "25px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 20px rgba(0,255,200,0.3)",
    cursor: "pointer",
    transition: "0.3s",
    textAlign: "center",
    position: "relative", // ✅ ADD
    zIndex: 2,
  },

  viewBtn: {
    display: "inline-block",
    marginTop: "15px",
    padding: "8px 16px",
    background: "rgba(0,255,200,0.2)",
    borderRadius: "20px",
    fontSize: "14px",
  },

  /* CONTACT */

  contactGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
    padding: "20px",
  },

  contactCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "25px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 20px rgba(0,255,200,0.3)",
    cursor: "pointer",
    transition: "0.3s",
    textAlign: "center",
  },

  /* 🤖 AI SECTION */

  aiContainer: {
    maxWidth: "900px",
    margin: "auto",
    background: "rgba(255,255,255,0.08)",
    padding: "25px",
    borderRadius: "15px",
    backdropFilter: "blur(12px)",
    boxShadow: "0 0 25px rgba(0,255,200,0.4)",
  },

  chatBox: {
    minHeight: "300px",
    padding: "20px",
    borderRadius: "12px",
    background: "rgba(0,0,0,0.4)",
    marginBottom: "20px",
  },

  aiIntro: {
    color: "#ddd",
    marginBottom: "12px",
    lineHeight: "1.6",
  },

  aiList: {
    paddingLeft: "20px",
    marginBottom: "20px",
    lineHeight: "1.8",
  },

  chatInputBox: {
    display: "flex",
    gap: "10px",
  },

  chatInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
  },

  chatButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#00ffcc",
    cursor: "pointer",
  },

  /* 🤖 AI CHAT */

  aiContainer: {
    maxWidth: "800px",
    margin: "auto",
    background: "rgba(255,255,255,0.08)",
    padding: "20px",
    borderRadius: "15px",
    backdropFilter: "blur(12px)",
  },

  chatBox: {
    height: "400px",
    overflowY: "auto",
    padding: "15px",
    background: "rgba(0,0,0,0.4)",
    borderRadius: "12px",
    marginBottom: "15px",
  },

  userMessage: {
    background: "#00ffcc",
    color: "black",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    alignSelf: "flex-end",
    maxWidth: "70%",
  },

  aiMessage: {
    background: "rgba(255,255,255,0.15)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    maxWidth: "70%",
  },

  chatInputBox: {
    display: "flex",
    gap: "10px",
  },

  chatInput: {
    flex: 1,
    padding: "10px",
    borderRadius: "8px",
    border: "none",
  },

  chatButton: {
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#00ffcc",
    cursor: "pointer",
  },

  // 🧠 SKILLS UPGRADED STYLES
  skillsGlass: {
    maxWidth: "900px",
    margin: "auto",
    padding: "25px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "20px",
    backdropFilter: "blur(15px)",
    boxShadow: "0 0 30px rgba(0,255,200,0.3)",
  },

  skillBlock: {
    marginBottom: "25px",
  },

  skillTitle: {
    fontSize: "18px",
    marginBottom: "12px",
    color: "#00ffcc",
    textShadow: "0 0 10px rgba(0,255,200,0.5)",
  },

  skillGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },

  skillChip: {
    padding: "8px 14px",
    borderRadius: "20px",
    background: "rgba(0,255,200,0.15)",
    border: "1px solid rgba(0,255,200,0.3)",
    color: "white",
    fontSize: "14px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

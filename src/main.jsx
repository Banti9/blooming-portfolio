import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, Code2, Sparkles, Menu, X, Download, Flower2 } from "lucide-react";
import "./style.css";

const petals = ["🌸", "🌷", "🌼", "🌺", "✿", "❀", "💮"];
const skills = ["Java", "Python", "SQL", "Object-Oriented Programming", "Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Git & GitHub", "REST APIs"];
const projects = [
  {
    n: "01",
    title: "Employee Management System",
    type: "Java · OOP",
    desc: "A structured application demonstrating object-oriented programming and employee record management.",
    tags: ["Java", "OOP"],
    link: "https://github.com/Banti9/Employee_Management_Java",
  },
  {
    n: "02",
    title: "GitHub Profile Viewer",
    type: "Java · REST API",
    desc: "A Java application that fetches and displays GitHub profile information using an API and Gson.",
    tags: ["Java", "REST API", "Gson"],
    link: "https://github.com/Banti9/-GitHub-Profile-Viewer-/tree/master/Desktop/GitHubProfileViewer",
  },
  {
    n: "03",
    title: "Crop Disease Detection",
    type: "Python · Machine Learning",
    desc: "An academic project exploring image-based crop disease detection with computer vision tools.",
    tags: ["Python", "YOLO", "TensorFlow", "OpenCV"],
    link: "https://github.com/Banti9/Rice_And_Sugarcane_Leaf_Detection",
  },
];

function PetalRain({ burst = false }) {
  const count = burst ? 18 : 22;
  return <div className={burst ? "petal-layer burst" : "petal-layer"} aria-hidden="true">
    {Array.from({ length: count }, (_, i) => <span key={i} style={{
      left: `${(i * 37 + 7) % 100}%`,
      animationDelay: `${(i % 9) * (burst ? .035 : .65)}s`,
      animationDuration: `${burst ? 1.3 + (i % 5) * .16 : 8 + (i % 8) * 1.3}s`,
      fontSize: `${burst ? 15 + (i % 4) * 5 : 12 + (i % 5) * 5}px`
    }}>{petals[i % petals.length]}</span>)}
  </div>;
}

function App() {
  const [welcome, setWelcome] = useState(true);
  const [menu, setMenu] = useState(false);
  const [bloom, setBloom] = useState(0);
  const [burst, setBurst] = useState(false);
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const t = setTimeout(() => setWelcome(false), 3000);
    return () => clearTimeout(t);
  }, []);

  const bloomClick = (id) => {
    setBloom(id);
    setBurst(true);
    setTimeout(() => setBurst(false), 1500);
  };

  const nav = ["About", "Skills", "Projects", "Education", "Contact"];
  const go = (name) => {
    setMenu(false);
    bloomClick(Date.now());
    document.getElementById(name.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <PetalRain />
      <AnimatePresence>
        {welcome && (
          <motion.div
            className="welcome-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="welcome-flower"
              animate={{ rotate: 360, scale: [0.9, 1.08, 1] }}
              transition={{
                rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                scale: { duration: 1.5, repeat: Infinity },
              }}
            >
              ✿
            </motion.div>
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35 }}
            >
              A little world of creativity
            </motion.p>
            <motion.h1
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              Welcome to my little world
            </motion.h1>
            <span className="welcome-sub">
              Where ideas bloom into possibilities 🌷
            </span>
          </motion.div>
        )}
      </AnimatePresence>
      {burst && <PetalRain burst />}

      <header className="topbar">
        <a className="brand" href="#home" onClick={() => bloomClick(1)}>
          <span className="brand-mark">✿</span> banti
          <span className="brand-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
        <nav className={menu ? "nav-links open" : "nav-links"}>
          {nav.map((item) => (
            <button key={item} onClick={() => go(item)}>
              {item}
            </button>
          ))}
          <a
            className="nav-contact"
            href="mailto:kmbantichauhan2@gmail.com"
            onClick={() => bloomClick(2)}
          >
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> COMPUTER SCIENCE ENGINEER{" "}
              <span className="eyebrow-flower">✿</span>
            </div>
            <h1>
              Growing ideas
              <br />
              into <em>something</em>
              <br />
              <span className="gradient-text">beautiful.</span>
            </h1>
            <p className="hero-desc">
              Hello, I'm <strong>KM Banti Chauhan</strong> — an aspiring
              software engineer who loves turning thoughtful ideas into useful
              digital experiences.
            </p>
            <div className="hero-actions">
              <button className="primary-btn" onClick={() => go("Projects")}>
                Explore my work <ArrowUpRight size={17} />
              </button>
              <button className="text-btn" onClick={() => go("About")}>
                Get to know me <span>↗</span>
              </button>
            </div>
            <div className="hero-socials">
              <a
                href="https://github.com/Banti9"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/km-banti-chauhan"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <span className="social-line"></span>
              <span>Open to opportunities</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative flower illustration">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="flower-glow"></div>
            <div className="big-flower">✿</div>
            <div className="flower-small f-one">✿</div>
            <div className="flower-small f-two">❀</div>
            <div className="flower-small f-three">✽</div>
            <div className="art-note note-top">
              curiosity is in bloom <span>♡</span>
            </div>
            <div className="art-note note-bottom">
              <Sparkles size={14} /> learning · creating · growing
            </div>
            <div className="art-stem"></div>
          </div>
          <div className="scroll-cue">
            <span></span> SCROLL TO EXPLORE
          </div>
        </section>

        <section className="intro-strip">
          <span>Curious mind</span>
          <i>✿</i>
          <span>Thoughtful code</span>
          <i>✿</i>
          <span>Always growing</span>
          <i>✿</i>
          <span>Creative spirit</span>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-kicker">01 / A LITTLE ABOUT ME</div>
          <div className="about-grid">
            <div>
              <h2>
                Rooted in curiosity.
                <br />
                <em>Driven by possibility.</em>
              </h2>
            </div>
            <div className="about-text">
              <p>
                I'm a 2025 Computer Science and Engineering graduate from Dr.
                A.P.J. Abdul Kalam Technical University. I enjoy solving
                problems, learning new technologies and building practical
                projects.
              </p>
              <p>
                My current interests include Java development, Python, databases
                and the ways software can make everyday work simpler.
              </p>
              <div className="mini-sign">
                Keep growing <span>♡</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-kicker">02 / MY TOOLKIT</div>
            <div className="section-heading">
              <h2>
                Things I’m <em>growing with.</em>
              </h2>
              <p>A foundation I'm building on, one concept at a time.</p>
            </div>
            <div className="skill-grid">
              {skills.map((s, i) => (
                <motion.div
                  whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
                  className="skill-card"
                  key={s}
                  onClick={() => bloomClick(i)}
                >
                  <span className="skill-flower">
                    {["✿", "❀", "✽", "✾"][i % 4]}
                  </span>
                  <span>{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-kicker">03 / SELECTED WORK</div>
          <div className="section-heading">
            <h2>
              Little ideas, <em>real projects.</em>
            </h2>
            <p>A few projects from my learning journey.</p>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <motion.article
                className="project-card"
                key={p.n}
                whileHover={{ y: -7 }}
                onMouseEnter={() => setBloom(i + 10)}
              >
                <div className={`project-art art-${i}`}>
                  <span className="project-number">{p.n}</span>
                  <div className="project-symbol">
                    {i === 0 ? "⌘" : i === 1 ? "◉" : "❋"}
                  </div>
                  <span className="project-art-caption">{p.type}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{p.title}</h3>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub link for ${p.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                  <p>{p.desc}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="project-note">
            Project links are placeholders — replace them with your actual
            GitHub repositories.
          </p>
        </section>

        <section className="education-band" id="education">
          <div className="section-wrap education-inner">
            <div>
              <div className="section-kicker">04 / THE FOUNDATION</div>
              <h2>
                Learning is a <em>lifelong bloom.</em>
              </h2>
            </div>
            <div className="education-card">
              <span className="edu-flower">✿</span>
              <div>
                <span className="edu-year">2021 — 2025</span>
                <h3>B.Tech · Computer Science & Engineering</h3>
                <p>Dr. A.P.J. Abdul Kalam Technical University</p>
              </div>
              <span className="edu-status">Graduated</span>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-flower">✿</div>
          <div className="section-kicker">05 / LET’S CONNECT</div>
          <h2>
            Have a good idea?
            <br />
            <em>Let’s help it bloom.</em>
          </h2>
          <p>
            I'm interested in entry-level opportunities and meaningful projects.
            I'd love to hear from you.
          </p>
          <a
            className="primary-btn contact-btn"
            href="mailto:kmbantichauhan2@gmail.com"
          >
            Send me a message <Mail size={17} />
          </a>
          <div className="contact-social">
            <a
              href="https://github.com/Banti9"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/km-banti-chauhan-37a975232"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand" href="#home">
          ✿ banti<span className="brand-dot">.</span>
        </a>
        <span>Made with curiosity & a little flower magic · {year}</span>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            bloomClick(99);
          }}
        >
          Back to top ↑
        </button>
      </footer>
      <div className="bloom-toast" key={bloom}>
        <Flower2 size={15} /> Thanks for stopping by. Keep blooming! 💗
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
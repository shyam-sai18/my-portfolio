
import "./App.css";

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <h2 className="logo">SS<span>.</span></h2>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="#education">Education</a>
          <a href="#internship">Internship</a>
          <a href="#certifications">Certifications</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>
          <h1>Shyam Sai<span>.</span></h1>
          <h2>Computer Science Student & Developer</h2>
          <p className="description">
            I build modern web applications and explore the world
            of Python, Data Science and Artificial Intelligence.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
<a href="/resume.pdf" download className="btn outline">
  Download Resume
</a>
          <div className="social-links">
            <a href="https://github.com/shyam-sai18" target="_blank" rel="noreferrer">
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>GH</span>
            </a>
            <a href="https://linkedin.com/in/shyam-sai" target="_blank" rel="noreferrer">
              in
            </a>
            <a href="mailto:YOUR_EMAIL@example.com">
              ✉
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-icon"><span className="code-symbol">{"</>"}</span></div>
          <h3>Developer</h3>
          <p>Learning • Building • Growing</p>
          <span className="availability">● Open to opportunities</span>
        </div>

        <a href="#about" className="scroll-down">
          Explore More 	↓
        </a>
      </section>

      <section className="about section" id="about">
        <p className="section-label">GET TO KNOW ME</p>
        <h2>About <span>Me</span></h2>
        <p>
          I am a Computer Science and Engineering student at
          Malla Reddy College of Engineering and Technology.
          I enjoy programming, problem solving and developing
          useful applications. My goal is to become a skilled
          software developer.
        </p>
      </section>
       
<section className="section" id="education">
  <p className="section-label">MY ACADEMIC JOURNEY</p>
  <h2>My <span>Education</span></h2>

  <div className="project-grid">
    <div className="project-card">
      <h3>B.Tech - Computer Science and Engineering</h3>
      <p>Malla Reddy College of Engineering and Technology</p>
      <p>2024 - 2027</p>
      <span>CGPA: 7.85 / 10</span>
    </div>

    <div className="project-card">
      <h3>Diploma - Electronics and Communication Engineering</h3>
      <p>TKR College of Engineering and Technology</p>
      <p>2021 - 2024</p>
      <span>Percentage: 70%</span>
    </div>
  </div>
</section>

<section className="section" id="internship">
  <p className="section-label">PROFESSIONAL EXPERIENCE</p>
  <h2>My <span>Internship</span></h2>

  <div className="project-card" style={{ maxWidth: "700px", margin: "auto" }}>
    <h3>Data Science Intern</h3>
    <p>Acmegrade</p>
    <p>April 2025 - May 2026</p>
    <span>Python • Data Science • Machine Learning</span>
  </div>
</section>

      <section className="section" id="skills">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>My <span>Skills</span></h2>
        <div className="skill-list">
          {["Python", "JavaScript", "Java", "HTML", "CSS",
            "React.js", "SQL", "MySQL", "Pandas",
            "NumPy", "Scikit-learn", "Git & GitHub"].map(skill =>
            <div className="skill" key={skill}>{skill}</div>
          )}
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-label">MY RECENT WORK</p>
        <h2>Featured <span>Projects</span></h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Diabetes Prediction System</h3>
            <p>
              A machine learning project that analyzes patient
              data and predicts the possibility of diabetes.
            </p>
            <span>Python • Pandas • Scikit-learn</span>
          </div>
          <div className="project-card">
            <h3>Online Voting System</h3>
            <p>
              A web application designed to conduct secure
              online voting for small organizations.
            </p>
            <span>HTML • CSS • JavaScript</span>
          </div>
        </div>
      </section>

<section className="section" id="certifications">
  <p className="section-label">MY ACHIEVEMENTS</p>
  <h2>My <span>Certifications</span></h2>

  <div className="project-grid">
    <div className="project-card">
      <h3>GenAI Powered Data Analytics</h3>
      <p>Tata Group - Forage</p>
      <span>Data Analytics • Generative AI</span>
    </div>

    <div className="project-card">
      <h3>Data Analytics Job Simulation</h3>
      <p>Deloitte Australia - Forage</p>
      <span>Data Analytics</span>
    </div>

    <div className="project-card">
      <h3>Responsive Web Design</h3>
      <p>freeCodeCamp</p>
      <span>HTML • CSS • Responsive Design</span>
    </div>

    <div className="project-card">
      <h3>Industrial Training</h3>
      <p>NSIC Technical Services Centre</p>
      <span>Electronics • Embedded Systems • IoT</span>
    </div>
  </div>
</section>

      <section className="section contact" id="contact">
        <p className="section-label">LET'S CONNECT</p>
        <h2>Get In <span>Touch</span></h2>
        <p>Have an opportunity or project in mind? Let's talk!</p>
        <a href="mailto:YOUR_EMAIL@example.com" className="btn">
          	✉ Send Me an Email
        </a>
      </section>

      <footer>
        <p>© 2026 Shyam Sai. Built with React.</p>
      </footer>
    </div>
  );
}

export default App;

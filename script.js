const navItems = [
  ["About", "#about"],
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const navigation = navItems
  .map(([label, href]) => `<a href="${href}">${label}</a>`)
  .join("");

document.querySelector("#root").innerHTML = `
  <div class="site-shell">
    <div class="scroll-progress" aria-hidden="true"></div>

    <header class="site-header">
      <a class="wordmark" href="#home">MD AFTAB</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span></span>
        <span></span>
      </button>
      <nav class="site-nav" aria-label="Main navigation">${navigation}</nav>
    </header>

    <main>
      <section class="hero page-section" id="home">
        <div class="hero-layout site-container">
          <div class="reveal hero-copy">
            <p class="section-marker"><span>PERSONAL PORTFOLIO</span> / 2026</p>
            <h1 class="hero-title">
              <span>MD AFTAB</span>
              <span>MY WORK.</span>
              <span>MY JOURNEY.</span>
            </h1>
            <p class="hero-intro">A closer look at my work, the things I&apos;m learning, and the experiences shaping what comes next.</p>
            <div class="hero-actions">
              <a class="button button-primary" href="#work">Explore my work</a>
              <a class="arrow-link" href="#about">Get to know me <span aria-hidden="true">↗</span></a>
            </div>
            <a class="scroll-cue" href="#about">Scroll to explore <span aria-hidden="true">↓</span></a>
          </div>

          <div class="reveal hero-visual" style="--reveal-delay: 120ms">
            <div class="hero-photo-glow" aria-hidden="true"></div>
            <div class="hero-photo-frame">
              <img src="./portrait.jpg" alt="Md Aftab standing in front of a deep red background" />
              <div class="photo-caption">MD AFTAB / SELECTED PORTRAIT</div>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section about-section" id="about">
        <div class="split-layout site-container">
          <div class="reveal section-rail">
            <p class="section-marker"><span>01</span> / BEHIND THE NAME</p>
            <h2 class="display-heading">A LITTLE<br />ABOUT ME.</h2>
          </div>
          <div class="reveal section-content" style="--reveal-delay: 100ms">
            <h3>Hello, I&apos;m Md Aftab.</h3>
            <p class="lead-copy">I&apos;m Md Aftab, a BCA graduate from SRM University, Sikkim. I have skills in JavaScript, Node.js, HTML, CSS, and Python. I developed a real-time camera hand-tracking project with an open-air drawing feature.</p>
            <p>I&apos;m interested in web development, artificial intelligence, and creative technology. I have also worked as a Resource Executive and US Recruiter. I want to be known for building practical, innovative, and user-friendly digital solutions.</p>
            <div class="about-meta"><span>Based in Samastipur</span><i aria-hidden="true">/</i><span>Focused on frontend/backend development</span></div>
            <p>I am passionate about technology and continuous learning. My goal is to become a skilled software developer who creates useful, thoughtful, and accessible digital experiences.</p>
          </div>
        </div>
      </section>

      <section class="page-section work-section" id="work">
        <div class="site-container">
          <div class="reveal">
            <p class="section-marker"><span>02</span> / PROJECTS &amp; CASE STUDIES</p>
            <h2 class="display-heading work-heading">Real-Time Hand Tracking &amp; Air Drawing</h2>
            <p class="section-intro">A collection of projects that showcase my skills, learning journey, and practical experience in web development, Python, and AI.</p>
          </div>

          <div class="project-grid">
            <article class="reveal project-card project-card-featured">
              <p class="card-kicker">01 / FEATURED PROJECT</p>
              <h3>Data Science AI/ML</h3>
              <div class="project-details">
                <p><strong>Role:</strong> Python Developer / Computer Vision Developer</p>
                <p><strong>Tools Used:</strong> Python, OpenCV, MediaPipe, NumPy</p>
                <p><strong>Problem, Contribution &amp; Result:</strong></p>
                <p>I developed a real-time hand tracking and air drawing system that allows users to draw on the screen using hand gestures without touching a physical device. The project tracks hand movements through a webcam and converts fingertip gestures into smooth digital drawings in real time.</p>
              </div>
              <a class="card-arrow" href="#contact" aria-label="Discuss the featured project">↗</a>
            </article>

            <article class="reveal project-card project-card-muted" style="--reveal-delay: 100ms">
              <p class="card-kicker">02 / IN PROGRESS</p>
              <h3>What&apos;s<br />next?</h3>
              <div class="project-details">
                <p class="accent-label">Current Focus:</p>
                <p>I&apos;m currently improving my skills in JavaScript, Node.js, Python, and full-stack web development while exploring AI and Machine Learning.</p>
                <p class="accent-label">Next Milestone:</p>
                <p>Build and deploy more real-world projects, strengthen my problem-solving skills, and gain professional experience as a developer.</p>
              </div>
              <a class="card-arrow" href="#contact" aria-label="Start a conversation about future projects">↗</a>
            </article>
          </div>
        </div>
      </section>

      <section class="page-section experience-section" id="experience">
        <div class="split-layout site-container">
          <div class="reveal section-rail">
            <p class="section-marker"><span>03</span> / CAREER JOURNEY</p>
            <h2 class="display-heading">EXPERIENCE<br />THAT SHAPES ME.</h2>
          </div>
          <div class="reveal section-content career-content" style="--reveal-delay: 100ms">
            <article class="career-feature">
              <p class="career-date">2026 — FORMER ROLE</p>
              <h3>US Resource Executive · Norlox Solutions Pvt. Ltd., Kolkata</h3>
              <p>Handled candidate sourcing, screening, and follow-ups for US recruitment requirements. Communicated with candidates, collected required information, maintained recruitment records, and supported the onboarding process.</p>
              <p>Gained practical experience in US staffing, candidate communication, recruitment workflows, and professional workplace skills in a fast-paced environment.</p>
            </article>
            <div class="career-list">
              <article class="career-row">
                <p class="career-date">2026</p>
                <div><h4>Data Science / AI-ML Intern</h4><p>Project-based internship experience in data analysis, visualization, and machine learning concepts.</p></div>
              </article>
              <article class="career-row">
                <p class="career-date">2025 — 2026</p>
                <div><h4>IoMT Device Intern · STPI, Government of Sikkim</h4><p>Practical training in connected healthcare devices, sensors, IoT systems, and device communication.</p></div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section education-section" id="education">
        <div class="split-layout site-container">
          <div class="reveal section-rail">
            <p class="section-marker"><span>04</span> / ALWAYS LEARNING</p>
            <h2 class="display-heading">THE<br />FOUNDATION.</h2>
          </div>
          <div class="reveal section-content education-content" style="--reveal-delay: 100ms">
            <article class="education-entry">
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p class="accent-line">SRM University, Sikkim / 2023—2026</p>
              <p>Focused on computer applications, programming, web development, software development, and problem-solving. Studied technologies including JavaScript, HTML, CSS, Python, React.js, and database fundamentals.</p>
            </article>
            <div class="education-divider"></div>
            <div class="certifications">
              <p class="sub-label">Beyond the classroom</p>
              <p class="certification-title">Data Science, AI/ML &amp; Tableau Internship Certification</p>
              <p>Practical exposure to data analysis, visualization, machine learning concepts, and working with real-world datasets.</p>
              <p class="certification-title">IoMT Device Training / Internship — STPI, Government of India, Sikkim</p>
              <p>Training in connected healthcare devices, IoT-based systems, sensors, device communication, and technology in healthcare.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="page-section capabilities-section" id="capabilities">
        <div class="site-container">
          <div class="reveal">
            <p class="section-marker"><span>05</span> / CAPABILITIES</p>
            <h2 class="display-heading">WHAT I BRING.</h2>
          </div>
          <div class="capability-list">
            <div class="reveal capability-row">
              <h3><span>01</span> Technical skills:</h3>
              <p>JavaScript <b>·</b> HTML <b>·</b> CSS <b>·</b> React.js <b>·</b> Node.js <b>·</b> Python <b>·</b> AI/ML <b>·</b> Data Science <b>·</b> Tableau <b>·</b> IoT <b>·</b> IoMT <b>·</b> Git <b>·</b> GitHub</p>
            </div>
            <div class="reveal capability-row" style="--reveal-delay: 80ms">
              <h3><span>02</span> Professional skills:</h3>
              <p>Communication <b>·</b> Teamwork <b>·</b> Problem-Solving <b>·</b> Adaptability <b>·</b> Time Management <b>·</b> Candidate Handling <b>·</b> Recruitment Coordination <b>·</b> Customer Interaction <b>·</b> Quick Learning <b>·</b> Attention to Detail</p>
            </div>
            <div class="reveal capability-row" style="--reveal-delay: 160ms">
              <h3><span>03</span> Currently learning:</h3>
              <p>Researching brain-inspired Artificial Intelligence, neural networks, cognitive AI, and how AI systems can learn, process information, and make decisions in ways inspired by the human brain.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact-section" id="contact">
        <div class="contact-panel site-container">
          <div class="reveal">
            <p class="section-marker"><span>06</span> / START A CONVERSATION</p>
            <h2 class="display-heading">LET&apos;S MAKE<br />SOMETHING MATTER.</h2>
            <p class="contact-copy">Have an opportunity, a project, or a question? Let&apos;s connect.</p>
            <a class="email-link" href="mailto:mda94132@gmail.com">EMAIL : MDA94132@GMAIL.COM <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer site-container">
      <p>© ${new Date().getFullYear()} MD AFTAB</p>
      <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
    </footer>
  </div>
`;

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function closeMenu() {
  document.body.classList.remove("menu-open");
  siteNav.classList.remove("is-open");
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const revealNodes = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  document.documentElement.style.setProperty("--scroll-progress", progress);
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });

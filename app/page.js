"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react"; // Added useCallback
import {
  FaPython,
  FaJava,
  FaReact,
  FaNodeJs,
  FaAws,
  FaRaspberryPi,
  FaGithub,
  FaLinux,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaGitAlt, // Added Git
  FaJsSquare, // Added JS
  FaSun, // Added Sun icon
  FaMoon, // Added Moon icon
  FaBars, // Added Bars icon
  FaTimes, // Added Times icon
} from "react-icons/fa";

import {
  SiCplusplus,
  SiC,
  SiDart,
  SiGnubash,
  SiPerl,
  SiNextdotjs,
  SiFlutter,
  SiFirebase,
  SiSqlite,
  SiPostgresql,
  SiArduino,
  SiSwagger, // Added Swagger
} from "react-icons/si";

import { VscAzure, VscAzureDevops } from "react-icons/vsc";
// import { ScrambleHover } from "../components/ScrambleHover"; // Removed import
// Note: Some icons might not be perfect matches (e.g., NoSQL, Azure Logic Apps, CI/CD)

export default function Home() {
  // Removed carousel state and ref
  // const [currentItem, setCurrentItem] = useState(0);
  // const carouselRef = useRef(null);
  const [theme, setTheme] = useState("dark"); // Default to dark theme initially
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "USB Rubber Ducky",
      description:
        "Custom human interface device to execute automated payload scripts to disable antivirus software, turn off firewalls, and deploy keyloggers",
      image: "/images/projects/1/1.jpg",
      link: "#",
      tags: ["Security", "Arduino"],
      year: "2022",
    },
    {
      title: "Stock Data Analyser",
      description:
        "Microservices-based stock analysis platform using AWS Lambda, API Gateway, and S3, enabling real-time stock data retrieval and visualization",
      image: "/images/projects/2/1.jpg",
      link: "#",
      tags: ["Microservices", "AWS", "S3", "APIs", "Python"],
      year: "2023",
    },
    {
      title: "PlusOne",
      description:
        "One-stop event planning/booking cross-platform mobile app using Flutter, Firebase (NoSQL), and a multithreaded Flask (Python) server",
      image: "/images/projects/3/1.jpg",
      link: "#",
      tags: ["Flutter", "Prototyping", "Firebase", "System Design"],
      year: "2022",
    },
    {
      title: "Soccer Droids",
      description:
        "Autonomous soccer-playing robot, Arduino-based control system for real-time decision-making, Utilising a Pixy2 Camera for object detection and tracking",
      image: "/images/projects/4/1.jpg",
      link: "#",
      tags: ["Arduino", "Robotics", "Pixy2", "Engineering"],
      year: "2019",
    },
  ];

  // Removed carousel handlers and scroll effect

  // Effect to load theme from localStorage and apply initial class
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark"; // Default to dark if nothing saved
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  // Function to toggle theme
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  }, []);

  // Add theme class to the main div
  return (
    <div className={theme}>
      <nav className='main-nav'>
        <div className='nav-container'>
          {/* Always visible: Name */}
          <div className='nav-brand'>
            <a href='#'>Faris Jalal</a>
          </div>

          {/* Links container (hidden on mobile, shown in menu) */}
          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <ul>
              <li>
                <a href='#about' onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a
                  href='#technical-skills'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a href='#interests' onClick={() => setIsMobileMenuOpen(false)}>
                  Interests
                </a>
              </li>
              <li>
                <a href='#projects' onClick={() => setIsMobileMenuOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </a>
              </li>
              <li>
                <a
                  href='/resume.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Always visible: Theme Toggle and Hamburger */}
          <div className='nav-controls'>
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className='theme-toggle-button'
              aria-label='Toggle theme'
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button
              className='hamburger-button'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle menu'
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>
      <header className='main-header'>
        {/* Image */}
        <img
          src='/images/bio.jpg'
          alt='Faris Jalal'
          className='header-image'
          width='200' // Keep width consistent with CSS
        />
        {/* Separator Div */}
        <div className='header-separator'></div>
        {/* Text block */}
        <div className='header-text'>
          <h1>Faris Jalal</h1>
          {/* Using the summary from the resume as the main description */}
          <p>
            Computer Science graduate with experience in app development, cloud
            integration, and automation. Passionate about building scalable and
            optimised solutions, with a strong foundation in backend systems,
            APIs, and data-driven applications. Enjoy collaborating in agile
            teams and exploring new technologies to create new user experiences.
          </p>
        </div>
      </header>

      {/* Removed the separate 'About Me' section as the header now contains the summary */}

      <section id='technical-skills'>
        <h2>Technical Skills</h2>
        <div className='skills-category-grid'>
          {" "}
          {/* Changed class for grid layout */}
          {/* Programming/Scripting */}
          <div className='skills-category'>
            <h3>Programming/Scripting</h3>
            <div className='skills-icons'>
              {/* Python */}
              <div className='skill-item' title='Python'>
                <FaPython className='skill-icon' />
                <span className='skill-name'>Python</span>
              </div>
              {/* C */}
              <div className='skill-item' title='C'>
                <SiC className='skill-icon' />
                <span className='skill-name'>C</span>
              </div>
              {/* C++ */}
              <div className='skill-item' title='C++'>
                <SiCplusplus className='skill-icon' />
                <span className='skill-name'>C++</span>
              </div>
              {/* Java */}
              <div className='skill-item' title='Java'>
                <FaJava className='skill-icon' />
                <span className='skill-name'>Java</span>
              </div>
              {/* Dart */}
              <div className='skill-item' title='Dart'>
                <SiDart className='skill-icon' />
                <span className='skill-name'>Dart</span>
              </div>
              {/* Bash */}
              <div className='skill-item' title='Bash'>
                <SiGnubash className='skill-icon' />
                <span className='skill-name'>Bash</span>
              </div>
              {/* Perl */}
              <div className='skill-item' title='Perl'>
                <SiPerl className='skill-icon' />
                <span className='skill-name'>Perl</span>
              </div>
              {/* JavaScript */}
              <div className='skill-item' title='JavaScript'>
                <FaJsSquare className='skill-icon' />
                <span className='skill-name'>JavaScript</span>
              </div>
            </div>
          </div>
          {/* Web/Mobile Development */}
          <div className='skills-category'>
            <h3>Web/Mobile Development</h3>
            <div className='skills-icons'>
              {/* React */}
              <div className='skill-item' title='React'>
                <FaReact className='skill-icon' />
                <span className='skill-name'>React</span>
              </div>
              {/* Node.js */}
              <div className='skill-item' title='Node.js'>
                <FaNodeJs className='skill-icon' />
                <span className='skill-name'>Node.js</span>
              </div>
              {/* Next.js */}
              <div className='skill-item' title='Next.js'>
                <SiNextdotjs className='skill-icon' />
                <span className='skill-name'>Next.js</span>
              </div>
              {/* Flutter */}
              <div className='skill-item' title='Flutter'>
                <SiFlutter className='skill-icon' />
                <span className='skill-name'>Flutter</span>
              </div>
              {/* Firebase */}
              <div className='skill-item' title='Firebase'>
                <SiFirebase className='skill-icon' />
                <span className='skill-name'>Firebase</span>
              </div>
            </div>
          </div>
          {/* Cloud & DevOps */}
          <div className='skills-category'>
            <h3>Cloud & DevOps</h3>
            <div className='skills-icons'>
              {/* Azure Logic Apps */}
              <div className='skill-item' title='Azure Logic Apps'>
                <VscAzure className='skill-icon' /> {/* Using generic Azure */}
                <span className='skill-name'>Azure Logic Apps</span>
              </div>
              {/* Azure DevOps */}
              <div className='skill-item' title='Azure DevOps'>
                <VscAzureDevops className='skill-icon' />
                <span className='skill-name'>Azure DevOps</span>
              </div>
              {/* GitHub CI/CD */}
              <div className='skill-item' title='GitHub CI/CD'>
                <FaGithub className='skill-icon' />
                <span className='skill-name'>GitHub CI/CD</span>
              </div>
              {/* AWS */}
              <div className='skill-item' title='AWS'>
                <FaAws className='skill-icon' />
                <span className='skill-name'>AWS</span>
              </div>
              {/* Git */}
              <div className='skill-item' title='Git'>
                <FaGitAlt className='skill-icon' />
                <span className='skill-name'>Git</span>
              </div>
            </div>
          </div>
          {/* Databases */}
          <div className='skills-category'>
            <h3>Databases</h3>
            <div className='skills-icons'>
              {/* PostgreSQL */}
              <div className='skill-item' title='PostgreSQL'>
                <SiPostgresql className='skill-icon' />
                <span className='skill-name'>PostgreSQL</span>
              </div>
              {/* SQLite */}
              <div className='skill-item' title='SQLite'>
                <SiSqlite className='skill-icon' />
                <span className='skill-name'>SQLite</span>
              </div>
              {/* SQL */}
              <div className='skill-item' title='SQL'>
                <FaDatabase className='skill-icon' /> {/* Using generic */}
                <span className='skill-name'>SQL</span>
              </div>
              {/* NoSQL */}
              <div className='skill-item' title='NoSQL'>
                <FaDatabase className='skill-icon' /> {/* Using generic */}
                <span className='skill-name'>NoSQL</span>
              </div>
              {/* Firestore */}
              <div className='skill-item' title='Firestore'>
                <SiFirebase className='skill-icon' />{" "}
                {/* Using Firebase icon */}
                <span className='skill-name'>Firestore</span>
              </div>
            </div>
          </div>
          {/* Embedded Systems / IoT */}
          <div className='skills-category'>
            <h3>Embedded Systems / IoT</h3>
            <div className='skills-icons'>
              {/* Raspberry Pi */}
              <div className='skill-item' title='Raspberry Pi'>
                <FaRaspberryPi className='skill-icon' />
                <span className='skill-name'>Raspberry Pi</span>
              </div>
              {/* Arduino */}
              <div className='skill-item' title='Arduino'>
                <SiArduino className='skill-icon' />
                <span className='skill-name'>Arduino</span>
              </div>
            </div>
          </div>
          {/* Other */}
          <div className='skills-category'>
            <h3>Other</h3>
            <div className='skills-icons'>
              {/* Networking */}
              <div className='skill-item' title='Networking'>
                <FaNetworkWired className='skill-icon' />
                <span className='skill-name'>Networking</span>
              </div>
              {/* Cyber Security */}
              <div className='skill-item' title='Cyber Security'>
                <FaShieldAlt className='skill-icon' />
                <span className='skill-name'>Cyber Security</span>
              </div>
              {/* Linux */}
              <div className='skill-item' title='Linux'>
                <FaLinux className='skill-icon' />
                <span className='skill-name'>Linux</span>
              </div>
              {/* Swagger */}
              <div className='skill-item' title='Swagger'>
                <SiSwagger className='skill-icon' />
                <span className='skill-name'>Swagger</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='interests'>
        <h2>Interests</h2>
        {/* Using interests from the resume */}
        <ul>
          <li>Speedcubing</li>
          <li>Retro Game Emulation</li>
          <li>Hobbyist Prototyping on Microcontrollers</li>
        </ul>
      </section>

      <section id='projects'>
        <h2>Projects</h2>
        {/* Changed to grid layout */}
        <div className='projects-grid'>
          {projects.map((project, index) => (
            // Renamed class from carousel-item to project-card
            <div className='project-card' key={index}>
              <img
                src={project.image}
                alt={project.title}
                // Removed inline style, width/height handled by CSS
              />
              <h3>{project.title}</h3>
              <div className='tags'>
                {project.tags &&
                  project.tags.map((tag, tagIndex) => (
                    <span className='tag' key={tagIndex}>
                      {tag}
                    </span>
                  ))}
              </div>
              <p>{project.description}</p>
              <div className='project-footer'>
                <span>{project.year}</span>
                <a href={project.link}>View Project</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Removed Blog section */}

      <section id='contact'>
        <h2>Contact & Socials</h2>
        {/* Using contact details from the resume */}
        <p>
          Email:{" "}
          <a href='mailto:jalal.faris@gmail.com'>jalal.faris@gmail.com</a>
        </p>
        <p>Phone: 0422 970 323</p>
        {/* Updated with social links */}
        <p>
          LinkedIn:{" "}
          <a
            href='https://www.linkedin.com/in/farisjalal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            linkedin.com/in/farisjalal
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href='https://github.com/farisjalal'
            target='_blank'
            rel='noopener noreferrer'
          >
            github.com/farisjalal
          </a>
        </p>
        <p>
          Twitter:{" "}
          <a
            href='https://twitter.com/faris__jalal'
            target='_blank'
            rel='noopener noreferrer'
          >
            @faris__jalal
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a
            href='https://instagram.com/faris__jalal'
            target='_blank'
            rel='noopener noreferrer'
          >
            @faris__jalal
          </a>
        </p>
        <p>
          Discord:{" "}
          <a
            href='https://www.discordapp.com/users/208856802459123712/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Purplemaze#8272
          </a>
        </p>
        <p>
          HackerRank:{" "}
          <a
            href='https://www.hackerrank.com/farisjalal/'
            target='_blank'
            rel='noopener noreferrer'
          >
            hackerrank.com/farisjalal
          </a>
        </p>
        <p>
          CTFLearn:{" "}
          <a
            href='https://ctflearn.com/user/purplemaze'
            target='_blank'
            rel='noopener noreferrer'
          >
            purplemaze
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Faris Jalal</p>
        {/* Link to contact section */}
        <a href='#contact'>Contact</a>
      </footer>
    </div>
  );
}

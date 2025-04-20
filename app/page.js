"use client";

import Image from "next/image";
// Removed useState, useEffect, useCallback as they are now in Navbar
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
  // Removed FaSun, FaMoon, FaBars, FaTimes as they are in Navbar
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
import { projectsData } from "@/lib/projectsData"; // Import project data using alias
// import { ScrambleHover } from "../components/ScrambleHover"; // Removed import
// Note: Some icons might not be perfect matches (e.g., NoSQL, Azure Logic Apps, CI/CD)

export default function Home() {
  // Removed carousel state and ref
  // const [currentItem, setCurrentItem] = useState(0);
  // const carouselRef = useRef(null);
  // Removed theme and isMobileMenuOpen state, now handled in Navbar

  // Project data is now imported from lib/projectsData.js
  const projects = projectsData; // Assign imported data to the variable used by the component

  // Removed carousel handlers and scroll effect

  // Removed theme useEffect and toggleTheme function, now handled in Navbar

  // Add theme class to the main div
  // Removed theme class from div, Navbar component handles theme now
  return (
    <div>
      {/* Navbar is now handled by layout.js */}
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
            <h3 style={{ color: "var(--programming-scripting-color)" }}>
              Programming/Scripting
            </h3>
            <div className='skills-icons'>
              {/* Python */}
              <div className='skill-item' title='Python'>
                <FaPython
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>Python</span>
              </div>
              {/* C */}
              <div className='skill-item' title='C'>
                <SiC
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>C</span>
              </div>
              {/* C++ */}
              <div className='skill-item' title='C++'>
                <SiCplusplus
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>C++</span>
              </div>
              {/* Java */}
              <div className='skill-item' title='Java'>
                <FaJava
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>Java</span>
              </div>
              {/* Dart */}
              <div className='skill-item' title='Dart'>
                <SiDart
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>Dart</span>
              </div>
              {/* Bash */}
              <div className='skill-item' title='Bash'>
                <SiGnubash
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>Bash</span>
              </div>
              {/* Perl */}
              <div className='skill-item' title='Perl'>
                <SiPerl
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>Perl</span>
              </div>
              {/* JavaScript */}
              <div className='skill-item' title='JavaScript'>
                <FaJsSquare
                  className='skill-icon'
                  style={{ color: "var(--programming-scripting-icon-color)" }}
                />
                <span className='skill-name'>JavaScript</span>
              </div>
            </div>
          </div>
          {/* Web/Mobile Development */}
          <div className='skills-category'>
            <h3 style={{ color: "var(--web-mobile-development-color)" }}>
              Web/Mobile Development
            </h3>
            <div className='skills-icons'>
              {/* React */}
              <div className='skill-item' title='React'>
                <FaReact
                  className='skill-icon'
                  style={{ color: "var(--web-mobile-development-icon-color)" }}
                />
                <span className='skill-name'>React</span>
              </div>
              {/* Node.js */}
              <div className='skill-item' title='Node.js'>
                <FaNodeJs
                  className='skill-icon'
                  style={{ color: "var(--web-mobile-development-icon-color)" }}
                />
                <span className='skill-name'>Node.js</span>
              </div>
              {/* Next.js */}
              <div className='skill-item' title='Next.js'>
                <SiNextdotjs
                  className='skill-icon'
                  style={{ color: "var(--web-mobile-development-icon-color)" }}
                />
                <span className='skill-name'>Next.js</span>
              </div>
              {/* Flutter */}
              <div className='skill-item' title='Flutter'>
                <SiFlutter
                  className='skill-icon'
                  style={{ color: "var(--web-mobile-development-icon-color)" }}
                />
                <span className='skill-name'>Flutter</span>
              </div>
              {/* Firebase */}
              <div className='skill-item' title='Firebase'>
                <SiFirebase
                  className='skill-icon'
                  style={{ color: "var(--web-mobile-development-icon-color)" }}
                />
                <span className='skill-name'>Firebase</span>
              </div>
            </div>
          </div>
          {/* Cloud & DevOps */}
          <div className='skills-category'>
            <h3 style={{ color: "var(--cloud-devops-color)" }}>
              Cloud & DevOps
            </h3>
            <div className='skills-icons'>
              {/* Azure Logic Apps */}
              <div className='skill-item' title='Azure Logic Apps'>
                <VscAzure
                  className='skill-icon'
                  style={{ color: "var(--cloud-devops-icon-color)" }}
                />{" "}
                {/* Using generic Azure */}
                <span className='skill-name'>Azure Logic Apps</span>
              </div>
              {/* Azure DevOps */}
              <div className='skill-item' title='Azure DevOps'>
                <VscAzureDevops
                  className='skill-icon'
                  style={{ color: "var(--cloud-devops-icon-color)" }}
                />
                <span className='skill-name'>Azure DevOps</span>
              </div>
              {/* GitHub CI/CD */}
              <div className='skill-item' title='GitHub CI/CD'>
                <FaGithub
                  className='skill-icon'
                  style={{ color: "var(--cloud-devops-icon-color)" }}
                />
                <span className='skill-name'>GitHub CI/CD</span>
              </div>
              {/* AWS */}
              <div className='skill-item' title='AWS'>
                <FaAws
                  className='skill-icon'
                  style={{ color: "var(--cloud-devops-icon-color)" }}
                />
                <span className='skill-name'>AWS</span>
              </div>
              {/* Git */}
              <div className='skill-item' title='Git'>
                <FaGitAlt
                  className='skill-icon'
                  style={{ color: "var(--cloud-devops-icon-color)" }}
                />
                <span className='skill-name'>Git</span>
              </div>
            </div>
          </div>
          {/* Databases */}
          <div className='skills-category'>
            <h3 style={{ color: "var(--databases-color)" }}>Databases</h3>
            <div className='skills-icons'>
              {/* PostgreSQL */}
              <div className='skill-item' title='PostgreSQL'>
                <SiPostgresql
                  className='skill-icon'
                  style={{ color: "var(--databases-icon-color)" }}
                />
                <span className='skill-name'>PostgreSQL</span>
              </div>
              {/* SQLite */}
              <div className='skill-item' title='SQLite'>
                <SiSqlite
                  className='skill-icon'
                  style={{ color: "var(--databases-icon-color)" }}
                />
                <span className='skill-name'>SQLite</span>
              </div>
              {/* SQL */}
              <div className='skill-item' title='SQL'>
                <FaDatabase
                  className='skill-icon'
                  style={{ color: "var(--databases-icon-color)" }}
                />{" "}
                {/* Using generic */}
                <span className='skill-name'>SQL</span>
              </div>
              {/* NoSQL */}
              <div className='skill-item' title='NoSQL'>
                <FaDatabase
                  className='skill-icon'
                  style={{ color: "var(--databases-icon-color)" }}
                />{" "}
                {/* Using generic */}
                <span className='skill-name'>SQL</span>
              </div>
              {/* Firestore */}
              <div className='skill-item' title='Firestore'>
                <SiFirebase
                  className='skill-icon'
                  style={{ color: "var(--databases-icon-color)" }}
                />{" "}
                {/* Using Firebase icon */}
                <span className='skill-name'>Firestore</span>
              </div>
            </div>
          </div>
          {/* Embedded Systems / IoT */}
          <div className='skills-category'>
            <h3 style={{ color: "var(--embedded-iot-color)" }}>
              Embedded Systems / IoT
            </h3>
            <div className='skills-icons'>
              {/* Raspberry Pi */}
              <div className='skill-item' title='Raspberry Pi'>
                <FaRaspberryPi
                  className='skill-icon'
                  style={{ color: "var(--embedded-iot-icon-color)" }}
                />
                <span className='skill-name'>Raspberry Pi</span>
              </div>
              {/* Arduino */}
              <div className='skill-item' title='Arduino'>
                <SiArduino
                  className='skill-icon'
                  style={{ color: "var(--embedded-iot-icon-color)" }}
                />
                <span className='skill-name'>Arduino</span>
              </div>
            </div>
          </div>
          {/* Other */}
          <div className='skills-category'>
            <h3 style={{ color: "var(--other-color)" }}>Other</h3>
            <div className='skills-icons'>
              {/* Networking */}
              <div className='skill-item' title='Networking'>
                <FaNetworkWired
                  className='skill-icon'
                  style={{ color: "var(--other-icon-color)" }}
                />
                <span className='skill-name'>Networking</span>
              </div>
              {/* Cyber Security */}
              <div className='skill-item' title='Cyber Security'>
                <FaShieldAlt
                  className='skill-icon'
                  style={{ color: "var(--other-icon-color)" }}
                />
                <span className='skill-name'>Cyber Security</span>
              </div>
              {/* Linux */}
              <div className='skill-item' title='Linux'>
                <FaLinux
                  className='skill-icon'
                  style={{ color: "var(--other-icon-color)" }}
                />
                <span className='skill-name'>Linux</span>
              </div>
              {/* Swagger */}
              <div className='skill-item' title='Swagger'>
                <SiSwagger
                  className='skill-icon'
                  style={{ color: "var(--other-icon-color)" }}
                />
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
              <div className='project-details'>
                <img
                  src={project.image}
                  alt={project.title}
                  // Removed inline style, width/height handled by CSS
                />
                <h3>{project.title}</h3>
                {project.tags && (
                  <div className='tags project-tags'>
                    {project.tags.map((tag, tagIndex) => (
                      <span className='tag' key={tagIndex}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <p>{project.description}</p>
                <div className='project-footer'>
                  <span>{project.year}</span>
                  <a href={project.link}>View Project</a>{" "}
                  {/* Link now points to /projects/[slug] */}
                </div>
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

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import Modal from "./components/Modal";
import ProjectDetail from "./components/ProjectDetail";
import { PROJECTS, CERTIFICATES, RESUME_LINK, LOR_LINK } from "./constants";
import { Project, Certificate } from "./types";

const App: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<{
    title: string;
    url: string;
    type: "pdf" | "video";
  } | null>(null);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      const reveals = document.querySelectorAll(".reveal");
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
          reveal.classList.add("active");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveProject(null);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const topOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  const openProject = (project: Project) => {
    if (project.id === "ntu-aircon" && project.link) {
      window.open(project.link, "_blank");
      return;
    }
    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openCert = (cert: Certificate) => {
    setSelectedDoc({
      title: cert.name,
      url: cert.link,
      type: "pdf",
    });
  };

  if (activeProject) {
    return (
      <div className="relative font-manrope selection:bg-figma-purple selection:text-slate-900 bg-craft min-h-screen">
        <Navbar onNavClick={handleNavClick} />
        <ProjectDetail
          project={activeProject}
          onBack={() => setActiveProject(null)}
        />
        <footer className="pt-16 pb-16 bg-slate-950 text-white text-center">
          <p className="text-white font-bold text-sm tracking-wide">
            Made by Brian Chong
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="relative font-manrope selection:bg-figma-purple selection:text-slate-900 bg-craft min-h-screen">
      <Navbar />

      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-outfit uppercase">
                Recent Work
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                Blending technology and design to solve real-world problems.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-10 reveal">
              {PROJECTS.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={openProject}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section
          id="certificates"
          className="py-32 bg-slate-200/20 dark:bg-slate-900/50"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mb-16 reveal">
              <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-outfit uppercase">
                Certificates
              </h2>
              <p className="text-xl text-slate-500 dark:text-slate-400">
                A track record of continuous growth and technical excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal">
              {CERTIFICATES.map((cert, i) => (
                <div
                  key={i}
                  onClick={() => openCert(cert)}
                  className="group bg-white/60 dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="aspect-[5/3] rounded-2xl overflow-hidden mb-6 bg-slate-100 dark:bg-slate-900">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-full group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <h4 className="text-lg font-bold mb-1 group-hover:text-figma-purple transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer
          id="contact"
          className="relative pt-32 pb-24 bg-slate-950 text-white transition-colors overflow-hidden"
        >
          {/* Enhanced Background Animations in Footer */}
          <div className="absolute top-[-5%] left-[-5%] w-[45vw] h-[45vw] bg-figma-purple/10 rounded-full blur-[60px] md:blur-[180px] animate-blob"></div>
          <div
            className="absolute bottom-[5%] left-[0%] w-[40vw] h-[40vw] bg-figma-blue/12 rounded-full blur-[50px] md:blur-[110px] animate-blob"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-[-10%] right-[0%] w-[35vw] h-[35vw] bg-figma-green/10 rounded-full blur-[55px] md:blur-[150px] animate-blob-fast"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute bottom-[0%] right-[0%] w-[50vw] h-[50vw] bg-figma-pink/15 rounded-full blur-[65px] md:blur-[170px] animate-blob"
            style={{ animationDelay: "6s" }}
          ></div>
          <div
            className="absolute top-[20%] right-[5%] w-[30vw] h-[30vw] bg-figma-orange/12 rounded-full blur-[45px] md:blur-[110px] animate-blob"
            style={{ animationDelay: "8s" }}
          ></div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 reveal">
              <h2 className="text-[clamp(3.5rem,8vw,6rem)] font-black mb-20 leading-none tracking-tight font-outfit uppercase">
                Let's Get in Touch
              </h2>

              <a
                href="mailto:brianchong12@gmail.com"
                className="inline-block px-6 py-3 md:px-10 md:py-5 border-2 border-figma-green rounded-full text-figma-green text-lg md:text-2xl font-bold hover:bg-figma-green hover:text-white transition-all duration-300 cursor-pointer"
              >
                brianchong12@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-20 reveal">
              <a
                href="https://www.linkedin.com/in/brian-chong-267525209/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-3 border-2 border-figma-blue rounded-full text-figma-blue font-bold hover:bg-figma-blue hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="https://github.com/brianchong01"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-3 border-2 border-figma-purple rounded-full text-figma-purple font-bold hover:bg-figma-purple hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-3 border-2 border-figma-orange rounded-full text-figma-orange font-bold hover:bg-figma-orange hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                </svg>
                Resume
              </a>
            </div>

            <div className="pt-16 pb-0 mb-0 border-t border-white/10 text-center reveal">
              <p className="text-white text-md tracking-wide">
                Made by Brian Chong
              </p>
            </div>
          </div>
        </footer>
      </main>

      <Modal
        isOpen={!!selectedDoc}
        onClose={() => setSelectedDoc(null)}
        title={selectedDoc?.title || ""}
        type={selectedDoc?.type || "pdf"}
        url={selectedDoc?.url || ""}
      />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-slate-900 text-white rounded-full shadow-2xl transition-all duration-300 hover:bg-figma-purple ${
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
};

export default App;

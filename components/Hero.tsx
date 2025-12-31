import React, { useState, useEffect, useRef } from "react";
import { RESUME_LINK } from "../constants";
import linkedInPic from "../images/linkedin-pic.jpeg";

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const [typedSubText, setTypedSubText] = useState("");
  const [isTypingFirst, setIsTypingFirst] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  const fullText = "Hi, I'm Brian Chong.";
  const fullSubText = "Technologist & UI/UX Designer.";
  const linkedInUrl = "https://www.linkedin.com/in/brian-chong-267525209/";

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex <= fullText.length) {
        setTypedText(fullText.substring(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingFirst(false);
        // Start second line typing after first line is done
        let subCharIndex = 0;
        const subTypingInterval = setInterval(() => {
          if (subCharIndex <= fullSubText.length) {
            setTypedSubText(fullSubText.substring(0, subCharIndex));
            subCharIndex++;
          } else {
            clearInterval(subTypingInterval);
          }
        }, 50);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: clientX / innerWidth - 0.5,
        y: clientY / innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getTransform = (strength: number) => {
    return `translate(${mousePos.x * strength}px, ${mousePos.y * strength}px)`;
  };

  const handleRecentWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#projects");
    if (element) {
      const topOffset = 80; // offset for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Helper to render the subtext with a break after '&' on large screens
  const renderSubText = () => {
    const ampIndex = typedSubText.indexOf("&");
    if (ampIndex !== -1 && typedSubText.length > ampIndex) {
      return (
        <>
          {typedSubText.substring(0, ampIndex + 1)}
          <br className="hidden lg:block" />
          {typedSubText.substring(ampIndex + 1)}
        </>
      );
    }
    return typedSubText;
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-transparent"
    >
      {/* Background Blobs */}
      <div
        className="absolute top-[5%] left-[0%] w-[45vw] h-[45vw] bg-figma-purple/15 rounded-full blur-[100px] animate-blob"
        style={{
          transform: getTransform(60),
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute top-[30%] right-[-10%] w-[50vw] h-[40vw] bg-figma-green/12 rounded-[120px] blur-[120px] animate-blob"
        style={{
          animationDelay: "2s",
          transform: getTransform(-80),
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-[-15%] left-[10%] w-[55vw] h-[45vw] bg-figma-blue/15 rounded-full blur-[140px] animate-blob"
        style={{
          animationDelay: "4s",
          transform: getTransform(50),
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute top-[10%] right-[10%] w-[25vw] h-[60vw] bg-figma-orange/10 rounded-full blur-[110px] animate-blob-fast"
        style={{
          animationDelay: "3s",
          transform: getTransform(-40),
          transition: "transform 0.3s ease-out",
        }}
      ></div>
      <div
        className="absolute bottom-[10%] right-[0%] w-[35vw] h-[35vw] bg-figma-pink/12 rounded-[80px] blur-[90px] animate-blob"
        style={{
          animationDelay: "5s",
          transform: getTransform(70),
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-[clamp(2.5rem,6vw,4.8rem)] font-extrabold leading-[1.02] mb-8 min-h-[4.2em] lg:min-h-[3.2em] tracking-tight text-slate-900 dark:text-white">
              {typedText}
              {isTypingFirst && (
                <span className="inline-block w-1.5 h-[0.9em] bg-figma-purple animate-pulse ml-1 align-middle"></span>
              )}
              <br className="block" />
              <span className="text-figma-purple">{renderSubText()}</span>
              {!isTypingFirst && (
                <span className="inline-block w-1.5 h-[0.9em] bg-figma-purple animate-pulse ml-1 align-middle"></span>
              )}
            </h1>
            <p
              className="text-[clamp(1.1rem,1.5vw,1.35rem)] text-slate-600 dark:text-slate-400 mb-10 max-w-xl animate-slide-up opacity-0 leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              Bridging engineering and design. Currently exploring the
              intersection of AI, interface aesthetics, and human-centric
              software.
            </p>
            <div
              className="flex flex-wrap gap-5 animate-slide-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              <a
                href="#projects"
                onClick={handleRecentWorkClick}
                className="px-10 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold transition-all shadow-xl hover:scale-105 hover:bg-figma-purple dark:hover:bg-figma-purple dark:hover:text-white"
              >
                Recent Work
              </a>
              <a
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur border-2 border-slate-200 dark:border-slate-800 rounded-full font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105"
              >
                Resume
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
                <div className="w-72 h-72 md:w-[500px] md:h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:rotate-0 rotate-1 bg-white/60 dark:bg-slate-800 border-4 border-white dark:border-slate-700">
                  <img
                    src={linkedInPic}
                    alt="Brian Chong"
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    // onError={(e) => {
                    //   (e.target as HTMLImageElement).src =
                    //     "https://raw.githubusercontent.com/Martin-Ukh/portfolio-assets/main/brian_chong_portrait.jpg";
                    // }}
                  />
                </div>
              </a>

              <a
                href={linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-4 -left-4 bg-figma-blue text-slate-900 px-5 py-3 rounded-2xl font-bold text-sm shadow-xl flex items-center gap-3 animate-float transition-all hover:scale-110 hover:bg-white active:scale-95"
                style={{ transform: getTransform(15) }}
              >
                <div className="w-2.5 h-2.5 bg-slate-900 rounded-full"></div>
                linkedin
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

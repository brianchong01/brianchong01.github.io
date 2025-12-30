import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC<{ onNavClick?: (href: string) => void }> = ({
  onNavClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (onNavClick) {
      onNavClick(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        const topOffset = 80; // offset for sticky nav
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - topOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const navLinks = [
    { name: "Work", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "py-4 glass border-b dark:border-slate-800 shadow-sm"
            : "py-8 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-black tracking-[-0.05em] font-outfit dark:text-white text-slate-900"
          >
            BRIANCHONG
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-bold text-slate-800 hover:text-figma-purple dark:text-slate-200 dark:hover:text-figma-purple transition-colors uppercase tracking-[0.15em]"
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800 mx-2"></div>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 focus:outline-none"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? (
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full w-full glass pt-32 px-6 flex flex-col gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-4xl font-black font-outfit uppercase tracking-tighter text-slate-900 dark:text-white hover:text-figma-purple transition-all transform ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {link.name}
            </a>
          ))}

          <div className="mt-auto pb-20 flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Socials
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.linkedin.com/in/brian-chong-267525209/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-figma-blue transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/brianchong01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-400 hover:text-figma-purple transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

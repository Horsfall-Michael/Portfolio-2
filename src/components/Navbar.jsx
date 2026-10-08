import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] md:w-[95%] z-50">
      <nav
        aria-label="Main navigation"
        className="glass p-4 backdrop-blur-md bg-[#0a0a0a]/30 w-full border-b border-[#0a0a0a]/30"
      >
        <div className="container px-2 mx-auto">
          <div className="flex items-center justify-between text-text text-[12px]">
            {/* Logo */}
            <p className="text-text">MICHAEL</p>

            {/* Navigation */}
            <div className="hidden lg:flex md:items-center md:justify-between text-muted">
              <div className="flex flex-col md:flex-row md:space-x-4 gap-12">
                <a
                  href="#home"
                  className={`navlink hover:text-text ${
                    activeSection === "home" ? "active" : ""
                  }`}
                >
                  Home
                </a>

                <a
                  href="#about"
                  className={`navlink hover:text-text ${
                    activeSection === "about" ? "active" : ""
                  }`}
                >
                  About
                </a>

                <a
                  href="#services"
                  className={`navlink hover:text-text ${
                    activeSection === "services" ? "active" : ""
                  }`}
                >
                  Services
                </a>

                <a
                  href="#work"
                  className={`navlink hover:text-text ${
                    activeSection === "work" ? "active" : ""
                  }`}
                >
                  Work
                </a>

                <a
                  href="#stack"
                  className={`navlink hover:text-text ${
                    activeSection === "stack" ? "active" : ""
                  }`}
                >
                  Stack
                </a>
                <a
                  href="#process"
                  className={`navlink hover:text-text ${
                    activeSection === "process" ? "active" : ""
                  }`}
                >
                  Process
                </a>
                <a
                  href="#contact"
                  className={`navlink hover:text-text ${
                    activeSection === "contact" ? "active" : ""
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu */}
            <button
              className="lg:hidden"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>

            {/* Get in touch */}
            <div className="group hidden lg:flex md:items-center md:justify-between gap-2 p-1px rounded-[25px] hover:scale-105 transition duration-300 ease-in-out cursor-pointer shadow-[8px_12px_25px_-3px_rgba(0,0,0,0.1)]">
              <div className="flex items-center gap-2 px-4 py-2 rounded-3xl text-[12px] text-text shadow-[inset_4px_4px_4px_rgba(255,255,255,0.25),inset_-4px_-4px_10px_rgba(0,0,0,1)]" >
                <p>Get in touch</p>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#0a0a0a] flex flex-col mt-1 items-center p-4 gap-8 text-[20px] text-muted rounded-lg"
        >
          <a
            href="#home"
            className={`transition-colors duration-200 ${
              activeSection === "home"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>

          <a
            href="#about"
            className={`transition-colors duration-200 ${
              activeSection === "about"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>

          <a
            href="#services"
            className={`transition-colors duration-200 ${
              activeSection === "services"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>

          <a
            href="#work"
            className={`transition-colors duration-200 ${
              activeSection === "work"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Work
          </a>

          <a
            href="#stack"
            className={`transition-colors duration-200 ${
              activeSection === "stack"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Stack
          </a>
           <a
            href="#process"
            className={`transition-colors duration-200 ${
              activeSection === "process"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Process
          </a>  
          <a
            href="#contact"
            className={`transition-colors duration-200 ${
              activeSection === "contact"
                ? "text-text"
                : "text-muted hover:text-text"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>   
        </nav>
      )}
    </div>
  );
};

export default Navbar;

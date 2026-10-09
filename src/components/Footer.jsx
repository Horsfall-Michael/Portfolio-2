import Reveal from "./UI/Reveal.jsx"
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import whatsapp from "../assets/whatsapp.svg";
import Michael from "../assets/Michael (2).webp";

const Footer = () => {
  const socials = [
    {
      id: 1,
      name: "email",
      link: "horsfallmichael423@gmail.com",
      display: "Horsfall Michael",
      icon: email,
    },
    {
      id: 2,
      name: "linkedin",
      link: "https://ng.linkedin.com/in/michael-horsfall-869b9b343",
      icon: linkedin,
      display: "linkedin.com/Horsfall-Michael",
    },
    {
      id: 3,
      name: "github",
      link: "https://github.com/Horsfall-Michael",
      icon: github,
      display: "github.com/Horsfall-Michael",
    },
    {
      id: 4,
      name: "whatsapp",
      link: "https://wa.me/+2349029195663",
      icon: whatsapp,
      display: "+2349029195663",
    },
  ];
  return (
    <footer className= "py-8 relative">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 py-6">
        <div className="md:w-[50%] min-w-0 flex-1">
            <img src = {Michael} className="rounded-3xl"/>
        </div>
        <div className="flex md:flex-col gap-6 min-w-0 flex-1 justify-evenly w-full">
            
          {socials.map((social) => (
            <Reveal
              key={social.id}
              style={{ transitionDelay: `${social.id * 100}ms` }}
            >
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted flex items-center hover:text-text transition-colors duration-300"
            >
              <img src={social.icon} alt={social.name} className="md:w-10 md:h-10 xl:w-15 xl:h-15 md:mr-3" />
              <p className="hidden md:flex">{social.display}</p>
            </a>
            </Reveal>
          ))}
        </div>
      </div>
      <h2 className="text-[18px] font-semibold text-text text-left">
            Let's Connect
          </h2>
      <div className="flex items-center gap-4 py-6 text-xs text-muted justify-between">
        <p>© 2026 All rights reserved.</p>
        <p>
          Designed & Built by{" "}
          <span className="text-text">Horsfall Michael</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

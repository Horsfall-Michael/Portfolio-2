import resqura from "../../assets/resqura.webp";
import myedupal from "../../assets/myedupal.webp";
import amazonCopy from "../../assets/amazon-copy.webp";
import decisionMaker from "../../assets/decision-maker.webp";
import conferenceTicketGenerator from "../../assets/confrence-ticket-generator.webp";
import linearLandingPage from "../../assets/linear-landing-page.webp";
const projects = [
  {
    id: 1,
    title: "Resqura",
    description:
      "A responsive healthcare platform designed with a clean interface and accessible user experience.",
    image: resqura,
    technologies: ["React", "Tailwind CSS", "JavaScript", "NextJs"],
    tags: [
      "Web Development",
      "Responsive Design",
      "Figma to Code",
      "Dashboard",
      "Landing Page",
    ],
    category: ["live", "featured"],
    link: "https://resqura.health",
  },

  {
    id: 2,
    title: "My EduPal",
    description:
      "A student platform designed to help students connect, share resources, and collaborate.",
    image: myedupal,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    tags: [
      "Web Development",
      "Responsive Design",
      "Figma to Code",
      "Dashboard",
      "Landing Page",
    ],
    category: ["live", "featured"],
    link: "https://myedupal.netlify.app/",
  },

  {
    id: 3,
    title: "Amazon Copy",
    description:
      "A responsive recreation of the Amazon shopping interface focused on layout, responsiveness, and interaction.",
    image: amazonCopy,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    tags: [
      "Web Development",
      "Copy",
      "Responsive Design",
      "E-commerce",
      "Practice",
    ],
    category: ["live", "featured"],
    link: "https://amazon-web-copy.netlify.app/",
  },

  {
    id: 4,
    title: "Decision Maker",
    description:
      "A React app that helps users make a choice between multiple options by randomly selecting one.",
    image: decisionMaker,
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    tags: ["Web Development", "UI/UX Design", "Responsive Design", "Practice"],
    category: ["live"],
    link: "https://descision-maker-pro.netlify.app/",
  },

  {
    id: 5,
    title: "Conference Ticket Generator",
    description:
      "A frontend app that lets users register for a coding conference and generate personalized tickets.",
    image: conferenceTicketGenerator,
    technologies: ["HTML", "CSS", "JavaScript"],
    tags: ["Web Development", "Figma to Code", "Responsive Design", "Practice", "Ftontend Mentor"],
    category: ["live"],
    link: "https://descision-maker-pro.netlify.app/",
  },

  {  id: 6,
    title: "Linear Landing Page",
    description:
      "A copy of the linear Landing page created from the figma file. ",
    image: linearLandingPage,
    technologies: ["HTML", "CSS"],
    tags: ["Web Development", "Figma to Code", "Responsive Design", "Practice"],
    category: ["live"],
    link: "https://linear-landing-page.netlify.app/",
  },
];

export default projects;

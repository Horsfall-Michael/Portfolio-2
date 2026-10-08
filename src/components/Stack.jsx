import MovingStack from "./UI/MovingStack.jsx";
import Reveal from "./UI/Reveal.jsx";
import figma from "../assets/Figma.svg";
import html from "../assets/HTML.svg";
import css from "../assets/CSS.svg";
import js from "../assets/JavaScript.svg";
import react from "../assets/React.svg";
import tailwind from "../assets/Tailwind.svg";
import nextjs from "../assets/NextJs.svg";
import git from "../assets/Git.svg";
import supabase from "../assets/Supabase.svg";

const Stack = () => {
  const stack = [
    {
      id: 1,
      name: "HTML",
      logo: html,
    },
    {
      id: 2,
      name: "CSS",
      logo: css,
    },
    {
      id: 3,
      name: "JavaScript",
      logo: js,
    },
    {
      id: 4,
      name: "React",
      logo: react,
    },
    {
      id: 5,
      name: "Tailwind",
      logo: tailwind,
    },
    {
      id: 6,
      name: "NextJs",
      logo: nextjs,
    },
    {
      id: 7,
      name: "Git",
      logo: git,
    },
    {
      id: 8,
      name: "Supabase",
      logo: supabase,
    },
    {
      id: 9,
      name: "Figma",
      logo: figma,
    },
  ];

  return (
    <section id="stack" className="mt-10">
      <Reveal>
        <div className="relative flex gap-3">
          <p className="text-sm font-medium text-muted mb-4">Tools & Skills</p>
          <p className="section-number">04</p>
        </div>
      </Reveal>
      <div className="flex flex-col gap-5 md:gap-4 mb-2">
        <Reveal style={{ transitionDelay: "150ms" }}>
          <div>
            <h2 className="text-header-color font-semibold text-[22px]">
              Technologies I Use
            </h2>

            <p className="text-sm text-muted mt-3">
              My tech stack currently includes the following
            </p>
          </div>
        </Reveal>

        <div className="flex flex-wrap gap-2 md:mt-6 mb-8">
          {stack.map((item) => (
            <Reveal
              style={{ transitionDelay: `${item.id * 50}ms` }}
              key={item.id}
            >
              <div
                key={item.id}
                className="flex items-center gap-2 mt-3 bg-linear-to-br from-[#0B0E17]  to-[#0B0E17]/40 px-4 py-2 rounded-full shadow-[inset_0_6px_25px_5px_rgba(0,0,0,1),_inset_0_-4px_10px_rgba(255,255,255,0.3)] border border-[#252A38] transition-all duration-300 hover:-translate-y-2 hover:drop-shadow-[8px_12px_25px_rgba(255,255,255,0.10)]"
              >
                <img src={item.logo} alt={item.name} className="w-6 h-6" />

                <p className="text-sm text-muted">{item.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal style={{ transitionDelay: "150ms" }}>
          <MovingStack />
        </Reveal>
      </div>
      <hr className="border-border md:mt-12" />
    </section>
  );
};

export default Stack;

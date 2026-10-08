import Reveal from "./UI/Reveal.jsx";
import processLine from "../assets/Processline.svg";
const Process = () => {
  const workflow = [
    {
      id: 1,
      name: "Identify the scope",
      description:
        "In this stage I identify the goals of the project, map out the users, set the scope and shoose a stack",
    },
    {
      id: 2,
      name: "Design the system",
      description:
        "In this stage I map out the work flow, create the components, plan the use states, etc. ",
    },
    {
      id: 3,
      name: "Build the system",
      description:
        "I paint the front-end, connect the logic and functionalities, integrate the CMS and APIs and clean up the code",
    },
    {
      id: 4,
      name: "Test the system",
      description:
        "I tests screens and workflows, review speed, check SEO and fix friction.",
    },
    {
      id: 5,
      name: "Ship the project",
      description:
        "Here I deploy the project, hand it off to the owner(s), track performance and any issues that may pop up and fix them.",
    },
  ];
  return (
    <section id="process" className="mt-10">
      <Reveal>
        <div className="relative flex gap-3">
          <p className="text-sm font-medium text-muted mb-4">Process</p>
          <p className="section-number">05</p>
        </div>
      </Reveal>

      <div className="lg:hidden">
        <Reveal>
          <h2 className="text-header-color font-semibold text-[22px]">
            Workflow
          </h2>
        </Reveal>
        <div className="flex flex-col gap-2 mt-[12px] md:mt-6 mb-8">
          {workflow.map((item) => (
            <Reveal
              style={{ transitionDelay: `${item.id * 50}ms` }}
              key={item.id}
            >
              <div
                key={item.id}
                className="p-2  font-semibold flex items-center gap-4 text-muted"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full number">
                  <p>{String(item.id).padStart(2, "0")}</p>
                </div>
                <p className="text-[16px]">{item.name}</p>
              </div>
              <hr className="border-border" />
            </Reveal>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex md:flex-col items-center">
        <Reveal>
          <div className="flex flex-col items-center mt-8">
            <hr className="w-20 border-0 border-t border-header-color" />
            <h2 className="text-[22px] font-semibold text-header-color">
              Workflow
            </h2>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-5 items-center relative">
              <div />
              <div>
                <p className="text-text text-center">{workflow[1].name}</p>
                <p className="text-muted text-center">
                  {workflow[1].description}
                </p>
              </div>
              <div />
              <div>
                <p className="text-text text-center">{workflow[3].name}</p>
                <p className="text-muted text-center">
                  {workflow[3].description}
                </p>
              </div>
              <div />
            </div>

            <div className="flex items-center justify-center mt-2 mb-2">
              <img src={processLine} alt="" className="w-[85%]" />
            </div>

            <div className="grid grid-cols-5 items-center relative">
              <div>
                <p className="text-text text-center">{workflow[0].name}</p>
                <p className="text-muted text-center">
                  {workflow[0].description}
                </p>
              </div>
              <div></div>
              <div>
                <p className="text-text text-center">{workflow[2].name}</p>
                <p className="text-muted text-center">
                  {workflow[2].description}
                </p>
              </div>
              <div></div>
              <div>
                <p className="text-text text-center">{workflow[4].name}</p>
                <p className="text-muted text-center">
                  {workflow[4].description}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <hr className="border-border mt-6" />
    </section>
  );
};
export default Process;

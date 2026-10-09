import { useState } from "react";
import Reveal from "./UI/Reveal.jsx";
import projects from "./data/Projects.js";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("featured");
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeFilter));
  const filters = [
    { label: "Featured", value: "featured" },
    { label: "Live", value: "live" },
    { label: "Offline", value: "offline" },
    { label: "All", value: "all" },
  ];

  return (
    <section id="work" className="mt-10">
      {/* Section heading */}

      <Reveal style={{ transitionDelay: "100ms" }}>
        <div className="relative flex gap-3">
          <p className="mb-4 text-sm font-medium text-muted">
            Featured Projects
          </p>

          <p className="section-number">03</p>
        </div>
      </Reveal>
      <div className="mb-16 flex flex-col gap-10 text-[22px]">
        {/* Heading */}
        <Reveal style={{ transitionDelay: "150ms" }}>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h2 className="text-header-color font-semibold">Selected Works</h2>

            <div className="flex gap-2 z-50 border border-[#252A38] rounded-full px-2 py-1 shadow-[inset_0_6px_25px_5px_rgba(0,0,0,1),_inset_0_-4px_10px_rgba(255,255,255,0.3)] bg-linear-to-br from-[#0B0E17]  to-[#0B0E17]/40 w-fit">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 text-sm transition-all duration-300 ${
                    activeFilter === filter.value
                      ? " text-header-color"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
        {/* Project cards */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 relative">
          {filteredProjects.map((project) => (
            <Reveal
              key={project.id}
              style={{ transitionDelay: `${project.id * 100}ms` }}
            >
              <article className="relative rounded-2xlp-px transition-all duration-300 hover:-translate-y-2">
                <div className="h-full rounded-2xl bg-linear-to-br from-[#0B0E17] to-[#0B0E17]/40 p-4">
                  {/* Project image */}
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute left-7 top-7 flex h-6 min-w-20 items-center justify-center rounded-full bg-white px-3 shadow-[4px_10px_30px_rgba(0,0,0,0.35)]">
                    {project.category.includes("live") ? (
                      <span className="flex items-center gap-2 text-xs text-[#0B0E17]">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-[#0066FF]" />
                        Live
                      </span>
                    ) : (
                      <span className="text-xs text-[#0B0E17]">Offline</span>
                    )}
                  </div>

                  {/* Project information */}
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-medium text-text">
                        {project.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-muted">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#252A38] px-3 py-1 text-xs text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Bottom section */}
                    <div className="mt-6 items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="text-xs text-muted mb-4"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[#0066FF] px-4 py-2 text-xs text-text transition-all duration-300 hover:border-[#47506B] hover:bg-[#252A38]"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <hr className="mt-6 border-border" />
    </section>
  );
};

export default Work;

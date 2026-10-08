const MovingStack = () => {
  const rowOne = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Next.js",
  ];

  const rowTwo = [
    "Git",
    "GitHub",
    "Supabase",
    "Figma",
    "Responsive Design",
    "UI/UX Development",
    "Git",
    "GitHub",
    "Supabase",
    "Figma",
    "Responsive Design",
    "UI/UX Development",
  ];

  return (
    <div className=" hidden md:block overflow-hidden space-y-4">

      {/* Row 1 → */}
      <div className="overflow-hidden border border-[#252A38] rounded-full p-3 ">
        <div className="flex w-max animate-marquee-left">

          {/* Group 1 */}
          <div className="flex shrink-0">
            {rowOne.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4"
              >
                <span className="text-sm text-muted whitespace-nowrap">
                  {item}
                </span>

                <span className="text-muted">✦</span>
              </div>
            ))}
          </div>

          {/* Group 2 - exact duplicate */}
          <div className="flex shrink-0">
            {rowOne.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4"
              >
                <span className="text-sm text-muted whitespace-nowrap">
                  {item}
                </span>

                <span className="text-muted">✦</span>
              </div>
            ))}
          </div>

        </div>
      </div>


      {/* Row 2 ← */}
      <div className="overflow-hidden border border-[#252A38] rounded-full p-3">
        <div className="flex w-max animate-marquee-right">

          {/* Group 1 */}
          <div className="flex shrink-0">
            {rowTwo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4"
              >
                <span className="text-sm text-muted whitespace-nowrap">
                  {item}
                </span>

                <span className="text-muted">✦</span>
              </div>
            ))}
          </div>

          {/* Group 2 */}
          <div className="flex shrink-0">
            {rowTwo.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4"
              >
                <span className="text-sm text-muted whitespace-nowrap">
                  {item}
                </span>

                <span className="text-muted">✦</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};

export default MovingStack;
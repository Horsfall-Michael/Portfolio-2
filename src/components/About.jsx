import Reveal from "./UI/Reveal";

const About = () => {
  return (
    <>
      <section id="about" className="mt-10 mb-10 relative">
        <Reveal style={{ transitionDelay: "100ms" }}>
          <div className="flex gap-3">
            <p className="text-sm font-medium text-muted mb-4">About me</p>
            <p className="section-number">01</p>
          </div>
        </Reveal>

        <Reveal style={{ transitionDelay: "200ms" }}>
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-16">
            <div className="md:w-[50%]">
              <h2 className="text-xl font-medium text-text">
                I like to turn Ideas into things that people can actually use{" "}
              </h2>
              <p className="text-sm font-semibold weight text-muted mt-3">
                I'm a frontend developer with a BSc in Computer Science. I build
                in React and Tailwind, usually starting from a Figma file and
                finishing with a page that works as well on a phone as on a
                desktop. Around the interface, I handle the connecting work:
                pulling in data from APIs, covering loading and error states, and
                setting up metadata so shared links look right.
              </p>
            </div>

            <div className="md:flex flex-col bg-[#0B0E17] z-0 border border-[#252A38] rounded-lg p-6">
              <h3 className="text-lg font-bold text-text">
                Building with curiosity + code.
              </h3>
              <p className="text-sm text-muted mt-2">
                Websites • UI • Motion • Performance • APIs
              </p>
            </div>
          </div>
        </Reveal>

        <hr className="border-border border-[muted] mt-6" />
      </section>
    </>
  );
};

export default About;

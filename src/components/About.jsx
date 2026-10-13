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
            <div className="md:w-[80%] lg:w-[50%]">
              <h2 className="text-xl font-medium text-text">
                From Design to Deployment{" "}
              </h2>
              <p className="text-sm font-medium weight text-muted mt-3">
                I'm a frontend developer with a BSc in Computer Science. I build
                projects in frameworks like React and NextJS, usually starting from a Figma file and
                finishing with a page that works as well on a phone as on a
                desktop. Beyond the interface, I build interactive components, manage application state, integrate APIs and backend services, and handle loading, error, and form-validation states. I also focus on reusable code, accessibility, performance, and the details that make a website reliable, from debugging to deployment..
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

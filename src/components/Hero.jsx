import heroBg from "../assets/Union-1.svg";
import arrow from "../assets/arrow.svg";
import download from "../assets/download.svg";
import potrait from "../assets/potrait.png";
const Hero = () => {
  return (
    <header id="home" className="relative">
      <div>
        <img
          src={heroBg}
          alt="Hero Background"
          className=" hidden md:block w-[70%] h-auto absolute -top-30 -right-20 z-0 pointer-events-none opacity-40"
        />
      </div>
      <div className="pt-10 flex flex-col gap-10 md:flex-row justify-center items-center mt-18 xl:mt-25">
        <div className="">
          <div className="font-bold text-white text-4xl md:text-[34px] lg:text-[50px] leading-[1.2] ">
            <p className="text-[14px] font-medium">Hi, I'm Michael</p>
            <h1 className="">I BUILD DIGITAL</h1>
            <h1 className="font-bold text-header-color">EXPERIENCES</h1>
          </div>
          <p className="text-muted text-[14px] md:text-[14px] mt-2 md:mt-6 max-w-120">
            Frontend developer creating fast, responsive and interactive web
            experiences. I turn ideas into clean, functional and beautiful
            interfaces.
          </p>
          <div className="flex md:w-[50vw] lg:flex-row gap-4 md:mb-5">
            <a
              href="#work"
              className="mt-4 md:mt-8 inline-block bg-white/2 shadow-[4px_4px_20px_rgba(255,255,255,0.13),inset_4px_4px_4px_rgba(255,255,255,0.08)] text-white px-6 py-3 rounded-full text-[12px] md:text-[16px] font-medium hover:bg-white/10 transition duration-300 border border-white/30"
            >
              View My Work{" "}
              <img
                src={arrow}
                alt="Arrow"
                className="w-5 h-5 ml-2 inline-block"
              />
            </a>
            <a
              download="Michael_Horsfall_Resume.pdf"
              href="/assets/Michael_Horsfall_Resume.pdf"
              className="mt-4 md:mt-8 inline-block bg-white/2 shadow-[4px_4px_20px_rgba(255,255,255,0.13),inset_4px_4px_4px_rgba(255,255,255,0.08)] text-white px-6 py-3 rounded-full text-[14px] md:text-[16px] font-medium hover:bg-white/10 transition duration-300 border border-white/30"
            >
              Download CV{" "}
              <img
                src={download}
                alt="Download CV"
                className="w-5 h-5 ml-2 inline-block"
              />
            </a>
          </div>
        </div>
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,102,225,0.5),_transparent_70%)] blur-2xl md:hidden" />

          <img
            src={potrait}
            alt="Michael Horsfall"
            aria-label="Michael Horsfall"
            className="relative w-75 md:w-80 lg:w-100"
          />
        </div>
      </div>
      <hr className="border-border border-[muted] " />
    </header>
  );
};

export default Hero;

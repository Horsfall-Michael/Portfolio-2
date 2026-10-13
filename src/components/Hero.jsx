import heroBg from "../assets/Union-1.svg";
import arrow from "../assets/arrow.svg";
import download from "../assets/download.svg";
import potrait from "../assets/potrait.png";
const Hero = () => {
  return (
    <section id="home" className="relative">
      <div className="">
        <img
          src={heroBg}
          alt="Hero Background"
          className=" hidden md:block w-[70%] h-auto absolute -top-30 -right-20 z-0 pointer-events-none opacity-40"
        />
      </div>
      <div className="pt-10 flex flex-col gap-10 md:flex-row justify-center items-center mt-18 xl:mt-25">
        <div className="animate-slide-left">
          <div className="font-bold text-white leading-[1.2] ">
            <p className="text-[14px] font-medium mb-2">Hi, I'm Michael</p>
            <h1 className="text-xl md:text-[24px] lg:text-[30px] xl:text-[40px]">I BUILD THE PART OF THE WEB YOU TOUCH.</h1>
            <h2 className="text-header-color text-xl md:text-[18px] lg:text-[25px] xl:text-[30px]">AND EVERYTHING HOLDING IT UP.</h2>
          </div>
          <p className="text-muted text-[14px] md:text-[14px] mt-2 md:mt-6 max-w-120">
            Frontend developer. On the surface: buttons, forms, layouts and the
            small details that decide whether a site feels right. Underneath:
            API calls that fail gracefully, state that stays in sync, metadata
            that makes a shared link look right, and pages that load before you
            lose patience
          </p>
          <div className="flex flex-col md:flex-row md:w-[50vw] gap-4 md:mb-5">
            <a
              href="#work"
              className="mt-4 md:mt-8 flex justify-center items-center bg-white/2 shadow-[4px_4px_20px_rgba(255,255,255,0.13),inset_4px_4px_4px_rgba(255,255,255,0.08)] text-white px-6 py-3 rounded-full text-[12px] md:text-[16px] font-medium hover:bg-white/10 transition duration-300 border border-white/30"
            >
              View My Work{" "}
              <img
                src={arrow}
                alt="Arrow"
                className="w-4 h-4 ml-2 inline-block rotate-135"
              />
            </a>
            <a
              download="Michael_Horsfall_Resume.pdf"
              href="/Horsfall-Michael-CV.pdf"
              className="mt-4 md:mt-8 flex justify-center items-center bg-white/2 shadow-[4px_4px_20px_rgba(255,255,255,0.13),inset_4px_4px_4px_rgba(255,255,255,0.08)] text-white px-6 py-3 rounded-full text-[14px] md:text-[16px] font-medium hover:bg-white/10 transition duration-300 border border-white/30"
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
        <div className="relative w-full flex justify-center md:justify-end animate-slide-right">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,225,0.5),transparent_70%)] blur-2xl md:hidden" />

          <img
            src={potrait}
            alt="Michael Horsfall"
            aria-label="Michael Horsfall"
            className="relative w-75 md:w-80 lg:w-100"
          />
        </div>
      </div>
      <hr className=" border border-[muted] " />
    </section>
  );
};

export default Hero;

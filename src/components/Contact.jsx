import Reveal from "./UI/Reveal.jsx";
import submit from "../assets/submit.svg";
const Contact = () => {
  return (
    <section id="contact" className="mt-10">
      <Reveal>
        <div className="relative flex gap-3">
          <p className="text-sm font-medium text-muted mb-4">Contact</p>
          <p className="section-number">06</p>
        </div>
      </Reveal>
      <Reveal style={{ transitionDelay: "100ms" }}>
        <h2 className="text font-semibold text-[22px] text-header-color">
          Have an idea? Let me build it.
        </h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="flex flex-col mt-6 gap-10 px-5 py-10 rounded-4xl bg-linear-to-br from-[#0B0E17]/40 to-[#0B0E17]/20 border border-border"
        >
          <input type="hidden" name="form-name" value="contact" />

          <div className="hidden">
            <label>
              Don't fill this out if you're human:
              <input name="bot-field" />
            </label>
          </div>

          <div className="flex w-full flex-col gap-10 md:flex-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
              className="w-full min-w-0 flex-1 rounded-lg border border-border bg-linear-to-br from-[#0B0E17]/60 to-[#0B0E17]/40 px-4 py-3 text-text outline-none transition focus:border-[#0066FF] shadow-[inset_0px_6px_25px_5px_rgba(0,0,0,1),inset_0_-4px_10px_rgba(255,255,255,0.1)]"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              autoComplete="email"
              className="w-full min-w-0 flex-1 rounded-lg border border-border bg-linear-to-br from-[#0B0E17]/60 to-[#0B0E17]/40 px-4 py-3 text-text outline-none transition focus:border-[#0066FF] shadow-[inset_0px_6px_25px_5px_rgba(0,0,0,1),inset_0_-4px_10px_rgba(255,255,255,0.1)]"
            />
          </div>

          <div className="flex flex-col gap-10">
            <select
              id="projectType"
              name="projectType"
              required
              defaultValue=""
              className="scheme:dark w-full rounded-lg border border-border bg-linear-to-br from-[#0B0E17]/60 to-[#0B0E17]/40 px-4 py-3 text-muted outline-none transition focus:border-[#0066FF] shadow-[inset_0px_6px_25px_5px_rgba(0,0,0,1),inset_0_-4px_10px_rgba(255,255,255,0.1)]"
            >
              <option value="" disabled>
                Project Type
              </option>
              <option value="website">Website</option>
              <option value="landing-page">Landing Page</option>
              <option value="web-app">Web App</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="ecommerce">E-commerce</option>
              <option value="redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>

            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Project Details"
              required
              className="resize-none rounded-lg border border-border bg-linear-to-br from-[#0B0E17]/60 to-[#0B0E17]/40 px-4 py-3 text-muted outline-none transition focus:border-[#0066FF] shadow-[inset_0px_6px_25px_5px_rgba(0,0,0,1),inset_0_-4px_10px_rgba(255,255,255,0.1)]"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg border border-[#0066FF]/50 px-6 py-3 font-medium text-muted transition hover:-translate-y-1 hover:scale-100"
          >
            Send Message
            <img src={submit} alt="" className="ml-2 inline-block h-6 w-6" />
          </button>
        </form>
      </Reveal>
      <hr className="lg:block border-border mt-6" />
    </section>
  );
};

export default Contact;

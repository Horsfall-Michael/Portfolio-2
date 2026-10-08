import { useState } from "react";
import arrow from "../assets/arrow.svg";

const Services = () => {
  const [openService, setOpenService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Custom Website Development",
      description:
        "I build modern, responsive websites tailored to your business, brand, or personal goals. Each website is built with clean code, responsive layouts, and a focus on performance.",
    },
    {
      id: 2,
      title: "UI/UX Implementation",
      description:
        "I turn designs and ideas into responsive, interactive interfaces that closely match the intended visual experience while maintaining usability across devices.",
    },
    {
      id: 3,
      title: "Data Integration & APIs",
      description:
        "I connect websites and applications to APIs and backend services, allowing them to work with real-time data, authentication, databases, and external services.",
    },
    {
      id: 4,
      title: "Performance Optimization",
      description:
        "I optimize websites for faster loading, better responsiveness, and improved user experience across different devices and network conditions.",
    },
  ];

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <section id="services">
      <div className="relative flex gap-3">
        <p className="text-sm font-medium text-muted mb-4">Services</p>
        <p className="section-number">02</p>
      </div>

      <div className="flex flex-col gap-10 md:gap-4 mb-16">
        <div className="">
          <h2 className="text-header-color font-semibold text-[22px]">
            Services I Provide
          </h2>

          <p className="text-sm text-muted mt-3">
            I help businesses and creators turn their ideas to life with modern,
            responsive and scalable web solutions. I offer a range of services
            to help you build and enhance your digital presence. From responsive
            web design to interactive user interfaces, I am dedicated to
            delivering high-quality solutions that meet your needs.
          </p>
        </div>

        <div className="md:hidden w-full">
          {services.map((service) => {
            const isOpen = openService === service.id;

            return (
              <div
                key={service.id}
                className="inline-block mt-2 w-full rounded-2xl bg-linear-to-br from-[#252A38] via-[#47506B]/30 to-[#68779E]/20 p-px"
              >
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  aria-expanded={isOpen}
                  className="rounded-2xl bg-linear-to-br from-[#0B0E17] to-[#0B0E17]/40 p-4 text-text text-left"
                >
                  {" "}
                  <div className="w-full flex items-center justify-between">
                    <span>{service.title}</span>
                    <img
                      src={arrow}
                      alt=""
                      className={`ml-2 transition-transform duration-300 ${
                        isOpen ? "rotate-[315deg]" : "rotate-[135deg]"
                      }`}
                    />
                  </div>
                  <div
                    className={`grid transition-all duration-300 ease-in-out  ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-2 pb-2 pt-4 text-sm leading-6 text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full grid-cols-2 gap-4 hidden md:grid">
          {services.map((service) => {
           
            return (
              <div
                key={service.id}
                className="inline-block mt-2 w-full rounded-2xl bg-linear-to-br from-[#252A38] via-[#47506B]/30 to-[#68779E]/20 p-px"
              >
                <button
                  type="button"
                  onClick={() => toggleService(service.id)}
                  className="rounded-2xl bg-linear-to-br from-[#0B0E17] to-[#0B0E17]/40 p-4 text-text text-left h-full"
                >
                  {" "}
                  <div className="w-full flex items-center justify-between">
                    <span className="text-[18px] font-semibold">
                      {service.title}
                    </span>
                  </div>
                  <div className="grid transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="px-2 pb-2 pt-4 text-sm leading-6 text-muted">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="border-border mt-6" />
    </section>
  );
};

export default Services;

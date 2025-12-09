import React from "react";

function HeroHome() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("registration-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative" id="heroHome">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#2563EB" stopOpacity="0.1" offset="0%" />
              <stop stopColor="#2563EB" stopOpacity="0.05" offset="77.402%" />
              <stop stopColor="#2563EB" stopOpacity="0" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-20  md:pt-28 md:pb-20">
          {/* Section header */}
          <div className="text-center ">
            <h1
              style={{ fontFamily: "'Cairo', sans-serif" }}
              className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
              dir="rtl"
            >
              منصة{" "}
              <span className="bg-clip-text text-transparent bg-blue-600 font-bold">
                وَصْل
              </span>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-xl text-gray-600 mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
                dir="rtl"
              >
                منصة تجمع مقدّمي الخدمات المحليين والمستقلين مع العملاء
              </p>
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                data-aos="zoom-y-out"
                data-aos-delay="300"
              >
                <div>
                  <a
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#registration-form"
                    onClick={scrollToForm}
                    dir="rtl"
                  >
                    سجّل كمقدّم خدمة
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero illustration */}
          <div
            className="relative flex justify-center mt-10 "
            data-aos="zoom-y-out"
            data-aos-delay="450"
          >
            <img
              src="/images/main.jpg"
              alt="واصل - منصة الخدمات"
              className="w-full max-w-2xl md:max-w-xl lg:max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;

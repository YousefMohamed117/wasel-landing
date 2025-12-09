import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  const scrollToSection = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-30 transition duration-300 ease-in-out ${
        !top ? "bg-white shadow-lg" : "bg-white bg-opacity-95"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center flex-row-reverse justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group" aria-label="Wasel">
              <img
                src="/images/logo.png"
                alt="واصل"
                className="h-16 w-auto md:h-20 transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-grow">
            <ul className="flex flex-grow justify-start items-center space-x-1 space-x-reverse flex-row">
              <li>
                <a
                  href="#hero"
                  onClick={scrollToSection("heroHome")}
                  className="relative font-medium text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300 ease-in-out group"
                >
                  <span className="relative z-10">الرئيسية</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  onClick={scrollToSection("featuresBlocks")}
                  className="relative font-medium text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300 ease-in-out group"
                >
                  <span className="relative z-10">المميزات</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#registration-form"
                  onClick={scrollToSection("registration-form")}
                  className="relative font-medium text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300 ease-in-out group"
                >
                  <span className="relative z-10">الخدمات</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={scrollToSection("faq")}
                  className="relative font-medium text-gray-600 hover:text-blue-600 px-4 py-2 transition duration-300 ease-in-out group"
                >
                  <span className="relative z-10">الأسئلة</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="mr-3">
                <a
                  href="#registration-form"
                  onClick={scrollToSection("registration-form")}
                  className="btn-sm text-white bg-blue-600 hover:bg-blue-700 shadow inline-flex items-center transform hover:scale-105 transition duration-300"
                >
                  <span>سجّل الآن</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;

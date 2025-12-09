import React from "react";

function Features() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("registration-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative" id="features">
      {/* Section background */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4" dir="rtl">
              ما هي منصة واصل؟
            </h2>
            <p className="text-xl text-gray-600" dir="rtl">
              منصّة واصل تربط بين العملاء ومقدّمي الخدمات، سواء كانوا مستقليّن
              أو محليين، لتوفير حل سريع، احترافي، وسهل من مكان واحد.
            </p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8" dir="rtl">
                <h3 className="h3 mb-3">هدفنا</h3>
                <p className="text-xl text-gray-600">
                  تمكين أصحاب المهارات والمحلات التجارية من الوصول لعملاء جدد
                  وفتح فرص دخل جديدة من خلال منصة موحدة وسهلة الاستخدام.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-4" dir="rtl">
                <div className="flex items-start bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full shadow flex-shrink-0 ml-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-snug tracking-tight mb-1">
                      منصة شاملة
                    </div>
                    <div className="text-gray-600">
                      تجمع بين المستقلين ومقدمي الخدمات المحليين في مكان واحد
                    </div>
                  </div>
                </div>

                <div className="flex items-start bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full shadow flex-shrink-0 ml-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-snug tracking-tight mb-1">
                      فرص أكبر للعمل
                    </div>
                    <div className="text-gray-600">
                      وصول مباشر لعملاء يبحثون عن خدماتك بشكل مستمر
                    </div>
                  </div>
                </div>

                <div className="flex items-start bg-white shadow-md rounded-lg p-5 border border-gray-200">
                  <div className="flex justify-center items-center w-10 h-10 bg-blue-600 rounded-full shadow flex-shrink-0 ml-4">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-lg leading-snug tracking-tight mb-1">
                      نظام واضح ومباشر
                    </div>
                    <div className="text-gray-600">
                      إدارة الطلبات والتواصل مع العملاء بكل سهولة
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-8" dir="rtl">
                <a
                  className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto"
                  href="#registration-form"
                  onClick={scrollToForm}
                >
                  انضم الآن كمقدم خدمة
                </a>
              </div>
            </div>

            {/* Image/Illustration */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
            >
              <div className="relative flex flex-col items-center">
                {/* Placeholder illustration - replace with Wasel specific image */}
                <div className="relative w-full max-w-md">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg shadow-2xl p-8 md:p-12">
                    <svg
                      className="w-full h-auto text-white opacity-90"
                      viewBox="0 0 200 200"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M100 20C55.8 20 20 55.8 20 100s35.8 80 80 80 80-35.8 80-80-35.8-80-80-80zm0 140c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" />
                      <path d="M100 70c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 45c-8.3 0-15-6.7-15-15s6.7-15 15-15 15 6.7 15 15-6.7 15-15 15z" />
                      <circle cx="100" cy="100" r="8" fill="white" />
                    </svg>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;

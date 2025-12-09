import React, { useState } from "react";

function Newsletter() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "هل التسجيل في المنصة مجاني؟",
      answer:
        "نعم، التسجيل في منصة وصل مجاني تماماً. يمكنك إنشاء حسابك وعرض خدماتك دون أي رسوم مقدمة.",
    },
    {
      question: "متى سيتم إطلاق المنصة رسمياً؟",
      answer:
        "نعمل حالياً على الإطلاق الرسمي للمنصة قريباً. المسجلون الأوائل سيحصلون على الأولوية في التفعيل وسيتم إخطارهم فور جاهزية المنصة.",
    },
    {
      question: "هل أحتاج سجل تجاري للتسجيل؟",
      answer:
        "لا، السجل التجاري غير مطلوب. يمكن لأي مقدم خدمة سواء كان مستقلاً أو صاحب عمل محلي التسجيل في المنصة.",
    },
    {
      question: "كيف سأتواصل مع العملاء؟",
      answer:
        "ستوفر المنصة نظام تواصل مباشر بينك وبين العملاء، مع إمكانية إدارة الطلبات والمشاريع بشكل منظم وآمن.",
    },
  ];

  return (
    <section id="faq">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="relative bg-gray-900 rounded-lg py-12 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden"
            data-aos="zoom-y-out"
          >
            <div
              className="absolute right-0 bottom-0 pointer-events-none hidden lg:block"
              aria-hidden="true"
            >
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient
                    cx="35.542%"
                    cy="34.553%"
                    fx="35.542%"
                    fy="34.553%"
                    r="96.031%"
                    id="ni-a"
                  >
                    <stop stopColor="#2563EB" stopOpacity="0.16" offset="0%" />
                    <stop
                      stopColor="#1E40AF"
                      stopOpacity="0.12"
                      offset="44.317%"
                    />
                    <stop
                      stopColor="#1E3A8A"
                      stopOpacity="0.08"
                      offset="100%"
                    />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse
                      fillOpacity=".04"
                      cx="185"
                      cy="15.576"
                      rx="16"
                      ry="15.576"
                    />
                    <ellipse
                      fillOpacity=".24"
                      cx="100"
                      cy="68.402"
                      rx="24"
                      ry="23.364"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="29"
                      cy="251.231"
                      rx="29"
                      ry="28.231"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="29"
                      cy="251.231"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="342"
                      cy="31.303"
                      rx="8"
                      ry="7.788"
                    />
                    <ellipse
                      fillOpacity=".48"
                      cx="62"
                      cy="126.811"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".12"
                      cx="78"
                      cy="7.072"
                      rx="2"
                      ry="1.947"
                    />
                    <ellipse
                      fillOpacity=".64"
                      cx="185"
                      cy="15.576"
                      rx="6"
                      ry="5.841"
                    />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative">
              <div className="text-center mb-10" dir="rtl">
                <h3 className="h3 text-white mb-3">الأسئلة الشائعة</h3>
                <p className="text-gray-300 text-lg">
                  إجابات سريعة على أكثر الأسئلة شيوعاً
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4" dir="rtl">
                {faqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-200"
                    >
                      <button
                        className="w-full text-right px-6 py-5 flex justify-between items-center focus:outline-none group"
                        onClick={() => toggleFAQ(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="text-white font-semibold text-lg pr-4 group-hover:text-blue-400 transition-colors duration-200">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-6 h-6 text-blue-500 flex-shrink-0 transform transition-transform duration-500 ease-in-out ${
                            isOpen ? "rotate-180" : ""
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                      <div
                        className="grid overflow-hidden transition-all duration-500 ease-in-out"
                        style={{
                          gridTemplateRows: isOpen ? "1fr" : "0fr",
                        }}
                      >
                        <div className="min-h-0">
                          <div className="px-6 pb-5 text-gray-300 leading-relaxed text-base">
                            {faq.answer}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="text-center mt-10">
                <p className="text-gray-400 mb-4 text-lg">لديك سؤال آخر؟</p>
                <a
                  href="#registration-form"
                  className="btn text-white bg-blue-600 hover:bg-blue-700 shadow inline-flex items-center"
                  onClick={(e) => {
                    e.preventDefault();
                    const formSection =
                      document.getElementById("registration-form");
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  سجّل الآن وتواصل معنا
                  <svg
                    className="w-4 h-4 mr-2 transform rotate-180"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;

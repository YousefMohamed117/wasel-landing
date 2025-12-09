import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "", // Will store full number with country code
    country: "",
    city: "",
    providerType: "",
    services: [],
    description: "",
    portfolioLink: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const freelancerServices = [
    { value: "graphic-designer", label: "مصمم جرافيك" },
    { value: "digital-marketer", label: "مسوّق رقمي" },
    { value: "web-developer", label: "مطوّر مواقع وتطبيقات" },
    { value: "photographer", label: "مصوّر فوتوغرافي" },
    { value: "content-writer", label: "كاتب ومحرر محتوى" },
    { value: "video-editor", label: "مونتير فيديو" },
    { value: "freelancer-other", label: "أخرى" },
  ];

  const localServices = [
    { value: "plumber", label: "سباكة" },
    { value: "carpenter", label: "نجارة" },
    { value: "electrician", label: "كهرباء" },
    { value: "landscaping", label: "تنسيق حدائق" },
    { value: "ac-maintenance", label: "صيانة المكيفات" },
    { value: "painting", label: "دهان وديكور" },
    { value: "local-other", label: "أخرى" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "providerType") {
      setFormData((prev) => ({
        ...prev,
        providerType: value,
        services: [],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      phone: value || "",
    }));
    setPhoneError("");
  };

  const handleServiceToggle = (serviceValue) => {
    setFormData((prev) => {
      const services = prev.services.includes(serviceValue)
        ? prev.services.filter((s) => s !== serviceValue)
        : [...prev.services, serviceValue];
      return { ...prev, services };
    });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setPhoneError("");

    // Validation
    if (!formData.phone || formData.phone.length < 10) {
      setPhoneError("رقم الهاتف غير صحيح");
      setIsSubmitting(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setSubmitError("البريد الإلكتروني غير صحيح");
      setIsSubmitting(false);
      return;
    }

    if (formData.services.length === 0) {
      setSubmitError("يرجى اختيار خدمة واحدة على الأقل");
      setIsSubmitting(false);
      return;
    }

    try {
      const submitData = {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        city: formData.city,
        providerType: formData.providerType,
        services: formData.services, // Array will be handled by Apps Script
        description: formData.description,
        portfolioLink: formData.portfolioLink,
      };

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);

        setTimeout(() => {
          const formSection = document.getElementById("registration-form");
          if (formSection) {
            formSection.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      } else {
        setSubmitError(result.message || "حدث خطأ أثناء الإرسال.");
      }
    } catch (error) {
      setSubmitError("حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewRegistration = () => {
    setSubmitSuccess(false);
    setPhoneError("");
    setSubmitError("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      providerType: "",
      services: [],
      description: "",
      portfolioLink: "",
    });

    setTimeout(() => {
      const formSection = document.getElementById("registration-form");
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const availableServices =
    formData.providerType === "freelancer" ? freelancerServices : localServices;

  return (
    <section id="registration-form" className="relative">
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 flex flex-col items-center shadow-2xl">
            <svg
              className="animate-spin h-12 w-12 text-blue-600 mb-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <p className="text-lg font-medium text-gray-900">جاري الإرسال...</p>
            <p className="text-sm text-gray-600 mt-2">يرجى الانتظار</p>
          </div>
        </div>
      )}

      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-100 to-white pointer-events-none"
        aria-hidden="true"
      ></div>
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

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div
            className="max-w-3xl mx-auto text-center pb-12 md:pb-16"
            dir="rtl"
          >
            <h2 className="h2 mb-4">سجّل الآن كمقدم خدمة</h2>
            <p className="text-xl text-gray-600">
              انضم إلى منصة وصل وابدأ في الوصول لعملاء جدد
            </p>
          </div>

          {/* Form */}
          <div className="max-w-5xl mx-auto">
            <div
              className="bg-white rounded-lg shadow-xl p-8 md:p-12 lg:p-16"
              dir="rtl"
            >
              {submitSuccess ? (
                // Success message
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    شكراً لتسجيلك!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    تم استلام بياناتك بنجاح. سنتواصل معك قريباً عند إطلاق
                    المنصة.
                  </p>

                  <button
                    onClick={handleNewRegistration}
                    className="btn text-white bg-blue-600 hover:bg-blue-700 inline-flex items-center"
                  >
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>تسجيل مقدم خدمة آخر</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Full Name */}
                  <div className="mb-6">
                    <label
                      htmlFor="fullName"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      الاسم الكامل <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      className="form-input w-full text-gray-800 border-gray-300 rounded"
                      placeholder="أدخل اسمك الكامل"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      dir="rtl"
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      البريد الإلكتروني <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-input w-full text-gray-800 border-gray-300 rounded"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      dir="ltr"
                    />
                  </div>

                  {/* Phone with Country Code - USING LIBRARY */}
                  {/* Phone with Country Code */}
                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      رقم الهاتف <span className="text-red-600">*</span>
                    </label>
                    <div
                      className={`flex items-center border rounded ${
                        phoneError ? "border-red-500" : "border-gray-300"
                      } focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100 transition-all`}
                      dir="ltr"
                    >
                      <PhoneInput
                        international
                        defaultCountry="SA"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="أدخل رقم الهاتف"
                        className="phone-input-wrapper"
                      />
                    </div>
                    {phoneError && (
                      <p className="text-sm text-red-600 mt-1 text-right">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  {/* Country */}
                  <div className="mb-6">
                    <label
                      htmlFor="country"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      البلد <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      className="form-input w-full text-gray-800 border-gray-300 rounded"
                      placeholder="مثال: السعودية، مصر، الإمارات"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      dir="rtl"
                    />
                  </div>

                  {/* City */}
                  <div className="mb-6">
                    <label
                      htmlFor="city"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      المدينة <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="city"
                      name="city"
                      type="text"
                      className="form-input w-full text-gray-800 border-gray-300 rounded"
                      placeholder="مثال: الرياض، جدة، الدمام"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      dir="rtl"
                    />
                  </div>

                  {/* Provider Type */}
                  <div className="mb-6">
                    <label className="block text-gray-800 font-medium mb-3 text-right">
                      نوع مقدم الخدمة <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "providerType",
                              value: "freelancer",
                            },
                          })
                        }
                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition ${
                          formData.providerType === "freelancer"
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300 hover:border-blue-400"
                        }`}
                      >
                        <div className="text-3xl mb-2">💼</div>
                        <h4 className="font-bold text-lg">مستقل</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          خدمات رقمية وإبداعية عن بعد
                        </p>
                      </div>

                      <div
                        onClick={() =>
                          handleChange({
                            target: {
                              name: "providerType",
                              value: "local-service",
                            },
                          })
                        }
                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition ${
                          formData.providerType === "local-service"
                            ? "border-blue-600 bg-blue-50"
                            : "border-gray-300 hover:border-blue-400"
                        }`}
                      >
                        <div className="text-3xl mb-2">🔧</div>
                        <h4 className="font-bold text-lg">خدمة محلية</h4>
                        <p className="text-sm text-gray-600 mt-1">
                          خدمات ميدانية ومنزلية
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Services Selection */}
                  {formData.providerType && (
                    <div className="mb-6">
                      <label className="block text-gray-800 font-medium mb-3 text-right">
                        الخدمات المقدمة <span className="text-red-600">*</span>
                        <span className="text-sm text-gray-500 mr-2">
                          (يمكنك اختيار أكثر من خدمة)
                        </span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {availableServices.map((service) => (
                          <label
                            key={service.value}
                            className={`cursor-pointer border-2 rounded-lg p-3 text-center transition ${
                              formData.services.includes(service.value)
                                ? "border-blue-600 bg-blue-50"
                                : "border-gray-300 hover:border-blue-400"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={formData.services.includes(
                                service.value
                              )}
                              onChange={() =>
                                handleServiceToggle(service.value)
                              }
                            />
                            <div className="flex items-center justify-center">
                              <span
                                className={`w-5 h-5 ml-2 rounded border-2 flex items-center justify-center ${
                                  formData.services.includes(service.value)
                                    ? "bg-blue-600 border-blue-600"
                                    : "border-gray-400"
                                }`}
                              >
                                {formData.services.includes(service.value) && (
                                  <svg
                                    className="w-3 h-3 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                )}
                              </span>
                              <span className="font-medium">
                                {service.label}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Description (Optional) */}
                  <div className="mb-6">
                    <label
                      htmlFor="description"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      وصف قصير عن خبرتك أو نشاطك{" "}
                      <span className="text-gray-500">(اختياري)</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows="4"
                      className="form-textarea w-full text-gray-800 border-gray-300 rounded"
                      placeholder="اكتب نبذة مختصرة عن خبرتك ومهاراتك..."
                      value={formData.description}
                      onChange={handleChange}
                      dir="rtl"
                    ></textarea>
                  </div>

                  {/* Portfolio Link (Optional) */}
                  <div className="mb-6">
                    <label
                      htmlFor="portfolioLink"
                      className="block text-gray-800 font-medium mb-2 text-right"
                    >
                      رابط معرض أعمال أو بروفايل{" "}
                      <span className="text-gray-500">(اختياري)</span>
                    </label>
                    <input
                      id="portfolioLink"
                      name="portfolioLink"
                      type="url"
                      className="form-input w-full text-gray-800 border-gray-300 rounded"
                      placeholder="https://behance.net/username"
                      value={formData.portfolioLink}
                      onChange={handleChange}
                      dir="ltr"
                    />
                    <p className="text-sm text-gray-500 mt-2 text-right">
                      مثال: Behance, Instagram, LinkedIn, موقعك الشخصي
                    </p>
                  </div>

                  {/* Error Message */}
                  {submitError && (
                    <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded text-right">
                      {submitError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting || phoneError}
                      className={`btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto px-8 ${
                        isSubmitting || phoneError
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      إرسال التسجيل
                    </button>
                  </div>

                  {/* Privacy Note */}
                  <p className="text-sm text-gray-500 text-center mt-6">
                    بالتسجيل، أنت توافق على{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      شروط الخدمة
                    </a>{" "}
                    و{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                      سياسة الخصوصية
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegistrationForm;

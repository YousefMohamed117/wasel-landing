import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./css/style.scss";

import AOS from "aos";

import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton"; // Add this

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  return (
    <>
      <Home />
      <WhatsAppButton /> {/* Add this */}
    </>
  );
}

export default App;

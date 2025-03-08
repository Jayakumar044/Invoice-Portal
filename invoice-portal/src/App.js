import React, { useContext, useRef } from "react";
import Header from "./components/Header/Header";
import Generator from "./components/Generator/Generator";
import InvoiceGuide from "./components/InvoiceGuide/InvoiceGuide";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import { ThemeContext } from "./theme";
import "./App.css";

const App = () => {
  const { theme } = useContext(ThemeContext);
  const generatorRef = useRef(null);
  const invoiceGuideRef = useRef(null);
  const aboutUsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "Generator" && generatorRef.current) {
      generatorRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "InvoiceGuide" && invoiceGuideRef.current) {
      invoiceGuideRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "AboutUs" && aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`App ${theme}`}>
      <Header scrollToSection={scrollToSection} />
      <main>
        <div ref={generatorRef}>
          <Generator />
        </div>
        <div ref={invoiceGuideRef}>
          <InvoiceGuide />
        </div>
        <div ref={aboutUsRef}>
          <AboutUs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { SectionHeader } from "./components/SectionHeader";

import { SectionFAQ } from "./components/SectionFAQ";
import { SectionQuemSomos } from "./components/SectionQuemSomos";
import useScrollSnap from "react-use-scroll-snap";
import { SectionSolutions } from "./components/SectionSolutions";
import { FooterStyle } from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <div>
        <Header></Header>
        <SectionHeader></SectionHeader>
        <SectionSolutions data-aos="fade-up"></SectionSolutions>
        <SectionFAQ></SectionFAQ>
        <SectionQuemSomos></SectionQuemSomos>
        <FooterStyle></FooterStyle>
      </div>
    </>
  );
}

export default App;

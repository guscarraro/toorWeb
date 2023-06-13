import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import { SectionHeader } from "./components/SectionHeader";
import { SectionSolutions } from "./components/SectionSolutions";
import { SectionFAQ } from "./components/SectionFAQ";
import { SectionQuemSomos } from "./components/SectionQuemSomos";
import useScrollSnap from "react-use-scroll-snap";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header></Header>
        <SectionHeader></SectionHeader>
        <SectionSolutions></SectionSolutions>
        <SectionFAQ></SectionFAQ>
        <SectionQuemSomos></SectionQuemSomos>
      </div>
    </>
  );
}

export default App;

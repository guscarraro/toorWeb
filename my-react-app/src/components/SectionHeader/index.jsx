import React from "react";
import { FirstSection } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
export const SectionHeader = () => {
  Aos.init();

  return (
    <FirstSection>
      <h1 data-aos="fade-right">
        MONITORAMENTO E <br />
        SEGURANÇA DE DADOS
      </h1>
    </FirstSection>
  );
};

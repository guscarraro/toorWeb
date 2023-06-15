import React from "react";
import { FirstSection } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
export const SectionHeader = () => {
  Aos.init();

  return (
    <FirstSection>
      <a
        className="imgWpp"
        href="https://api.whatsapp.com/send?phone=5541988377401"
      ></a>
      <h1 data-aos="fade-right">
        MONITORAMENTO E <br />
        SEGURANÇA DE DADOS
      </h1>
    </FirstSection>
  );
};

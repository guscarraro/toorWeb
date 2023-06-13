import React from "react";
import { SectionQuemSomosStyle } from "./style";

export const SectionQuemSomos = () => {
  return (
    <SectionQuemSomosStyle>
      <div className="container-geral">
        <div>
          <h3>QUEM SOMOS</h3>
          <p className="descricao">
            A TOOR nasceu em 2003 para ajudar empresas de pequeno e médio porte
            a ter organização e segurança em suas redes de computadores. Com
            agilidade e qualidade no monitoramento e segurança dos dados
            ajudamos as organizações a serem competitivas e fazerem a diferença
            no mercado. Referência em administração de servidores na região sul
            e reconhecida como melhor opção de prestadora de serviços, a Toor
            valoriza e desenvolve pessoas, com inovação, empatia e respeito ao
            cliente.
          </p>
        </div>
        <p className="imgQuemSomos"></p>
      </div>
    </SectionQuemSomosStyle>
  );
};

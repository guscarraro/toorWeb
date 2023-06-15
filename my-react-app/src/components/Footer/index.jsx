import React from "react";
import { FooterFullStyle } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

export const FooterStyle = () => {
  Aos.init();
  return (
    <FooterFullStyle id="Contato">
      <div className="container-geral" data-aos="fade-up">
        <div className="container-loc-cont">
          <div className="container-loc">
            <div className="container-dados">
              <p className="imgLoc"></p>
              <p>
                <strong> LOCALIZACAO</strong>
              </p>
            </div>
            <p>
              <strong>
                Rua Francisco Rocha 62 - <br /> Sala 1904 Batel <br /> -
                Curitiba - PR - CEP 80.420-130
              </strong>
            </p>
          </div>
          <div className="container-cont">
            <div className="container-dados">
              <p className="imgCont"></p>
              <p>
                <strong>CONTATO</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>
                  (41) 3526-0710 <br />
                  (41) 98837-7401 <br />- Encarregado de Dados: Rodrigo Otavio
                </strong>
              </p>
              <p>
                <strong>Entre em contato pelo:</strong>
              </p>
              <a href="https://app.octo.legal/solicitacao/dados?idEmpresa=617171643dbcff71af433c82">
                <strong>Portal de Privacidade</strong>
              </a>
              <br />
              <a href="https://app.octo.legal/solicitacao/dados?idEmpresa=617171643dbcff71af433c82">
                <strong>Politica de Privacidade</strong>
              </a>
            </div>
          </div>
        </div>
        <div id="Depoimento" className="depoimentos">
          <h2>DEPOIMENTOS</h2>
          <a
            className="imgDepoimento"
            href="https://www.google.com/search?q=toor+tecnologia&rlz=1C5CHFA_enBR911BR911&oq=toor+tecnologia&aqs=chrome..69i57j46i175i199i512j69i60j69i61.2952j0j7&sourceid=chrome&ie=UTF-8#lrd=0x94dce3ef901e2df3:0x702dc1e05cbbf640,1,,,,"
          ></a>
        </div>
        <h4 className="logoFooter"></h4>
      </div>
    </FooterFullStyle>
  );
};

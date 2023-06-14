import React from "react";
import { FooterFullStyle } from "./style";

export const FooterStyle = () => {
  return (
    <FooterFullStyle>
      <div className="container-geral">
        <div className="container-loc">
          <div>
            <p className="imgLoc"></p>
            <p>LOCALIZACAO</p>
          </div>
          <p>
            Rua Francisco Rocha 62 - Sala 1904 Batel <br /> - Curitiba - PR -
            CEP 80.420-130
          </p>
        </div>
        <div className="container-cont">
          <div>
            <p className="imgCont"></p>
            <p>CONTATO</p>
          </div>
          <div>
            <p>
              (41) 3526-0710 (41) 98837-7401 - Encarregado de Dados: Rodrigo
              Otavio
            </p>
            <p>Entre em contato pelo:</p>
            <a href="https://app.octo.legal/solicitacao/dados?idEmpresa=617171643dbcff71af433c82">
              Portal de Privacidade
            </a>
            <a href="https://app.octo.legal/solicitacao/dados?idEmpresa=617171643dbcff71af433c82">
              Politica de Privacidade
            </a>
          </div>
        </div>
        <h4 className="logoFooter">TOOR</h4>
      </div>
    </FooterFullStyle>
  );
};

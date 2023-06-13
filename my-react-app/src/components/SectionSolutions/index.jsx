import React from "react";
import { SectionSolutionStyle, CardStyle } from "./style";

export const SectionSolutions = () => {
  return (
    <SectionSolutionStyle>
      <h3>Solucoes</h3>
      <ul className="container-geral-cards">
        <CardStyle>
          <div className="container-info">
            <div className="container-titulo">
              <p></p>
              <h4>MONITORAMENTO DE DADOS / SUPORTE</h4>
            </div>
            <div>
              <p className="descricao">
                Contrate nosso serviço de monitoramento através de indicadores e
                tenha suporte com profissionais especializados!
              </p>
            </div>
          </div>
          <p className="icon"></p>
        </CardStyle>
        <CardStyle>
          <div className="container-info">
            <div className="container-titulo">
              <p></p>
              <h4>SERVIDOR DE INTERNET / FIREWALL</h4>
            </div>
            <div>
              <p className="descricao">
                Um dispositivo físico instalado na empresa para bloquear ataques
                da internet, monitorar o uso da conexão e criar conexões
                criptografadas entre máquinas.
              </p>
            </div>
          </div>
          <p className="icon2"></p>
        </CardStyle>
        <CardStyle>
          <div className="container-info">
            <div className="container-titulo">
              <p className="seta-container-titulo"></p>
              <h4>SERVIDOR DE ARQUIVOS / FILESERVER</h4>
            </div>
            <div>
              <p className="descricao">
                Um computador dedicado para fazer o armazenamento dos arquivos
                com controle e auditoria. Acesse os arquivos de qualquer lugar,
                inclusive do celular através de uma conexão criptografada!
              </p>
            </div>
          </div>
          <p className="icon3"></p>
        </CardStyle>
        <CardStyle>
          <div className="container-info">
            <div className="container-titulo">
              <p className="seta-container-titulo"></p>
              <h4>SUPORTE SERVIDORES / LINUX</h4>
            </div>
            <div>
              <p className="descricao">
                Oferecemos suporte a servidores Linux desde 1999 e também
                prestamos suporte ao Windows. O Linux sempre será nosso sistema
                operacional preferido. =D
              </p>
            </div>
          </div>
          <p className="icon4"></p>
        </CardStyle>
        <CardStyle>
          <div className="container-info">
            <div className="container-titulo">
              <p className="seta-container-titulo"></p>
              <h4>VIRTUALIZACAO / CLOUD</h4>
            </div>
            <div>
              <p className="descricao">
                A melhor maneira de compartilhar os recursos físicos de
                servidores com escalabilidade e disponibilidade. Virtualização
                dos servidores internos, análise do ambiente para melhor solução
                em virtualização, gerenciamento dos servidores na nuvem.
              </p>
            </div>
          </div>
          <p className="icon5"></p>
        </CardStyle>
      </ul>
    </SectionSolutionStyle>
  );
};

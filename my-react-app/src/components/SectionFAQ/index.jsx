import React, { useState } from "react";
import { Descricao, ElementoContainer, SectionFAQStyle } from "./style";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

export const SectionFAQ = () => {
  Aos.init();
  const [elementos, setElementos] = useState([
    {
      id: 1,
      pergunta: "Para que serve um firewall?",
      texto:
        "Para monitorar a rede e bloquear os ataques e acessos provenientes da Internet.",
      visivel: false,
    },
    {
      id: 2,
      pergunta: "Qual a vantagem de ter um fileserver ou servidor de arquivos?",
      texto:
        "Centralizar e ter controle de acesso aos arquivos e facilitar as cópias de segurança. ",
      visivel: false,
    },
    {
      id: 3,
      pergunta:
        "Se meus arquivos ficam no servidor no escritório, posso acessá-los de qualquer lugar?",
      texto:
        "Sim, através de uma conexão criptografada pela Internet, você pode acessá-los de qualquer lugar.",
      visivel: false,
    },
    {
      id: 4,
      pergunta: "Posso acessar meus arquivos do celular?",
      texto: "Sim, utilizando o recurso de Fileserver + VPN",
      visivel: false,
    },
    {
      id: 5,
      pergunta:
        "Quero ter o sistema na nuvem e os arquivos no meu servidor no escritório, é possível?",
      texto: "Sim, você pode ter alguns recursos localmente e outros na nuvem.",
      visivel: false,
    },
    {
      id: 6,
      pergunta: "Qual a recomendação de um backup eficiente e seguro?",
      texto:
        "Utilize a regra do 3-2-1 sendo 3 cópias diferentes em 2 mídias diferentes e 1 fora da empresa.",
      visivel: false,
    },
  ]);

  const toggleDescricao = (id) => {
    setElementos((prevState) =>
      prevState.map(
        (elemento) =>
          elemento.id === id
            ? { ...elemento, visivel: !elemento.visivel }
            : { ...elemento, visivel: false } // Define visivel como false para todas as outras respostas
      )
    );
  };

  return (
    <SectionFAQStyle id="FAQ">
      <div className="container-geral">
        <div className="container-info" data-aos="fade-down">
          <div className="container-tema">
            <p className="imgTema"></p>
            <h2>PERGUNTAS FREQUENTES / FAQ</h2>
          </div>
          {elementos.map((elemento) => (
            <ElementoContainer
              key={elemento.id}
              onClick={() => toggleDescricao(elemento.id)}
              // onMouseEnter={() => toggleDescricao(elemento.id, true)}
              // onMouseLeave={() => toggleDescricao(elemento.id, false)}
            >
              <div>
                <strong
                  className={`elemento-pergunta ${
                    elemento.visivel ? "visivel" : ""
                  }`}
                >
                  {elemento.pergunta} <span>+</span>
                </strong>
              </div>
              <Descricao
                className={`resposta ${elemento.visivel ? "visivel" : ""}`}
                visivel={elemento.visivel ? "true" : "false"}
              >
                {elemento.texto}
              </Descricao>
            </ElementoContainer>
          ))}
        </div>
        <div className="container-imgPergunta" data-aos="fade-down">
          <p className="imgPergunta"></p>
          <div className="cont1">
            <p className="imgPergunta1"></p>
            <p className="imgPergunta2"></p>
          </div>
          <div className="cont2">
            <p className="imgPergunta3"></p>
            <p className="imgPergunta4"></p>
          </div>
        </div>
      </div>
    </SectionFAQStyle>
  );
};

import React, { useState } from "react";
import { Descricao, ElementoContainer, SectionFAQStyle } from "./style";
import styled from "styled-components";

export const SectionFAQ = () => {
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
      prevState.map((elemento) =>
        elemento.id === id
          ? { ...elemento, visivel: !elemento.visivel }
          : elemento
      )
    );
  };

  return (
    <SectionFAQStyle>
      <div className="container-geral">
        <div className="container-info">
          <h3>PERGUNTAS FREQUENTES / FAQ</h3>
          {elementos.map((elemento) => (
            <ElementoContainer
              key={elemento.id}
              onClick={() => toggleDescricao(elemento.id)}
            >
              <strong>
                {elemento.id} - {elemento.pergunta}
              </strong>
              <Descricao
                className="resposta"
                visivel={elemento.visivel ? "true" : "false"}
              >
                {elemento.texto}
              </Descricao>
            </ElementoContainer>
          ))}
        </div>
        <div>
          <p className="imgPerguntas"></p>
        </div>
      </div>
    </SectionFAQStyle>
  );
};
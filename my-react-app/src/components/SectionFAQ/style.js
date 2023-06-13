// import styled from "styled-components";
import imgPerguntas from "../../assets/perguntas.jpg";
import styled from "styled-components";

export const SectionFAQStyle = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  /* .descricao {
    display: none;
  } */
  .container-geral {
    height: auto;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 5%;
    .imgPerguntas {
      width: 500px;
      height: 500px;
      background-image: url(${imgPerguntas});
      background-size: 100% 100%;
    }
    .container-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
  }
  h3 {
    width: 80%;
    margin: 0;
    padding: 0;
  }
`;
export const Descricao = styled.div`
  margin: 0;
  padding: 0;
  display: ${({ visivel }) => (visivel === "true" ? "block" : "none")};
  /* Estilos para a descrição */
  opacity: ${({ visivel }) => (visivel === "true" ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
export const ElementoContainer = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  width: 85%;
  padding: 10px;
  margin-top: 6px;
  //
  .resposta {
    margin: 0;
    padding: 0;
    margin-top: 15px;
  }
`;

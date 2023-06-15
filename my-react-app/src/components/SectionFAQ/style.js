// import styled from "styled-components";
import imgPergunta from "../../assets/pergunta.png";
import imgPergunta1 from "../../assets/pergunta1.png";
import imgPergunta2 from "../../assets/pergunta2.png";
import imgPergunta3 from "../../assets/pergunta3.png";
import imgPergunta4 from "../../assets/pergunta4.png";
import imgSeta from "../../assets/setaLado2.png";
import styled from "styled-components";

export const SectionFAQStyle = styled.section`
  background-color: black;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  @media (max-width: 769px) {
    height: 120vh;
  }
  @keyframes rotateAndMove {
    0% {
      transform: translateY(0) rotate(0);
    }
    50% {
      transform: translateY(-10px) rotate(5deg);
    }
    100% {
      transform: translateY(0) rotate(0);
    }
  }
  .container-tema {
    display: flex;
    flex-direction: row;
    color: white;
    align-items: center;

    gap: 20px;
    .imgTema {
      background-image: url(${imgSeta});
      background-size: 100% 100%;
      width: 30px;
      height: 30px;
    }
  }

  .container-geral {
    height: 90vh;
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
    .container-imgPergunta {
      display: flex;
      flex-direction: column-reverse;
      width: 50%;
    }
    @media (max-width: 1023px) {
      .container-imgPergunta {
        max-width: 100%;
        height: 500px;
        top: 220%;
        left: 50;
        right: 50;
        bottom: 0;
        position: absolute;
        display: flex;
        flex-direction: column-reverse;
        opacity: 0.3;
        z-index: 0;
        .imgPergunta {
          max-width: 100%;
        }
      }
    }
    .imgPergunta {
      width: 85vh;
      height: 500px;
      background-image: url(${imgPergunta});
      background-color: black;
      background-size: 100% 100%;
    }
    .imgPergunta1 {
      width: 50px;
      height: 50px;
      background-image: url(${imgPergunta1});
      background-color: black;
      background-size: 100% 100%;
      animation: rotateAndMove 3s ease-in-out infinite;
    }
    .imgPergunta1 {
      width: 80px;
      height: 80px;
      background-image: url(${imgPergunta1});
      background-color: black;
      background-size: 100% 100%;
      animation: rotateAndMove 3s ease-in-out infinite;
    }
    .imgPergunta2 {
      width: 70px;
      height: 70px;
      background-image: url(${imgPergunta2});
      background-color: black;
      background-size: 100% 100%;
      animation: rotateAndMove 2s ease-in-out infinite;
    }
    .imgPergunta3 {
      width: 50px;
      height: 50px;
      background-image: url(${imgPergunta3});
      background-color: black;
      background-size: 100% 100%;
      animation: rotateAndMove 2s ease-in-out infinite;
    }
    .imgPergunta4 {
      width: 70px;
      height: 7 0px;
      background-image: url(${imgPergunta4});
      background-color: black;
      background-size: 100% 100%;
      animation: rotateAndMove 3s ease-in-out infinite;
    }
    .cont1 {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
    .cont2 {
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: center;
    }
    .container-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      z-index: 1;
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
  border-radius: 20px;
  width: 85%;
  transition: 0.5s;
  padding: 10px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
  span {
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid white;
    border-radius: 2px;
  }
  span:hover {
    border: rgb(38, 250, 229);
  }
  .resposta {
    border-radius: 20px;
    width: 85%;
    padding: 10px;
    margin-top: 6px;
    margin-top: 15px;
    color: rgb(38, 250, 229);
    border: solid 2px rgb(38, 250, 229);
  }
  .elemento-pergunta:hover {
    width: 85%;
    padding: 0;
    font-size: large;
    color: rgb(38, 250, 229);
    transition: 0.5s;
    max-width: 50%;
    @media (min-width: 1500px) {
      font-size: 1.7rem;
    }
    span {
      border: 2px solid rgb(38, 250, 229);
    }
  }
  .elemento-pergunta::after {
    transition: 0.5s;
  }
  .elemento-pergunta:before {
    transition: 0.5s;
  }
  .elemento-pergunta {
    transition: 0.5s;
  }
`;

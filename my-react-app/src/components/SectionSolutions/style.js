import styled from "styled-components";
import imgCard1 from "../../assets/detective.png";
import imgCard1hover from "../../assets/detective2.png";
import imgCard2 from "../../assets/firewall.png";
import imgCard2hover from "../../assets/firewall3.png";
import imgCard3 from "../../assets/database.png";
import imgCard3hover from "../../assets/database3.png";
import imgCard4 from "../../assets/linux.png";
import imgCard4hover from "../../assets/linux1.png";
import imgCard5 from "../../assets/cloudcomputing.png";
import imgCard5hover from "../../assets/cloud-computing3.png";
import imgSeta from "../../assets/setaLado2.png";
import imgSetaPreta from "../../assets/setaPreta.png";

export const SectionSolutionStyle = styled.section`
  background-color: black;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 20px;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .scroll-arrow {
    color: white;
  }
  ul {
    display: flex;
    flex-direction: row;
    width: 80%;
  }

  .loading {
    color: white;
  }
  Slider {
    display: flex;
  }
  li {
    min-width: 300px;
    max-width: 300px;

    display: flex;
    align-items: center;
    justify-content: center;
    button {
      color: white;
    }
  }

  .card1 {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 1%;
  }
  .card2 {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 1%;
  }
  .card3 {
    margin-left: 4%;
    margin-right: 4%;
    margin-top: 1%;
  }
  .card4 {
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1%;
  }
  .card5 {
    margin-left: 2%;
    margin-right: 2%;
    margin-top: 1%;
  }

  h3 {
    font-size: xx-large;
    color: whitesmoke;
  }

  .container-geral-cards {
    width: 85%;
    min-height: 80vh;
    margin: 0;
    padding-left: 5%;
    padding-right: 5%;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  li:hover {
    border: solid 2px rgb(38, 250, 229);
    background-color: none;
    background-color: rgb(38, 250, 229);
    transform: translateY(-10px) scale(1.1);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    .icon {
      background-image: url(${imgCard1hover});
    }
    .icon2 {
      background-image: url(${imgCard2hover});
    }
    .icon3 {
      background-image: url(${imgCard3hover});
    }
    .icon4 {
      background-image: url(${imgCard4hover});
    }
    .icon5 {
      background-image: url(${imgCard5hover});
    }
  }
  li:hover + li {
    transform: translateY(7px) scale(0.9);
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

    h2 {
      font-family: "Russo One", sans-serif;
    }
  }
`;

export const CardStyle = styled.li`
  background: linear-gradient(to right, rgb(38, 250, 229), #3e3e3e);
  font-weight: bold;
  text-align: center;
  margin: 0;
  margin-top: 4%;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  height: 500px;
  border: solid 2px;
  border-radius: 10px;
  justify-content: space-between;
  /* transform: rotate(-2deg); */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
  transition: transform 0.3s, box-shadow 0.3s;
  h4 {
    font-family: "Russo One", sans-serif;
  }
  .container-titulo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    .imgTema1 {
      background-image: url(${imgSetaPreta});
      background-size: 100% 100%;
      width: 30px;
      height: 20px;
    }
  }

  .container-info {
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .icon {
    margin-left: 40px;
    position: relative;
    width: 75%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard1});
    animation: floating 2s ease-in-out infinite;
  }
  .slick-slider .slick-list .slick-track .slick-slide.slick-active {
    /* Estilos desejados para as li ativas */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .slick-slider .slick-list .slick-track .slick-slide {
    /* Estilos desejados para as li ativas */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .custom-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .descricao {
    max-height: 100px;
    z-index: 1;
  }

  .icon2 {
    margin-left: 55px;
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard2});
    animation: floating 2s ease-in-out infinite;
  }

  .icon3 {
    margin-left: 42px;
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard3});
    animation: floating 2s ease-in-out infinite;
  }
  .icon4 {
    margin-left: 44px;
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard4});
    animation: floating 2s ease-in-out infinite;
  }
  .icon5 {
    margin-top: 40px;
    margin-left: 43px;
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard5});
    animation: floating 2s ease-in-out infinite;
  }
`;

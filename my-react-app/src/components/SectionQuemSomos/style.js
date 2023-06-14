import styled from "styled-components";
import imgQuemSomos from "../../assets/reuniao1.jpg";
import imgSeta from "../../assets/setaLado2.png";

export const SectionQuemSomosStyle = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 255),
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 255)
    ),
    url(${imgQuemSomos});
  background-size: cover;

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  padding: 0;
  margin: 0;
  color: rgb(38, 250, 229);
  justify-content: center;

  .container-tema {
    display: flex;
    flex-direction: row;
    color: rgb(38, 250, 229);
    align-items: center;
    justify-content: center;

    gap: 20px;
    .imgTema {
      background-image: url(${imgSeta});
      background-size: 100% 100%;
      width: 30px;
      height: 30px;
    }
  }

  .container-geral {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: black;
    opacity: 0.7;
    border-radius: 20px;

    div {
      margin: 5%;
      width: 85%;
    }
  }
  /* .imgQuemSomos {
    background-image: url(${imgQuemSomos});
    background-size: 100% 100%;
    width: 40%;
    height: 40vh;
  } */
`;

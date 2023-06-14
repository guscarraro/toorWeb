import styled from "styled-components";
import imgQuemSomos from "../../assets/reuniao1.jpg";

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

  .container-geral {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    div {
      margin: 5%;
      width: 40%;
    }
  }
  /* .imgQuemSomos {
    background-image: url(${imgQuemSomos});
    background-size: 100% 100%;
    width: 40%;
    height: 40vh;
  } */
`;

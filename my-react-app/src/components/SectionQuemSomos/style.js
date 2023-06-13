import styled from "styled-components";
import imgQuemSomos from "../../assets/quemSomos.jpg";

export const SectionQuemSomosStyle = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  padding: 0;
  margin: 0;
  margin-top: 5%;
  .container-geral {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    div {
      margin: 5%;
      width: 40%;
    }
  }
  .imgQuemSomos {
    background-image: url(${imgQuemSomos});
    background-size: 100% 100%;
    width: 100%;
    height: 500px;
  }
`;

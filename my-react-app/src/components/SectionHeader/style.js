import styled from "styled-components";
import imgSection1 from "../../assets/ComponentSub.png";

export const FirstSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${imgSection1});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  justify-content: center;
  width: 100%;
  height: 80vh;
  padding: 0;
  margin: 0;
  h1 {
    color: white;
    font-size: 2.3rem;
    margin-right: 33%;
    margin-top: 15%;
    @media (max-width: 769px) {
      width: 80%;
      margin: 0;
      padding: 0;
    }
  }
`;

import styled from "styled-components";
import imgSection1 from "../../assets/ComponentSub.png";
import imgWpp from "../../assets/wpp.png";

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
  .imgWpp {
    top: 90%;
    left: 86%;
    position: fixed;
    background-image: url(${imgWpp});
    background-size: 100% 100%;
    width: 50px;
    height: 50px;
    z-index: 1000;
    @media (min-width: 1024px) {
      left: 92%;
      width: 75px;
      height: 75px;
    }
    @media (min-width: 1900px) {
      left: 94%;
      width: 100px;
      height: 100px;
    }
  }
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

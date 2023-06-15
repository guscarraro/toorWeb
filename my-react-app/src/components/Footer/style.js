import styled from "styled-components";
import imgFooter from "../../assets/footer.png";
import imgCel from "../../assets/telephone.png";
import imgLoc from "../../assets/gps.png";
import imgDep from "../../assets/dep.png";
import imgLogo from "../../assets/logo_branca.svg";

export const FooterFullStyle = styled.footer`
  background-image: url(${imgFooter});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
  color: white;
  justify-content: flex-end;
  color: rgb(38, 250, 229);
  a {
    border-radius: 7px;
    list-style-type: none;
    text-decoration: none;
  }
  .logoFooter {
    background-image: url(${imgLogo});
    background-size: 100% 100%;
    width: 70px;
    height: 70px;
    @media (min-width: 1900px) {
      width: 150px;
      height: 150px;
    }
  }
  @media (max-width: 769px) {
    width: 100%;
    height: auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    .container-geral {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  .depoimentos {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .imgDepoimento {
    background-image: url(${imgDep});
    background-size: 100% 100%;
    width: 100%;
    height: 300px;
    @media (min-width: 1900px) {
      height: 800px;
    }
  }
  .container-loc-cont {
    display: flex;
    flex-direction: column;
  }
  .container-geral {
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;
    margin-top: 20%;
    @media (max-width: 768px) {
      margin-top: 95%;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: auto;
      width: 100%;
    }
    .container-loc {
      display: flex;
      flex-direction: column;
    }
    .container-cont {
      display: flex;
      flex-direction: column;
    }
    .imgCont {
      background-image: url(${imgCel});
      background-size: 100% 100%;
      width: 30px;
      height: 30px;
    }
    .imgLoc {
      background-image: url(${imgLoc});
      background-size: 100% 100%;
      width: 30px;
      height: 30px;
    }
    .container-dados {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }
`;

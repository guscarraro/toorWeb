import styled from "styled-components";
import imgFooter from "../../assets/footer.png";
import imgCel from "../../assets/telephone.png";
import imgLoc from "../../assets/gps.png";

export const FooterFullStyle = styled.footer`
  background-image: url(${imgFooter});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  padding: 0;
  margin: 0;
  color: white;
  justify-content: flex-end;
  color: rgb(38, 250, 229);
  .container-geral {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 5%;
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

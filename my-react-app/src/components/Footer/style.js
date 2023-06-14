import styled from "styled-components";
import imgFooter from "../../assets/footer.png";

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
  }
`;
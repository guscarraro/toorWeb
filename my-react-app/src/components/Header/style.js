import styled from "styled-components";
import imgLogoBranca from "../../assets/logo_branca.svg";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  bottom: 0;
  color: white;
  width: 100%;
  height: 80px;
  padding: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  margin: 0;
  z-index: 1000;
  .container {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    div {
      /* margin-left: 5%; */
    }
    .contato {
      border: 2px solid;
      padding: 5px;
      border-radius: 20px;
      color: rgb(38, 250, 229);
      margin-right: 5px;
    }
    .contato:hover {
      background-color: rgb(38, 250, 229);
      color: rgb(97, 97, 98);
      border: 2px solid rgb(38, 250, 229);
    }
    .logo-branca {
      margin: 0;
      background-image: url(${imgLogoBranca});
      background-size: 90% 100%;
      background-repeat: no-repeat;
      width: 35%;
      height: 65px;
    }

    nav {
      gap: 20px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-content: flex-start;
      align-items: flex-start;
      margin-right: 5%;
    }
    a {
      list-style-type: none;
      text-decoration: none;
      color: white;
    }
    a:hover {
      color: rgb(38, 250, 229);
    }
    .rolagem {
      a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background-color: rgb(38, 250, 229);
        transition: width 0.7s ease-in-out;
      }
      a:hover::after {
        width: 100%;
      }
    }
  }
`;

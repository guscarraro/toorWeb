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

  nav a {
    display: inline-block;
  }
  .menu-toggle {
    visibility: hidden;
  }

  @media (max-width: 700px) {
    .menu-hamburguer {
      margin-left: 4%;
      visibility: visible;
      top: 0;
      position: fixed;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: black;
      width: 100%;
      height: 100vh;
      opacity: 0.8;
      justify-content: center;
      transition: 0.7s;
      justify-content: space-evenly;
      a {
        list-style-type: none;
        text-decoration: none;
        color: rgb(38, 250, 229);
        border: 2px solid rgb(38, 250, 229);
        padding: 10px;
        border-radius: 20px;
      }
      a:hover {
        background-color: rgb(38, 250, 229);
        color: black;
      }
    }
    nav a {
      display: none;
    }

    .menu-toggle {
      display: flex;
      visibility: visible;
    }
    .menu-toggle {
      cursor: pointer;
      transition: all 0.3s ease;
      z-index: 50;
    }

    .menu-toggle:hover {
    }

    .menu-toggle .svg-inline--fa {
      /* Adicione estilos adicionais ao ícone */
    }

    /* Exemplo de estilo para a classe .open do menu */
    #nav.open {
      background-color: black;
    }
  }
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
      color: black;
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

    @media (min-width: 1900px) {
      .logo-branca {
        margin: 0;
        background-image: url(${imgLogoBranca});
        background-size: 90% 100%;
        background-repeat: no-repeat;
        width: 40%;
        height: 85px;
      }
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
        height: 3px;
        background-color: rgb(38, 250, 229);
        transition: width 0.7s ease-in-out;
      }
      a:hover::after {
        width: 100%;
      }
    }
  }
`;

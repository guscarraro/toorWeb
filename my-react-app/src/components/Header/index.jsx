import React, { useContext } from "react";
import { StyledHeader } from "./style";
// import { Link } from "react-router-dom";

export const Header = () => {
  //   const navRef = (React.useRef < HTMLElement) | (null > null);
  window.addEventListener("scroll", function () {
    let header = document.querySelector("#header");
    let nav = document.querySelector("#nav");
    header.classList.toggle("rolagem", window.scrollY > 50);
    nav.classList.toggle("rolagem", window.scrollY > 50);
  });
  return (
    <StyledHeader id="header">
      <div className="container">
        <div className="logo-branca"></div>
        <nav id="nav">
          <a href="">Solucoes</a>
          <a href="">Quem Somos</a>
          <a href="">Depoimento</a>
          <a href="">FAQ</a>
          <a href="">Blog</a>
        </nav>
        <div>
          <a className="contato" href="">
            Contato
          </a>
        </div>
      </div>
    </StyledHeader>
  );
};

import React, { useContext, useEffect } from "react";
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
  useEffect(() => {
    // Adicione esse código dentro do componente ou arquivo JavaScript relevante

    // Selecione todos os links internos no documento
    const links = document.querySelectorAll('a[href^="#"]');

    // Adicione um evento de clique a cada link interno
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Impede o comportamento padrão de rolagem

        // Obtenha o valor do atributo "href" do link
        const href = link.getAttribute("href");

        // Verifique se o elemento de destino existe
        const target = document.querySelector(href);
        if (target) {
          // Calcule a posição de rolagem do elemento de destino
          const offsetTop = target.offsetTop;

          // Execute a animação de rolagem suave
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <StyledHeader id="header">
      <div className="container">
        <div className="logo-branca"></div>
        <nav id="nav">
          <a href="#solucoes" className="smooth-scroll">
            Soluções
          </a>
          <a href="#FAQ" className="smooth-scroll">
            FAQ
          </a>
          <a href="#QS" className="smooth-scroll">
            Quem Somos
          </a>
          <a href="https://blog.toor.com.br/">Blog</a>
          <a href="#Depoimento" className="smooth-scroll">
            Depoimento
          </a>
        </nav>
        <div>
          <a className="contato smooth-scroll" href="#Contato">
            Contato
          </a>
        </div>
      </div>
    </StyledHeader>
  );
};

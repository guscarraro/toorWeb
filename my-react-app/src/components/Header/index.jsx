import React, { useContext, useEffect, useState } from "react";
import { StyledHeader } from "./style";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    // <StyledHeader id="header">
    //   <div className="container">
    //     <div className="logo-branca"></div>
    //     <nav id="nav">
    //       <a href="#solucoes" className="smooth-scroll">
    //         Soluções
    //       </a>
    //       <a href="#QS" className="smooth-scroll">
    //         Quem Somos
    //       </a>
    //       <a href="#Depoimento" className="smooth-scroll">
    //         Depoimento
    //       </a>
    //       <a href="#FAQ" className="smooth-scroll">
    //         FAQ
    //       </a>
    //       <a href="https://blog.toor.com.br/">Blog</a>
    //     </nav>
    //     <div>
    //       <a className="contato smooth-scroll" href="#Contato">
    //         Contato
    //       </a>
    //     </div>
    //   </div>
    // </StyledHeader>
    <StyledHeader id="header">
      <div className="container">
        <div className="logo-branca"></div>
        <nav id="nav">
          {/* Elementos de âncora ocultos */}
          <a href="#solucoes" className="smooth-scroll">
            Soluções
          </a>
          <a href="#QS" className="smooth-scroll">
            Quem Somos
          </a>
          <a href="#Depoimento" className="smooth-scroll">
            Depoimento
          </a>
          <a href="#FAQ" className="smooth-scroll">
            FAQ
          </a>
          <a href="https://blog.toor.com.br/">Blog</a>
          {/* Menu hamburguer */}
          <div className="menu-toggle" onClick={toggleMenu}>
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </div>
        </nav>
        <div>
          <a className="contato smooth-scroll" href="#Contato">
            Contato
          </a>
        </div>
      </div>
      {/* Elementos do menu hamburguer */}
      {isMenuOpen && (
        <div className="menu-hamburguer">
          <a href="#solucoes" className="smooth-scroll" onClick={toggleMenu}>
            Soluções
          </a>
          <a href="#FAQ" className="smooth-scroll" onClick={toggleMenu}>
            FAQ
          </a>
          <a href="#QS" className="smooth-scroll" onClick={toggleMenu}>
            Quem Somos
          </a>
          <a href="#Depoimento" className="smooth-scroll" onClick={toggleMenu}>
            Depoimento
          </a>
          <a href="https://blog.toor.com.br/">Blog</a>
          <a
            className="contato smooth-scroll"
            href="#Contato"
            onClick={toggleMenu}
          >
            Contato
          </a>
        </div>
      )}
    </StyledHeader>
  );
};

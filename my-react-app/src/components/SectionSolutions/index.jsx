import React, { useEffect, useRef, useState } from "react";
import { SectionSolutionStyle, CardStyle } from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";

export const SectionSolutions = () => {
  const cardListRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const cardsData = [
    {
      title: "MONITORAMENTO DE DADOS / SUPORTE",
      description:
        "Contrate nosso serviço de monitoramento através de indicadores e tenha suporte com profissionais especializados!",
      icon: "icon",
    },
    {
      title: "SERVIDOR DE INTERNET / FIREWALL",
      description:
        "Um dispositivo físico instalado na empresa para bloquear ataques da internet, monitorar o uso da conexão e criar conexões criptografadas entre máquinas.",
      icon: "icon2",
    },
    {
      title: "SERVIDOR DE ARQUIVOS / FILESERVER",
      description:
        "Um dispositivo físico instalado na empresa para bloquear ataques da internet, monitorar o uso da conexão e criar conexões criptografadas entre máquinas.",
      icon: "icon3",
    },
    {
      title: "SUPORTE SERVIDORES / LINUX",
      description:
        "Oferecemos suporte a servidores Linux desde 1999 e também prestamos suporte ao Windows. O Linux sempre será nosso sistema operacional preferido. =D",
      icon: "icon4",
    },
    {
      title: "VIRTUALIZACAO / CLOUD",
      description:
        "A melhor maneira de compartilhar os recursos fisicos de servidores com escabilidade e disponibilidade. Virtualização dos servidores internos, análise do ambiente para melhor solução em virtualização, gerenciamento dos servidores na nuvem",
      icon: "icon5",
    },
  ];
  useEffect(() => {
    Aos.init({ duration: 2000 });
    const handleScroll = () => {
      const cardList = cardListRef.current;

      if (cardList) {
        const { scrollLeft, scrollWidth, clientWidth } = cardList;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          // O usuário atingiu o final do scroll, então mova o primeiro card para o final
          setIsLoading(true);
          setTimeout(() => {
            cardList.appendChild(cardList.firstChild);
            cardList.scrollLeft -= cardList.firstChild.offsetWidth;
            setIsLoading(false);
          }, 500); // Tempo para exibir o loading antes de realizar a transição
        }
      }
    };

    // const cardList = cardListRef.current;
    // if (cardList) {
    //   cardList.addEventListener("scroll", handleScroll);
    // }

    // return () => {
    //   if (cardList) {
    //     cardList.removeEventListener("scroll", handleScroll);
    //   }
    // };
  }, []);
  const windowWidth = window.innerWidth;
  let slidesToShow = 4; // padrão para desktop

  if (windowWidth > 1023 && windowWidth < 1439) {
    slidesToShow = 3; // para tela de notebook
  }
  if (windowWidth > 1440) {
    slidesToShow = 4; // para tela de notebook
  }

  if (windowWidth >= 768 && windowWidth < 1023) {
    slidesToShow = 2; // para tela de tablet
  }
  if (windowWidth <= 767) {
    slidesToShow = 1; // para tela de tablet
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <ul className="custom-dots">
        {dots.map((dot, index) => (
          <li key={index}>{dot}</li>
        ))}
      </ul>
    ),
    customPaging: () => <span className="custom-dot" />,
  };
  return (
    <SectionSolutionStyle id="solucoes">
      <div className="container-tema" data-aos="fade-up">
        <p className="imgTema"></p>
        <h2>SOLUÇÕES</h2>
      </div>

      <Slider
        {...settings}
        ref={cardListRef}
        className="container-geral-cards"
        data-aos="fade-up"
      >
        {cardsData.map((card, index) => (
          <CardStyle
            centerPadding={200}
            key={index}
            id={card.icon}
            className="custom-card"
            data-aos="fade-up"
          >
            <div className="container-info">
              <div className="container-titulo">
                <p className="imgTema1"></p>
                <h4>{card.title}</h4>
              </div>
              <div>
                <p className="descricao">{card.description}</p>
              </div>
            </div>
            <p className={card.icon}></p>
          </CardStyle>
        ))}
        {isLoading && <div className="loading">Carregando...</div>}
      </Slider>
    </SectionSolutionStyle>
  );
};

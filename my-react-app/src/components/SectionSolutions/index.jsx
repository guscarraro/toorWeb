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
  const settings = {
    dots: true, // exibe os pontos de navegação
    infinite: true, // permite navegação infinita
    speed: 700, // velocidade da transição dos slides
    slidesToShow: 3, // número de elementos a serem exibidos
    slidesToScroll: 1, // número de elementos a serem percorridos a cada vez
  };
  return (
    <SectionSolutionStyle id="solucoes">
      <div className="container-tema" data-aos="fade-up">
        <p className="imgTema"></p>
        <h2>SOLUÇÕES</h2>
      </div>
      {/* <Slider  {...settings}
        ref={cardListRef} className="container-geral-cards" data-aos="fade-up">
        <CardStyle className="card1">
          <div className="container-info">
            <div className="container-titulo">
              <p className="imgTema1"></p>
              <h4>MONITORAMENTO DE DADOS / SUPORTE</h4>
            </div>
            <div>
              <p className="descricao">
                Contrate nosso serviço de monitoramento através de indicadores e
                tenha suporte com profissionais especializados!
              </p>
            </div>
          </div>
          <p className="icon"></p>
        </CardStyle>
        <CardStyle className="card2">
          <div className="container-info">
            <div className="container-titulo">
              <p className="imgTema1"></p>
              <h4>SERVIDOR DE INTERNET / FIREWALL</h4>
            </div>
            <div>
              <p className="descricao">
                Um dispositivo físico instalado na empresa para bloquear ataques
                da internet, monitorar o uso da conexão e criar conexões
                criptografadas entre máquinas.
              </p>
            </div>
          </div>
          <p className="icon2"></p>
        </CardStyle>
        <CardStyle className="card3">
          <div className="container-info">
            <div className="container-titulo">
              <p className="imgTema1"></p>
              <h4>SERVIDOR DE ARQUIVOS / FILESERVER</h4>
            </div>
            <div>
              <p className="descricao">
                Um computador dedicado para fazer o armazenamento dos arquivos
                com controle e auditoria. Acesse os arquivos de qualquer lugar,
                inclusive do celular através de uma conexão criptografada!
              </p>
            </div>
          </div>
          <p className="icon3"></p>
        </CardStyle>
        <CardStyle className="card4">
          <div className="container-info">
            <div className="container-titulo">
              <p className="imgTema1"></p>
              <h4>SUPORTE SERVIDORES / LINUX</h4>
            </div>
            <div>
              <p className="descricao">
                Oferecemos suporte a servidores Linux desde 1999 e também
                prestamos suporte ao Windows. O Linux sempre será nosso sistema
                operacional preferido. =D
              </p>
            </div>
          </div>
          <p className="icon4"></p>
        </CardStyle>
        <CardStyle className="card5">
          <div className="container-info">
            <div className="container-titulo">
              <p className="imgTema1"></p>
              <h4>VIRTUALIZACAO / CLOUD</h4>
            </div>
            <div>
              <p className="descricao">
                A melhor maneira de compartilhar os recursos físicos de
                servidores com escalabilidade e disponibilidade. Virtualização
                dos servidores internos, análise do ambiente para melhor solução
                em virtualização, gerenciamento dos servidores na nuvem.
              </p>
            </div>
          </div>
          <p className="icon5"></p>
        </CardStyle>
      </Slider> */}

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
            className={`custom-card`}
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

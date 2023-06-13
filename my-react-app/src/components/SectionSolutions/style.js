import styled from "styled-components";
import imgCard1 from "../../assets/detective.png";
import imgCard1hover from "../../assets/detective2.png";
import imgCard2 from "../../assets/firewall.png";
import imgCard2hover from "../../assets/firewall2.png";
import imgCard3 from "../../assets/database.png";
import imgCard3hover from "../../assets/database2.png";
import imgCard4 from "../../assets/linux.png";
import imgCard4hover from "../../assets/linux1.png";
import imgCard5 from "../../assets/cloudcomputing.png";
import imgCard5hover from "../../assets/cloud-computing1.png";

export const SectionSolutionStyle = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  padding-bottom: 20px;
  padding-top: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    font-size: xx-large;
    color: black;
  }

  .container-geral-cards {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  li:hover {
    border: solid 2px rgb(38, 250, 229);
    .icon {
      background-image: url(${imgCard1hover});
    }
    .icon2 {
      background-image: url(${imgCard2hover});
    }
    .icon3 {
      background-image: url(${imgCard3hover});
    }
    .icon4 {
      background-image: url(${imgCard4hover});
    }
    .icon5 {
      background-image: url(${imgCard5hover});
    }
  }
`;

export const CardStyle = styled.li`
  background-color: white;
  margin: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  min-height: 400px;
  border: solid 2px;
  border-radius: 10px;
  justify-content: space-between;

  .container-info {
    margin: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @keyframes floating {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
  .icon {
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard1});
    animation: floating 2s ease-in-out infinite;
  }
  .icon2 {
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard2});
    animation: floating 2s ease-in-out infinite;
  }

  .icon3 {
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard3});
    animation: floating 2s ease-in-out infinite;
  }
  .icon4 {
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard4});
    animation: floating 2s ease-in-out infinite;
  }
  .icon5 {
    position: relative;
    width: 65%;
    height: 150px;
    background-size: 100% 100%;
    background-image: url(${imgCard5});
    animation: floating 2s ease-in-out infinite;
  }
`;

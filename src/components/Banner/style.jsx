import styled from "styled-components";
import bannerImg from "../../assets/banner.png";

export const Banner = styled.section`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bannerImg});

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
    font-size: 4rem;
    text-shadow: black 0.1em 0.1em 0.2em;

    @media (max-width: 700px) {
      font-size: 2rem;
    }
  }
`;

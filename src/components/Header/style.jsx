import styled, { css } from "styled-components";

const Flexbox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  ${Flexbox}
  margin: 0 5%;
  height: 8vh;

  img {
    width: 20vw;
    max-width: 45px;
  }

  ul {
    ${Flexbox}
    width: 60vw;
    flex-wrap: wrap;
    max-width: 350px;
  }

  a {
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media (max-width: 769px) {
    img {
      width: 10vw;
    }

    ul {
      max-width: 200px;
    }

    a {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 8vw;
    }
  }
`;

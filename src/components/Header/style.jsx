import styled, { css } from "styled-components";

const Flexbox = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Header = styled.header`
  ${Flexbox}
  margin: 25px 5% 25px 5%;

  img {
    width: 20vw;
    max-width: 90px;
    @media (max-width: 700px) {
      max-width: 60px;
    }
  }

  ul {
    ${Flexbox}
    width: 60vw;
    flex-wrap: wrap;
    max-width: 350px;
  }

  li {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;

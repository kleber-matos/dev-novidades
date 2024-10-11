import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    width: 70%;
  }

  iframe {
    width: 100%;
    height: 60vh;
  }

  h3,
  h2 {
    margin: 10px 0 10px 0;
    font-size: 2.5rem;
  }

  p {
    font-size: 19px;
  }

  @media (max-width: 900px) {
    div {
      width: 100%;
    }

    iframe {
      height: 35vh;
    }

    h2 {
      font-size: 1.5rem;
      margin: 15px 2% 15px 2%;
    }

    h3 {
      margin: 0 2% 0 2%;
    }

    p {
      margin: 0 2% 15px 2%;
    }
  }
`;

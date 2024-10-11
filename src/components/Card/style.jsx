import styled from "styled-components";

export const Div = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  width: 100vw;
  max-width: 590px;
  margin-bottom: 2rem;
  padding-bottom: 10px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 8px 0 8px;

    height: 40%;
  }

  img {
    width: 100%;
    height: 60%;
    border-radius: 5px 5px 0 0;
  }

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  /* Telas medias */
  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 16px;
      margin-bottom: 10px;
    }
  }

  /* Telas pequenas */
  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;

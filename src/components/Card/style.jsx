import styled from "styled-components";

export const Div = styled.div`
  width: 100vw;
  max-width: 590px;
  border-radius: 5px;
  margin-bottom: 2rem;
  padding-bottom: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  div {
    height: 40%;
    display: flex;
    padding: 0 8px 0 8px;
    flex-direction: column;
    justify-content: space-evenly;
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

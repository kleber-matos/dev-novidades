import styled from "styled-components";

export const Div = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 5px;
  width: 100vw;
  height: 50vh;
  max-width: 500px;
  margin: 2rem 2rem 2rem 0;

  img {
    width: 100%;
    height: 60%;
    border-radius: 5px 5px 0 0;
  }

  p,
  h2 {
    margin: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @media (max-width: 700px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 900px) {
    margin: 0;
    height: 70vh;
    padding-bottom: 2rem;
  }
`;

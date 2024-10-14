import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;

  section {
    width: 88%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  @media (max-width: 700px) {
    section {
      width: 100%;
    }
  }
`;

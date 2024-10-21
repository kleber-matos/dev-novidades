import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 15px 2% 15px 2%;
  justify-content: space-between;

  a {
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;

    margin: 15px 2% 0px 2%;
  }
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const Logo = styled.div`
  img {
    width: 20vw;
    max-width: 45px;
  }
`;

export const Menu = styled.ul`
  width: 60vw;
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  max-width: 400px;
  justify-content: space-between;

  @media (max-width: 700px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};

    height: 36vh;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    li {
      font-size: 1.4rem;
    }
  }
`;

export const ToggleButton = styled.button`
  border: none;
  cursor: pointer;
  color: #000000;
  font-size: 2.3rem;
  background: transparent;

  .icon {
    width: 20vw;
    max-width: 45px;
    height: 10vh;
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

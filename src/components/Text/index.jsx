import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2.3rem;
  margin: 50px 0 20px 0;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.8rem;
    text-align: center;
  }
`;

export default function index({ texto }) {
  return <H2>{texto}</H2>;
}

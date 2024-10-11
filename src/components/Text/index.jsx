import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2.3rem;
  margin: 50px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1.8rem;
    text-align: center;
    margin: 30px 5px 30px 5px;
  }
`;

export default function index({ texto }) {
  return <H2>{texto}</H2>;
}

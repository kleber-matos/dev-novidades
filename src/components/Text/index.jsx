import styled from "styled-components";

const H2 = styled.h2`
  font-size: 2.3rem;
  margin: 50px 0 50px 0;
  text-align: center;

  /* Telas medias */
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 20px 0 20px 0;
  }

  /* Telas pequenas */
  @media (max-width: 480px) {
    font-size: 22px;
    margin-left: 5px;
  }
`;

export default function index({ texto }) {
  return <H2>{texto}</H2>;
}

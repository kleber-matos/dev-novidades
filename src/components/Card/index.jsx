import * as S from "./style";

export default function index({ title, description, imagem }) {
  return (
    <S.Div>
      <img src={imagem} alt="imagem ilustrativa sobre programação." />
      <h2>{title}</h2>
      <p>{description}</p>
    </S.Div>
  );
}

import { Link } from "react-router-dom";
import * as S from "./style";

export default function index({ title, description, imagem, id }) {
  return (
    <S.Div>
      <Link to={`preview/${id}`}>
        <img src={imagem} alt="imagem ilustrativa sobre programação." />
        <h2>{title}</h2>
        <p>{description}</p>
      </Link>
    </S.Div>
  );
}

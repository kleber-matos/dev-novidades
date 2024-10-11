import { Link } from "react-router-dom";
import * as S from "./style";

export default function index({ title, description, imagem, id }) {
  return (
    <S.Div>
      <Link to={`preview/${id}`}>
        <img src={imagem} alt="imagem ilustrativa sobre programação." />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </S.Div>
  );
}

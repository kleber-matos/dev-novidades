import * as S from "./style";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <S.Header>
      <Link to="/">
        <img src={logo} alt="Logo marca da pagina" />
      </Link>

      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/preview">Artigos</Link>
          </li>
        </ul>
      </nav>
    </S.Header>
  );
}

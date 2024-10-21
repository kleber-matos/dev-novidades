// import * as S from "./style";
import logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";

// export default function index() {
//   return (
//     <S.Header>
//       <Link to="/">
//         <img src={logo} alt="Logo marca da pagina" />
//       </Link>

//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Inicio</Link>
//           </li>
//           <li>
//             <Link to="/">Artigos</Link>
//           </li>
//         </ul>
//       </nav>
//     </S.Header>
//   );
// }

// import { useState } from "react";
import * as S from "./style";

import { Link } from "react-router-dom";

import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Header>
        <S.Container>
          <S.Logo>
            <Link to="/">
              <img src={logo} alt="Logo marca da pagina" />
            </Link>
          </S.Logo>
          <S.ToggleButton onClick={toggleMenu}>
            {isOpen ? "X" : "☰"}
          </S.ToggleButton>
        </S.Container>

        <S.Menu isOpen={isOpen}>
          <li to="/">
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/filmes">FILMS</Link>
          </li>
          <li>
            <Link to="/series">SERIES</Link>
          </li>
        </S.Menu>
      </S.Header>
    </>
  );
};

export default Header;

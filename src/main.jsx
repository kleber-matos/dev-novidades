import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import * as S from "./GlobalStyled.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <S.GlobalStyled />
    <App />
  </StrictMode>
);

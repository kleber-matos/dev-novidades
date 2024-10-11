import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    font-size: 16px;
}

li, a {
    text-decoration: none;
    list-style: none;
    color: black;
}
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        background: ${(props) => props.theme["white"]};
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
    }
`;

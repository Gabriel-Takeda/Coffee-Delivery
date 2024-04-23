import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }

    body {
        background: ${(props) => props.theme['base-card']};
        font-family: 'Roboto', sans-serif;
    }

    border-style, input-security, textarea, button {
        font-family: 'Baloo 2', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`
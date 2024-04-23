import styled from "styled-components";

export const LayoutContainer = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 10rem;
    padding-right: 10rem;

    height: 3rem;
    width: auto;

    background: ${(props) => props.theme['pink']};
`
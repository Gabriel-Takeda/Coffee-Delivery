import styled from "styled-components";


export const AtributesItensContaienr = styled.div`

    display: flex;
    align-items: center;

    span {
        background: ${(props) => props.theme['base-card']};
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        white-space: nowrap;
    }
`
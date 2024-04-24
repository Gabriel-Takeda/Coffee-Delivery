import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const ButtonCart = styled.button`
    background: ${(props) => props.theme['yellow-light']};

    border-radius: 8px;
    width: 1.9rem;
    height: 1.9rem;
    padding-top: 0.2rem;

    border-color: transparent;
    cursor: pointer;
`

export const TextLocale = styled.h1`

    display: flex;

    padding-top: 2px;

    width: 7.9rem;
    height: 1.9rem;

    align-items: center;

    font-size: 18px;
    border-radius: 8px;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props)=> props.theme['purple-dark']};
`

export const NavArea = styled.nav`
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    align-items: center;
`
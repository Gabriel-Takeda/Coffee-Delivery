import styled from "styled-components"

export const Cifrao = styled.span`
  font-size: 0.9rem;
  padding-right: 0.2rem;
`

export const CoffeePrice = styled.h1`
  font-size: 1.3rem;
  color: ${(props) => props.theme["base-text"]};
`

export const StylesButtonText = styled.button`
  border-color: transparent;
  cursor: pointer;
`

export const DivForButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-left: 1.5rem;
  margin-right: 0.5rem;
`
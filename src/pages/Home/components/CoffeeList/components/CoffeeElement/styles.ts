import styled from "styled-components";

export const ElementBox = styled.div`
  padding-bottom: 2.5rem;

`;

export const InternBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 90%;
  height: 90%;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  background: ${(props) => props.theme["base-card"]};
`;

export const CoffeeDescription = styled.span`
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
`

export const ImageElement = styled.img`
  transform: translateY(-20%);
  display: flex;
  justify-content: center;
  margin: 0 auto;
`

export const CoffeeTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 16px;
  display: flex;
  justify-content: center;
`

export const CoffeeFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const InternBoxGrid = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 100%;
  height: 100%;
  padding-right:1.750rem;
  padding-left: 1.750rem;
`
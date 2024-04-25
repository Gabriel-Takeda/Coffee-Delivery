import styled from "styled-components";

export const IntroLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ImageContainer = styled.div`
  padding-top: 3rem;

  width: 50%;
  padding-right: 10rem;
  img {
    padding-left: 4.1rem;
  }
`;

export const GridCAtributesContainer = styled.div`
  display: grid;
  height: 5.25rem;
  justify-content: space-between;
  font-size: 16px;

  grid-template-columns: 45% 55%;
  grid-auto-rows: 50%;
`;

export const CoffeeImageSection = styled.div`
  margin-top: 5rem;
  display: flex;
  padding-left: 10rem;

  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 15px;
`;

export const PrincipalTitle = styled.h1`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2.7rem;
  line-height: 1.2;
`;

export const TextTitle = styled.h1`
  padding-top: 1rem;
  padding-bottom: 5rem;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;

  color: ${(props) => props.theme["base-subtitle"]};
`;

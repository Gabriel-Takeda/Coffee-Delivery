import styled from "styled-components";
import { IElementProps } from "./index";

export const ElementBox = styled.div<IElementProps>`
  padding-bottom: 2.5rem;
  padding-left: ${({ isLeft }) => (isLeft ? "1.5rem" : "0")};
  padding-right: ${({ isRight }) => (isRight ? "1.2rem" : "0")};
`;

export const InternBox = styled.div<IElementProps>`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;

  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;

  background: ${(props) => props.theme["base-card"]};
`;

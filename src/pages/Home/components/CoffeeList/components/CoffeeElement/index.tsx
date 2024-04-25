import { ElementBox, InternBox } from "./styles";

export interface IElementProps {
  isLeft: boolean;
  isRight: boolean;
}

const CoffeeElement = ({ isLeft, isRight }: IElementProps) => {
  return (
    <ElementBox isLeft={isLeft} isRight={isRight}>
      <InternBox isLeft={isLeft} isRight={isRight}>
        <h1>Coffee description</h1>
      </InternBox>
    </ElementBox>
  );
};

export { CoffeeElement };

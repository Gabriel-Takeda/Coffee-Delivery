import { CoffeeTableStyled } from "./styles";
import { CoffeeElement } from "../CoffeeElement";

const CoffeeTable = () => {
  return (
    <CoffeeTableStyled>
      <CoffeeElement isLeft={false} isRight={true} />
      <CoffeeElement isLeft={true} isRight={true} />
      <CoffeeElement isLeft={true} isRight={true} />
      <CoffeeElement isLeft={true} isRight={false} />
      <CoffeeElement isLeft={false} isRight={true} />
      <CoffeeElement isLeft={true} isRight={true} />
      <CoffeeElement isLeft={true} isRight={true} />
      <CoffeeElement isLeft={true} isRight={false} />
      <CoffeeElement isLeft={false} isRight={true} />
      <CoffeeElement isLeft={true} isRight={true} />
    </CoffeeTableStyled>
  );
};

export { CoffeeTable };

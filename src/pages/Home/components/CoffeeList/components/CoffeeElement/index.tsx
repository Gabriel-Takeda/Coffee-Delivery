import { StyledButton } from "./StyledButtom";
import { CoffeeDescription, CoffeeFooter, CoffeeTitle, ElementBox, ImageElement, InternBox, InternBoxGrid } from "./styles";
export interface IElementProps {
  isLeft: boolean;
  isRight: boolean;
  image?: string;
  type?: string[];
  name?: string
  description?:string;
  id?: string;
}

const CoffeeElement = ({ isLeft, isRight, name, description, image}: IElementProps) => {

  return (
    <ElementBox isLeft={isLeft} isRight={isRight}>
      <InternBox isLeft={isLeft} isRight={isRight}>
        <InternBoxGrid>
          <div>
            <ImageElement src={image}/>
            <CoffeeTitle>{name}</CoffeeTitle>
            <CoffeeDescription>{description}</CoffeeDescription>
          </div>
          <CoffeeFooter>
            <StyledButton/>
          </CoffeeFooter>
        </InternBoxGrid>
      </InternBox>
    </ElementBox>
  );
};

export { CoffeeElement };

import { StyledButton } from "./StyledButtom";
import { CoffeeDescription, CoffeeFooter, CoffeeTitle, ElementBox, ImageElement, InternBox, InternBoxGrid } from "./styles";
export interface IElementProps {
  name: string
  image: string;
  description:string;
  id: number;
}

const CoffeeElement = ({ name, description, image, id}: IElementProps) => {

  return (
    <ElementBox >
      <InternBox >
        <InternBoxGrid>
          <div>
            <ImageElement src={image}/>
            <CoffeeTitle>{name}</CoffeeTitle>
            <CoffeeDescription>{description}</CoffeeDescription>
          </div>
          <CoffeeFooter>
            <StyledButton id={id}/>
          </CoffeeFooter>
        </InternBoxGrid>
      </InternBox>
    </ElementBox>
  );
};

export { CoffeeElement };

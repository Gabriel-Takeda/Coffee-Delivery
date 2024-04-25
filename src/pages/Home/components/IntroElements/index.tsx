import { AtributesItemList } from "../AtributesItemList";
import {
  GridCAtributesContainer,
  PrincipalTitle,
  TextTitle,
  TextContainer,
} from "./styles";

const IntroElements = () => {
  return (
    <TextContainer>
      <PrincipalTitle>
        Encontre o café perfeito
        <br />
        para qualquer hora do dia
      </PrincipalTitle>

      <TextTitle>
        Com o Coffee Delivery você recebe seu café onde estiver, a
        <br />
        qualquer hora
      </TextTitle>

      <GridCAtributesContainer>
        <AtributesItemList />
      </GridCAtributesContainer>
    </TextContainer>
  );
};

export { IntroElements };

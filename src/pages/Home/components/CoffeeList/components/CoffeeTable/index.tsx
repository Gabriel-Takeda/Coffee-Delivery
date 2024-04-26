import { CoffeeTableStyled } from "./styles";
import { CoffeeElement } from "../CoffeeElement";
import { useContext } from "react";
import { CartContext } from "../../../../../../context/CartContext";

const CoffeeTable = () => {

  const { coffeeList } = useContext(CartContext)

  return (
    <CoffeeTableStyled>
      {coffeeList.map(coffee => {
        return <CoffeeElement key={coffee.id} name={coffee.name} image={coffee.imagem} description={coffee.description} id={coffee.id}/>
      })}
    </CoffeeTableStyled>
  );
};

export { CoffeeTable };
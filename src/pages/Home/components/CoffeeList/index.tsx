import { CoffeeTable } from "./components/CoffeeTable";
import { CoffeeListContainer, CoffeeListTitle } from "./styles";

const CoffeeList = () => {
  return (
    <>
      <CoffeeListContainer>
        <CoffeeListTitle>Nossos Cafes</CoffeeListTitle>
        <CoffeeTable />
      </CoffeeListContainer>
    </>
  );
};

export { CoffeeList };

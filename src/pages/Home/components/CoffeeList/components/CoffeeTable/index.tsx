import { CoffeeTableStyled } from "./styles";
import { CoffeeElement } from "../CoffeeElement";

import CoffeeTradicional from '../../../../../../assets/CoffeeTradicional.svg'
import CoffeeCremoso from '../../../../../../assets/CoffeeCremoso.svg'
import CoffeeAmericano from '../../../../../../assets/CoffeeAmericano.svg'
import CoffeeGelado from '../../../../../../assets/CoffeeGelado.svg'

import CoffeeComLeite from '../../../../../../assets/CoffeeComLeite.svg'
import CoffeeLatte from '../../../../../../assets/CoffeeLatte.svg'
import CoffeeCapuccino from '../../../../../../assets/CoffeeCapuccino.svg'
import CoffeMacchiato from '../../../../../../assets/CoffeMacchiato.svg'

import CoffeeMocaccino from '../../../../../../assets/CoffeeMocaccino.svg'
import CoffeeChocolateQuente from '../../../../../../assets/CoffeeChocolateQuente.svg'
import CoffeeCubano from '../../../../../../assets/CoffeeCubano.svg'
import CoffeeHavaiano from '../../../../../../assets/CoffeeHavaiano.svg'

import CoffeeArabe from '../../../../../../assets/CoffeeArabe.svg'
import CoffeeIrlandes from '../../../../../../assets/CoffeeIrlandes.svg'


const CoffeeTable = () => {
  return (
    <CoffeeTableStyled>
      <CoffeeElement 
      isLeft={false} isRight={true} name={'Expresso Tradicional'} description={"O tradicional café feito com água quente e grãos moídos"} image={CoffeeTradicional}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Expresso Americano'} description={"Expresso diluído, menos intenso que o tradicional"} image={CoffeeAmericano}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Expresso Cremoso'}  description={"Café expresso tradicional com espuma cremosa"} image={CoffeeCremoso}/>
      <CoffeeElement 
      isLeft={true} isRight={false} name={'Expresso Gelado'} description={"Bebida preparada com café expresso e cubos de gelo"} image={CoffeeGelado}/>

      <CoffeeElement 
      isLeft={false} isRight={true} name={'Café com Leite'} description={"Meio a meio de expresso tradicional com leite vaporizado"} image={CoffeeComLeite}/>
      <CoffeeElement 
      isLeft={true} isRight={true}  name={'Latte'} description={"Uma dose de café expresso com o dobro de leite e espuma cremosa"} image={CoffeeLatte}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Capuccino'} description={"Bebida com canela feita de doses iguais de café, leite e espuma"} image={CoffeeCapuccino}/>
      <CoffeeElement 
      isLeft={true} isRight={false} name={'Macchiato'} description={"Café expresso misturado com um pouco de leite quente e espuma"} image={CoffeMacchiato}/>

      <CoffeeElement 
      isLeft={false} isRight={true} name={'Mocaccino'} description={"Café expresso com calda de chocolate, pouco leite e espuma"} image={CoffeeMocaccino}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Chocolate Quente'} description={"Bebida feita com chocolate dissolvido no leite quente e café"} image={CoffeeChocolateQuente}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Cubano'} description={"Drink gelado de café expresso com rum, creme de leite e hortelã"} image={CoffeeCubano}/>
      <CoffeeElement 
      isLeft={true} isRight={false} name={'Havaiano'} description={"Bebida adocicada preparada com café e leite de coco"} image={CoffeeHavaiano}/>

      <CoffeeElement 
      isLeft={false} isRight={true} name={'Árabe'} description={"Bebida preparada com grãos de café árabe e especiarias"} image={CoffeeArabe}/>
      <CoffeeElement 
      isLeft={true} isRight={true} name={'Irlandês'} description={"Bebida a base de café, uísque irlandês, açúcar e chantilly"} image={CoffeeIrlandes}/>
    </CoffeeTableStyled>
  );
};

export { CoffeeTable };

import { Cifrao, CoffeePrice, DivForButtons, StylesButtonText } from "./styles";
import LessSignal from '../../../../../../../assets/LessSignal.svg'
import AddSignal from '../../../../../../../assets/AddSignal.svg'
import ButtomCart from '../../../../../../../assets/ButtonCart.svg'

const StyledButton = () => {

  const price = 9.90;
  const numberOfCoffee = 0

    return (
        <>
            <Cifrao>
                R$
            </Cifrao>
            <CoffeePrice>
                {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </CoffeePrice>
            <DivForButtons>
                <StylesButtonText>
                    <img src={LessSignal}/>
                </StylesButtonText>
                <span>{numberOfCoffee}</span>
                <StylesButtonText>
                    <img src={AddSignal}/>
                </StylesButtonText>
            </DivForButtons>
            <img src={ButtomCart}/>
        </>
    )
}

export { StyledButton }
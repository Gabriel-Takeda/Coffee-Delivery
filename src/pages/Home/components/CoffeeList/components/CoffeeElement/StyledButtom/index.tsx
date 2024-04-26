import { Cifrao, CoffeePrice, DivForButtons, StylesButtonText } from "./styles";
import LessSignal from '../../../../../../../assets/LessSignal.svg'
import AddSignal from '../../../../../../../assets/AddSignal.svg'
import ButtomCart from '../../../../../../../assets/ButtonCart.svg'
import { CartContext } from '../../../../../../../context/CartContext';
import { useContext, useState } from "react";

interface IStyledButtonProps {
    id: number
}


const StyledButton = ({id}: IStyledButtonProps) => {

  const price = 9.90;
  const [ AmountCoffeeLocal, setUnitCoffee] = useState(0)

  const { handleAddCoffeeAmount, handleReduceCoffeAmount, handleUpdateCoffeeList} = useContext(CartContext)

  const handleMainOperationFunction = (intent: boolean) => {
    if (intent) {
        handleAddCoffeeAmount()
        setUnitCoffee(state => state + 1)
        handleUpdateCoffeeList(id,true)
    } else {
        handleReduceCoffeAmount()
        if (AmountCoffeeLocal > 0) {
            setUnitCoffee(state => state - 1)
            handleUpdateCoffeeList(id,false)
        }
    }
  }

    return (
        <>
            <Cifrao>
                R$
            </Cifrao>
            <CoffeePrice >
                {price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </CoffeePrice>
            <DivForButtons>
                <StylesButtonText onClick={() => handleMainOperationFunction(false)}>
                    <img src={LessSignal}/>
                </StylesButtonText>
                <span>{AmountCoffeeLocal}</span>
                <StylesButtonText onClick={() =>{handleMainOperationFunction(true)}}>
                    <img src={AddSignal}/>
                </StylesButtonText>
            </DivForButtons>
            <img src={ButtomCart}/>
        </>
    )
}

export { StyledButton }
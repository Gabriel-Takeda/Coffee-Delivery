import { createContext, ReactNode, useState } from "react"
import { CoffeeListId } from "../reducers/coffes"
import { CoffeList } from '../reducers/coffes'


interface ICartContextType {
    handleAddCoffeeAmount: () => void
    handleReduceCoffeAmount: () => void
    handleUpdateCoffeeList: (id:number, action: boolean) => void
    coffeeList: CoffeList[]
}   

interface ICartContextProviderProps {
    children: ReactNode
}

export const CartContext= createContext( {} as ICartContextType)

const CartContextProvider = ({ children }: ICartContextProviderProps) => {

    const [coffeeAmout, setCoffeeAmount] = useState(0)
    const [coffeeList, setCoffeeList] = useState(CoffeeListId)

    const handleUpdateCoffeeList = (id: number, action: boolean) => {

        if(action) {

            setCoffeeList(prevCoffeeList => {
                return prevCoffeeList.map(coffee => {
                    if (coffee.id === id) {
                        return { ...coffee, amount: coffee.amount + 1 };
                    } else {
                        return coffee;
                    }
                });
            });
        } else {
            setCoffeeList(prevCoffeeList => {
                return prevCoffeeList.map(coffee => {
                    if (coffee.id === id && coffee.amount > 0) {
                        return { ...coffee, amount: coffee.amount - 1 };
                    } else {
                        return coffee;
                    }
                });
            });
        }
    }


    const handleAddCoffeeAmount = () => {
        setCoffeeAmount(state => state + 1)
    }

    const handleReduceCoffeAmount = () => {
        if (coffeeAmout > 0) {
        setCoffeeAmount(state => state - 1)}
    }

    return (
        <CartContext.Provider value={{ handleAddCoffeeAmount, handleReduceCoffeAmount, handleUpdateCoffeeList, coffeeList}}>
            { children }
        </CartContext.Provider>
    )
}

export { CartContextProvider }
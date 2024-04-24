
import CartIcon from '../../../../assets/CartIcon.svg'
import Box from '../../../../assets/Box.svg'
import CoffeeIcon from '../../../../assets/CoffeeIcon.svg'
import Timer from '../../../../assets/Timer.svg'

import { AtributesItensContaienr } from './styles'


const AtributesItemList = () => {

    return (
        <>
            <AtributesItensContaienr>
                <img style={{marginRight:'0.5rem'}} src={CartIcon}/>
                <span>
                    Compra simples e segura
                </span>
            </AtributesItensContaienr>
            <AtributesItensContaienr>
                <img style={{marginRight:'0.5rem'}} src={Box}/>
                <span>
                    Embalagem mantém o café intacto               
                </span>
            </AtributesItensContaienr>
            <AtributesItensContaienr>
                <img style={{marginRight:'0.5rem'}} src={Timer}/>
                <span>
                    Entrega rápida e rastreada
                </span>
            </AtributesItensContaienr>
            <AtributesItensContaienr>
                <img style={{marginRight:'0.5rem'}} src={CoffeeIcon}/>
                <span>
                    O café chega fresquinho até você
                </span>
            </AtributesItensContaienr>
        </>
        
    )
}

export { AtributesItemList }
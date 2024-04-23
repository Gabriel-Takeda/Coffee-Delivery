import { HeaderContainer, ButtonCart, NavArea, TextLocale } from './styles';
import Logo from '../../assets/Logo.svg'
import cart from '../../assets/Cart.svg'
import { NavLink } from "react-router-dom"
import { MapPin } from 'phosphor-react';

const Header = () => {
    return (
        <HeaderContainer>
            <img src={Logo} width='84.95px'/>
                
            <NavArea>
                <TextLocale>
                    <MapPin size={20} /> Manaus, AM
                </TextLocale>

                <NavLink to='Checkout'>
                    <ButtonCart>
                        <img src={cart}/>
                    </ButtonCart>
                </NavLink>
            </NavArea>
        </HeaderContainer>
    )
}

export { Header }
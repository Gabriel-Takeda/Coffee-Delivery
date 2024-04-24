import { ImageContainer ,IntroLayout, GridCAtributesContainer, PrincipalTitle, TextContainer, TextTitle } from "./styles"
import { AtributesItemList } from './components/AtributesItemList'
import Coffee from '../../assets/Coffee.svg'

const Home = () => {
    return (
        <IntroLayout>
            <TextContainer>

                <PrincipalTitle>
                    Encontre o café perfeito
                    <br/>
                    para qualquer hora do dia
                </PrincipalTitle>

                <TextTitle>
                    Com o Coffee Delivery você recebe seu café onde estiver, a
                    <br/>
                    qualquer hora
                </TextTitle>
                
                <GridCAtributesContainer>
                    <AtributesItemList/>
                </GridCAtributesContainer>

            </TextContainer>
            <ImageContainer>
                <img src={Coffee}/>
            </ImageContainer>
        </IntroLayout>
    )
}

export { Home }
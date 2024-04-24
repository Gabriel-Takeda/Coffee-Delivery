import { ImageContainer ,IntroLayout, ListAtributes, PrincipalTitle, TextContainer, TextTitle } from "./styles"
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
                
                <ListAtributes>
                    <h1>CARACTERISTICAS DA LOJA(FALTA IMPLEMENTAR)</h1>
                </ListAtributes>

            </TextContainer>
            <ImageContainer>
                <img src={Coffee}/>
            </ImageContainer>
        </IntroLayout>
    )
}

export { Home }
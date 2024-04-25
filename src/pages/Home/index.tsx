import { ImageContainer, IntroLayout } from "./styles";
import Coffee from "../../assets/Coffee.svg";
import { CoffeeList } from "./components/CoffeeList";
import { IntroElements } from "./components/IntroElements";

const Home = () => {
  return (
    <>
      <IntroLayout>
        <IntroElements />

        <ImageContainer>
          <img src={Coffee} />
        </ImageContainer>
      </IntroLayout>
      <CoffeeList />
    </>
  );
};

export { Home };

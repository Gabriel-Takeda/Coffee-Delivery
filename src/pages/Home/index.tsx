import { ImageContainer, IntroLayout } from "./styles";
import ImageCoffee from "../../assets/ImageCoffee.svg";
import { CoffeeList } from "./components/CoffeeList";
import { IntroElements } from "./components/IntroElements";

const Home = () => {
  return (
    <>
      <IntroLayout>
        <IntroElements />
        <ImageContainer>
          <img src={ImageCoffee} />
        </ImageContainer>
      </IntroLayout>
      <CoffeeList />
    </>
  );
};

export { Home };

import ExperienceBar from "components/core/ExperienceBar";
import HomeContainer from "components/presentation/Home";
import * as S from "./Home.style";

const Home: React.FC = () => {
  return (
    <S.Container>
      <ExperienceBar />
      <HomeContainer />
    </S.Container>
  )
}

export default Home;

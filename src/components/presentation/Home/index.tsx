import Perfil from "./Perfil";
import CompletedChallenges from "./CompletedChallenges";
import CountDown from "./CountDown";

import * as S from "./Home.style";

const Home: React.FC = () => {
 return(
  <S.Section>
    <S.Container>
      <Perfil />
      <CompletedChallenges />
      <CountDown />
    </S.Container>
  </S.Section>
 );
}

export default Home;

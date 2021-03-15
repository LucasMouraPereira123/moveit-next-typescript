import * as S from "./CountDown.style";

const CountDown: React.FC = () => {
  return (
    <S.Container>
      <div>
        <span>2</span>
        <span>5</span>
      </div>
      <S.Separator>:</S.Separator>
      <div>
        <span>0</span>
        <span>0</span>
      </div>
    </S.Container>
  );
};

export default CountDown;

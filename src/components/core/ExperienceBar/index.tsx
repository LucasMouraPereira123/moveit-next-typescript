import * as S from "./ExperienceBar.style";

const ExperienceBar: React.FC = () => {
  return (
    <S.Header>
      <span>0 xp</span>
      <S.Bar>
        <div style={{ width: '50%' }} />
        <span style={{ left: '50%' }}>300 px</span>
      </S.Bar>
      <span>600 xp</span>
    </S.Header>
  );
}

export default ExperienceBar;

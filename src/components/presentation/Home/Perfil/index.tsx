import * as S from "./Perfil.style";

const Perfil: React.FC = () => {
  return (
    <S.Container>
      <img src="https://github.com/LucasMouraPereira123.png" alt="Foto perfil" />
      <div>
        <strong>Lucas Moura Pereira</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </S.Container>
  );
}

export default Perfil;

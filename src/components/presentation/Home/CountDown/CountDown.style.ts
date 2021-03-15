import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: ${props => props.theme.colors.title};

  div {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: ${props => props.theme.colors.white};
    box-shadow: 0 0 68px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;
    span {
      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
`;

export const Separator = styled.span`
  font-size: 6.25rem;
  margin: 0 0.5rem;
`;

import styled, { css } from "styled-components";

const Card = styled.div`
  padding: ${props => props.$padding};
  border-radius: 10px;
  background-color: #262D34;
  margin-bottom: ${props => props.$marginBottom};
  ${props => props.display === 'flex' && css`
    display: flex;
    align-items: center;
    gap: 16px;
  `}
  ${props => props.$justifyContent && css`
    justify-content: `+props.$justifyContent+`;
  `
  }
`;

Card.defaultProps = {
  $marginBottom: '20px',
  $padding: '20px',
};

export default Card;

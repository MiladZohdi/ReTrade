import styled, { css } from "styled-components";

const varitions = {
  Large: css`
    width: 29rem;
    height: 8rem;
  `,

  medium: css`
    width: 17.5rem;
    height: 7rem;
    align-self: center;
  `,
};

const Button = styled.button`
  font-size: 2rem;
  font-weight: 300;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius-sm);
  color: var(--color-white);
  transition: all 0.5s;

  ${(props) => varitions[props.varitions]}

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-dark);
  }
`;

export default Button;

import { NavLink } from "react-router";
import styled, { css } from "styled-components";

const variations = {
  Large: css`
    width: 29rem;
    height: 8rem;
  `,

  medium: css`
    width: 17.5rem;
    height: 7rem;
  `,
};

const Button = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 2rem;
  font-weight: 400;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius-sm);
  color: var(--color-white);
  transition: all 0.5s;

  ${(props) => variations[props.variations]}

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-dark);
  }
`;

export default Button;

import { NavLink } from "react-router";
import styled, { css } from "styled-components";

const variations = {
  HomePage: css`
    padding: 1rem 2rem;
    font-size: 1.4rem;
  `,
  form: css`
    height: 7rem;
    font-size: 2.4rem;
    width: 17.5rem;
  `,
};

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  text-decoration: none;
  border-radius: var(--border-radius-sm);
  color: var(--color-black);

  ${(props) => variations[props.variations]}

  &.active {
    background-color: var(--color-primary);
    color: var(--color-white);
  }
`;

export default StyledNavLink;

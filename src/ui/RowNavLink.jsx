import { NavLink } from "react-router";
import styled from "styled-components";

const RowNavLink = styled.ul`
  display: flex;
  align-items: center;
  justify-content: start;
  position: relative;

  background-color: red;

  border-radius: var(--border-radius-sm);
  background-color: var(--color-background-navlink);
`;

export default RowNavLink;

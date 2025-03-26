import styled from "styled-components";
import Row from "./FormRow";
import { NavLink } from "react-router";
import {
  HiBookmark,
  HiFolder,
  HiMiniPlusCircle,
  HiMiniBell,
  HiEye,
  HiArrowRightOnRectangle,
} from "react-icons/hi2";

const StyledMainNav = styled.ul`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 3rem;
  text-decoration: none;
  padding: 1rem 2rem;
  color: var(--color-white);
  list-style: none;
  font-size: 1.8rem;
  font-weight: 400;

  transition: all 0.3s;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    background-color: #02070a;
  }
`;

function MainNav() {
  return (
    <nav>
      <StyledMainNav>
        <li>
          <StyledNavLink to="">
            <HiBookmark />
            <span>Saved ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="">
            <HiFolder />
            <span>My ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="">
            <HiMiniPlusCircle />
            <span>Create new ad</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="">
            <HiMiniBell />
            <span>Notifications</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="">
            <HiEye />
            <span>See all the ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="">
            <HiArrowRightOnRectangle />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      </StyledMainNav>
    </nav>
  );
}

export default MainNav;

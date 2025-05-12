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
  border-radius: 1rem;

  transition: all 0.3s;

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &.active {
    background-color: #02070a;
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
          <StyledNavLink to="saved-ads">
            <HiBookmark />
            <span>Saved ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="my-ads">
            <HiFolder />
            <span>My ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="new-ad">
            <HiMiniPlusCircle />
            <span>Create new ad</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="notfications">
            <HiMiniBell />
            <span>Notifications</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="ads">
            <HiEye />
            <span>See all the ads</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="log-out">
            <HiArrowRightOnRectangle />
            <span>Log Out</span>
          </StyledNavLink>
        </li>
      </StyledMainNav>
    </nav>
  );
}

export default MainNav;

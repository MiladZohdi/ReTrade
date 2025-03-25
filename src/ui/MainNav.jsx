import styled from "styled-components";
import Row from "./FormRow";

const StyledMainNav = styled.ul`
  list-style: none;
  font-size: 1.8rem;
  font-weight: 400;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <Row>
        <li>Home</li>
        <li>Dashboard</li>
        <li>Settings</li>
      </Row>
    </StyledMainNav>
  );
}

export default MainNav;

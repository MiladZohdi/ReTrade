import styled from "styled-components";
import Row from "./FormRow";
import Logo from "./Logo";

const StyledHeader = styled.div`
  grid-column: 2/-1;
  justify-self: end;
  align-self: center;
  padding: 2rem 4rem 1rem 4rem;

  border-bottom: 2px solid var(--color-primary-dark);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;

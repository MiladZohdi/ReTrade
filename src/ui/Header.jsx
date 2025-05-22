import styled from "styled-components";
import Row from "./FormRow";
import Logo from "./Logo";

const StyledHeader = styled.div`
  grid-column: 2/-1;
  width: 100%;

  display: flex;
  justify-content: end;
  align-self: center;

  padding: 2rem 4rem 1rem 4rem;

  border-bottom: 0.1px solid var(--color-white);
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
}

export default Header;

import styled from "styled-components";
import Row from "../ui/Row";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import RowNavLink from "../ui/RowNavLink";
import HomeContent from "../ui/HomeContent";
import HomeHeader from "../ui/HomeHeader";
import HomeDescription from "../ui/HomeDescription";
import StyledNavLink from "../ui/StyledNavLink";

const StyledHomePage = styled.div`
  height: 100vh;
  background: var(--gradient-background-home);
  padding: 4rem 7rem;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <Row>
        <RowNavLink>
          <StyledNavLink
            to="login/log"
            className="active"
            variations="HomePage"
          >
            Login
          </StyledNavLink>

          <StyledNavLink to="login/sign " variations="HomePage">
            SignUp
          </StyledNavLink>
        </RowNavLink>
        <Logo />
      </Row>
      <HomeContent>
        <HomeHeader />
        <HomeDescription />
        <Button variations="Large">Place your Ad</Button>
      </HomeContent>
    </StyledHomePage>
  );
}

export default HomePage;

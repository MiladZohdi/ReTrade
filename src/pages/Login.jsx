import styled from "styled-components";

import LoginForm from "../featuers/Auth/LoginForm";

const StyledLogin = styled.div`
  background: var(--gradient-background-login);
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;

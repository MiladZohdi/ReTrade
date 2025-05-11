import styled from "styled-components";

import LoginForm from "../ui/LoginForm";

const StyledLogin = styled.div`
  background: var(--gradient-background-login);
  height: 100vh;
  padding: 8rem 0;
  overflow: hidden;
`;

function Login() {
  return (
    <StyledLogin>
      <LoginForm />
    </StyledLogin>
  );
}

export default Login;

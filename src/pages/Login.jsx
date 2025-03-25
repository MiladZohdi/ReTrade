import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";
import RowNavLink from "../ui/RowNavLink";
import StyledNavLink from "../ui/StyledNavLink";
import FormRow from "../ui/FormRow";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useLocation } from "react-router";

const StyledLogin = styled.div`
  background: var(--gradient-background-login);
  height: 100vh;
  padding: 8rem 0;
  overflow: hidden;
`;

const StyledForm = styled.form`
  max-width: 50rem;
  background-color: #e8edef;
  margin: 0 auto;
  border-radius: 0.8rem;
  padding: 3.5rem 7.5rem;
`;

function Login() {
  const { register } = useForm();

  const { pathname } = useLocation();

  return (
    <StyledLogin>
      <StyledForm>
        <RowNavLink>
          <StyledNavLink
            to="log"
            className={`${pathname === "/login/log" ? "active" : ""}`}
            variations="form"
          >
            Login
          </StyledNavLink>

          <StyledNavLink to="sign" variations="form">
            SignUp
          </StyledNavLink>
        </RowNavLink>
        <FormRow>
          {pathname === "/login/log" && (
            <>
              <Input
                type="text"
                placeholder="Email Address"
                id="email"
                {...register("email")}
              />
              <Input
                placeholder="Password"
                type="password"
                id="password"
                {...register("password")}
              />
            </>
          )}

          {pathname === "/login/sign" && (
            <>
              <Input
                type="text"
                placeholder="Name"
                id="name"
                {...register("name")}
              />
              <Input
                placeholder="Email"
                type="email"
                id="email"
                {...register("email")}
              />
              <Input
                placeholder="Password"
                type="password"
                id="password"
                {...register("password")}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                id="confirmPassword"
                {...register("confirmPassword")}
              />
            </>
          )}
          <Button variations="medium">{`${
            pathname === "/login/log" ? "LogIn" : "Signup"
          }`}</Button>
        </FormRow>
      </StyledForm>
    </StyledLogin>
  );
}

export default Login;

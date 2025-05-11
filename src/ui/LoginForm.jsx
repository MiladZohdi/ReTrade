import styled from "styled-components";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import RowNavLink from "./RowNavLink";
import StyledNavLink from "./StyledNavLink";
import FormRow from "./FormRow";
import Input from "./Input";
const StyledForm = styled.form`
  max-width: 50rem;
  background-color: #e8edef;
  margin: 0 auto;
  border-radius: 0.8rem;
  padding: 3.5rem 7.5rem;
`;

const LogButton = styled(Button)`
  align-self: center;
`;

function LoginForm() {
  const { register } = useForm();

  const { pathname } = useLocation();
  return (
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
        <LogButton variations="log">{`${
          pathname === "/login/log" ? "LogIn" : "Signup"
        }`}</LogButton>
      </FormRow>
    </StyledForm>
  );
}

export default LoginForm;

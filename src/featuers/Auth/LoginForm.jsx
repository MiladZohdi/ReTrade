import styled from "styled-components";
import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router";
import RowNavLink from "../../ui/RowNavLink";
import StyledNavLink from "../../ui/StyledNavLink";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSignUp";
import { useLogin } from "./useLogin";

const StyledForm = styled.form`
  max-width: 50rem;
  background-color: #e8edef;
  border-radius: 0.8rem;
  padding: 3.5rem 7.5rem;
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & p {
    color: red;
    font-size: 1.4rem;
  }
`;

const LogButton = styled(Button)`
  align-self: center;
`;

function LoginForm() {
  const { register, handleSubmit, formState, reset, getValues } = useForm();

  const { pathname } = useLocation();

  const { signUp, isLoading: LoadingSign } = useSignUp();
  const { login, isLoading: LoadingLog } = useLogin();

  function submitForm(data) {
    pathname === "/auth/sign" && signUp(data, { onSuccess: () => reset() });
    pathname === "/auth/login" && login(data, { onSettled: () => reset() });
  }

  return (
    <StyledForm onSubmit={handleSubmit(submitForm)}>
      <RowNavLink>
        <StyledNavLink
          to="login"
          className={`${pathname === "/auth/login" ? "active" : ""}`}
          variations="form"
          onClick={() => reset()}
        >
          Login
        </StyledNavLink>

        <StyledNavLink to="sign" variations="form" onClick={() => reset()}>
          SignUp
        </StyledNavLink>
      </RowNavLink>
      <FormRow>
        {pathname === "/auth/login" && (
          <>
            <Input
              type="text"
              placeholder="Email Address"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Please enter a valid email address",
                },
              })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.email && <p>{formState.errors.email.message}</p>}
            <Input
              placeholder="Password"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.password && (
              <p>{formState.errors.password.message}</p>
            )}
          </>
        )}

        {pathname === "/auth/sign" && (
          <>
            <Input
              type="text"
              placeholder="Name"
              id="name"
              {...register("name", { required: "Name is required" })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.name && <p>{formState.errors.name.message}</p>}
            <Input
              placeholder="Email"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                  message: "Please enter a valid email address",
                },
              })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.email && <p>{formState.errors.email.message}</p>}
            <Input
              placeholder="Password"
              type="password"
              id="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.password && (
              <p>{formState.errors.password.message}</p>
            )}
            <Input
              placeholder="Confirm Password"
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === getValues("password") || "Passwords need to match",
              })}
              disabled={LoadingSign || LoadingLog}
            />
            {formState.errors.confirmPassword && (
              <p>{formState.errors.confirmPassword.message}</p>
            )}
          </>
        )}
        <LogButton
          type="submit"
          variations="log"
          disabled={LoadingSign || LoadingLog}
        >{`${pathname === "/auth/login" ? "LogIn" : "Signup"}`}</LogButton>
      </FormRow>
    </StyledForm>
  );
}

export default LoginForm;

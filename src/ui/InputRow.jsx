import styled from "styled-components";

const StyledInputRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  & label {
    font-size: 1.8rem;
    font-weight: 400;
  }

  & p {
    font-size: 1.4rem;
    color: red;
    content: "";
  }

  & input {
    width: 35rem;
    height: 4rem;
  }

  & input,
  & textarea {
    padding: 1rem;
    font-size: 1.6rem;
    border: 1px solid var(--color-black);
    border-radius: 4px;

    background-color: #e8edef;
    &::placeholder {
      color: #a2b7c0;
    }
  }

  & textarea {
    font-family: inherit;
    width: 35rem;
    height: 10rem;
    resize: none;
    background-color: #e8edef;
    &::placeholder {
      color: #a2b7c0;
    }
  }
`;
function InputRow({ children, name, title, error }) {
  return (
    <StyledInputRow>
      <label htmlFor={name}>{title}:</label>
      {children}
      <p>{error}</p>
    </StyledInputRow>
  );
}

export default InputRow;

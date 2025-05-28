import styled from "styled-components";

const LogoutContainer = styled.div`
  & p {
    font-size: 1.8rem;
    line-height: 1.5;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  border: none;
  border-radius: var(--border-radius-sm);
  color: var(--color-white);
  background-color: ${(props) =>
    props.type === "cancel" ? "var(--color-primary)" : "var(--color-red)"};

  &:hover {
    cursor: pointer;
    background-color: var(--color-primary-dark);
  }
`;

function ConfirmationComponent({
  close,
  onClick,
  title,
  cancelButtonTitle,
  confirmButtonTitle,
}) {
  return (
    <LogoutContainer>
      <p>{title}</p>
      <ButtonContainer>
        <StyledButton type="cancel" onClick={close}>
          {cancelButtonTitle}
        </StyledButton>
        <StyledButton onClick={onClick}>{confirmButtonTitle}</StyledButton>
      </ButtonContainer>
    </LogoutContainer>
  );
}

export default ConfirmationComponent;

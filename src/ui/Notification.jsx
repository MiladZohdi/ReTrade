import styled, { css } from "styled-components";

const StyledNotification = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;

  padding: 2rem 4rem;
  width: 100%;

  border-radius: var(--border-radius-sm);

  color: var(--color-black);

  &:hover {
    cursor: pointer;
  }

  ${({ type }) =>
    type === "read"
      ? css`
          font-weight: 400;
          font-size: 1.6rem;
          background-color: #b9c9d0;
        `
      : css`
          font-weight: 700;
          font-size: 1.6rem;
          background-color: #a2b7c0;
        `}
`;

const Dot = styled.div`
  content: "";
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;

  ${({ type }) =>
    type === "read"
      ? css`
          background-color: #a2b7c0;
          border: 2px solid black;
        `
      : css`
          background-color: black;
        `}
`;

function Notification({ type }) {
  return (
    <StyledNotification type={type}>
      <Dot type={type} />
      <p>dandnaldnal</p>
    </StyledNotification>
  );
}

export default Notification;

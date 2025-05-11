import styled from "styled-components";
import Notification from "./Notification";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function NotificationContainer() {
  return (
    <StyledContainer>
      <Notification type="read" />
      <Notification />
      <Notification type="read" />
      <Notification type="read" />
      <Notification />
    </StyledContainer>
  );
}

export default NotificationContainer;

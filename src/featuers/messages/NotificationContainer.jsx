import styled from "styled-components";
import Notification from "./Notification";
import { useGetMessages } from "./useGetMessages";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

function NotificationContainer() {
  const { data } = useGetMessages();

  return (
    <StyledContainer>
      {data?.map((message) => (
        <Notification
          key={message.id}
          type={message.isRead ? "read" : ""}
          message={message}
        />
      ))}
    </StyledContainer>
  );
}

export default NotificationContainer;

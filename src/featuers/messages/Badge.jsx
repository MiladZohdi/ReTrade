import styled from "styled-components";
import { useGetMessages } from "./useGetMessages";

const StyledBadge = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3rem;
  height: 3rem;
  border-radius: 100%;
  background-color: #ff0000;

  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
`;

function Badge() {
  const { data } = useGetMessages();
  const unreadCount = data?.filter((message) => !message.isRead).length || 0;
  return <>{unreadCount !== 0 && <StyledBadge> {unreadCount} </StyledBadge>}</>;
}

export default Badge;

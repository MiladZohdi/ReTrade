import styled from "styled-components";
import Row from "./Row";
import { useGetUser } from "../featuers/Auth/useGetUser";

const StyledSidbarHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  padding: 3rem;
`;

const Styledh2 = styled.h2`
  font-size: 2rem;
`;

const Styledp = styled.p`
  font-size: 1.4rem;
`;

function SidbarHeader() {
  const {
    user: {
      user: {
        user_metadata: { name, email },
      },
    },
  } = useGetUser();
  return (
    <StyledSidbarHeader>
      <Styledh2>{name}</Styledh2>
      <Styledp>{email}</Styledp>
    </StyledSidbarHeader>
  );
}

export default SidbarHeader;

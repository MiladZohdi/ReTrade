import styled from "styled-components";
import Row from "./Row";

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
  return (
    <StyledSidbarHeader>
      <Styledh2>Milad Zohdi</Styledh2>
      <Styledp>info@miladzohdi.com</Styledp>
    </StyledSidbarHeader>
  );
}

export default SidbarHeader;

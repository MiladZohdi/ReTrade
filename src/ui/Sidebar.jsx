import styled from "styled-components";
import Row from "./Row";
import SidbarHeader from "./SidbarHeader";
import MainNav from "./MainNav";

const StyledSidebar = styled.div`
  grid-row: 1 / -1;
  padding: 3.2rem 2.4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  border-right: 1px solid black;

  background-color: #0c2631;
  color: var(--color-white);
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <SidbarHeader />
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;

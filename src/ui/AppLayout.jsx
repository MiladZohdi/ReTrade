import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
  background-color: #e8edef;
`;

const Container = styled.main`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 2rem 4rem;
  overflow: scroll;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Container>
        <Outlet />
      </Container>
    </StyledAppLayout>
  );
}

export default AppLayout;

import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useEffect } from "react";
import supabase from "../services/supabase";
import { useGetUser } from "../featuers/Auth/useGetUser";
import toast from "react-hot-toast";
import { LuMessageCircle } from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";

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
  overflow-y: scroll;
`;

function AppLayout() {
  const queryClient = useQueryClient();
  const { user_id } = useGetUser();
  useEffect(() => {
    const chanel = supabase
      .channel("messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          payload.new.user_id === user_id &&
            toast("new message", {
              icon: <LuMessageCircle />,
              style: {
                borderRadius: "10px",
              },
            });
          queryClient.invalidateQueries(["messages", user_id]);
        }
      )
      .subscribe();
    return () => {
      supabase.removeChannel(chanel);
    };
  }, [queryClient, user_id]);

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

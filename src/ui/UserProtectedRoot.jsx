import { useNavigate } from "react-router";
import { useGetUser } from "../featuers/Auth/useGetUser";
import { useEffect } from "react";
import Loader from "./Loader";
import FullPage from "./FullPage";

function UserProtectedRoot({ children }) {
  const navigate = useNavigate();
  const { isAuth, isLoading, isAdmin } = useGetUser();
  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/auth/login");
  }, [isAuth, isLoading, navigate]);

  if (isLoading)
    return (
      <FullPage>
        <Loader />
      </FullPage>
    );

  if (isAuth && !isAdmin) return children;
}

export default UserProtectedRoot;

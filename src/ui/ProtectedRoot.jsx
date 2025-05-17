import { useNavigate } from "react-router";
import { useGetUser } from "../featuers/Auth/useGetUser";
import { useEffect } from "react";
import Loader from "./Loader";
import FullPage from "./FullPage";

function ProtectedRoot({ children }) {
  const navigate = useNavigate();
  const { isAuth, isLoading } = useGetUser();
  useEffect(() => {
    if (!isAuth && !isLoading) navigate("/auth/login");
  }, [isAuth, isLoading, navigate]);

  console.log(isAuth);

  if (isLoading)
    return (
      <FullPage>
        <Loader />
      </FullPage>
    );

  if (isAuth) return children;
}

export default ProtectedRoot;

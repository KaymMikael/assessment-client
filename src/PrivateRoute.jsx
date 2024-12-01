import { Navigate } from "react-router-dom";
import axiosHelper from "./axios/axiosHelper";
import { useUser } from "./hooks/useUser";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useUser();

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return user ? children : <Navigate to={"/login"} />;
};

export default PrivateRoute;

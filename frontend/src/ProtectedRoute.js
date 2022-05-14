import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./component/layout/Loader/Loader";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ loading, isAuthenticated, children }) => {
  const navigate = useNavigate();
  if (!isAuthenticated) {
    return <Navigate to={"/Login"} />;
  }
  return <>{loading ? <Loader /> : children}</>;
};

export default ProtectedRoute;

import Loader from "./component/layout/Loader/Loader";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
  isAdmin,
  loading,
  user,
  isAuthenticated,
  children,
}) => {
  if (isAuthenticated === false) {
    return <>{loading ? <Loader /> : <Navigate to={"/Login"} />}</>;
  }
  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to={"/Login"} />;
  }
  return <>{loading ? <Loader /> : children}</>;
};

export default ProtectedRoute;

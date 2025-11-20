import { useSelector } from "react-redux";
import  { Navigate } from "react-router-dom";
import type { RootState } from "./store/store";
import type { JSX } from "react";

interface Props {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: Props) => {
  const { token } = useSelector((state: RootState) => state.auth);

  // If not logged in → block access
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default ProtectedRoute;

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "./store/store";
import type { JSX } from "react";

const GuestRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useSelector((state: RootState) => state.auth);

  if (token) {
    return <Navigate to="/" replace />;
  }
  
  return children;
};

export default GuestRoute;

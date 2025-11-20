import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import type { RootState } from "./store/store";
import type { JSX } from "react";

const AdminOrGuestRoute = ({ children }: { children: JSX.Element }) => {
  const { token, role } = useSelector((state: RootState) => state.auth);

  if (token && role === "user") {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AdminOrGuestRoute;

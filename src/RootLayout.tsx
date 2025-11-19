import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />   {/* All pages render here */}
      </div>
    </>
  );
}

import { Outlet } from "react-router";

const ProtectRouter = () => {
  const isLoggedIn = localStorage.getItem("user");
  return <Outlet />;
};

export default ProtectRouter;

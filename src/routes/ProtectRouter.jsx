import { Navigate, Outlet } from "react-router";

const ProtectRouter = () => {
  const isLoggedIn = localStorage.getItem("user");
  // if (!isLoggedIn) {
  //   return <Navigate to="/" replace />;
  // }
  return <Outlet />;
};

export default ProtectRouter;

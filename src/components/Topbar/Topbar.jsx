import { useNavigate } from "react-router";
import Button from "../../../features/Button/Button";

const Topbar = ({ title }) => {
  const navigate = useNavigate();
  const logedOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="w-full h-20 relative z-10 px-5 border border-gray-200 flex items-center justify-between *:flex *:items-center *:justify-between *:gap-3">
      <h1>{title}</h1>
      <Button
        title="Logout"
        className="bg-red-500 text-white text-center"
        onclickHandler={logedOutHandler}
      />
    </div>
  );
};

export default Topbar;

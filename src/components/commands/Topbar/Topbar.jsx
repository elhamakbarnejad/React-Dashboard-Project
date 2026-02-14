import { useNavigate } from "react-router";
import Button from "../../../features/Button/Button";
import ThemeBtn from "../../commands/ThemeBtn/ThemeBtn";

const Topbar = ({ title }) => {
  const navigate = useNavigate();
  const logedOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="w-full h-20 relative z-10 px-5 border border-gray-200 flex items-center justify-between ">
      <h1 className="font-bold text-3xl text-zinc-900">{title}</h1>
      <div className=" flex items-center justify-between w-[15%]">
        {" "}
        <Button
          title="Logout"
          className="bg-red-600 text-white px-10 text-md"
          onclickHandler={logedOutHandler}
        />
        <ThemeBtn />
      </div>
    </div>
  );
};

export default Topbar;

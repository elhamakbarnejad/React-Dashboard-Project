import { useNavigate } from "react-router";
import { FaReact } from "react-icons/fa";
import ThemeBtn from "../../../commands/ThemeBtn/ThemeBtn";

const TopbarPublic = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <div className="flex items-center justify-between w-[80%] shadow h-18 px-8 fixed top-5 rounded-2xl bg-white z-10 opacity-98 dark:bg-zinc-500 dark:text-white">
      <FaReact className="w-12 h-12" />
      <div className=" items-center justify-between gap-8 *:dark:text-white hidden lg:flex">
        <p className="text-md text-bold text-gray-900">Solutions</p>
        <p className="text-md text-bold text-gray-900">Pricing</p>
        <p className="text-md text-bold text-gray-900">Individuals</p>
        <p className="text-md text-bold text-gray-900">Resources</p>
      </div>

      <div className="flex items-center justify-between gap-2 ">
        <p className="text-md text-bold text-gray-900 hover:text-green-500 transition-all duration-150 dark:text-white">
          Book a demo
        </p>

        <button
          className="w-12 h-12 bg-red-600 rounded-full border-3 border-green-500 text-white text-2xl  items-center justify-center hover:opacity-80 transition-all duration-150 sm:flex hidden"
          onClick={handleLogin}
        >
          G
        </button>
        <ThemeBtn />
      </div>
    </div>
  );
};

export default TopbarPublic;

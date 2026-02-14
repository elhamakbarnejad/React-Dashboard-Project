import { FaReact } from "react-icons/fa";
import { GoPlusCircle } from "react-icons/go";

const TopMenu = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center *:flex *:justify-center *:items-center *:flex-col *:hover:opacity-80 *:transition-all *:duration-150">
      <FaReact className="w-12 h-12 text-sky-700" />

      <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-105 transition-all duration-150">
        <GoPlusCircle className="w-6 h-6 text-gray-700" />
      </button>
    </div>
  );
};

export default TopMenu;

import { CgSupport } from "react-icons/cg";

const BottonMenu = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center *:flex *:justify-center *:items-center *:flex-col *:hover:opacity-80 *:transition-all *:duration-150">
      <div className="hover:opacity-90 transition-all duration-150 rounded-full">
        <button className="w-10 h-10 bg-amber-400 rounded-full  text-gray-700">
          D
        </button>
        <p className="font-bold text-sm text-gray-700">Account</p>
      </div>
      <button className="w-10 h-10 rounded-full text-gray-900/50 bg-white/5 flex items-center justify-center hover:bg-gray-200 hover:text-gray-900 transition-all duration-150">
        {" "}
        <CgSupport className=" w-6 h-6 " />
      </button>
    </div>
  );
};

export default BottonMenu;

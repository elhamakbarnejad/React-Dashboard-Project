import { PiMedal } from "react-icons/pi";
import { HiOutlineTemplate } from "react-icons/hi";
import { IoCalendarSharp } from "react-icons/io5";

const SummeryCard = ({ h1Title, pTitle, icon, btn1Title, btn2Title }) => {
  return (
    <div className=" bg-sky-50 rounded-xl flex flex-col items-center justify-center text-center hover:-translate-y-0.5 transition-all duration-150 w-full h-68 gap-2 px-4">
      <div className="flex items-center justify-center rounded-full bg-white p-3 mt-10 h-20 w-20">
        {icon}
      </div>
      <div
        className=" flex flex-col items-center justify-between  mb-5 h-48
    bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(90deg,#e5e7eb_1px,transparent_1px)]
bg-[size:20px_20px] bg-center"
      >
        <h1 className="font-bold text-lg flex mt-2">{h1Title}</h1>
        <p className="text-gray-700 dark:text-gray-100 text-sm font-bold">
          {pTitle}
        </p>
        <div className="flex items-center justify-between gap-3 mt-10 mb-3">
          <h2 className="flex items-center justify-center text-xs text-gray-600">
            <PiMedal className="text-sky-500" /> 4.2/5
          </h2>
          <h2 className="flex items-center justify-center text-xs text-gray-600">
            <HiOutlineTemplate className="text-sky-500" /> Template
          </h2>
          <h2 className="flex items-center justify-center text-xs text-gray-600">
            <IoCalendarSharp className="text-sky-500" /> 02/09/2026
          </h2>
        </div>
        <button className="w-[90%] rounded-2xl px-10 bg-white text-sm font-bold mb-3 shadow py-1 hover:-translate-y-0.5 transition-all duration-150">
          Completed
        </button>
      </div>
    </div>
  );
};

export default SummeryCard;

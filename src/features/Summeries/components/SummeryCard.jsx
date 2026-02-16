const SummeryCard = ({ h1Title, pTitle, btn1Title, btn2Title }) => {
  return (
    <div className=" bg-sky-200/30 rounded-xl flex flex-col items-center justify-between h-full text-center p-5 hover:-translate-y-0.5 transition-all duration-150">
      <h1 className="font-bold text-xl">{h1Title}</h1>
      <p className="text-gray-700 dark:text-gray-100 text-md">{pTitle}</p>
      <div className="flex items-center justify-center  w-full gap-2 p-5">
        <button className="w-fit min-w-35 bg-white rounded-xl px-1 py-1 text-sm shadow hover:-translate-y-0.5 transition-all duration-150">
          {btn1Title}{" "}
        </button>
        <button className="w-fit min-w-35 bg-white rounded-xl px-1 py-1 text-sm shadow hover:-translate-y-0.5 transition-all duration-150">
          {btn2Title}
        </button>
      </div>
    </div>
  );
};

export default SummeryCard;

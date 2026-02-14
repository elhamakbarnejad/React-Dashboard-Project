const TableHead = ({ children }) => {
  return (
    <div className="w-full h-10 px-4 py-2 text-left bg-sky-100 grid grid-cols-7 items-center justify-between text-md text-gray-900 font-bold text-md *:flex *:items-center *:justify-between *:text-center">
      {children}
    </div>
  );
};

export default TableHead;

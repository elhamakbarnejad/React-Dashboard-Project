const TableRow = ({ children }) => {
  return (
    <div className="w-full h-15 even:bg-gray-100 grid grid-cols-7  items-center px-4 py-2 justify-between text-md text-gray-900 *:flex *:items-center *:justify-between">
      {children}
    </div>
  );
};

export default TableRow;

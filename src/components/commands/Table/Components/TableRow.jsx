const TableRow = ({ children }) => {
  return (
    <div className="w-full h-15 even:bg-gray-100 flex items-center px-4 py-2 justify-between text-md text-gray-900 ">
      {children}
    </div>
  );
};

export default TableRow;

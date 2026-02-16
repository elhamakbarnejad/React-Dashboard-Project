const TableRow = ({ children }) => {
  return (
    <div className="w-full h-15 flex even:bg-gray-100  items-center px-4 py-2 justify-between text-md text-gray-900 ">
      {children}
    </div>
  );
};

export default TableRow;

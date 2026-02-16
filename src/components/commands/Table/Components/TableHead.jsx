const TableHead = ({ children }) => {
  return (
    <tr className=" w-full h-10 flex items-center px-4 py-2  justify-between text-md text-gray-900 bg-sky-100">
      {children}
    </tr>
  );
};

export default TableHead;

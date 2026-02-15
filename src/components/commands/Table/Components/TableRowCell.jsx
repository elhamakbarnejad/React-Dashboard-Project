import React from "react";

const TableRowCell = ({ children }) => {
  return (
    <td className="px-4 py-2 text-center border border-gray-200">{children}</td>
    // <div className="px-4 py-2 flex items-center justify-center border-2 border-red-900 ">
    //   {children}
    // </div>
  );
};

export default TableRowCell;

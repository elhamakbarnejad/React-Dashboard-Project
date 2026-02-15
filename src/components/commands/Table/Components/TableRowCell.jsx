import React from "react";

const TableRowCell = ({ children }) => {
  return (
    <td className="p-1 flex flex-1 items-center justify-center line-clamp-1 text-center">
      {children}
    </td>
    // <div className="px-4 py-2 flex items-center justify-center border-2 border-red-900 ">
    //   {children}
    // </div>
  );
};

export default TableRowCell;

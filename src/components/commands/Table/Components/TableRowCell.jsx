import React from "react";

const TableRowCell = ({ children, className = "" }) => {
  return (
    <td
      className={`p-1  items-center justify-center line-clamp-1 text-center flex-1 ${className} `}
    >
      {children}
    </td>
  );
};

export default TableRowCell;

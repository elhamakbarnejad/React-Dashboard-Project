import React from "react";

const TableHeadCell = ({ children }) => {
  return <th className="px-4 py-2 text-center">{children}</th>;
  // <div className="px-4">{children}</div>;
};

export default TableHeadCell;

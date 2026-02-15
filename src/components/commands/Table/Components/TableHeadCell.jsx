import React from "react";

const TableHeadCell = ({ children }) => {
  return (
    <th className="p-1 flex flex-1 items-center justify-center">{children}</th>
  );
  // <div className="px-4">{children}</div>;
};

export default TableHeadCell;

import React from "react";

const TableHeadCell = ({ children, className }) => {
  return (
    <th className={`p-1 flex flex-1 items-center justify-center ${className}`}>
      {children}
    </th>
  );
  // <div className="px-4">{children}</div>;
};

export default TableHeadCell;

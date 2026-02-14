import { useEffect, useState } from "react";

const TablePagination = ({ items, setItems, perPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const usersArray = items.users || [];
  const ArrayLength = items?.length;
  const itemsNumber = Math.ceil(ArrayLength / perPage);
  useEffect(() => {
    if (!items?.length) return;
    const startIndex = (currentPage - 1) * perPage;
    const endIndex = startIndex + perPage;
    const paginatedItems = [...items].slice(startIndex, endIndex);
    const paginatedUsers = [...items].slice(startIndex, endIndex);
    setItems({
      ...items,
      products: paginatedItems,
      users: paginatedUsers,
    });
  }, [currentPage, items]);
  const changeBtnNumber = (btnNumber) => {
    setCurrentPage(btnNumber);
  };

  const RenderdedPaginationBtns = () => {
    const btnsArray = [];
    for (let i = 1; i <= itemsNumber; i++) {
      btnsArray.push(
        <button
          className="shadow text-sm w-fit p-2 h-6 bg-gray-100 rounded-sm flex items-center justify-between  text-gray-800 font-bold hover:bg-sky-200 transition-all duration-150"
          onClick={() => changeBtnNumber(i)}
          key={i}
        >
          {i}
        </button>,
      );
    }
    return btnsArray;
  };

  return (
    <div className="w-fit flex items-center justify-between gap-2 mt-5 mb-10">
      <button
        className="shadow text-sm w-15 h-8 bg-gray-100 rounded-sm flex items-center justify-center text-gray-800 font-bold hover:bg-rose-200 transition-all duration-150"
        onClick={() => changeBtnNumber(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <div className="w-fit flex  items-center justify-between gap-2">
        {" "}
        {RenderdedPaginationBtns()}
      </div>
      <button
        className="shadow text-sm w-15 h-8 bg-gray-100 rounded-sm flex items-center justify-center text-gray-800 font-bold hover:bg-rose-200 transition-all duration-150"
        onClick={() => changeBtnNumber(currentPage + 1)}
        disabled={currentPage === itemsNumber}
      >
        Next
      </button>
    </div>
  );
};

export default TablePagination;

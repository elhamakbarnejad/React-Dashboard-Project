import TableHeader from "./Components/TableHeader";
import TablePagination from "./Components/TablePagination";
const Table = ({
  header = { title: null, linkBtn: undefined },
  children,
  pagination = { items: null, setItems: null, perPage: null },
}) => {
  return (
    <div className="w-full rounded-xl overflow-hidden flex flex-col items-center justify-center shadow-xl">
      <TableHeader header={header} />
      {children}
      <TablePagination
        items={pagination.items}
        setItems={pagination.setItems}
        perPage={pagination.perPage}
      />
    </div>
  );
};

export default Table;

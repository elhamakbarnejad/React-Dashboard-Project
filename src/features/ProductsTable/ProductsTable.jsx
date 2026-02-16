import { Link } from "react-router";
import Table from "../../components/commands/Table/Table";
import { MdOpenInNew } from "react-icons/md";
import { tableProductHeadCells } from "../../data/tableData";
import TableHead from "../../components/commands/Table/Components/TableHead";
import TableHeadCell from "../../components/commands/Table/Components/TableHeadCell";
import TableRow from "../../components/commands/Table/Components/TableRow";
import TableRowCell from "../../components/commands/Table/Components/TableRowCell";
import { useState } from "react";
const ProductsTable = ({ allProducts }) => {
  const [LastProducts, setLastProducts] = useState(allProducts);

  const Button = () => {
    return (
      <Link
        to={"/"}
        className="w-35 h-10 bg-sky-100 text-gray-900 flex items-center justify-center p-2  rounded-md gap-2 shadow hover:-translate-y-0.5 transition duration-150"
      >
        <MdOpenInNew className="text-xl" />
        <span className="">Products</span>
      </Link>
    );
  };
  return (
    <div className="overflow-x-auto">
      <Table
        className="w-full table-fixed border-collapse"
        header={{ title: "Products", LinkBtn: Button }}
        pagination={{
          items: allProducts.products,
          setItems: setLastProducts,
          perPage: 10,
        }}
      >
        <TableHead>
          {/* {tableProductHeadCells.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })} */}
          <TableHeadCell>{tableProductHeadCells[0]}</TableHeadCell>
          <TableHeadCell>{tableProductHeadCells[1]}</TableHeadCell>
          <TableHeadCell className="hidden xl:flex">
            {tableProductHeadCells[2]}
          </TableHeadCell>
          <TableHeadCell className="hidden xl:flex">
            {tableProductHeadCells[3]}
          </TableHeadCell>
          <TableHeadCell>{tableProductHeadCells[4]}</TableHeadCell>
          <TableHeadCell className="hidden xl:flex">
            {tableProductHeadCells[5]}
          </TableHeadCell>
          <TableHeadCell className="hidden xl:flex">
            {tableProductHeadCells[6]}
          </TableHeadCell>
        </TableHead>{" "}
        {LastProducts?.products?.map((product) => {
          return (
            <TableRow key={product?.id}>
              <TableRowCell>{product?.id}</TableRowCell>
              <TableRowCell className="text-sm lg:text-md">
                {product?.title}
              </TableRowCell>
              <TableRowCell className="hidden xl:flex">
                {product?.minimumOrderQuantity}
              </TableRowCell>
              <TableRowCell className="hidden xl:flex">
                {product?.category}
              </TableRowCell>
              <TableRowCell>{product?.price} $</TableRowCell>
              <TableRowCell className="hidden xl:flex">
                {product?.stock}
              </TableRowCell>
              <TableRowCell className="hidden xl:flex">
                <div className="w-10 h-10 mx-auto">
                  <img
                    src={product?.thumbnail}
                    alt="Image"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </TableRowCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

export default ProductsTable;

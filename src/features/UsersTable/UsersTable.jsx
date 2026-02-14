import { Link } from "react-router";
import Table from "../../components/commands/Table/Table";
import { MdOpenInNew } from "react-icons/md";
import { tableUsersHeadCells } from "../../data/tableData";
import TableHead from "../../components/commands/Table/Components/TableHead";
import TableHeadCell from "../../components/commands/Table/Components/TableHeadCell";
import TableRow from "../../components/commands/Table/Components/TableRow";
import TableRowCell from "../../components/commands/Table/Components/TableRowCell";
import { useState } from "react";
const UsersTable = ({ username }) => {
  const [lastUsers, setLastUsers] = useState(username);

  const Button = () => {
    return (
      <Link
        to={"/"}
        className="w-35 h-10 bg-sky-100 text-gray-900 flex items-center justify-center p-2  rounded-md gap-2 shadow hover:-translate-y-0.5 transition duration-150"
      >
        <MdOpenInNew className="text-xl" />
        <span className="">Users</span>
      </Link>
    );
  };

  return (
    <div className="overflow-x-auto">
      <Table
        className="w-full table-fixed"
        header={{ title: "Products", LinkBtn: Button }}
        pagination={{
          items: username.users,
          setItems: setLastUsers,
          perPage: 10,
        }}
      >
        <TableHead>
          {tableUsersHeadCells.map((item) => {
            return <TableHeadCell key={item}>{item}</TableHeadCell>;
          })}
        </TableHead>{" "}
        {lastUsers?.users?.map((user) => {
          return (
            <TableRow key={user.id}>
              <TableRowCell>{user.id}</TableRowCell>
              <TableRowCell>{user.firstName}</TableRowCell>
              <TableRowCell>{user.lastName}</TableRowCell>
              <TableRowCell>{user.age}</TableRowCell>
              <TableRowCell>{user.gender}</TableRowCell>
              <TableRowCell>
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src={user.image}
                    alt="Image"
                    className="rounded-full object-cover"
                  />
                </div>
              </TableRowCell>
              <TableRowCell>{user.role}</TableRowCell>
            </TableRow>
          );
        })}
      </Table>
    </div>
  );
};

export default UsersTable;

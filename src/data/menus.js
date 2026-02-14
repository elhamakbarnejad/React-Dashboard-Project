import { RxDashboard } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

export default [
  {
    id: 1,
    title: "Dashboard",
    Icon: RxDashboard,
    path: "/dashboard",
  },
  {
    id: 2,
    title: "Users",
    Icon: FaUsers,
    path: "/dashboard/users",
  },
  {
    id: 3,
    title: "Products",
    Icon: MdProductionQuantityLimits,
    path: "/dashboard/products",
  },
];

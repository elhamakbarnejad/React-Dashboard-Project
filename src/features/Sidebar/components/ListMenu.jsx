import { NavLink } from "react-router";
import menus from "../../../data/menus";
import clsx from "clsx";
const ListMenu = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center *:flex *:justify-center *:items-center *:flex-col *:hover:opacity-80 *:transition-all *:duration-150">
      {menus.map((menu) => {
        return (
          <NavLink
            to={menu.path}
            end
            key={menu.id}
            className={({ isActive }) =>
              clsx("w-[90%] h-15 rounded-lg", isActive ? "bg-sky-200/90" : " ")
            }
          >
            <div className="font-bold text-2xl text-gray-700">
              {<menu.Icon />}
            </div>
            <h2 className="font-bold text-sm text-gray-700">{menu.title}</h2>
          </NavLink>
        );
      })}
    </div>
  );
};

export default ListMenu;

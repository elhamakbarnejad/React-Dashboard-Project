import BottonMenu from "./components/BottonMenu";
import ListMenu from "./components/ListMenu";
import TopMenu from "./components/TopMenu";
const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-5 items-center justify-between w-28 bg-gray-100 dark:bg-zinc-400 min-h-screen sticky top-0 z-10 border-2 pb-15 pt-5 border-gray-200">
      <TopMenu />
      <ListMenu />
      <BottonMenu />
    </aside>
  );
};

export default Sidebar;

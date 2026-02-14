import { Outlet } from "react-router";
import Sidebar from "../../features/Sidebar/Sidebar";
import Topbar from "../../components/commands/Topbar/Topbar";

const DashboardLayout = () => {
  return (
    <main id="root" className="flex">
      <Sidebar />
      <section className="grow *:px-6">
        <Topbar
          title="Technical test project
"
        />
        <div className="mt-6 mx-auto">
          <div className="relative z-999">
            <Outlet />
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashboardLayout;

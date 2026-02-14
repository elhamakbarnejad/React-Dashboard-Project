import { createBrowserRouter } from "react-router";
import DashboardLayout from "../components/Layouts/DashboardLayout";
import PublicLayout from "../components/Layouts/PublicLayout/PublicLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Products from "../pages/Products/Products";
import Users from "../pages/Users/Users";
import Login from "../pages/Auth/Login";
import Landing from "../pages/Landing/Landing";
import ProtectedRoute from "../components/Layouts/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicLayout>
        <Landing />
      </PublicLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <PublicLayout>
        <Login />
      </PublicLayout>
    ),
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        path: "/dashboard",
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "products",
            element: <Products />,
          },
        ],
      },
    ],
  },
]);
export default router;

import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import DashboardPage from "../pages/dashboard/DashboardPage.tsx";
import { getToken } from "../utils/token.ts";
import About from "../pages/about/About.tsx";

const ProtectedRoute = () => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/dashboard" replace />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  {
    path: "/about",
    element:<About/>,
  },

  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/profile",
        element: <h1>Ini profile</h1>,
      },
    ],
  },
]);

export default router;

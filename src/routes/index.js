import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import Dashboard from "../components/pages/Dashboard/Dashboard";
import MainSidebar from "../components/MainSidebar/MainSidebar";
import MainLayout from "../components/pages/MainLayout/MainLayout";
import Account from "../components/pages/Account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'account',
        element: <Account />
      }
    ]
  },
]);

export default router
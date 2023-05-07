import React from "react";
import {
  createBrowserRouter,
} from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage";
import Dashboard from "../components/pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

export default router
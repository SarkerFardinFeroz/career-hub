import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root/Root";
import ErrorPage from "./Layout/Error/ErrorPage";
import Home from "./Components/Home/Home";
import AppliedJobs from "./Components/AppliedJobs/AppliedJobs";
import JobDetails from "./Components/JobDetails/JobDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/applied",
        element: <AppliedJobs />,
        loader:async () => fetch("/jobs.json"), // do not load all data. load only what you need
      },
      {
        path: "/job/:id",
        element: <JobDetails/>,
        loader: async () => fetch("/jobs.json"), // do not load all data. load only what you need
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </React.StrictMode>
);

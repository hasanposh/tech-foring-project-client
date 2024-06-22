import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Jobs from "../pages/Jobs/Jobs";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "jobs",
        element: (
          <PrivateRoute>
            <Jobs />
          </PrivateRoute>
        ),
      },
      {
        path: "add-jobs",
        element: (
          <PrivateRoute>
            <AddJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

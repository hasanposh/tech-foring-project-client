import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Jobs from "../pages/Jobs/Jobs";
import AddJobs from "../pages/AddJobs/AddJobs";
import MyJobs from "../pages/MyJobs/MyJobs";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { path: "jobs", element: <Jobs /> },
      { path: "add-jobs", element: <AddJobs /> },
      { path: "my-jobs", element: <MyJobs /> },
    ],
  },
]);

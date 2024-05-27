import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Home/Home";
import Login from "../Login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);
export default router;

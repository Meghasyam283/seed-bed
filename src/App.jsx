import { useState } from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import router from "./Components/Routes/route";
import Home from "./Components/Home/Home";
import ContactUs from "./Components/Contact Us/ContactUs";
import Login from "./Components/Login/Login";
import Plant from "./Components/AllPlants/Plant";
import Navbar from "./Components/Navbar/Navbar";
import Features from "./Components/Features/Feature";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/plant",
      element: <Plant />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/navbar",
      element: <Navbar />,
    },
    {
      path: "/feature",
      element: <Features />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

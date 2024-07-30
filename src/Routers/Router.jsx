import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import SingUp from "../pages/SingUp";
import Singin from "../pages/Singin";
import About from "../pages/About";
import PrivetRoute from "../components/PrivetRoute";
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
            path: "/profile",
            element:<PrivetRoute><Profile></Profile></PrivetRoute>
        },
        {
            path: "/singup",
            element:<SingUp></SingUp>
        },
        {
            path: "/singin",
            element:<Singin></Singin>
        },
        {
            path: "/about",
            element:<About></About>
        },
      ]
    },
  ]);
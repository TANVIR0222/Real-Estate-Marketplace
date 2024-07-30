import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../pages/Home";
import SingUp from "../pages/SingUp";
import Singin from "../pages/Singin";
import About from "../pages/About";
import UserProfile from "../pages/UserProfile";
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
            path: "/userprofile",
            element:<UserProfile></UserProfile>
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
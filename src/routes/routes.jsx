import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Mian from "../layouts/Mian";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import CreateAssignment from "../pages/CreateAssignment";
import AssignmentCard from "../pages/AssignmentCard";
import Home from "../pages/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mian></Mian>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/create-assignment',
          element: <CreateAssignment></CreateAssignment>
        },
        {
          path: '/assignments',
          element: <AssignmentCard></AssignmentCard>,
          loader: () => fetch('http://localhost:5000/assignments')
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]

    },
  ]);
  export default router;
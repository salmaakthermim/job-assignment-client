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
import AssignmentDetails from "../pages/AssignmentDetails";
import MyAssignmentsPage from "../pages/MyAssignmentsPage";
import PendingAssignmentsPage from "../pages/PendingAssignmentsPage";
import PrivateRoute from "./PrivetRoutes";

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
          element: <PrivateRoute>
            <CreateAssignment></CreateAssignment>
          </PrivateRoute>
        },
        {
          path: '/assignments',
          element: <AssignmentCard></AssignmentCard>,
          loader: () => fetch('http://localhost:5000/assignments')
        },
        {
          path: '/assignments/:id',
          element: <AssignmentDetails></AssignmentDetails>
        },
        {
          path: '/my-attempted-assignments',
          element: <MyAssignmentsPage></MyAssignmentsPage>
        },
        {
          path: '/pending-assignments',
          element: <PendingAssignmentsPage></PendingAssignmentsPage>
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
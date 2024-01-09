import { Navigate } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import AddItem from "../components/AddItem";
import Auth from "../components/Auth";

export const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/add" replace />,
      },
      {
        path: "add/",
        element: <AddItem />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        index: true,
        element: <Navigate to="/auth/login/" replace />,
      },
      {
        path: "login/",
        element: <Login />,
      },
      {
        path: "signup/",
        element: <SignUp />,
      },
    ],
  },
];

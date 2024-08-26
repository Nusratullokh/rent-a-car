import { useRoutes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Home from "./home/Home"
import Create from "./dashboard/create/Create"
import Singlepage from "./singlePage/SinglePage"
import Register from "./auth/register/Register";
import Login from "./auth/login/Login";
import Auth from "./auth/Auth";

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home />
    },
    {
      path: "dashboard",
      element: <Dashboard />,
      children: [
        {
          path: "create",
          element: <Create />
        }
      ]
    },
    {
      path: "cars/:id",
      element: <Singlepage />
    },
    {
      path: "auth",
      element: <Auth />,
      children: [
        {
          path: "login",
          element: <Login />
        },
        {
          path: "register",
          element: <Register />
        }
      ]
    },
  ])
}

export default RouteController


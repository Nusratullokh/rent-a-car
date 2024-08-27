// import { useRoutes } from "react-router-dom"
// import Dashboard from "./dashboard/Dashboard"
// import Home from "./home/Home"
// import Create from "./dashboard/create/Create"
// import Singlepage from "./singlePage/SinglePage"
// import Register from "./auth/register/Register";
// import Login from "./auth/login/Login";
// import Auth from "./auth/Auth";

// const RouteController = () => {
//   return useRoutes([
//     {
//       path: "",
//       element: <Home />
//     },
//     {
//       path: "dashboard",
//       element: <Dashboard />,
//       children: [
//         {
//           path: "create",
//           element: <Create />
//         }
//       ]
//     },
//     {
//       path: "cars/:id",
//       element: <Singlepage />
//     },
//     {
//       path: "auth",
//       element: <Auth />,
//       children: [
//         {
//           path: "login",
//           element: <Login />
//         },
//         {
//           path: "register",
//           element: <Register />
//         }
//       ]
//     },
//   ])
// }

// export default RouteController



import { useRoutes } from "react-router-dom"
import Dashboard from "./dashboard/Dashboard"
import Home from "./home/Home"
import Create from "./dashboard/create/Create"
import Auth from "./auth/Auth"
import SignUp from "./auth/sign-up/SignUp"
import SignIn from "./auth/sign-in/SignIn"
import Otp from "./auth/otp/Otp"

const RouteController = () => {
  return useRoutes([
    {
      path: "",
      element: <Home/>
    },
    {
      path: "dashboard",
      element: <Dashboard/>,
      children: [
        {
          path: "create",
          element: <Create/>
        }
      ]
    },
    {
      path: "auth",
      element: <Auth/>,
      children: [
        {
          path: "sign-up",
          element: <SignUp/>
        },
        {
          path: "sign-in",
          element: <SignIn/>
        },
        {
          path: "verify-otp",
          element: <Otp email="example@example.com" />
        }
      ]
    }
  ])
}

export default RouteController
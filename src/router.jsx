import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/HomePage/Home";
import Login from "./Pages/LogAndReg/Login";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Register from "./Pages/LogAndReg/Register";
import Instructors from "./Pages/Instructors/Instructors";
import Classes from "./Pages/AllClasses/Classes";
import DashBoard from "./Pages/DashBoard/DashBoard";
import DashbordLayouts from "./Layouts/DashbordLayouts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/instructor',
                element: <Instructors></Instructors>
            },
            {
                path: '/classes',
                element: <Classes></Classes>
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
    {
        path: '/dashboard',
        element: <DashbordLayouts></DashbordLayouts>,
        children:[
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>
            }
        ]
    }
])
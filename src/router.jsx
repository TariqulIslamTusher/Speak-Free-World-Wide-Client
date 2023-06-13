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
import DashBoardLayouts from "./Layouts/DashbordLayouts";
import MySelectedClass from "./Pages/DashBoard/UserDashboardPages/mySelectedClass";
import MyEnrolledClass from "./Pages/DashBoard/UserDashboardPages/myEnrolledClass";
import ApproveClasses from "./Pages/DashBoard/AdminDashboard/AllDashBoardClasses/ApprovAndPendingClass/ApproveClasses";
import ManageUser from "./Pages/DashBoard/AdminDashboard/ManageUser";
import DashBoardHome from "./Pages/DashBoard/DashBoardHome";
import DashBoardCardClass from "./Pages/DashBoard/AdminDashboard/AllDashBoardClasses/DashBoardCardClass";
import MyClasses from "./Pages/DashBoard/InstructorsDashboard/MyClasses";
import AddNewClass from "./Pages/DashBoard/InstructorsDashboard/AddNewClass";
import EnrolledHistory from "./Pages/DashBoard/UserDashboardPages/EnrolledHistory/EnrolledHistory";


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
        element: <DashBoardLayouts/>,
        children: [
            {
                path: '/dashboard',
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: '/dashboard/mySelectedClass',
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: '/dashboard/myEnrolledClass',
                element: <MyEnrolledClass></MyEnrolledClass>
            },
            {
                path: '/dashboard/approveClass',
                element: <ApproveClasses></ApproveClasses>
            },
            {
                path: '/dashboard/manageClass',
                element: <ManageUser></ManageUser>
            },
            {
                path: '/dashboard/dashboardClasses',
                element: <DashBoardCardClass></DashBoardCardClass>
            },
            {
                path: '/dashboard/addNewClass',
                element: <AddNewClass></AddNewClass>
            },
            {
                path: '/dashboard/myClasses',
                element: <MyClasses></MyClasses>
            },
            {
                path: '/dashboard/enrolledHistory',
                element: <EnrolledHistory></EnrolledHistory>
            },
        ]
    }
])
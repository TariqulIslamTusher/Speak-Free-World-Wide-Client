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
import MyEnrolledClass from "./Pages/DashBoard/UserDashboardPages/myEnrolledClass";
import ApproveClasses from "./Pages/DashBoard/AdminDashboard/AllDashBoardClasses/ApprovAndPendingClass/ApproveClasses";
import ManageUser from "./Pages/DashBoard/AdminDashboard/ManageUser";
import DashBoardHome from "./Pages/DashBoard/DashBoardHome";
import DashBoardCardClass from "./Pages/DashBoard/AdminDashboard/AllDashBoardClasses/DashBoardCardClass";
import MyClasses from "./Pages/DashBoard/InstructorsDashboard/MyClasses";
import AddNewClass from "./Pages/DashBoard/InstructorsDashboard/AddNewClass";
import EnrolledHistory from "./Pages/DashBoard/UserDashboardPages/EnrolledHistory/EnrolledHistory";
import PrivateRoutes from "./Pages/PrivateRoutes/PrivateRoutes";
import IsAdmin from "./Pages/PrivateRoutes/IsAdmin";
import IsInstructor from "./Pages/PrivateRoutes/IsInstructor";
import IsUser from "./Pages/PrivateRoutes/IsUser";
import MySelectedClass from "./Pages/DashBoard/UserDashboardPages/MySelectedClass";


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
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/dashboard',
                element: <PrivateRoutes><DashBoardHome></DashBoardHome></PrivateRoutes>
            },
            {
                path: '/dashboard/mySelectedClass',
                element: <PrivateRoutes><IsUser><MySelectedClass></MySelectedClass></IsUser> </PrivateRoutes>
            },
            {
                path: '/dashboard/myEnrolledClass',
                element: <PrivateRoutes><IsUser><MyEnrolledClass></MyEnrolledClass></IsUser> </PrivateRoutes>
            },
            {
                path: '/dashboard/approveClass',
                element: <PrivateRoutes><IsAdmin><ApproveClasses></ApproveClasses></IsAdmin></PrivateRoutes>
            },
            {
                path: '/dashboard/manageClass',
                element: <PrivateRoutes><IsAdmin><ManageUser></ManageUser></IsAdmin> </PrivateRoutes>
            },
            {
                path: '/dashboard/dashboardClasses',
                element: <PrivateRoutes><DashBoardCardClass></DashBoardCardClass></PrivateRoutes>
            },
            {
                path: '/dashboard/addNewClass',
                element: <PrivateRoutes><IsInstructor><AddNewClass></AddNewClass></IsInstructor> </PrivateRoutes>
            },
            {
                path: '/dashboard/myClasses',
                element: <PrivateRoutes><IsInstructor><MyClasses></MyClasses></IsInstructor> </PrivateRoutes>
            },
            {
                path: '/dashboard/enrolledHistory',
                element: <PrivateRoutes><IsUser><EnrolledHistory></EnrolledHistory></IsUser> </PrivateRoutes>
            },
        ]
    }
])
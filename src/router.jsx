import {
    createBrowserRouter,
} from "react-router-dom";

import MainLayouts from "./Layouts/MainLayouts";
import Home from "./Pages/HomePage/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])
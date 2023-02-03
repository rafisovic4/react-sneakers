import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

//React Lazy Imports
const HomePage = React.lazy(() => import('../pages/HomePage'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    }
]);

export default router;
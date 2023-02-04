import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";

//React Lazy Imports
const HomePage = React.lazy(() => import('../pages/HomePage'));
const OrdersPage = React.lazy(() => import('../pages/OrdersPage'));
const FavoritesPage = React.lazy(() => import('../pages/FavoritesPage'));


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <HomePage />,
                index: true,
            }, 
            {
                path: "/orders",
                element: <OrdersPage/>,
            },
            {
                path: "/favorites",
                element: <FavoritesPage />,
            },
        ]
    }
]);

export default router;
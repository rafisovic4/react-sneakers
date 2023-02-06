import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import router from './router/router';

//Styles
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<Loader />}>
    <RouterProvider router={router} />
  </React.Suspense>
);

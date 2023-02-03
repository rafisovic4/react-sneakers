import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from './router/router';

//Styles
import "./styles/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <RouterProvider router={router} />
  </React.Suspense>
);

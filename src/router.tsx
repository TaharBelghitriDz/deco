import { App } from "App";
import { createBrowserRouter } from "react-router-dom";

export default createBrowserRouter([
  {
    path: "/",
    element: (
      <App compList={["HomeComponent", "WhatWeDo", "NewProducts", "Goals"]} />
    ),
  },
  {
    path: "/products",
    element: <App compList={["products"]} />,
  },
]);

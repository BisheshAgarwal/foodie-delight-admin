import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Restaurants from "./routes/restaurants.tsx";
import AddRestaurant from "./routes/add-restaurant.tsx";
import EditRestaurant from "./routes/edit-restaurant.tsx";
import Dashboard from "./routes/dashboard.tsx";
import { Sidebar } from "./components/sidebar.tsx";

const router = createBrowserRouter([
  {
    element: <Sidebar />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/restaurants",
        element: <Restaurants />,
      },
      {
        path: "/restaurants/add",
        element: <AddRestaurant />,
      },
      {
        path: "/restaurants/:id/edit",
        element: <EditRestaurant />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

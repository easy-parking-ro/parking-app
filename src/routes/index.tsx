import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";

import { AuthPage } from "../modules/auth";
import { ParkingLots } from "../modules/parking";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <ParkingLots />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);

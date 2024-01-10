import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";

import { AuthPage } from "../modules/auth";
import { ParkingLots, ParkingTickets, ParkingTicket } from "../modules/parking";
import { Layout } from "../components";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <ParkingLots />,
      },
      {
        path: "/parking-lot/:parkingLotId",
        element: <ParkingTickets />,
      },
    ],
  },
  {
    path: "/parking-ticket/:parkingTicketId",
    element: (
      <Layout>
        <ParkingTicket />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);

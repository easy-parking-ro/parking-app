import { createBrowserRouter } from "react-router-dom";

import { ProtectedRoute } from "./protected-route";

import { AuthPage } from "../modules/auth";
import { ParkingLots } from "../modules/parking";

// const C1 = () => {
//   const { handleLogout, isLoading } = useLogout();

//   return (
//     <VStack>
//       <Outlet />

//       <Text>Componenta 1</Text>
//       <Button isLoading={isLoading} onClick={handleLogout}>
//         Logout
//       </Button>
//     </VStack>
//   );
// };

// const C2 = () => (
//   <VStack>
//     <Text>Componenta 2</Text>
//     <Button
//       onClick={() => {
//         supabase.auth.signOut();
//       }}
//     >
//       Logout
//     </Button>
//   </VStack>
// );

// const C3 = () => (
//   <VStack>
//     <Text>Componenta 3</Text>
//     <Button
//       onClick={() => {
//         supabase.auth.signOut();
//       }}
//     >
//       Logout
//     </Button>
//   </VStack>
// );

// const ChildrenLaC1 = () => {
//   return (
//     <ButtonGroup>
//       <Button colorScheme="red">One</Button>
//       <Button colorScheme="yellow">Two</Button>
//       <Button colorScheme="blue">Three</Button>
//     </ButtonGroup>
//   );
// };

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <ParkingLots />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);

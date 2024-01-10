import { Navigate, Outlet } from "react-router-dom";
import { HStack, Avatar, Button } from "@chakra-ui/react";

import { useSession, useLogout } from "../modules/auth";
import { Layout } from "../components";

export const ProtectedRoute = () => {
  const { handleLogout, isLoading } = useLogout();
  const { status, session } = useSession();

  if (session) {
    return (
      <Layout
        layoutHeaderElement={
          <HStack spacing={8}>
            <Avatar src={session.user.user_metadata?.avatar_url} />
            <Button isLoading={isLoading} onClick={handleLogout}>
              Logout
            </Button>
          </HStack>
        }
      >
        <Outlet />
      </Layout>
    );
  }

  if (status === "loaded" && !session) {
    return <Navigate to="/login" />;
  }
};

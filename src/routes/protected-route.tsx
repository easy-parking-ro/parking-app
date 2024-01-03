import { Navigate, Outlet } from "react-router-dom";
import { VStack, HStack, Avatar, Text, Card, Button } from "@chakra-ui/react";

import { useSession, useLogout } from "../modules/auth";

export const ProtectedRoute = () => {
  const { handleLogout, isLoading } = useLogout();
  const { status, session } = useSession();

  if (session) {
    return (
      <VStack
        h="100vh"
        alignItems="stretch"
        overflow="hidden"
        bgGradient="linear(to-tr, purple.200, pink.300, red.200)"
      >
        <HStack
          py={4}
          as={Card}
          px={[4, 16]}
          borderRadius={0}
          justifyContent="space-between"
        >
          <Text fontSize={24} fontWeight={600}>
            Easy Parking App
          </Text>

          <HStack spacing={8}>
            <Avatar src={session.user.user_metadata?.avatar_url} />
            <Button isLoading={isLoading} onClick={handleLogout}>
              Logout
            </Button>
          </HStack>
        </HStack>

        <VStack
          py={8}
          spacing={4}
          px={[4, 16]}
          overflow="auto"
          alignItems="stretch"
        >
          <Outlet />
        </VStack>
      </VStack>
    );
  }

  if (status === "loaded" && !session) {
    return <Navigate to="/login" />;
  }
};

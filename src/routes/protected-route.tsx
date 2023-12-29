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
        bgGradient="linear(to-tr, purple.200, pink.300, red.200)"
      >
        <HStack
          py={4}
          px={16}
          as={Card}
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

        <VStack alignItems="stretch" spacing={4} mx={16} my={8}>
          <Outlet />
        </VStack>
      </VStack>
    );
  }

  if (status === "loaded" && !session) {
    return <Navigate to="/login" />;
  }
};

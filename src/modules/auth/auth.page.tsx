import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Button, Heading, Card, VStack } from "@chakra-ui/react";

import { useSignUp } from "./hooks";

export const AuthPage = () => {
  const { handleSignIn } = useSignUp();

  return (
    <VStack
      h="100vh"
      spacing={6}
      justifyContent="center"
      bgGradient="linear(to-tr, purple.200, pink.300, red.200)"
    >
      <VStack as={Card} alignItems="stretch" p={6} spacing={12}>
        <Heading size="lg">Easy Parking App</Heading>

        <VStack alignItems="stretch" spacing={4}>
          <Button
            colorScheme="red"
            leftIcon={<FaGoogle />}
            onClick={handleSignIn("google")}
          >
            Login with Google
          </Button>

          <Button
            colorScheme="facebook"
            leftIcon={<FaFacebook />}
            onClick={handleSignIn("facebook")}
          >
            Login with Facebook
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

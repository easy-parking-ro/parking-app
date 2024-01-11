import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Button, Heading, Card, VStack } from "@chakra-ui/react";

import { useSignUp } from "./hooks";

export const AuthPage = () => {
  const { handleSignIn } = useSignUp();

  return (
    <VStack h="100vh" spacing={6} mt="20" bgColor="white">
      <VStack
        as={Card}
        alignItems="stretch"
        spacing={12}
        my="8"
        p="4"
        border={"1px solid"}
        borderColor="gray.200"
        borderRadius={"12px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
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

import { FaGoogle, FaFacebook } from "react-icons/fa6";
import { Button, Heading, Card, VStack, Icon } from "@chakra-ui/react";

import { useSignUp } from "./hooks";

export const AuthPage = () => {
  const { handleSignIn } = useSignUp();

  return (
    <VStack h="100vh" justifyContent="center" bgColor="blackAlpha.300" p={12}>
      <VStack
        p={4}
        as={Card}
        spacing={8}
        borderRadius={8}
        border="1px solid"
        alignItems="stretch"
        borderColor="gray.200"
        w={["100%", "100%", "50%", "50%", "33%"]}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <Heading size="lg" textAlign="center">
          Easy Parking App
        </Heading>

        <VStack alignItems="stretch" spacing={4}>
          <Button
            size="lg"
            colorScheme="red"
            onClick={handleSignIn("google")}
            leftIcon={<Icon as={FaGoogle} boxSize={6} />}
          >
            Logare cu Google
          </Button>

          <Button
            size="lg"
            colorScheme="facebook"
            onClick={handleSignIn("facebook")}
            leftIcon={<Icon as={FaFacebook} boxSize={6} />}
          >
            Logare cu Facebook
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};

import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

import { AuthService } from "../auth.service";

type Provider = "google" | "facebook";

export const useSignUp = () => {
  const authService = new AuthService();
  const toast = useToast({
    position: "bottom-right",
    duration: 3000,
    isClosable: true,
  });

  const signInMutation = useMutation<unknown, Error, Provider>({
    mutationFn: (provider) => {
      return authService.signInWithOAuth(provider);
    },
    onSuccess: () => {
      toast({
        title: "Successfully signed in",
        status: "success",
      });
    },
  });

  const handleSignIn = (provider: "google" | "facebook") => () => {
    signInMutation.mutate(provider);
  };

  return {
    handleSignIn,
    error: signInMutation.error,
    isLoading: signInMutation.isPending,
  };
};

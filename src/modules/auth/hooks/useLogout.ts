import { useMutation } from "@tanstack/react-query";
import { useToast } from "@chakra-ui/react";

import { AuthService } from "../auth.service";

export const useLogout = () => {
  const authService = new AuthService();
  const toast = useToast({
    position: "bottom-right",
    duration: 3000,
    isClosable: true,
  });

  const logoutMutation = useMutation({
    mutationFn: () => authService.signOut(),
    onSuccess: () => {
      toast({
        title: "Delogare cu success",
        status: "success",
      });
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
    error: logoutMutation.error,
    isLoading: logoutMutation.isPending,
  };
};

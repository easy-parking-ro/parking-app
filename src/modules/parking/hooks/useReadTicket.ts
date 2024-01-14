import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { ParkingService } from "../";

export const useReadTicket = () => {
  const service = new ParkingService();
  const navigate = useNavigate();

  const toast = useToast({
    position: "bottom-right",
    duration: 4000,
    isClosable: true,
  });

  const getTicketMutation = useMutation({
    mutationFn: async (ticketId: string) => {
      const ticket = await service.getParkingTicket(ticketId);
      if (!ticket) {
        throw new Error("Nu s-a putut gasi ticketul.");
      }

      return ticket;
    },
    onSuccess: (ticket) => {
      navigate(`/parking-ticket/${ticket?.id}`);
    },
    onError: (error) => {
      toast({
        title: "Error",
        status: "error",
        description: error.message ?? "A aparut o eroare la scanarea codului.",
      });
    },
  });

  const onReadTicket = (ticketId: string) => {
    getTicketMutation.mutate(ticketId);
  };

  return {
    onReadTicket,
    getTicketMutation,
  };
};

import { Stack } from "@chakra-ui/react";
import { useZxing } from "react-zxing";
import { useNavigate } from "react-router-dom";
import { ParkingService } from "../..";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@chakra-ui/react";

export const QrReaderCamera = () => {
  const service = new ParkingService();

  const toast = useToast({
    position: "bottom-right",
    duration: 3000,
    isClosable: true,
  });

  const getTicketMutation = useMutation({
    mutationFn: (ticketId: string) => service.getParkingTicket(ticketId),
    onSuccess: (ticket) => {
      navigate(`/parking-ticket/${ticket.id}`);
    },
    onError: () => toast({ title: "Eroarea", status: "error" }),
  });

  const navigate = useNavigate();
  const { ref } = useZxing({
    onDecodeResult(result) {
      const elements = result.getText().split("/");
      const id = elements[elements.length - 1];
      getTicketMutation.mutate(id);
    },
  });

  return (
    <Stack position="relative">
      <video ref={ref} style={{ width: "100%", height: "auto" }} />
      <Stack
        position="absolute"
        left={0}
        right={0}
        height={16}
        opacity={0.7}
        bg="black"
        top={0}
      />
      <Stack
        position="absolute"
        left={0}
        right={0}
        height={16}
        opacity={0.7}
        bg="black"
        bottom={0}
      />
    </Stack>
  );
};

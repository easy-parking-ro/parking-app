import { useParams } from "react-router-dom";
import { VStack, Text, Code } from "@chakra-ui/react";

import { useParkingTicket } from "../hooks";

export const ParkingTicket = () => {
  const { parkingTicketId } = useParams<{ parkingTicketId: string }>();
  const { data: parkingTicket, error } = useParkingTicket(
    parkingTicketId ?? ""
  );

  if (error) {
    return (
      <VStack>
        <Code>{JSON.stringify(error.message, null, 2)}</Code>
      </VStack>
    );
  }

  return (
    <VStack>
      <Text>{parkingTicket?.id}</Text>
      <Text>{parkingTicket?.plate}</Text>
      <Text>{parkingTicket?.status}</Text>
    </VStack>
  );
};

import { useParams } from "react-router-dom";
import { VStack, Text, Code } from "@chakra-ui/react";

import { useParkingTicket } from "../hooks";

export const ParkingTicket = () => {
  const { parkingTicketId } = useParams<{ parkingTicketId: string }>();
  const { data: parkingTicket, error } = useParkingTicket(
    parkingTicketId ?? ""
  );

  const handleTime = () => {
    const givenDate = new Date(`${parkingTicket?.created_at}`);

    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - givenDate.getTime();
    const minutesDifference = timeDifference / (1000 * 60);
    const hours = Math.floor(minutesDifference / 60);
    const remainingMinutes = Math.round(minutesDifference % 60);
    const text = `${hours} hours ${remainingMinutes} minutes`;

    return text;
  };

  const givenDate = new Date(`${parkingTicket?.created_at}`);

  const formattedDate = givenDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  if (error) {
    return (
      <VStack>
        <Code>{JSON.stringify(error.message, null, 2)}</Code>
      </VStack>
    );
  }

  return (
    <VStack>
      <Text>{formattedDate}</Text>
      <Text>{parkingTicket?.plate}</Text>
      <Text>{parkingTicket?.status}</Text>
      <Text>{handleTime()}</Text>
    </VStack>
  );
};

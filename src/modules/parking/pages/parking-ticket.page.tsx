import { useParams } from "react-router-dom";
import {
  VStack,
  Text,
  Code,
  Box,
  Stack,
  Icon,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FaApplePay } from "react-icons/fa6";
import { PaymentForm } from "../components";
import { useParkingTicket } from "../hooks";

const rate = 5;

export const ParkingTicket = () => {
  const { parkingTicketId } = useParams<{ parkingTicketId: string }>();
  const { data: parkingTicket, error } = useParkingTicket(
    parkingTicketId ?? ""
  );
  const givenDate = new Date(`${parkingTicket?.created_at}`);

  const currentDate = new Date();
  const timeDifference = currentDate.getTime() - givenDate.getTime();
  const minutesDifference = timeDifference / (1000 * 60);
  const hours = Math.floor(minutesDifference / 60);
  const remainingMinutes = Math.round(minutesDifference % 60);
  const timeText = `${hours}h  ${remainingMinutes}m`;
  const totalHours = Math.ceil((hours * 60 + remainingMinutes) / 60);

  const formattedDate = givenDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  const amount = rate * totalHours;

  if (error) {
    return (
      <VStack>
        <Code>{JSON.stringify(error.message, null, 2)}</Code>
      </VStack>
    );
  }

  return (
    <Stack fontWeight="bold" fontSize="16">
      <VStack alignItems="stretch">
        <HStack alignItems="center" justifyContent={"space-between"}>
          <Text>Date:</Text>
          <Text>{formattedDate}</Text>
        </HStack>
        <HStack alignItems="center" justifyContent={"space-between"}>
          <Text>Plate number:</Text>
          <Text>{parkingTicket?.plate}</Text>
        </HStack>
        <HStack alignItems="center" justifyContent={"space-between"}>
          <Text>Hours:</Text>
          <Text>{timeText}</Text>
        </HStack>
        <HStack
          alignItems="center"
          justifyContent={"space-between"}
          mt="4"
          fontSize="24"
        >
          <Text>Amount:</Text>
          <Text>{`${amount}$`}</Text>
        </HStack>
      </VStack>
      <Box
        my="8"
        p="4"
        border={"1px solid black"}
        borderRadius={"12px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
      >
        <PaymentForm />
      </Box>
      <Button width="100%" mb="2">
        Proceed with payment
      </Button>
      <Button bgColor="black" width="100%">
        <Icon as={FaApplePay} color="white" width={12} height={8} />
      </Button>
    </Stack>
  );
};

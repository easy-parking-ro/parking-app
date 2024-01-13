import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate, useParams } from "react-router-dom";
import {
  VStack,
  Text,
  Code,
  Box,
  Stack,
  Icon,
  Button,
  HStack,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { FaApplePay } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa6";
import { PaymentForm } from "../components";
import { useParkingTicket } from "../hooks";
import { useState } from "react";

const rate = 5;

export const ParkingTicket = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  const { parkingTicketId } = useParams<{ parkingTicketId: string }>();
  const { data: parkingTicket, error } = useParkingTicket(
    parkingTicketId ?? ""
  );
  const navigate = useNavigate();

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

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 2500);

    setTimeout(() => {
      setLoading(false);
      setStatus("Success");
    }, 1500);
  };

  if (error) {
    return (
      <VStack>
        <Code>{JSON.stringify(error.message, null, 2)}</Code>
      </VStack>
    );
  }

  if (loading) {
    return (
      <Flex height="100vh" justifyContent="center" alignItems="center">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="black"
          width="5rem"
          height="5rem"
        />
      </Flex>
    );
  }

  if (status === "Success") {
    return (
      <Flex
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection={"column"}
      >
        <Icon as={FaCheck} color="#4CAF50" width={24} height={24} />
        <Text fontWeight={500}>Success Payment</Text>
      </Flex>
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
      <Button width="100%" mb="2" onClick={handlePayment}>
        Proceed with payment
      </Button>
      <MobileView>
        {isIOS ? (
          <Button bgColor="black" width="100%" onClick={handlePayment}>
            <Icon as={FaApplePay} color="white" width={12} height={8} />
          </Button>
        ) : (
          <Button bgColor="black" width="100%" onClick={handlePayment}>
            <Icon as={FaGooglePay} color="white" width={12} height={8} />
          </Button>
        )}
      </MobileView>
    </Stack>
  );
};

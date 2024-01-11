import { VStack, Icon, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBarcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ParkingService } from "../..";
import { useMutation } from "@tanstack/react-query";

import { useToast } from "@chakra-ui/react";

const charWidth = "0.7ch";
const gap = "0.5ch";
const maxLength = 36;
const inputWidth = `calc(${maxLength} * (${charWidth} + ${gap}))`;

export const QrReaderInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const navigate = useNavigate();

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
    onError: () => toast({ title: "Error", status: "error" }),
  });

  useEffect(() => {
    if (inputValue.length === maxLength) {
      getTicketMutation.mutate(inputValue);
    }
  }, [inputValue]);

  return (
    <VStack justifyContent="center" mt={16}>
      <Icon as={FaBarcode} boxSize={24} color="white" />
      <Input
        display="block"
        marginY={1}
        marginX="auto"
        border="none"
        p="0"
        width={inputWidth}
        background={`repeating-linear-gradient(90deg, dimgrey 0, dimgrey ${charWidth}, transparent 0, transparent calc(${charWidth} + ${gap})) 0 100%/${inputWidth} 2px no-repeat`}
        fontFamily="droid sans mono, consolas, monospace"
        fontSize="1.4ch"
        letterSpacing={gap}
        _focus={{
          outline: "none",
          color: "white",
        }}
        _focusVisible={{ outline: "none" }}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={maxLength}
        autoFocus
      />
    </VStack>
  );
};

import { useState } from "react";
import { FaBarcode } from "react-icons/fa";
import { Button, VStack, Icon, Input } from "@chakra-ui/react";

import { useReadTicket } from "../hooks";

const gap = "0.5ch";
const maxLength = 36;
const charWidth = "0.7ch";
const inputWidth = `calc(${maxLength} * (${charWidth} + ${gap}))`;

export const QrReaderInput = () => {
  const { onReadTicket, getTicketMutation } = useReadTicket();
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onReadTicket(inputValue);
  };

  return (
    <VStack
      flex={1}
      as="form"
      spacing={6}
      bg="blackAlpha.800"
      onSubmit={onSubmit}
      justifyContent="center"
    >
      <Icon as={FaBarcode} boxSize={24} color="white" />
      <Input
        autoFocus
        size="lg"
        color="white"
        textAlign="center"
        variant="unstyled"
        width={inputWidth}
        letterSpacing={gap}
        maxLength={maxLength}
        fontFamily="droid sans mono, consolas, monospace"
        background={`repeating-linear-gradient(90deg, dimgrey 0, dimgrey ${charWidth}, transparent 0, transparent calc(${charWidth} + ${gap})) 0 100%/${inputWidth} 2px no-repeat`}
        onChange={(e) => setInputValue(e.target.value)}
        _focus={{
          outline: "black",
        }}
      />

      <Button isLoading={getTicketMutation.isPending} type="submit">
        Cauta ticket
      </Button>
    </VStack>
  );
};

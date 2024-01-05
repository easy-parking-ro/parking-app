import { VStack, Icon, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaBarcode } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const charWidth = "1ch";
const gap = "0.5ch";
const maxLength = 7;
const inputWidth = `calc(${maxLength} * (${charWidth} + ${gap}))`;

export const QrReaderInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    if (inputValue.length === maxLength && !isNaN(Number(inputValue))) {
      navigate(`/parking-ticket/${inputValue}`);
    }
  }, [inputValue]);

  return (
    <VStack justifyContent="center" height="calc(100vh - 100px)">
      <Icon as={FaBarcode} boxSize={24} />
      <Input
        display="block"
        marginY={1}
        marginX="auto"
        border="none"
        p="0"
        width={inputWidth}
        background={`repeating-linear-gradient(90deg, dimgrey 0, dimgrey ${charWidth}, transparent 0, transparent calc(${charWidth} + ${gap})) 0 100%/${inputWidth} 2px no-repeat`}
        fontFamily="droid sans mono, consolas, monospace"
        fontSize="5ch"
        letterSpacing={gap}
        _focus={{
          outline: "none",
          color: "black",
        }}
        _focusVisible={{ outline: "none" }}
        onChange={(e) => setInputValue(e.target.value)}
        maxLength={maxLength}
        autoFocus
      />
    </VStack>
  );
};

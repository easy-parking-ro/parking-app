import {
  Box,
  FormControl,
  Input,
  Grid,
  GridItem,
  Text,
  InputRightElement,
  HStack,
  InputGroup,
} from "@chakra-ui/react";
import { FaRegCreditCard } from "react-icons/fa6";

export const PaymentForm = () => {
  const formatCardNumber = (value: string) => {
    return value.replace(/(\d{4})/g, "$1 ").trim();
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = formatCardNumber(inputValue);

    event.target.value = formattedValue;
  };

  const formatExpirationDate = (value: string) => {
    return value.replace(/^(\d{2})/, "$1/");
  };

  const handleExpirationDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value.replace(/\D/g, "");
    const formattedValue = formatExpirationDate(inputValue);

    event.target.value = formattedValue;
  };

  const handleCVVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.value = event.target.value.replace(/\D/g, "");

    if (event.target.value.length > 3) {
      event.target.value = event.target.value.slice(0, 3);
    }
  };

  return (
    <Box>
      <HStack justifyContent={"space-between"} alignItems={"center"} mb={4}>
        <Text fontWeight={500}>Enter payment details</Text>
      </HStack>
      <FormControl mb={4}>
        <InputGroup>
          <InputRightElement pointerEvents="none" fontSize="2rem" mr="4">
            <FaRegCreditCard />
          </InputRightElement>
          <Input
            type="text"
            placeholder="Card number"
            maxLength={19}
            onChange={handleCardNumberChange}
            border="0"
            borderBottom="1px solid"
            borderBottomColor="black"
            borderRadius="0"
            outline="0"
            color="black"
            py="2"
            px="0"
            fontSize="20px"
            _focusVisible={{
              border: "black",
              boxShadow: "none ",
              borderBottom: "2px solid black",
            }}
            _placeholder={{ color: "black.100", fontSize: "1rem" }}
          />
        </InputGroup>
      </FormControl>

      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <GridItem colSpan={2}>
          <FormControl mb={4}>
            <Input
              type="text"
              placeholder="MM/YY"
              maxLength={5}
              onChange={handleExpirationDateChange}
              border="0"
              borderBottom="1px solid"
              borderBottomColor="black"
              borderRadius="0"
              outline="0"
              color="black"
              py="2"
              px="0"
              fontSize="20px"
              _focusVisible={{
                border: "black",
                boxShadow: "none ",
                borderBottom: "2px solid black",
              }}
              _placeholder={{ color: "black.100", fontSize: "1rem" }}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={1}>
          <FormControl mb={4}>
            <Input
              type="number"
              placeholder="CVV"
              pattern="[0-9]{3}"
              maxLength={3}
              inputMode="numeric"
              onChange={handleCVVChange}
              border="0"
              borderBottom="1px solid"
              borderBottomColor="black"
              borderRadius="0"
              outline="0"
              color="black"
              py="2"
              px="0"
              fontSize="20px"
              _focusVisible={{
                border: "black",
                boxShadow: "none ",
                borderBottom: "2px solid black",
              }}
              _placeholder={{ color: "black.100", fontSize: "1rem" }}
            />
          </FormControl>
        </GridItem>
      </Grid>

      <FormControl mb={4}>
        <Input
          type="text"
          placeholder="Card holder"
          pattern="[A-Za-z ]+"
          border="0"
          borderBottom="1px solid"
          borderBottomColor="black"
          borderRadius="0"
          outline="0"
          color="black"
          py="2"
          px="0"
          fontSize="20px"
          _focusVisible={{
            border: "black",
            boxShadow: "none ",
            borderBottom: "2px solid black",
          }}
          _placeholder={{ color: "black.100", fontSize: "1rem" }}
        />
      </FormControl>
    </Box>
  );
};

export default PaymentForm;

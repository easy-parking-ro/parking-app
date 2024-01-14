import { useParams } from "react-router-dom";
import {
  Button,
  Text,
  VStack,
  Image,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";

import { ScanModal } from "../components";
import { useParkingTickets } from "../hooks";
import { getBucketURL } from "../../../utils";

export const ParkingTickets = () => {
  const { parkingLotId } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useParkingTickets(parkingLotId ?? "");

  if (!data) {
    return (
      <VStack>
        <Text>Loading...</Text>
      </VStack>
    );
  }

  return (
    <>
      <VStack alignItems="stretch">
        <HStack>
          {data.logo && (
            <Image
              h={24}
              w={24}
              objectFit="contain"
              src={getBucketURL(data.logo)}
            />
          )}

          <Text mb={4} fontSize={24} fontWeight={700} textAlign="center">
            {data.name}
          </Text>
        </HStack>

        <Button onClick={onOpen} colorScheme="gray">
          Scanati ticket
        </Button>
      </VStack>

      <ScanModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

import { Text, VStack, Image, HStack } from "@chakra-ui/react";

import { useParams } from "react-router-dom";

import { useParkingTickets } from "../hooks";
import { getBucketURL } from "../../../utils";
import { ScanModal } from "../components";

export const ParkingTickets = () => {
  const { parkingLotId } = useParams();

  const { data } = useParkingTickets(parkingLotId ?? "");

  if (!data) {
    return (
      <VStack>
        <Text>Loading...</Text>
      </VStack>
    );
  }

  return (
    <VStack alignItems="stretch">
      <HStack>
        <Text
          fontWeight={700}
          fontSize={24}
          mb={4}
          width="100%"
          textAlign="center"
        >
          {data.name}
        </Text>
        {data.logo && (
          <Image
            h={24}
            w={24}
            objectFit="contain"
            src={getBucketURL(data.logo)}
          />
        )}
      </HStack>

      <ScanModal textButton="Scan ticket" />
    </VStack>
  );
};

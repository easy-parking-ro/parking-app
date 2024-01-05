import {
  SimpleGrid,
  Text,
  VStack,
  Image,
  HStack,
  Card,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";

import { useParkingTickets } from "../hooks";
import { getBucketURL } from "../../../utils";
import { ScanModal } from "../components";

export const ParkingTickets = () => {
  const { parkingLotId } = useParams();
  const navigate = useNavigate();
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
        <Text fontWeight={700} fontSize={24}>
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

      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        {data["parking-tickets"].map((parkingTicket) => {
          return (
            <VStack
              p={4}
              as={Card}
              cursor="pointer"
              alignItems="stretch"
              key={parkingTicket.id}
              _hover={{ bg: "gray.200" }}
              onClick={() => navigate(`/parking-ticket/${parkingTicket.id}`)}
            >
              <Text>{parkingTicket.plate}</Text>
              <Text>{parkingTicket.status}</Text>
              <Text>{parkingTicket.created_at}</Text>
            </VStack>
          );
        })}
      </SimpleGrid>

      <ScanModal textButton="Scan ticket" />
    </VStack>
  );
};

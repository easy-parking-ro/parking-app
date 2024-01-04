import {
  SimpleGrid,
  Text,
  VStack,
  Image,
  HStack,
  Card,
} from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";

import { useParkingTickets, useQrRead } from "../hooks";
import { getBucketURL } from "../../../utils";
import { useEffect } from "react";
import { QrReader } from "../components";

export const ParkingTickets = () => {
  const { parkingLotId } = useParams();
  const navigate = useNavigate();
  const { qrRef, result } = useQrRead();

  const { data } = useParkingTickets(parkingLotId ?? "");

  useEffect(() => {
    if (result) {
      const elements = result.split("/");
      const tResult = elements[elements.length - 1];
      navigate(`/parking-ticket/${tResult}`);
    }
  }, [result]);

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

      <QrReader qrRef={qrRef} />
    </VStack>
  );
};

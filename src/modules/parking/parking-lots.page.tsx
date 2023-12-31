import { SimpleGrid, Card, Text, Image, HStack } from "@chakra-ui/react";

import { useParkingLots } from "./hooks";
import { getBucketURL } from "../../utils";

export const ParkingLots = () => {
  const { data: parkingLots = [] } = useParkingLots();

  return (
    <>
      <SimpleGrid columns={4} gap={6}>
        {parkingLots.map((parkingLot) => {
          return (
            <HStack
              p={4}
              as={Card}
              spacing={6}
              cursor="pointer"
              key={parkingLot.id}
              _hover={{ bg: "gray.100" }}
            >
              {parkingLot.logo && (
                <Image
                  w={24}
                  objectFit="contain"
                  src={getBucketURL(parkingLot.logo)}
                />
              )}
              <Text fontSize={20} fontWeight={700}>
                {parkingLot.name}
              </Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </>
  );
};

import { SimpleGrid, Card, Text } from "@chakra-ui/react";

import { useParkingLots } from "./hooks";

export const ParkingLots = () => {
  const { data: parkingLots = [] } = useParkingLots();

  return (
    <SimpleGrid columns={4} gap={6}>
      {parkingLots.map((parkingLot: any) => {
        return (
          <Card
            p={4}
            cursor="pointer"
            key={parkingLot.id}
            _hover={{ bg: "gray.100" }}
          >
            <Text fontWeight={500}>{parkingLot.name}</Text>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

import { SimpleGrid, Card, Text, Image, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { useParkingLots } from "../hooks";
import { getBucketURL } from "../../../utils";

export const ParkingLots = () => {
  const { data: parkingLots = [] } = useParkingLots();
  const navigate = useNavigate();

  return (
    <>
      <Text
        width="100%"
        textAlign="center"
        mb="4"
        fontSize="24"
        fontWeight="700"
      >
        Parking Spaces
      </Text>
      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        {parkingLots.map((parkingLot) => {
          return (
            <HStack
              p={4}
              as={Card}
              spacing={6}
              cursor="pointer"
              key={parkingLot.id}
              border="1px solid black"
              _hover={{ bg: "gray.100" }}
              onClick={() => navigate(`/parking-lot/${parkingLot.id}`)}
            >
              {parkingLot.logo && (
                <Image
                  w={24}
                  objectFit="contain"
                  src={getBucketURL(parkingLot.logo)}
                />
              )}
              <Text
                fontSize={16}
                fontWeight={500}
                width="100%"
                textAlign="center"
              >
                {parkingLot.name}
              </Text>
            </HStack>
          );
        })}
      </SimpleGrid>
    </>
  );
};

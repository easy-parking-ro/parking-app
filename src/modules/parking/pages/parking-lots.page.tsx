import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { SimpleGrid, Card, Text, Image, Icon } from "@chakra-ui/react";

import { useParkingLots } from "../hooks";
import { getBucketURL } from "../../../utils";

export const ParkingLots = () => {
  const { data: parkingLots = [] } = useParkingLots();

  return (
    <>
      <Text textAlign="center" fontSize={24} fontWeight={700}>
        Locuri de parcare
      </Text>

      <SimpleGrid columns={[1, 1, 2, 3]} gap={4}>
        {parkingLots.map((parkingLot) => {
          return (
            <Card
              p={4}
              gap={6}
              as={Link}
              flexDir="row"
              display="flex"
              cursor="pointer"
              alignItems="center"
              key={parkingLot.id}
              border="1px solid black"
              _hover={{ bg: "gray.100" }}
              to={`/parking-lot/${parkingLot.id}`}
            >
              {parkingLot.logo && (
                <Image
                  w={24}
                  objectFit="contain"
                  src={getBucketURL(parkingLot.logo)}
                />
              )}

              <Text flex={1} fontSize={24} fontWeight={500}>
                {parkingLot.name}
              </Text>

              <Icon as={FaAngleRight} boxSize={6} />
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
};

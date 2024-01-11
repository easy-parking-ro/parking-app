import { VStack, HStack, Text, Card } from "@chakra-ui/react";

interface LayoutProps {
  layoutHeaderElement?: React.ReactNode;
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  layoutHeaderElement,
  children,
}) => {
  return (
    <VStack
      h="100vh"
      alignItems="stretch"
      overflow="hidden"
      // bgGradient="linear(to-tr, purple.200, pink.300, red.200)"
      bgColor={"white"}
    >
      <HStack
        py={4}
        as={Card}
        px={[4, 16]}
        borderRadius={0}
        justifyContent="space-between"
      >
        <Text fontSize={24} fontWeight={600}>
          Easy Parking App
        </Text>

        {layoutHeaderElement}
      </HStack>

      <VStack
        py={8}
        spacing={4}
        px={[4, 16]}
        overflow="auto"
        alignItems="stretch"
      >
        {children}
      </VStack>
    </VStack>
  );
};

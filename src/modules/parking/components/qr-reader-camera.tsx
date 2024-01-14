import { Flex } from "@chakra-ui/react";

import { useCameraScan } from "../hooks";

export const QrReaderCamera = () => {
  const ref = useCameraScan();

  return (
    <>
      <Flex flex={1} bg="blackAlpha.800" />
      <Flex as={"video"} ref={ref} maxHeight="46rem" bg="blackAlpha.800" />
      <Flex flex={1} bg="blackAlpha.800" />
    </>
  );
};

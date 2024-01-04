import { Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

export const QrReader = ({ qrRef }: any) => {
  const [startScan, setStartScan] = useState(false);

  return (
    <VStack>
      <Button onClick={() => setStartScan(!startScan)}>Scan Ticket</Button>
      <video ref={qrRef} />
    </VStack>
  );
};

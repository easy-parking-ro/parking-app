import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useZxing } from "react-zxing";
import { useNavigate } from "react-router-dom";

export const QrReaderCamera = () => {
  const [result, setResult] = useState<string>("");

  const navigate = useNavigate();
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  useEffect(() => {
    if (result) {
      const elements = result.split("/");
      const tResult = elements[elements.length - 1];
      navigate(`/parking-ticket/${tResult}`);
    }
  }, [result]);

  return (
    <Stack position="relative">
      <video ref={ref} style={{ width: "100%", height: "auto" }} />
      <Stack
        position="absolute"
        left={0}
        right={0}
        height={16}
        opacity={0.7}
        bg="black"
        top={0}
      />
      <Stack
        position="absolute"
        left={0}
        right={0}
        height={16}
        opacity={0.7}
        bg="black"
        bottom={0}
      />
    </Stack>
  );
};

import { useState } from "react";
import { useZxing } from "react-zxing";

export const useQrRead = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });

  return { result, qrRef: ref };
};

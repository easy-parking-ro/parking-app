import { useZxing } from "react-zxing";

import { useReadTicket } from "./useReadTicket";

export const useCameraScan = () => {
  const { onReadTicket } = useReadTicket();

  const { ref } = useZxing({
    onDecodeResult(result) {
      const elements = result.getText().split("/");
      const ticketId = elements[elements.length - 1];
      onReadTicket(ticketId);
    },
  });

  return ref;
};

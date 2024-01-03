import { useQuery } from "@tanstack/react-query";

import { ParkingService, parkingLotsQueryKeys } from "../parking.service";

export const useParkingTicket = (parkingTicketId: string) => {
  const service = new ParkingService();

  return useQuery({
    queryKey: parkingLotsQueryKeys.parkingTicket(parkingTicketId),
    queryFn: () => service.getParkingTicket(parkingTicketId),
    enabled: !!parkingTicketId,
  });
};

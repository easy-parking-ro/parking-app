import { useQuery } from "@tanstack/react-query";

import { ParkingService, parkingLotsQueryKeys } from "../parking.service";

export const useParkingTickets = (parkingLotId: string) => {
  const service = new ParkingService();

  return useQuery({
    queryKey: parkingLotsQueryKeys.parkingTikets(parkingLotId),
    queryFn: () => service.getParkingLotWithTickets(parkingLotId),
    enabled: !!parkingLotId,
  });
};

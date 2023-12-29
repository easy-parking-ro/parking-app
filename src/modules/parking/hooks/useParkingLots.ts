import { useQuery } from "@tanstack/react-query";

import { ParkingService, parkingLotsQueryKeys } from "../parking.service";

export const useParkingLots = () => {
  const parkingService = new ParkingService();

  const query = useQuery<any, any, any>({
    queryKey: parkingLotsQueryKeys.all(),
    queryFn: () => parkingService.getParkingLots(),
  });

  return query;
};

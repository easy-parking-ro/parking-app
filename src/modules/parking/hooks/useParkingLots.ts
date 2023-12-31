import { useQuery, UseQueryOptions } from "@tanstack/react-query";

import { ParkingService, parkingLotsQueryKeys } from "../parking.service";
import { Tables } from "../../../schema";

type ParkingLot = Tables<"parking-lots">;

export const useParkingLots = <T = ParkingLot[]>(
  options?: UseQueryOptions<ParkingLot[], Error, T>
) => {
  const parkingService = new ParkingService();

  return useQuery({
    queryKey: parkingLotsQueryKeys.all(),
    queryFn: () => parkingService.getParkingLots(),
    ...options,
  });
};

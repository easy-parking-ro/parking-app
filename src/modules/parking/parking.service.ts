import { supabase } from "../../../lib/supabase";
import { Tables } from "../../schema";

type ParkingLot = Tables<"parking-lots">;

export const parkingLotsQueryKeys = {
  all: () => ["parking-lots"],
};

export class ParkingService {
  async getParkingLots(): Promise<ParkingLot[]> {
    return supabase
      .from("parking-lots")
      .select("*")
      .then((r) => r.data ?? []);
  }
}

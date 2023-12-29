import { TABLES } from "../../../lib/tables";
import { supabase } from "../../../lib/supabase";

export const parkingLotsQueryKeys = {
  all: () => ["parking-lots"],
};

export class ParkingService {
  getParkingLots() {
    return supabase
      .from(TABLES.parkingLots)
      .select("*")
      .then((r) => r.data ?? []);
  }
}

import { supabase } from "../../../lib/supabase";
import { Tables } from "../../schema";

type ParkingLot = Tables<"parkingLots">;
type ParkingTicket = Tables<"parkingTickets">;

export const parkingLotsQueryKeys = {
  all: () => ["parking-lots"],
  parkingTicket: (parkingTicketId: string) => [
    "parking-ticket",
    parkingTicketId,
  ],
  parkingTikets: (parkingLotId: string) => ["parking-tickets", parkingLotId],
};

interface ParkingLotWithTickets extends ParkingLot {
  parkingTickets: ParkingTicket[];
}

export class ParkingService {
  async getParkingLots(): Promise<ParkingLot[]> {
    return supabase
      .from("parkingLots")
      .select("*")
      .then((r) => r.data ?? []);
  }

  async getParkingLotWithTickets(
    parkingLotId: string
  ): Promise<ParkingLotWithTickets> {
    return supabase
      .from("parkingLots")
      .select(`*, parkingTickets (*)`)
      .eq("id", parkingLotId)
      .limit(1)
      .single()
      .then((r) => r.data ?? []) as any;
  }

  getParkingTicket(parkingTicketId: string): Promise<ParkingTicket> {
    return supabase
      .from("parkingTickets")
      .select("*")
      .eq("id", parkingTicketId)
      .single()
      .then((r) => r.data) as any;
  }
}

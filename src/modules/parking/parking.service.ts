import { supabase } from "../../../lib/supabase";
import { Tables } from "../../schema";

type ParkingLot = Tables<"parking-lots">;
type ParkingTicket = Tables<"parking-tickets">;

export const parkingLotsQueryKeys = {
  all: () => ["parking-lots"],
  parkingTicket: (parkingTicketId: string) => [
    "parking-ticket",
    parkingTicketId,
  ],
  parkingTikets: (parkingLotId: string) => ["parking-tickets", parkingLotId],
};

interface ParkingLotWithTickets extends ParkingLot {
  "parking-tickets": ParkingTicket[];
}

export class ParkingService {
  async getParkingLots(): Promise<ParkingLot[]> {
    return supabase
      .from("parking-lots")
      .select("*")
      .then((r) => r.data ?? []);
  }

  async getParkingLotWithTickets(
    parkingLotId: string
  ): Promise<ParkingLotWithTickets> {
    return supabase
      .from("parking-lots")
      .select(`*, parking-tickets (*)`)
      .eq("id", parkingLotId)
      .limit(1)
      .single()
      .then((r) => r.data ?? []);
  }

  getParkingTicket(parkingTicketId: string): Promise<ParkingTicket> {
    return supabase
      .from("parking-tickets")
      .select("*")
      .eq("id", parkingTicketId)
      .single()
      .then((r) => r.data);
  }
}

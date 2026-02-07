export type TripRow ={
   region:string
    origin_coord: string;
  destination_coord: string;
  datetime: string;
  datasource: string;
}

export type TripJson ={
  region: string;
  origin: { lat: number; lon: number };
  destination: { lat: number; lon: number };
  datetime: string;
  datasource: string;
}

export type ParsedTripRow = {
   region: string;
  originLat: number;
  originLon: number;
  destinationLat: number;
  destinationLon: number;
  datetime: Date;
  datasource: string;
  hourOfDay:number
}

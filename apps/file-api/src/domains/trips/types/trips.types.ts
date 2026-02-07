export type BoundingBox ={
  minLat: number;
  maxLat: number;
  minLon: number;
  maxLon: number;
}

export type TripGroupSummary ={
  tripCount: number;
  firstSeenAt: Date;
  lastSeenAt: Date;
}
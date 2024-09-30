export type EventKind =
  | "road_closed"
  | "end_of_the_road"
  | "bad_surface"
  | "hanging_branches"
  | "dangerous_intersection"
  | "heavy_traffic"
  | "accident"
  | "steep_incline"
  | "dangerous_place"
  | "repair_points";

export type EventButton = {
  title: string;
  eventType: EventKind;
};

export type Event = {
  id: number;
  kind: EventKind;
  lat: number;
  lon: number;
};

export type Coordinate = {
  latitude: number;
  longitude: number;
};

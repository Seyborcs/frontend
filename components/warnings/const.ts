import { EventButton, EventKind } from "@/components/warnings/types";

export const eventButtons: EventButton[] = [
  {
    title: "Zamknięta droga",
    eventType: "road_closed",
  },
  {
    title: "Koniec ścieżki",
    eventType: "end_of_the_road",
  },
  {
    title: "Zła nawierzchnia",
    eventType: "bad_surface",
  },
  {
    title: "Wiszące gałęzie",
    eventType: "hanging_branches",
  },
  {
    title: "Niebez. skrzyżowanie",
    eventType: "dangerous_intersection",
  },
  {
    title: "Duży ruch drogowy",
    eventType: "heavy_traffic",
  },
  {
    title: "Wypadek",
    eventType: "accident",
  },
  {
    title: "Wzniesienie",
    eventType: "steep_incline",
  },
];

export const eventIconsSource: { [key in EventKind]: any } = {
  road_closed: {
    white: require("@/assets/icons/road_closed-white.png"),
    black: require("@/assets/icons/road_closed.png"),
  },
  end_of_the_road: {
    white: require("@/assets/icons/end_of_the_road-white.png"),
    black: require("@/assets/icons/end_of_the_road.png"),
  },
  bad_surface: {
    white: require("@/assets/icons/bad_surface-white.png"),
    black: require("@/assets/icons/bad_surface.png"),
  },
  hanging_branches: {
    white: require("@/assets/icons/hanging_branches-white.png"),
    black: require("@/assets/icons/hanging_branches.png"),
  },
  dangerous_intersection: {
    white: require("@/assets/icons/dangerous_intersection-white.png"),
    black: require("@/assets/icons/dangerous_intersection.png"),
  },
  heavy_traffic: {
    white: require("@/assets/icons/heavy_traffic-white.png"),
    black: require("@/assets/icons/heavy_traffic.png"),
  },
  accident: {
    white: require("@/assets/icons/accident-white.png"),
    black: require("@/assets/icons/accident.png"),
  },
  steep_incline: {
    white: require("@/assets/icons/steep_incline-white.png"),
    black: require("@/assets/icons/steep_incline.png"),
  },
  dangerous_place: {
    white: require("@/assets/icons/dangerous_place-white.png"),
    black: require("@/assets/icons/dangerous_place.png"),
  },
  repair_points: {
    white: require("@/assets/icons/repair_points-white.png"),
    black: require("@/assets/icons/repair_points.png"),
  },
};

export const eventIconColor: { [key in EventKind]: string } = {
  road_closed: "#FF0000",
  end_of_the_road: "#FFA500",
  bad_surface: "#A0522D",
  hanging_branches: "#32CD32",
  dangerous_intersection: "#bbbb00",
  heavy_traffic: "#1E90FF",
  accident: "#8B0000",
  steep_incline: "#800080",
  dangerous_place: "#FF4500",
  repair_points: "#00CED1",
};

import axios from "axios";
import { Event, EventKind } from "@/components/warnings/types";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/app/_layout";

type EventPostData = {
  kind: EventKind;
  lat: number;
  lon: number;
};

const EVENT_API_URL = process.env.EXPO_PUBLIC_API_URL + "/events";

//

export const postEvent = (data: EventPostData) =>
  axios.post(EVENT_API_URL, data);

// query

const fetchEvents = async () => {
  const response = await axios.get(EVENT_API_URL + "/?lon=19&lat=50");
  return response.data;
};

export const getEventsQuery = () =>
  useQuery<Event[]>(
    { queryKey: ["events"], queryFn: fetchEvents },
    queryClient,
  );

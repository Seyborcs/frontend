import axios from "axios";
import { Trivia } from "@/components/trivia/types";

const TRIVIA_API_URL = process.env.EXPO_PUBLIC_API_URL + "/trivia";

export const getTrivia = async () => {
  const response = await axios.get<Trivia>(TRIVIA_API_URL);
  return response.data;
};

import { useEffect, useState } from "react";
import { getTrivia } from "@/components/trivia/api";
import { Trivia } from "@/components/trivia/types";

export const useTrivia = () => {
  const [trivia, setTrivia] = useState<Trivia | null>(null);

  useEffect(() => {
    getTrivia().then((data) => {
      setTrivia(data);
    });
  }, []);

  return trivia;
};

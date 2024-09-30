export const profileAchievements = [
  {
    id: 1,
    title: "Przejechanie 1000 km",
    description: "Przejedź łącznie 1000 km, aby zdobyć to osiągnięcie.",
    progress: 1000,
    goal: 1000,
    points: 200,
    achieved: true,
    details:
      "Aby ukończyć to osiągnięcie, musisz przejechać 500 km z włączoną aplikacją. Każdy przejechany kilometr zapisuje się w Twoim profilu",
  },
  {
    id: 2,
    title: "Dodanie 50 zgłoszeń",
    description:
      "Dodaj 50 zgłoszeń dotyczących problemów na trasie, aby zdobyć to osiągnięcie.",
    progress: 20,
    goal: 50,
    points: 400,
    achieved: false,
    details:
      "Zgłoś 50 problemów lub sugestii na trasie, aby zdobyć to osiągnięcie. Możesz zgłaszać problemy związane z infrastrukturą rowerową, przeszkodami lub niebezpieczeństwami.",
  },
  {
    id: 3,
    title: "Ukończenie wszystkich lekcji",
    description: "Ukończ wszystkie dostępne lekcje, aby zdobyć to osiągnięcie.",
    progress: 8,
    goal: 10,
    points: 200,
    achieved: false,
    details:
      "Aby zdobyć to osiągnięcie, musisz ukończyć wszystkie dostępne lekcje w aplikacji. Każda lekcja pomoże Ci lepiej przygotować się do jazdy rowerem i dbać o swoje bezpieczeństwo na drodze.",
  },
];

export const profileRewards = [
  {
    id: 1,
    title: "Serwis rowerowy",
    description: "Uzyskaj 10% zniżki na serwis rowerowy w sklepie Decathlon.",
    points: 200,
    canUse: true,
  },
  {
    id: 2,
    title: "Termy Chohołowskie",
    description: "Uzyskaj 10% zniżki na wejście do Term Chohołowskich.",
    points: 500,
    canUse: false,
  },
  {
    id: 3,
    title: "Termy Gorący Potok",
    description: "Uzyskaj 10% zniżki na wejście do Term Gorący Potok.",
    points: 400,
    canUse: false,
  },
];

import { ChecklistItem } from "@/components/get-ready/types";

export const requiredChecklistData: ChecklistItem[] = [
  {
    id: 1,
    label: "Światło pozycyjne barwy czerwonej",
    description:
      "Rower powinien posiadać minimum jedno światło pozycyjne barwy czerwonej, które może być migające.",
    checked: false,
  },
  {
    id: 2,
    label: "Światło odblaskowe",
    description:
      "Rower powinien posiadać minimum jedno światło odblaskowe barwy czerwonej o kształcie innym niż trójkąt.",
    checked: false,
  },
  {
    id: 3,
    label: "Dzwonek",
    description:
      "Rower powinien posiadać dzwonek lub inny sygnał ostrzegawczy o nieprzeraźliwym dźwięku.",
    checked: false,
  },
  {
    id: 4,
    label: "Sprawny hamulec",
    description: "Rower powinien posiadać co najmniej jeden sprawny hamulec.",
    checked: false,
  },
  {
    id: 5,
    label: "Światło pozycyjne barwy białej lub żółtej",
    description:
      "Rower powinien posiadać co najmniej jedno światło pozycyjne barwy białej lub żółtej, może migać.",
    checked: false,
  },
];

export const optionalChecklistData: ChecklistItem[] = [
  {
    id: 1,
    label: "Koła",
    description:
      "Przed wyprawą warto sprawdzić czy koła się poprawnie obracają. Warto również zadbać o odpowiednie ciśnienie w oponach, informację na temat tego ile barów powinno być w ogumieniu można sprawdzić na jego profilu.",
    checked: false,
  },
  {
    id: 2,
    label: "Łańcuch",
    description:
      "Przed wyprawą warto zadbać o dobrą kondycję łańcucha. Powinien on być dobrze nasmarowany, oraz nie być zbyt napięty. Napięcie łańcucha można łatwo sprawdzić przy pomocy przeznaczonego do tego narzędzia.",
    checked: false,
  },
  {
    id: 3,
    label: "Kask",
    description:
      "Pomimo tego, że kask nie jest obowiązkowym wyposażeniem rowerzysty, to jednak warto go mieć, gdyż zwiększa on nasze szanse w przypadku wypadku. Kask powinien zasłaniać głowę zarówno z przodu jak i z tyłu. Nie powinien on również być luźny, ani za duży.",
    checked: false,
  },
  {
    id: 4,
    label: "Siodełko",
    description:
      "Choć wydawać by się mogło, że siodełko ustawiamy tylko raz i nie zwracamy na nie uwagi, to jednak warto sprawdzić czy nie zmieniło znacząco swojej pozycji podczas ostatniej jazdy. Jeśli siodełko jest dobrze ustawione to nasze nogi powinny być lekko ugięte podczas maksymalnego nacisku na pedały.",
    checked: false,
  },
  {
    id: 5,
    label: "Woda i przekąski",
    description:
      "Wyruszając w trasę rowerową warto zabrać ze sobą coś do picia, a w przypadku dłuższych tras również do jedzenia. W trakcie wysiłku fizycznego organizm traci około 1l wody na godzinę, a godzina jazdy na rowerze pozwala spalić około od 600 do 900 kcal.",
    checked: false,
  },
  {
    id: 6,
    label: "Pogoda",
    description:
      "Przed wycieczką warto sprawdzić pogodę na dany dzień. Jazda w deszczu lub nadmiernym chłodzie może mieć złe skutki dla naszego organizmu, podobnie jak jazda w nadmiernym upale.",
    checked: false,
  },
];

import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ChecklistItem } from "@/components/get-ready/types";
import {
  optionalChecklistData,
  requiredChecklistData,
} from "@/components/get-ready/const";
import { router } from "expo-router";
import ScreenHeader from "@/components/ScreenHeader";
import ChecklistCheckbox from "@/components/get-ready/components/ChecklistCheckbox";
import CustomModal from "@/components/CustomModal";
import { sharedStyles, spacing } from "@/theme";
import TriviaModal from "@/components/trivia/components/TriviaModal";

const GetReadyView = () => {
  const [requiredChecklist, setRequiredChecklist] = useState<ChecklistItem[]>(
    requiredChecklistData,
  );
  const [optionalChecklist, setOptionalChecklist] = useState<ChecklistItem[]>(
    optionalChecklistData,
  );

  const [requiredModalVisible, setRequiredModalVisible] = useState(false);
  const [optionalModalVisible, setOptionalModalVisible] = useState(false);
  const [requiredModalShownOnce, setRequiredModalShownOnce] = useState(false);
  const [optionalModalShownOnce, setOptionalModalShownOnce] = useState(false);

  const allRequiredChecked = requiredChecklist.every((item) => item.checked);
  const allOptionalChecked = optionalChecklist.every((item) => item.checked);

  useEffect(() => {
    // Gdy wszystkie elementy z requiredChecklist są zaznaczone i modal nie był jeszcze pokazany
    if (allRequiredChecked && !requiredModalShownOnce) {
      setRequiredModalVisible(true);
      setRequiredModalShownOnce(true); // Ustawia flagę, że modal został już wyświetlony
    }

    // Gdy wszystkie elementy z requiredChecklist oraz optionalChecklist są zaznaczone i modal nie był jeszcze pokazany
    if (allRequiredChecked && allOptionalChecked && !optionalModalShownOnce) {
      setOptionalModalVisible(true);
      setOptionalModalShownOnce(true); // Ustawia flagę, że modal został już wyświetlony
    }
  }, [
    allRequiredChecked,
    allOptionalChecked,
    requiredModalShownOnce,
    optionalModalShownOnce,
  ]);

  const handleCheck = (
    id: number,
    setter: (value: React.SetStateAction<ChecklistItem[]>) => void,
  ) => {
    setter((prevList) => {
      return prevList.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      );
    });
  };

  return (
    <>
      <View style={sharedStyles.container}>
        <ScreenHeader title="Przygotuj się" icon="bicycle" />

        <View>
          <Text style={[sharedStyles.text, { fontWeight: "bold" }]}>
            Obowiązkowo
          </Text>
          {requiredChecklist.map((item) => (
            <ChecklistCheckbox
              key={item.id}
              onCheck={(id: number) => handleCheck(id, setRequiredChecklist)}
              item={item}
            />
          ))}
        </View>

        {allRequiredChecked && (
          <CustomModal
            visible={requiredModalVisible}
            onClose={() => setRequiredModalVisible(false)}
            content={
              <Text style={sharedStyles.modalText}>
                Wszystkie obowiązkowe punkty zostały zaznaczone. Możesz teraz
                przejść do dodatkowych punktów.
              </Text>
            }
          />
        )}

        <View style={{ marginTop: spacing.medium }}>
          <Text style={[sharedStyles.text, { fontWeight: "bold" }]}>
            Dodatkowo
          </Text>
          {optionalChecklist.map((item) => (
            <ChecklistCheckbox
              key={item.id}
              onCheck={(id: number) => handleCheck(id, setOptionalChecklist)}
              item={item}
            />
          ))}
        </View>

        <CustomModal
          visible={optionalModalVisible}
          onClose={() => {
            setOptionalModalVisible(false);
            setRequiredChecklist(requiredChecklistData);
            setOptionalChecklist(optionalChecklistData);
            router.replace("/map");
          }}
          content={
            <Text style={sharedStyles.modalText}>
              Jesteś w pełni gotowy do jazdy! Możesz teraz przejść do mapy i
              sprawdzić istotne miejsca.
            </Text>
          }
        />
        <TriviaModal />
      </View>
    </>
  );
};

export default GetReadyView;

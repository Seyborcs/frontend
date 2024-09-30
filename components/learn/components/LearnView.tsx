import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import ScreenHeader from "@/components/ScreenHeader";
import { colors, sharedStyles, spacing } from "@/theme";
import Accordion from "@/components/Accordion";
import { learnSections } from "@/components/learn/const";
import Button from "./Button";

const LearnView = () => {
  const [activeSection, setActiveSection] = useState<number>();

  const handleToggle = (id: number) => {
    if (activeSection === id) {
      setActiveSection(undefined);
    } else {
      setActiveSection(id);
    }
  };

  return (
    <View style={sharedStyles.container}>
      <ScreenHeader title="Ucz się" icon="book" />

      <ScrollView contentContainerStyle={sharedStyles.scrollView}>
        {learnSections.map((section) => (
          <Accordion
            key={section.id}
            title={section.title}
            toggle={() => handleToggle(section.id)}
            active={activeSection === section.id}
            info={
              <Text>
                {section.completed}/{section.lessons}
              </Text>
            }
          >
            <Text style={sharedStyles.text}>{section.description}</Text>
            {Array.from({ length: section.lessons }).map((_, index) => {
              const lessonIndex = index + 1;
              const isCompleted = section.completed >= lessonIndex;

              return (
                <Button
                  key={lessonIndex}
                  title={`Lekcja ${lessonIndex}`}
                  onPress={() => {}}
                  style={{ marginTop: spacing.medium }}
                  iconName={
                    isCompleted ? "checkmark-circle" : "chevron-forward"
                  }
                  iconColor={colors.white}
                />
              );
            })}
          </Accordion>
        ))}
      </ScrollView>
    </View>
  );
};

export default LearnView;

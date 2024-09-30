import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { colors, sharedStyles } from "@/theme";
import CustomModal from "@/components/CustomModal";
import { profileAchievements } from "@/components/profile/const";
import Accordion from "@/components/Accordion";

const ProfileAchievements = () => {
  const [isAchievementsVisible, setAchievementsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDetails, setSelectedDetails] = useState("");

  const toggleAchievements = () =>
    setAchievementsVisible(!isAchievementsVisible);

  const showDetails = (details: string) => {
    setSelectedDetails(details);
    setModalVisible(true);
  };

  return (
    <View style={sharedStyles.container}>
      <Accordion
        title="Osiągnięcia"
        active={isAchievementsVisible}
        toggle={toggleAchievements}
      />

      {isAchievementsVisible && (
        <ScrollView style={sharedStyles.scrollView}>
          {profileAchievements.map((achievement) => (
            <View key={achievement.id} style={sharedStyles.card}>
              <Text style={sharedStyles.cardTitle}>{achievement.title}</Text>
              <Text style={sharedStyles.cardSubtitle}>
                {achievement.description}
              </Text>
              {!achievement.achieved && (
                <>
                  <ProgressBar
                    progress={achievement.progress / achievement.goal}
                    color={colors.primary}
                    style={sharedStyles.progressBar}
                  />
                  <Text style={sharedStyles.progressText}>
                    {achievement.progress}/{achievement.goal}
                  </Text>
                </>
              )}
              <View style={sharedStyles.rowSpaceBetween}>
                <Text
                  style={[
                    sharedStyles.pointsText,
                    achievement.achieved && { color: colors.success },
                  ]}
                >
                  {achievement.achieved ? "+ " : ""}
                  {achievement.points} pkt.
                </Text>
                <TouchableOpacity
                  onPress={() => showDetails(achievement.details)}
                >
                  <Text style={sharedStyles.detailsButton}>Szczegóły</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}

      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        content={<Text style={sharedStyles.modalText}>{selectedDetails}</Text>}
        title="Szczegóły osiągnięcia"
      />
    </View>
  );
};

export default ProfileAchievements;

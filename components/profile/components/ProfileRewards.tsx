import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Button from "@/components/Button";
import { colors, sharedStyles } from "@/theme";
import { profileRewards } from "@/components/profile/const";
import Accordion from "@/components/Accordion";

const ProfileRewards = () => {
  const [isRewardsVisible, setRewardsVisible] = useState(false);

  const toggleRewards = () => setRewardsVisible(!isRewardsVisible);

  return (
    <View style={sharedStyles.container}>
      <Accordion
        title="Nagrody"
        active={isRewardsVisible}
        toggle={toggleRewards}
      />

      {isRewardsVisible && (
        <ScrollView style={sharedStyles.scrollView}>
          {profileRewards.map((reward) => (
            <View
              key={reward.id}
              style={[sharedStyles.card, !reward.canUse && { opacity: 0.5 }]}
            >
              <Text
                style={[
                  sharedStyles.cardTitle,
                  !reward.canUse && { color: colors.mutedText },
                ]}
              >
                {reward.title}
              </Text>
              <Text
                style={[
                  sharedStyles.cardSubtitle,
                  !reward.canUse && { color: colors.mutedText },
                ]}
              >
                {reward.description}
              </Text>
              <View style={sharedStyles.rowSpaceBetween}>
                <Text
                  style={[
                    sharedStyles.pointsText,
                    { color: colors.text },
                    !reward.canUse && { color: colors.mutedText },
                  ]}
                >
                  {reward.points} pkt.
                </Text>
                {reward.canUse && (
                  <Button title="Wykorzystaj" onPress={() => {}} />
                )}
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default ProfileRewards;

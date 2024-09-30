import React from "react";
import { Avatar } from "react-native-paper";
import { Text, View } from "react-native";
import { colors, sharedStyles } from "@/theme";

const ProfileHeader: React.FC = () => {
  return (
    <View style={sharedStyles.centeredContainer}>
      <Avatar.Image size={80} source={require("@/assets/images/avatar.png")} />
      <Text style={sharedStyles.largeText}>Jan Kowalski</Text>
      <Text style={[sharedStyles.pointsText, { color: colors.success }]}>
        200 pkt.
      </Text>
    </View>
  );
};

export default ProfileHeader;

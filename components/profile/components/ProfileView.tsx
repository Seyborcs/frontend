import React from "react";
import { ScrollView, View } from "react-native";
import ProfileRewards from "@/components/profile/components/ProfileRewards";
import ProfileAchievements from "@/components/profile/components/ProfileAchievements";
import ProfileHeader from "@/components/profile/components/ProfileHeader";
import { sharedStyles } from "@/theme";

const ProfileView = () => {
  return (
    <View style={sharedStyles.container}>
      <ScrollView contentContainerStyle={sharedStyles.scrollView}>
        <ProfileHeader />
        <ScrollView contentContainerStyle={sharedStyles.scrollView}>
          <ProfileRewards />
          <ProfileAchievements />
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default ProfileView;

import React, { ComponentProps } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";
import { colors, fontSizes, sharedStyles } from "@/theme";

type Props = {
  title: string;
  icon: ComponentProps<typeof Ionicons>["name"];
};

const ScreenHeader: React.FC<Props> = ({ title, icon }) => {
  return (
    <View style={sharedStyles.columnContainer}>
      <Ionicons
        name={icon}
        size={fontSizes.xlarge * 2}
        color={colors.primary}
      />
      <Text style={sharedStyles.largeText}>{title}</Text>
    </View>
  );
};

export default ScreenHeader;

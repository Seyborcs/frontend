import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { colors, sharedStyles } from "@/theme";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {
  title: string;
  onPress: () => void;
  secondary?: boolean;
  style?: StyleProp<ViewStyle>;
  iconName?: React.ComponentProps<typeof Ionicons>["name"]; // Dodany prop dla nazwy ikony
  iconColor?: string; // Opcjonalnie, jeśli chcesz zmieniać kolor ikony
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  secondary,
  style,
  iconName,
  iconColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        secondary ? sharedStyles.secondaryButton : sharedStyles.button,
        style,
      ]}
    >
      <View style={styles.buttonContent}>
        <Text style={sharedStyles.buttonText}>{title}</Text>
        {iconName && (
          <Ionicons
            name={iconName}
            size={20}
            color={iconColor || colors.white}
            style={styles.icon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Rozkłada elementy na boki
    width: "100%",
  },
  icon: {
    marginLeft: 10,
  },
});

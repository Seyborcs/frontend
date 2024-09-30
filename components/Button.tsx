import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { sharedStyles } from "@/theme";

type Props = {
  title: string;
  onPress: () => void;
  secondary?: boolean;
  style?: object;
};

const Button: React.FC<Props> = ({ title, onPress, secondary, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        secondary ? sharedStyles.secondaryButton : sharedStyles.button,
        style,
      ]}
    >
      <Text style={sharedStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

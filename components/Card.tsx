import React from "react";
import { Text, View } from "react-native";
import { sharedStyles } from "@/theme";

type Props = {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ title, subtitle, children }) => {
  return (
    <View style={sharedStyles.card}>
      {title && <Text style={sharedStyles.cardTitle}>{title}</Text>}
      {subtitle && <Text style={sharedStyles.cardSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
};

export default Card;

import React from "react";
import { sharedStyles } from "@/theme";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  toggle: () => void;
  active: boolean;
  title: string;
  info?: React.ReactNode;
  children?: React.ReactNode;
};

const Accordion: React.FC<Props> = ({
  toggle,
  active,
  title,
  info,
  children,
}) => {
  return (
    <>
      <TouchableOpacity style={sharedStyles.sectionHeader} onPress={toggle}>
        <Text style={sharedStyles.sectionTitle}>{title}</Text>
        <View style={sharedStyles.row}>
          {info}
          <Ionicons name={active ? "chevron-up" : "chevron-down"} size={20} />
        </View>
      </TouchableOpacity>
      <View style={sharedStyles.sectionContent}>
        {active ? children : null}
      </View>
    </>
  );
};

export default Accordion;

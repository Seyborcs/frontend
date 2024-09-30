import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Ionicons } from "@expo/vector-icons";
import { ChecklistItem } from "@/components/get-ready/types";
import CustomModal from "@/components/CustomModal";
import { colors, sharedStyles, spacing } from "@/theme";

type Props = {
  item: ChecklistItem;
  onCheck: (id: number) => void;
};

const ChecklistCheckbox: React.FC<Props> = ({ item, onCheck }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <>
      <BouncyCheckbox
        isChecked={item.checked}
        onPress={() => onCheck(item.id)}
        textComponent={
          <View style={[sharedStyles.row]}>
            <Text style={[sharedStyles.text, { marginLeft: spacing.medium }]}>
              {item.label}
            </Text>
            {item.description && (
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Ionicons
                  name="help-circle-outline"
                  size={20}
                  color={colors.secondary}
                />
              </TouchableOpacity>
            )}
          </View>
        }
        fillColor={colors.primary}
        iconStyle={{ borderColor: colors.primary }}
      />
      {item.description && (
        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          content={
            <Text style={sharedStyles.modalText}>{item.description}</Text>
          }
          title={item.label}
        />
      )}
    </>
  );
};

export default ChecklistCheckbox;

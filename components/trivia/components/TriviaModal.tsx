import React from "react";
import { useTrivia } from "@/components/trivia/hooks";
import CustomModal from "@/components/CustomModal";
import { Text, View } from "react-native";
import { colors, sharedStyles } from "@/theme";

const TriviaModal: React.FC = () => {
  const [visible, setVisible] = React.useState(true);
  const trivia = useTrivia();

  const handleClose = () => {
    setVisible(false);
  };

  if (!trivia || !visible) return;

  return (
    <CustomModal
      title={trivia.title}
      content={trivia.content}
      visible={visible}
      onClose={handleClose}
      children={
        <View style={{ alignItems: "center" }}>
          <Text style={[sharedStyles.text, { color: colors.primary }]}>
            Ciekawostka
          </Text>
        </View>
      }
    />
  );
};

export default TriviaModal;

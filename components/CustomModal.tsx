import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { sharedStyles } from "@/theme";

type Props = {
  visible: boolean;
  onClose: () => void;
  content: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
};

const CustomModal: React.FC<Props> = ({
  visible,
  onClose,
  content,
  title,
  children,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={sharedStyles.modalContainer}>
        <View style={sharedStyles.modalView}>
          {children}
          {title && <Text style={sharedStyles.modalTitle}>{title}</Text>}
          <Text style={sharedStyles.modalText}>{content}</Text>
          <TouchableOpacity onPress={onClose} style={sharedStyles.button}>
            <Text style={sharedStyles.buttonText}>Zamknij</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

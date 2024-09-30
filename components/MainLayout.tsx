import React from "react";
import { StyleSheet, View } from "react-native";
import BackgroundLogo from "./BackgroundLogo";

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <View style={styles.container}>
      <BackgroundLogo />
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    zIndex: 1,
  },
});

export default MainLayout;

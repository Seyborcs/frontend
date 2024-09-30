import React from "react";
import { Dimensions, Image, StyleSheet, View } from "react-native";

const BackgroundLogo = () => {
  const { width } = Dimensions.get("window");
  const logoSize = width;

  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/logo.png")}
        style={[styles.logo, { width: logoSize, height: logoSize }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -1,
  },
  logo: {
    opacity: 0.07,
  },
});

export default BackgroundLogo;

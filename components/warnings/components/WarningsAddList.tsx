import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { shadow, Snackbar } from "react-native-paper";
import { Coordinate, EventKind } from "@/components/warnings/types";
import {
  eventButtons,
  eventIconColor,
  eventIconsSource,
} from "@/components/warnings/const";
import useSnackbar from "@/hooks/useSnackbar";
import { postEvent } from "@/components/warnings/api";
import { queryClient } from "@/app/_layout";
import { borderRadius, colors, fontSizes, spacing } from "@/theme";

type Props = {
  coordinate: Coordinate | null;
};

const WarningsAddList: React.FC<Props> = ({ coordinate }) => {
  const {
    snackbarOptions,
    snackbarMessage,
    showErrorSnackbar,
    showSuccessSnackbar,
  } = useSnackbar();

  const handleButtonPress = async (reportKey: EventKind) => {
    if (!coordinate) return;

    try {
      await postEvent({
        kind: reportKey,
        lat: coordinate.latitude,
        lon: coordinate.longitude,
      });
      await queryClient.invalidateQueries();
      showSuccessSnackbar("Dodano ostrzeżenie!");
    } catch (error) {
      console.log(error);
      showErrorSnackbar(`Failed to submit warning. Please try again.`);
    }
  };

  return (
    <View style={styles.container}>
      {eventButtons.map(({ title, eventType }) => (
        <TouchableOpacity
          key={eventType}
          onPress={() => handleButtonPress(eventType)}
          style={[
            styles.buttonContainer,
            { backgroundColor: eventIconColor[eventType] },
          ]}
          activeOpacity={0.8} // Zmniejsza przezroczystość podczas naciskania
        >
          <Image
            source={eventIconsSource[eventType].white}
            style={styles.markerImage}
          />
          <Text style={styles.label}>{title}</Text>
        </TouchableOpacity>
      ))}

      <Snackbar key={snackbarMessage} {...snackbarOptions}>
        {snackbarMessage}
      </Snackbar>
    </View>
  );
};

export default WarningsAddList;

const ICON_SIZE = 40; // Zmniejszony rozmiar ikony dla lepszego dopasowania

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: spacing.medium,
  },
  buttonContainer: {
    width: "47%", // Dwie kolumny z odstępami
    aspectRatio: 1, // Kwadratowe przyciski
    marginBottom: spacing.medium,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: borderRadius.medium,
    ...shadow, // Dodanie cienia
  },
  label: {
    color: colors.white,
    fontWeight: "bold",
    marginTop: spacing.small,
    fontSize: fontSizes.medium,
    textAlign: "center",
  },
  markerImage: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    resizeMode: "contain",
  },
});

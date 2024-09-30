import React, { useEffect, useState } from "react";
import WarningsAddList from "@/components/warnings/components/WarningsAddList";
import MapWithCameraAnimation from "@/components/warnings/components/AnimatedMap";
import {
  calculateHeading,
  coordinatesGenerator,
} from "@/components/warnings/utils";
import { Coordinate } from "@/components/warnings/types";
import { StyleSheet, View } from "react-native";
import MainLayout from "@/components/MainLayout";

const INTERVAL = 1000;

export default function WarningsScreen() {
  const [coordinate, setCoordinate] = useState<Coordinate | null>(null);
  const [heading, setHeading] = useState<number | null>(null);

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (coordinatesGenerator) {
        const { value, done } = await coordinatesGenerator.next();
        if (!done && value) {
          if (coordinate) {
            const heading = calculateHeading(coordinate, value);
            setHeading(heading);
          }
          setCoordinate(value);
        } else {
          clearInterval(intervalId);
        }
      }
    }, INTERVAL);

    return () => clearInterval(intervalId);
  }, [coordinate]);

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapWithCameraAnimation coordinate={coordinate} heading={heading} />
      </View>
      <View style={styles.listContainer}>
        <MainLayout>
          <WarningsAddList coordinate={coordinate} />
        </MainLayout>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 3,
  },
  listContainer: {
    flex: 7,
  },
});

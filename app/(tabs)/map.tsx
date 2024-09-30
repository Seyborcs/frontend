import MapView, { Marker } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { getEventsQuery } from "@/components/warnings/api";
import { eventIconColor, eventIconsSource } from "@/components/warnings/const";

export default function MapScreen() {
  const { data } = getEventsQuery();

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 50.06143,
          longitude: 19.93658,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {data?.map((event) => (
          <Marker
            key={event.id}
            coordinate={{ latitude: event.lat, longitude: event.lon }}
          >
            <View
              style={[
                styles.markerCircle,
                { backgroundColor: eventIconColor[event.kind] },
              ]}
            >
              <Image
                source={eventIconsSource[event.kind]?.white}
                style={styles.markerImage}
              />
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const ICON_SIZE = 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  markerCircle: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  markerImage: {
    width: ICON_SIZE * 0.7,
    height: ICON_SIZE * 0.7,
    resizeMode: "contain",
  },
});

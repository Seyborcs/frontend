import React, { useEffect, useRef } from "react";
import MapView, { Camera, Marker } from "react-native-maps";
import { Image, StyleSheet, View } from "react-native";
import { getEventsQuery } from "@/components/warnings/api";
import { eventIconColor, eventIconsSource } from "@/components/warnings/const";
import { Coordinate } from "@/components/warnings/types";
import { points } from "@/components/warnings/utils";

const CAMERA_ZOOM = 16;
const INTERVAL = 1000;
const ICON_SIZE = 25;

type Props = {
  coordinate: Coordinate | null;
  heading: number | null;
};

const MapWithCameraAnimation: React.FC<Props> = ({ coordinate, heading }) => {
  const mapRef = useRef<MapView>(null);
  const { data } = getEventsQuery();

  useEffect(() => {
    if (coordinate && heading) {
      animateCamera(coordinate, heading);
    }
  }, [coordinate, heading]);

  const animateCamera = (newCoordinate: Coordinate, heading: number) => {
    if (mapRef.current) {
      const newCamera: Camera = {
        center: newCoordinate,
        pitch: 45,
        heading,
        altitude: 1000,
        zoom: CAMERA_ZOOM,
      };

      mapRef.current.animateCamera(newCamera, { duration: INTERVAL });
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialCamera={{
          center: {
            latitude: points[0].latitude,
            longitude: points[0].longitude,
          },
          pitch: 45,
          heading: 0,
          altitude: 1000,
          zoom: CAMERA_ZOOM,
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

        {coordinate && (
          <Marker
            coordinate={coordinate}
            anchor={{ x: 0.5, y: 0.5 }}
            style={{ width: ICON_SIZE, height: ICON_SIZE }}
          >
            <Image
              source={require("@/assets/icons/arrow.png")}
              style={[{ width: ICON_SIZE, height: ICON_SIZE }]}
            />
          </Marker>
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerCircle: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: "rgba(255, 255, 255, 1)",
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

export default MapWithCameraAnimation;

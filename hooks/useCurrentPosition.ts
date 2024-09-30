import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { LocationObject } from "expo-location";

const useCurrentPosition = () => {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setErrorMessage("Permission to access location was denied");
        return;
      }

      void refetchPosition();
    })();
  }, []);

  const updatePosition = () => {
    void refetchPosition();
  };

  const refetchPosition = async () => {
    try {
      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return {
    location,
    errorMessage,
    updatePosition,
  };
};

export default useCurrentPosition;

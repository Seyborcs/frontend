import "dotenv/config";

export default {
  expo: {
    name: " Bikefy",
    slug: "bikefy-frontend",
    version: "1.0.0",
    android: {
      config: {
        googleMaps: {
          apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
        },
      },
    },
    ios: {
      config: {
        googleMapsApiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
      },
    },
  },
};

#!/usr/bin/env node

const axios = require("axios");

// List of points (latitude and longitude)
const points = [
  { latitude: 50.067368, longitude: 19.976878 },
  { latitude: 50.068387, longitude: 19.979345 },
  { latitude: 50.070026, longitude: 19.981663 },
  { latitude: 50.072521, longitude: 19.984816 },
  { latitude: 50.073251, longitude: 19.986339 },
  { latitude: 50.073552, longitude: 19.990568 },
  { latitude: 50.073855, longitude: 19.995245 },
  { latitude: 50.074065, longitude: 20.002668 },
  { latitude: 50.072853, longitude: 20.004319 },
  { latitude: 50.068601, longitude: 20.00417 },
  { latitude: 50.067171, longitude: 20.004019 },
  { latitude: 50.066565, longitude: 20.001401 },
  { latitude: 50.065821, longitude: 19.996724 },
  { latitude: 50.064829, longitude: 19.992261 },
];

const eventTypes = [
  "road_closed",
  "end_of_the_road",
  "bad_surface",
  "hanging_branches",
  "dangerous_intersection",
  "heavy_traffic",
  "accident",
  "steep_incline",
];

// Function to get a random event type
const getRandomEventType = () => {
  const randomIndex = Math.floor(Math.random() * eventTypes.length);
  return eventTypes[randomIndex];
};

// API endpoint where events will be posted
const API_URL = "http://10.250.161.178:8000/events";

// Function to post events for a given point
const postEvent = async (point) => {
  try {
    const response = await axios.post(API_URL, {
      lat: point.latitude,
      lon: point.longitude,
      kind: getRandomEventType(),
    });

    console.log(
      `Event posted for (${point.latitude}, ${point.longitude}):`,
      response.data,
    );
  } catch (error) {
    console.error(
      `Failed to post event for (${point.latitude}, ${point.longitude}):`,
      error.message,
    );
  }
};

// Function to post events for all points
const postAllEvents = async () => {
  for (const point of points) {
    await postEvent(point);
  }
};

// Start posting events
postAllEvents();

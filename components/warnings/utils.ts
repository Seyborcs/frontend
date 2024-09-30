type Coordinate = {
  latitude: number;
  longitude: number;
};

const POINTS_COUNT = 500;

export const points: Coordinate[] = [
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
].reverse();

export const calculateHeading = (from: Coordinate, to: Coordinate) => {
  const latDiff = to.latitude - from.latitude;
  const lngDiff = to.longitude - from.longitude;
  return (Math.atan2(lngDiff, latDiff) * 180) / Math.PI; // Zwraca heading w stopniach
};

const interpolate = (start: number, end: number, t: number): number => {
  return start + (end - start) * t;
};

async function* asyncGenerateCoordinates(
  iterations: number,
): AsyncGenerator<Coordinate, void, unknown> {
  const totalSegments = points.length - 1;
  const iterationsPerSegment = Math.floor(iterations / totalSegments);

  for (let i = 0; i < totalSegments; i++) {
    const start = points[i];
    const end = points[i + 1];

    for (let j = 0; j < iterationsPerSegment; j++) {
      const t = j / iterationsPerSegment;
      const latitude = interpolate(start.latitude, end.latitude, t);
      const longitude = interpolate(start.longitude, end.longitude, t);

      yield { latitude, longitude };
    }
  }

  // Zwróć ostatni punkt
  yield points[points.length - 1];
}

export const coordinatesGenerator = asyncGenerateCoordinates(POINTS_COUNT);

import { DataPoint } from './api';

// Mock data for pest intensity measurements across various vineyard coordinates
export const mockPestData: DataPoint[] = [
  { position: [-78.666, 38.066], value: 5 },
  { position: [-78.667, 38.067], value: 10 },
  { position: [-78.668, 38.068], value: 12 },
  { position: [-78.669, 38.069], value: 7 },
  { position: [-78.670, 38.070], value: 14 },
  { position: [-78.671, 38.071], value: 8 },
  { position: [-78.672, 38.072], value: 15 },
  { position: [-78.673, 38.073], value: 6 },
  { position: [-78.674, 38.074], value: 9 },
  { position: [-78.675, 38.075], value: 13 },
];

// Mock data for soil nutrient levels at various coordinates
export const mockSoilData: DataPoint[] = [
  { position: [-78.666, 38.066], value: 50 },
  { position: [-78.667, 38.067], value: 55 },
  { position: [-78.668, 38.068], value: 52 },
  { position: [-78.669, 38.069], value: 58 },
  { position: [-78.670, 38.070], value: 60 },
  { position: [-78.671, 38.071], value: 65 },
  { position: [-78.672, 38.072], value: 62 },
  { position: [-78.673, 38.073], value: 68 },
  { position: [-78.674, 38.074], value: 70 },
  { position: [-78.675, 38.075], value: 75 },
];

// Mock data for weather events (start and end positions of weather phenomena)
export const mockWeatherData: DataPoint[] = [
  { position: [-78.666, 38.066], targetPosition: [-78.667, 38.067], value: 1, date: '2024-05-01', color: [255, 0, 0, 255] },
  { position: [-78.668, 38.068], targetPosition: [-78.669, 38.069], value: 2, date: '2024-05-02', color: [0, 255, 0, 255] },
  { position: [-78.670, 38.070], targetPosition: [-78.671, 38.071], value: 3, date: '2024-05-03', color: [0, 0, 255, 255] },
  { position: [-78.672, 38.072], targetPosition: [-78.673, 38.073], value: 4, date: '2024-05-04', color: [255, 255, 0, 255] },
  { position: [-78.674, 38.074], targetPosition: [-78.675, 38.075], value: 5, date: '2024-05-05', color: [255, 0, 255, 255] },
  { position: [-78.676, 38.076], targetPosition: [-78.677, 38.077], value: 2, date: '2024-05-06', color: [0, 255, 255, 255] },
  { position: [-78.678, 38.078], targetPosition: [-78.679, 38.079], value: 3, date: '2024-05-07', color: [128, 0, 128, 255] },
  { position: [-78.680, 38.080], targetPosition: [-78.681, 38.081], value: 4, date: '2024-05-08', color: [128, 128, 0, 255] },
  { position: [-78.682, 38.082], targetPosition: [-78.683, 38.083], value: 5, date: '2024-05-09', color: [0, 128, 128, 255] },
  { position: [-78.684, 38.084], targetPosition: [-78.685, 38.085], value: 1, date: '2024-05-10', color: [128, 128, 128, 255] },
];

// Mock data for temperature measurements across various vineyard coordinates
export const mockTemperatureData: DataPoint[] = [
  { position: [-78.666, 38.066], value: 20, date: '2024-05-01', targetPosition: [-78.667, 38.067] },
  { position: [-78.667, 38.067], value: 22, date: '2024-05-01', targetPosition: [-78.668, 38.068] },
  { position: [-78.668, 38.068], value: 21, date: '2024-05-01', targetPosition: [-78.669, 38.069] },
  { position: [-78.669, 38.069], value: 23, date: '2024-05-01', targetPosition: [-78.670, 38.070] },
  { position: [-78.670, 38.070], value: 25, date: '2024-05-01', targetPosition: [-78.671, 38.071] },
  { position: [-78.671, 38.071], value: 24, date: '2024-05-01', targetPosition: [-78.672, 38.072] },
  { position: [-78.672, 38.072], value: 26, date: '2024-05-01', targetPosition: [-78.673, 38.073] },
  { position: [-78.673, 38.073], value: 27, date: '2024-05-01', targetPosition: [-78.674, 38.074] },
  { position: [-78.674, 38.074], value: 28, date: '2024-05-01', targetPosition: [-78.675, 38.075] },
  { position: [-78.675, 38.075], value: 29, date: '2024-05-01', targetPosition: [-78.676, 38.076] },
  { position: [-78.666, 38.066], value: 18, date: '2024-05-02', targetPosition: [-78.667, 38.067] },
  { position: [-78.667, 38.067], value: 19, date: '2024-05-02', targetPosition: [-78.668, 38.068] },
  { position: [-78.668, 38.068], value: 20, date: '2024-05-02', targetPosition: [-78.669, 38.069] },
  { position: [-78.669, 38.069], value: 21, date: '2024-05-02', targetPosition: [-78.670, 38.070] },
  { position: [-78.670, 38.070], value: 22, date: '2024-05-02', targetPosition: [-78.671, 38.071] },
  { position: [-78.671, 38.071], value: 23, date: '2024-05-02', targetPosition: [-78.672, 38.072] },
  { position: [-78.672, 38.072], value: 24, date: '2024-05-02', targetPosition: [-78.673, 38.073] },
  { position: [-78.673, 38.073], value: 25, date: '2024-05-02', targetPosition: [-78.674, 38.074] },
  { position: [-78.674, 38.074], value: 26, date: '2024-05-02', targetPosition: [-78.675, 38.075] },
  { position: [-78.675, 38.075], value: 27, date: '2024-05-02', targetPosition: [-78.676, 38.076] },
];

// Mock satellite image URL
export const mockSatelliteImage = 'path/to/mock/satellite-image.jpg';
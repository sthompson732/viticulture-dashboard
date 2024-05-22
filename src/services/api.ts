import axios from 'axios';
import { mockPestData, mockSoilData, mockWeatherData, mockTemperatureData, mockSatelliteImage } from './mockData';

export interface DataPoint {
  position?: [number, number];
  startPosition?: [number, number];
  endPosition?: [number, number];
  intensity?: number;
  nutrientLevel?: number;
  temperature?: number;
  date?: string;
  targetPosition?: [number, number];  // Only for line layers
  value?: number;  // Only if the data point has a value
  color?: [number, number, number, number];  // Only if color is needed
}

const BASE_URL = 'http://localhost:3000/api';

export const fetchPestData = async (): Promise<DataPoint[]> => {
  try {
    const response = await axios.get<DataPoint[]>(`${BASE_URL}/pest-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching pest data:", error);
    return mockPestData;
  }
};

export const fetchSatelliteImage = async (): Promise<string> => {
    try {
      const response = await axios.get<{ imageUrl: string }>(`${BASE_URL}/satellite-image`);
      return response.data.imageUrl;
    } catch (error) {
      console.error("Error fetching satellite image:", error);
      return '';
    }
  };

export const fetchSoilData = async (): Promise<DataPoint[]> => {
  try {
    const response = await axios.get<DataPoint[]>(`${BASE_URL}/soil-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching soil data:", error);
    return mockSoilData;
  }
};

export const fetchWeatherData = async (): Promise<DataPoint[]> => {
  try {
    const response = await axios.get<DataPoint[]>(`${BASE_URL}/weather-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return mockWeatherData;
  }
};

export const fetchTemperatureData = async (): Promise<DataPoint[]> => {
  try {
    const response = await axios.get<DataPoint[]>(`${BASE_URL}/temperature-data`);
    return response.data;
  } catch (error) {
    console.error("Error fetching temperature data:", error);
    return mockTemperatureData;
  }
};
import { DataPoint as ApiDataPoint } from './services/api';

export type DataPoint = ApiDataPoint;

export interface BaseLayerStyle {
  opacity: number;
  chartData: DataPoint[];
  minValue: number;
  maxValue: number;
  categories: string[];
  selectedCategory: string;
  radius: number;
  startDate: Date;
  endDate: Date;
  elevationScale: number;
}

export interface PestLayerStyle extends BaseLayerStyle {
  color: [number, number, number, number];
  colorRange: [number, number, number][];
}

export interface SatelliteLayerStyle extends BaseLayerStyle {
    intensity: number;
    threshold: number,
  color: [number, number, number, number];
}

export interface SoilLayerStyle extends BaseLayerStyle {
  color: [number, number, number, number];
  colorRange: [number, number, number][];
}

export interface WeatherLayerStyle extends BaseLayerStyle {
  color: [number, number, number, number];
}

export interface TemperatureLayerStyle extends BaseLayerStyle {
  color: [number, number, number, number];
  radiusPixels: number;
  threshold: number;
  colorRange: [number, number, number][];
}

export type LayerStyle = PestLayerStyle | SatelliteLayerStyle | SoilLayerStyle | WeatherLayerStyle | TemperatureLayerStyle;

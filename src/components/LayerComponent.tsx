import React, { useEffect } from 'react';
import { ScatterplotLayer, HexagonLayer, GeoJsonLayer, HeatmapLayer, LineLayer } from 'deck.gl';
import { GoogleMapsOverlay as DeckGLGoogleMapsOverlay } from '@deck.gl/google-maps';
import { PestLayerStyle, SatelliteLayerStyle, SoilLayerStyle, WeatherLayerStyle, TemperatureLayerStyle, DataPoint } from '../types';

interface LayerComponentProps {
  map: google.maps.Map;
  layers: {
    pest: boolean;
    satellite: boolean;
    soil: boolean;
    weather: boolean;
    temperature: boolean;
  };
  layerStyles: {
    pest: PestLayerStyle;
    satellite: SatelliteLayerStyle;
    soil: SoilLayerStyle;
    weather: WeatherLayerStyle;
    temperature: TemperatureLayerStyle;
  };
  setTooltip: React.Dispatch<React.SetStateAction<string>>;
  setTooltipPosition: React.Dispatch<React.SetStateAction<{ x: number; y: number }>>;
}

const LayerComponent: React.FC<LayerComponentProps> = ({ map, layers, layerStyles, setTooltip, setTooltipPosition }) => {
  useEffect(() => {
    const pestLayer = layers.pest && new ScatterplotLayer<DataPoint>({
      id: 'pest-layer',
      data: layerStyles.pest.chartData,
      getPosition: (d: DataPoint) => d.position as [number, number],
      getRadius: layerStyles.pest.radius,
      getFillColor: layerStyles.pest.color,
      opacity: layerStyles.pest.opacity,
      pickable: true,
      onHover: ({ x, y, object }) => {
        if (object) {
          setTooltip(`Pest: ${object.value}`);
          setTooltipPosition({ x, y });
        }
        return true;
      },
    });

    const satelliteLayer = layers.satellite && new HeatmapLayer<DataPoint>({
      id: 'satellite-layer',
      data: layerStyles.satellite.chartData,
      getPosition: (d: DataPoint) => d.position as [number, number],
      getWeight: (d: DataPoint) => (d.value !== undefined ? d.value : 0),
      radiusPixels: layerStyles.satellite.radius,
      intensity: layerStyles.satellite.opacity,
      threshold: 0.05,
    });

    const soilLayer = layers.soil && new HexagonLayer<DataPoint>({
      id: 'soil-layer',
      data: layerStyles.soil.chartData,
      getPosition: (d: DataPoint) => d.position as [number, number],
      getElevationWeight: (d: DataPoint) => (d.value !== undefined ? d.value : 0),
      elevationScale: layerStyles.soil.elevationScale,
      extruded: true,
      radius: layerStyles.soil.radius,
      colorRange: layerStyles.soil.colorRange,
      upperPercentile: 100,
      lowerPercentile: 0,
      pickable: true,
      onHover: ({ x, y, object }) => {
        if (object) {
          setTooltip(`Soil Quality: ${object.value}`);
          setTooltipPosition({ x, y });
        }
        return true;
      },
    });

    const weatherLayer = layers.weather && new GeoJsonLayer({
      id: 'weather-layer',
      data: layerStyles.weather.chartData as any, // Correctly cast the data type
      filled: true,
      extruded: true,
      getFillColor: (d: any) => d.properties.color, // Access properties for GeoJson
      getElevation: (d: any) => (d.properties.value !== undefined ? d.properties.value : 0), // Access properties for GeoJson
      opacity: layerStyles.weather.opacity,
      pickable: true,
      onHover: ({ x, y, object }) => {
        if (object) {
          setTooltip(`Weather: ${object.properties.value}`);
          setTooltipPosition({ x, y });
        }
        return true;
      },
    });

    const temperatureLayer = layers.temperature && new LineLayer<DataPoint>({
      id: 'temperature-layer',
      data: layerStyles.temperature.chartData,
      getSourcePosition: (d: DataPoint) => d.position as [number, number],
      getTargetPosition: (d: DataPoint) => d.targetPosition as [number, number],
      getColor: layerStyles.temperature.color,
      getWidth: layerStyles.temperature.radius,
      pickable: true,
      onHover: ({ x, y, object }) => {
        if (object) {
          setTooltip(`Temperature: ${object.value}`);
          setTooltipPosition({ x, y });
        }
        return true;
      },
    });

    const overlay = new DeckGLGoogleMapsOverlay({
      layers: [pestLayer, satelliteLayer, soilLayer, weatherLayer, temperatureLayer].filter(Boolean),
    });

    overlay.setMap(map);
  }, [map, layers, layerStyles, setTooltip, setTooltipPosition]);

  return null;
};

export default LayerComponent;

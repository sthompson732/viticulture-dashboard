import React, { useState } from 'react';
import GoogleMapComponent from './components/GoogleMapComponent';
import LayerComponent from './components/LayerComponent';
import Controls from './components/Controls';
import TooltipComponent from './components/TooltipComponent';
import Header from './components/Header';
import Footer from './components/Footer';
import darkThemeStyle from './themes/darkThemeStyle';
import { DataPoint } from './services/api';
import { PestLayerStyle, SatelliteLayerStyle, SoilLayerStyle, WeatherLayerStyle, TemperatureLayerStyle } from './types';

import { Box, IconButton, Collapse } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const App: React.FC = () => {
  const [tooltip, setTooltip] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [layers, setLayers] = useState({
    pest: true,
    satellite: true,
    soil: true,
    weather: true,
    temperature: true,
  });

  const [layerStyles, setLayerStyles] = useState<{
    pest: PestLayerStyle;
    satellite: SatelliteLayerStyle;
    soil: SoilLayerStyle;
    weather: WeatherLayerStyle;
    temperature: TemperatureLayerStyle;
  }>({
    pest: {
      opacity: 0.7,
      color: [255, 0, 0, 255],
      radius: 1000,
      elevationScale: 5,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      minValue: 0,
      maxValue: 100,
      colorRange: [
        [255, 255, 178],
        [254, 204, 92],
        [240, 141, 60],
        [189, 59, 32],
        [128, 0, 38],
      ],
      chartData: [] as DataPoint[],
      categories: [],
      selectedCategory: '',
    },
    satellite: {
      intensity: 100,
      threshold: 5,
      opacity: 0.7,
      color: [255, 255, 255, 255],
      chartData: [] as DataPoint[],
      minValue: 0,
      maxValue: 100,
      categories: [],
      selectedCategory: '',
      radius: 1000,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      elevationScale: 5,
    },
    soil: {
      opacity: 0.7,
      color: [255, 255, 178, 255],
      minValue: 0,
      maxValue: 100,
      categories: ['Nutrient A', 'Nutrient B', 'Nutrient C'],
      selectedCategory: 'Nutrient A',
      chartData: [] as DataPoint[],
      radius: 1000,
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      elevationScale: 5,
      colorRange: [
        [255, 255, 178],
        [254, 204, 92],
        [240, 141, 60],
        [189, 59, 32],
        [128, 0, 38],
      ],
    },
    weather: {
      opacity: 0.7,
      color: [0, 0, 255, 255],
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      chartData: [] as DataPoint[],
      minValue: 0,
      maxValue: 100,
      categories: ['Temperature', 'Humidity'],
      selectedCategory: 'Temperature',
      radius: 1000,
      elevationScale: 5,
    },
    temperature: {
      opacity: 0.7,
      color: [255, 0, 0, 255],
      minValue: 0,
      maxValue: 100,
      radius: 500,
      radiusPixels: 30,
      threshold: 1,
      colorRange: [
        [0, 0, 255],
        [0, 128, 255],
        [0, 255, 255],
        [0, 255, 128],
        [0, 255, 0],
        [128, 255, 0],
        [255, 255, 0],
        [255, 128, 0],
        [255, 0, 0],
      ],
      chartData: [] as DataPoint[],
      categories: ['Heatwave', 'Coolwave'],
      selectedCategory: 'Heatwave',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      elevationScale: 5,
    },
  });

  const [panelCollapsed, setPanelCollapsed] = useState(false);

  const togglePanel = () => {
    setPanelCollapsed(!panelCollapsed);
  };

  const mapOptions = {
    center: { lat: 38.066, lng: -78.666 },
    zoom: 15,
    styles: darkThemeStyle,
  };

  return (
    <Box>
      <Header logoSrc="Logo here" userName="User Name" userRole="User Role" currentDate={new Date().toISOString()} />
      <Box display="flex">
        <Box>
          <IconButton onClick={togglePanel} style={{ position: 'absolute', top: 160, left: 10, zIndex: 1000 }}>
            <MenuIcon style={{ color: 'white' }} />
          </IconButton>
          <Collapse in={!panelCollapsed} orientation="horizontal">
            <Controls layers={layers} setLayers={setLayers} layerStyles={layerStyles} setLayerStyles={setLayerStyles} />
          </Collapse>
        </Box>
        <Box flexGrow={1}>
          <GoogleMapComponent mapOptions={mapOptions} apiKey="x">
            {(map) => (
              <LayerComponent
                map={map}
                layers={layers}
                layerStyles={layerStyles}
                setTooltip={setTooltip}
                setTooltipPosition={setTooltipPosition}
              />
            )}
          </GoogleMapComponent>
        </Box>
      </Box>
      <TooltipComponent tooltip={tooltip} x={tooltipPosition.x} y={tooltipPosition.y} />
      <Footer />
    </Box>
  );
};

export default App;

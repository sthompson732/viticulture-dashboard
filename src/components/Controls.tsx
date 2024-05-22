import React, { useState } from 'react';
import { IconButton, Collapse, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import { ExpandMore, ExpandLess, Menu as MenuIcon } from '@mui/icons-material';
import PestControls from './PestControls';
import SatelliteControls from './SatelliteControls';
import SoilControls from './SoilControls';
import WeatherControls from './WeatherControls';
import TemperatureControls from './TemperatureControls';
import { PestLayerStyle, SatelliteLayerStyle, SoilLayerStyle, WeatherLayerStyle, TemperatureLayerStyle } from '../types';
import './Controls.css';

interface ControlsProps {
  layers: {
    pest: boolean;
    satellite: boolean;
    soil: boolean;
    weather: boolean;
    temperature: boolean;
  };
  setLayers: React.Dispatch<React.SetStateAction<{
    pest: boolean;
    satellite: boolean;
    soil: boolean;
    weather: boolean;
    temperature: boolean;
  }>>;
  layerStyles: {
    pest: PestLayerStyle;
    satellite: SatelliteLayerStyle;
    soil: SoilLayerStyle;
    weather: WeatherLayerStyle;
    temperature: TemperatureLayerStyle;
  };
  setLayerStyles: React.Dispatch<React.SetStateAction<{
    pest: PestLayerStyle;
    satellite: SatelliteLayerStyle;
    soil: SoilLayerStyle;
    weather: WeatherLayerStyle;
    temperature: TemperatureLayerStyle;
  }>>;
}

const Controls: React.FC<ControlsProps> = ({ layers, setLayers, layerStyles, setLayerStyles }) => {
  const [collapsed, setCollapsed] = useState({
    pest: true,
    satellite: true,
    soil: true,
    weather: true,
    temperature: true,
  });

  const [panelCollapsed, setPanelCollapsed] = useState(false);

  const toggleCollapse = (layer: keyof typeof collapsed) => {
    setCollapsed(prev => ({ ...prev, [layer]: !prev[layer] }));
  };

  const handleToggleLayer = (layer: keyof typeof layers) => {
    setLayers(prevLayers => ({
      ...prevLayers,
      [layer]: !prevLayers[layer],
    }));
  };

  const togglePanel = () => {
    setPanelCollapsed(!panelCollapsed);
  };

  return (
    <Box>
      <IconButton onClick={togglePanel} style={{ position: 'absolute', top: 160, left: 10, zIndex: 1000 }}>
        <MenuIcon style={{ color: 'white' }} />
      </IconButton>
      <Collapse in={!panelCollapsed} orientation="horizontal">
        <Box className="controls-panel">
          <Typography variant="h6">Layer Controls</Typography>
          {Object.keys(layers).map(layer => (
            <Box key={layer} className="layer-control">
              <Box className="layer-header" onClick={() => toggleCollapse(layer as keyof typeof collapsed)}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={layers[layer as keyof typeof layers]}
                      onChange={() => handleToggleLayer(layer as keyof typeof layers)}
                      style={{ color: 'white' }}
                    />
                  }
                  label={layer.charAt(0).toUpperCase() + layer.slice(1)}
                  style={{ color: 'white' }}
                />
                <IconButton>
                  {collapsed[layer as keyof typeof collapsed] ? <ExpandMore style={{ color: 'white' }} /> : <ExpandLess style={{ color: 'white' }} />}
                </IconButton>
              </Box>
              <Collapse in={!collapsed[layer as keyof typeof collapsed]}>
                <Box className="layer-options">
                  {layer === 'pest' && (
                    <PestControls
                      layerStyles={layerStyles.pest}
                      setLayerStyles={(styles) => setLayerStyles(prev => ({ ...prev, pest: styles }))}
                    />
                  )}
                  {layer === 'satellite' && (
                    <SatelliteControls
                      layerStyles={layerStyles.satellite}
                      setLayerStyles={(styles) => setLayerStyles(prev => ({ ...prev, satellite: styles }))}
                    />
                  )}
                  {layer === 'soil' && (
                    <SoilControls
                      layerStyles={layerStyles.soil}
                      setLayerStyles={(styles) => setLayerStyles(prev => ({ ...prev, soil: styles }))}
                    />
                  )}
                  {layer === 'weather' && (
                    <WeatherControls
                      layerStyles={layerStyles.weather}
                      setLayerStyles={(styles) => setLayerStyles(prev => ({ ...prev, weather: styles }))}
                    />
                  )}
                  {layer === 'temperature' && (
                    <TemperatureControls
                      layerStyles={layerStyles.temperature}
                      setLayerStyles={(styles) => setLayerStyles(prev => ({ ...prev, temperature: styles }))}
                    />
                  )}
                </Box>
              </Collapse>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};

export default Controls;

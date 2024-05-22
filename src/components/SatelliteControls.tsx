import React from 'react';
import { Slider, Typography, Box, TextField } from '@mui/material';
import { SketchPicker } from 'react-color';
import { SatelliteLayerStyle } from '../types';
import './SatelliteControls.css';

interface SatelliteControlsProps {
  layerStyles: SatelliteLayerStyle;
  setLayerStyles: (styles: SatelliteLayerStyle) => void;
}

const SatelliteControls: React.FC<SatelliteControlsProps> = ({ layerStyles, setLayerStyles }) => {
  const handleOpacityChange = (event: Event, newValue: number | number[]) => {
    setLayerStyles({
      ...layerStyles,
      opacity: newValue as number,
    });
  };

  const handleColorChange = (color: any) => {
    setLayerStyles({
      ...layerStyles,
      color: [color.rgb.r, color.rgb.g, color.rgb.b, color.rgb.a * 255],
    });
  };

  const handleRadiusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayerStyles({
      ...layerStyles,
      radius: parseInt(event.target.value, 10),
    });
  };

  const handleIntensityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayerStyles({
      ...layerStyles,
      intensity: parseFloat(event.target.value),
    });
  };

  const handleThresholdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayerStyles({
      ...layerStyles,
      threshold: parseFloat(event.target.value),
    });
  };

  return (
    <Box className="satellite-controls">
      <Typography variant="subtitle1">Opacity</Typography>
      <Slider
        value={layerStyles.opacity}
        onChange={handleOpacityChange}
        aria-labelledby="opacity-slider"
        min={0}
        max={1}
        step={0.01}
      />
      <Typography variant="subtitle1">Color</Typography>
      <SketchPicker color={{ r: layerStyles.color[0], g: layerStyles.color[1], b: layerStyles.color[2], a: layerStyles.color[3] / 255 }} onChange={handleColorChange} />
      <Typography variant="subtitle1">Radius</Typography>
      <TextField type="number" value={layerStyles.radius} onChange={handleRadiusChange} fullWidth />
      <Typography variant="subtitle1">Intensity</Typography>
      <TextField type="number" value={layerStyles.intensity} onChange={handleIntensityChange} fullWidth />
      <Typography variant="subtitle1">Threshold</Typography>
      <TextField type="number" value={layerStyles.threshold} onChange={handleThresholdChange} fullWidth />
    </Box>
  );
};

export default SatelliteControls;

import React from 'react';
import { Slider, Typography, Box, TextField } from '@mui/material';
import { SketchPicker } from 'react-color';
import { WeatherLayerStyle } from '../types';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './WeatherControls.css';

interface WeatherControlsProps {
  layerStyles: WeatherLayerStyle;
  setLayerStyles: (styles: WeatherLayerStyle) => void;
}

const WeatherControls: React.FC<WeatherControlsProps> = ({ layerStyles, setLayerStyles }) => {
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

  const handleElevationScaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLayerStyles({
      ...layerStyles,
      elevationScale: parseFloat(event.target.value),
    });
  };

  const handleStartDateChange = (date: Date) => {
    setLayerStyles({
      ...layerStyles,
      startDate: date,
    });
  };

  const handleEndDateChange = (date: Date) => {
    setLayerStyles({
      ...layerStyles,
      endDate: date,
    });
  };

  return (
    <Box className="weather-controls">
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
      <Typography variant="subtitle1">Elevation Scale</Typography>
      <TextField type="number" value={layerStyles.elevationScale} onChange={handleElevationScaleChange} fullWidth />
      <Typography variant="subtitle1">Date Range</Typography>
      <Box display="flex" justifyContent="space-between">
        <DatePicker selected={layerStyles.startDate} onChange={handleStartDateChange} />
        <DatePicker selected={layerStyles.endDate} onChange={handleEndDateChange} />
      </Box>
    </Box>
  );
};

export default WeatherControls;

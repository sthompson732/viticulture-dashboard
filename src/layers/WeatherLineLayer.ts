import { LineLayer } from '@deck.gl/layers';
import { DataPoint } from '../services/api';

interface WeatherLineLayerProps {
  data: DataPoint[];
  setTooltip: (tooltip: string) => void;
  setTooltipPosition: (position: { x: number; y: number }) => void;
  layerStyles: {
    color: [number, number, number, number];
    opacity: number;
  };
}

export const WeatherLineLayer = ({ data, setTooltip, setTooltipPosition, layerStyles }: WeatherLineLayerProps) => {
  return new LineLayer<DataPoint>({
    id: 'weather-line-layer',
    data: data.filter(d => new Date(d.date!) >= new Date()), // Adjust date filtering as needed
    getSourcePosition: (d: DataPoint) => d.startPosition as [number, number],
    getTargetPosition: (d: DataPoint) => d.endPosition as [number, number],
    getColor: () => layerStyles.color,
    getWidth: 5,
    opacity: layerStyles.opacity,
    pickable: true,
    onHover: ({ object, x, y }) => {
      if (object) {
        setTooltip(`Weather Data`);
        setTooltipPosition({ x, y });
      } else {
        setTooltip('');
      }
    }
  });
};

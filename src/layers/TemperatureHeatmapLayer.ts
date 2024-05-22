import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { DataPoint } from '../services/api';

interface TemperatureHeatmapLayerProps {
  data: DataPoint[];
  setTooltip: (tooltip: string) => void;
  setTooltipPosition: (position: { x: number; y: number }) => void;
  layerStyles: {
    radiusPixels: number;
    opacity: number;
    threshold: number;
    colorRange: [number, number, number][];
  };
}

export const TemperatureHeatmapLayer = ({ data, setTooltip, setTooltipPosition, layerStyles }: TemperatureHeatmapLayerProps) => {
  return new HeatmapLayer<DataPoint>({
    id: 'temperature-heatmap-layer',
    data,
    getPosition: (d: DataPoint) => d.position as [number, number],
    getWeight: (d: DataPoint) => d.temperature ?? 0,
    radiusPixels: layerStyles.radiusPixels,
    intensity: 1,
    threshold: layerStyles.threshold,
    colorRange: layerStyles.colorRange,
    opacity: layerStyles.opacity,
    pickable: true,
    onHover: (info: any) => {
      const { object, x, y } = info;
      if (object) {
        setTooltip(`Temperature: ${object.temperature}`);
        setTooltipPosition({ x, y });
        return true;
      } else {
        setTooltip('');
        return false;
      }
    }
  });
};

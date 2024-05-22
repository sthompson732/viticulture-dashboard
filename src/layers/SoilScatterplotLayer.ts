import { ScatterplotLayer } from '@deck.gl/layers';
import { DataPoint } from '../services/api';

interface SoilScatterplotLayerProps {
    data: DataPoint[];
    setTooltip: (tooltip: string) => void;
    setTooltipPosition: (position: { x: number; y: number }) => void;
    layerStyles: {
      minValue: number;
      color: [number, number, number, number];
      opacity: number;
    };
  }

export const SoilScatterplotLayer = ({ data, setTooltip, setTooltipPosition, layerStyles }: SoilScatterplotLayerProps) => {
  return new ScatterplotLayer({
    id: 'soil-scatterplot-layer',
     data: data.filter(d => d.nutrientLevel! >= layerStyles.minValue),
    getPosition: (d: DataPoint) => d.position as [number, number],
    getFillColor: () => layerStyles.color,
    getRadius: () => 100,
    opacity: layerStyles.opacity,
    pickable: true,
    onHover: ({ object, x, y }) => {
      if (object) {
        setTooltip(`Nutrient Level: ${object.nutrientLevel}`);
        setTooltipPosition({ x, y });
      } else {
        setTooltip('');
      }
    }
  });
};
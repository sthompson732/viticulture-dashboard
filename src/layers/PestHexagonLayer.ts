import { HexagonLayer } from '@deck.gl/aggregation-layers';
import { DataPoint } from '../services/api';

interface PestHexagonLayerProps {
  data: DataPoint[];
  setTooltip: (tooltip: string) => void;
  setTooltipPosition: (position: { x: number; y: number }) => void;
  layerStyles: {
    radius: number;
    elevationScale: number;
    opacity: number;
    colorRange: [number, number, number][];
  };
}

export const PestHexagonLayer = ({ data, setTooltip, setTooltipPosition, layerStyles }: PestHexagonLayerProps) => {
  return new HexagonLayer<DataPoint>({
    id: 'pest-hexagon-layer',
    data,
    getPosition: (d: DataPoint) => d.position as [number, number],
    getColorWeight: (d: DataPoint) => d.intensity ?? 0,
    colorRange: layerStyles.colorRange,
    radius: layerStyles.radius,
    elevationScale: layerStyles.elevationScale,
    extruded: true,
    pickable: true,
    opacity: layerStyles.opacity,
    onHover: (info: any) => {
      const { object, x, y } = info;
      if (object) {
        setTooltip(`Intensity: ${object.intensity}`);
        setTooltipPosition({ x, y });
        return true;
      } else {
        setTooltip('');
        return false;
      }
    }
  });
};

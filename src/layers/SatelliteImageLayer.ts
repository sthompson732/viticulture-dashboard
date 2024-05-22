import { BitmapLayer } from '@deck.gl/layers';

interface SatelliteImageLayerProps {
  imageUrl: string;
  bounds: [number, number, number, number];
  setTooltip: (tooltip: string) => void;
  setTooltipPosition: (position: { x: number; y: number }) => void;
  layerStyles: {
    opacity: number;
    color: string | [number, number, number, number]; // Accept both string and array types
  };
}

export const SatelliteImageLayer = ({
  imageUrl,
  bounds,
  setTooltip,
  setTooltipPosition,
  layerStyles,
}: SatelliteImageLayerProps) => {
  const blendColor = typeof layerStyles.color === 'string' ? layerStyles.color : `rgba(${layerStyles.color.join(',')})`;

  return new BitmapLayer({
    id: 'satellite-image-layer',
    image: imageUrl,
    bounds,
    opacity: layerStyles.opacity,
    pickable: true,
    onHover: ({ x, y }) => {
      setTooltip('Satellite Image');
      setTooltipPosition({ x, y });
    },
    parameters: {
      blendColor: blendColor, // We need to ensure this property is compatible with both types
    },
  });
};

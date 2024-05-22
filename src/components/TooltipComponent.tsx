import React from 'react';
import './TooltipComponent.css';

interface TooltipComponentProps {
  tooltip: string;
  x: number;
  y: number;
}

const TooltipComponent: React.FC<TooltipComponentProps> = ({ tooltip, x, y }) => {
  return (
    <div className="tooltip" style={{ left: x, top: y }}>
      {tooltip}
    </div>
  );
};

export default TooltipComponent;
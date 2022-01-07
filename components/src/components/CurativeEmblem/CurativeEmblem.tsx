import React from 'react';
import { trueBlack, trueWhite } from '../../styles';
import { ContentStyle } from '../../types';

export interface CurativeEmblemProps {
  style?: any;
  className?: string;
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
}

export const CurativeEmblem = ({
  style,
  className,
  contentStyle = ContentStyle.light,
}: CurativeEmblemProps) => {
  const fillColor = contentStyle === ContentStyle.light ? trueWhite : trueBlack;
  return (
    <svg viewBox="0 0 180 180" className={className} style={style}>
      <g fill={fillColor} fillRule="nonzero">
        <polygon points="180 74.8354 126.387 74.8354 164.298 36.9243 143.061 15.7021 105.165 53.6132 105.165 0 75.1332 0 75.1332 53.6132 37.2222 15.7021 16 36.9243 53.9111 74.8354 105.165 74.8354 105.165 126.089 143.061 164 164.298 142.764 126.387 104.867 180 104.867" />
        <polygon points="53.6813 75 0 75 0 105.07 53.6813 105.07 15.7221 143.014 36.9712 164.278 74.9305 126.319 74.9305 180 105 180 105 126.319" />
      </g>
    </svg>
  );
};
